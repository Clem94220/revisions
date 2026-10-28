/* =====================================================================
   MOTEUR DE JEU — commun à toutes les matières
   Globals fournis par js/app.js : C (cours actif), P (progression du cours),
   S (réglages : son…), save(), renderHome().
   ===================================================================== */

/* ---------- Utilitaires ---------- */
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
const norm = s => s.toLowerCase().replace(/[.,!?;:…]/g, "").replace(/\s+/g, " ").trim();
const pick = a => a[Math.random() * a.length | 0];
const stripTags = s => s.replace(/<[^>]+>/g, "");

const SPK_SVG = '<svg viewBox="0 0 24 24" class="w-5 h-5" fill="currentColor" aria-hidden="true"><path d="M3 10v4a1 1 0 0 0 1 1h3l4 4V5L7 9H4a1 1 0 0 0-1 1zm13.5 2A4.5 4.5 0 0 0 14 8v8a4.5 4.5 0 0 0 2.5-4zM14 3.2v2.1a7 7 0 0 1 0 13.4v2.1a9 9 0 0 0 0-17.6z"/></svg>';
const spk = (text, cls = "") => `<button type="button" class="spk ${cls}" data-say="${esc(text)}" aria-label="Écouter la prononciation" title="Écouter">${SPK_SVG}</button>`;
const spkSlow = text => `<button type="button" class="spk spk-slow" data-say="${esc(text)}" data-slow="1" aria-label="Écouter lentement" title="Lentement">🐢</button>`;
const table = rows => `<table class="w-full text-sm mt-2"><tbody>${rows.map(r => `<tr class="border-t border-line"><td class="py-2 pr-3 w-1/2"><div class="flex items-center gap-2">${spk(r[0], "spk-sm")}<b>${esc(r[0])}</b></div></td><td class="py-2 text-ink/80">${r[1]}</td></tr>`).join("")}</tbody></table>`;

/* ---------- Synthèse vocale ---------- */
let voices = [];
const hasTTS = "speechSynthesis" in window;
if (!hasTTS) document.body.classList.add("no-tts");
function loadVoices() { voices = speechSynthesis.getVoices(); }
if (hasTTS) { loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; }
function speak(text, slow) {
  if (!hasTTS || !text) return;
  text = text.replace(/∅ \(rien\)/g, "").replace(/…/g, "").replace(/\(.*?\)/g, "");
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  const lang = (C && C.lang) || "en-GB", base = lang.split("-")[0].toLowerCase();
  const v = voices.find(v => v.lang.replace("_", "-") === lang) || voices.find(v => v.lang.toLowerCase().startsWith(base));
  if (v) u.voice = v;
  u.lang = v ? v.lang : lang;
  u.rate = slow ? 0.6 : 0.95;
  speechSynthesis.speak(u);
}
document.addEventListener("click", e => {
  const b = e.target.closest("[data-say]");
  if (!b) return;
  e.stopPropagation(); e.preventDefault();
  speak(b.dataset.say, b.dataset.slow);
}, true);

/* ---------- Effets sonores (Web Audio) ---------- */
let actx;
function tone(freqs, type = "sine", dur = .12, vol = .2) {
  if (S.muted) return;
  try {
    actx = actx || new (window.AudioContext || window.webkitAudioContext)();
    const t = actx.currentTime;
    freqs.forEach((f, i) => {
      const o = actx.createOscillator(), g = actx.createGain(), s = t + i * dur;
      o.type = type; o.frequency.value = f;
      g.gain.setValueAtTime(.0001, s);
      g.gain.exponentialRampToValueAtTime(vol, s + .02);
      g.gain.exponentialRampToValueAtTime(.0001, s + dur + .12);
      o.connect(g).connect(actx.destination);
      o.start(s); o.stop(s + dur + .15);
    });
  } catch (e) {}
}
const sfx = {
  ok: () => tone([659, 988], "sine", .1, .22),
  bad: () => tone([220, 165], "sawtooth", .14, .08),
  pair: () => tone([880], "triangle", .07, .18),
  win: () => tone([523, 659, 784, 1047, 1319], "triangle", .12, .2)
};

/* =====================================================================
   NAVIGATION & MODALE
   ===================================================================== */
function show(id) {
  ["home", "lesson", "result"].forEach(s => {
    const el = $("#" + s);
    el.classList.toggle("hidden", s !== id);
    if (s === "lesson") el.classList.toggle("flex", s === id);
  });
  window.scrollTo(0, 0);
}
let modalLocked = false;
function openModal(html, locked = false) {
  modalLocked = locked;
  const p = $("#modalPanel");
  p.innerHTML = html;
  p.classList.remove("slide-up"); void p.offsetWidth; p.classList.add("slide-up");
  $("#modal").classList.remove("hidden");
}
function closeModal() { $("#modal").classList.add("hidden"); }
$("#modal").addEventListener("click", e => { if (e.target.id === "modal" && !modalLocked) closeModal(); });

const gradedCount = lv => C.LEVELS[lv].ex.filter(e => e.t !== "info").length;

/* =====================================================================
   MOTEUR DE LEÇON
   ===================================================================== */
let L = null;
const stage = $("#stage"), mainBtn = $("#mainBtn"), fb = $("#fb"), footer = $("#footer");
const PRAISE = ["Bonne réponse !", "Excellent !", "Parfait !", "Bien joué !", "Super !", "Bravo !"];

function startLevel(i) {
  L = {
    level: i, queue: C.LEVELS[i].ex.map(e => ({ ...e })), total: gradedCount(i),
    solved: 0, firstOk: 0, hearts: 5, xp: 0, streak: 0, mistakes: [], start: Date.now(), mode: "check"
  };
  show("lesson"); renderHearts(); updateBar(); next();
}

function renderHearts(breakIdx) {
  $("#hearts").innerHTML = Array.from({ length: 5 }, (_, i) =>
    `<svg viewBox="0 0 24 24" class="w-6 h-6 ${i === breakIdx ? "heart-break" : ""}" fill="${i < L.hearts ? "#FF4B4B" : "#E5E5E5"}" aria-hidden="true"><path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.5 3 4.5 6.8 4.5c2.1 0 3.6 1.2 4.4 2.4h1.6c.8-1.2 2.3-2.4 4.4-2.4 3.8 0 5.9 4 4.4 7.3C19.5 16.4 12 21 12 21z"/></svg>`
  ).join("") + `<span class="sr-only">${L.hearts} vies</span>`;
}
function updateBar() {
  const bar = $("#bar");
  bar.firstElementChild.style.width = (100 * L.solved / L.total) + "%";
  bar.classList.toggle("combo", L.streak >= 3);
}
function loseHeart(shakeStage = true) {
  L.hearts = Math.max(0, L.hearts - 1);
  L.streak = 0;
  renderHearts(L.hearts);
  sfx.bad();
  if (navigator.vibrate) try { navigator.vibrate(120); } catch (e) {}
  if (shakeStage) { stage.classList.remove("shake"); void stage.offsetWidth; stage.classList.add("shake"); }
  updateBar();
}
function setReady(v) { if (L.mode === "check") mainBtn.disabled = !v; }
function resetFooter() {
  footer.style.background = ""; footer.style.borderColor = "";
  fb.innerHTML = ""; mainBtn.className = "btn btn-green w-full sm:w-auto"; mainBtn.textContent = "Vérifier"; mainBtn.disabled = true;
}

function next() {
  if (!L.queue.length) return finish();
  L.cur = L.queue.shift(); L.mode = "check";
  resetFooter();
  stage.classList.remove("pop", "shake"); void stage.offsetWidth; stage.classList.add("pop");
  L.h = R[L.cur.t](L.cur);
  $("#lesson main").scrollTop = 0;
}

function label(ex) {
  if (ex.t === "fill") return ex.sentence;
  if (ex.t === "order") return ex.prompt ? stripTags(ex.prompt) : "🇫🇷 " + ex.fr;
  if (ex.t === "spot") return ex.words.join(" ");
  return stripTags((ex.title ? ex.title + " — " : "") + (ex.prompt || "")) + (ex.en ? " « " + ex.en + " »" : "");
}

function grade(r) {
  L.mode = "continue";
  const ex = L.cur;
  if (r.ok) {
    L.solved++; L.streak++;
    if (!ex._miss) L.firstOk++;
    L.xp += ex._miss ? 5 : 10;
    sfx.ok();
    if (r.say && !S.muted) setTimeout(() => speak(r.say), 350);
  } else {
    ex._miss = true;
    loseHeart();
    L.queue.push(ex);
    L.mistakes.push({ q: label(ex), a: r.answer, say: r.say });
  }
  updateBar();
  feedback(r.ok, r, ex);
}

function feedback(ok, r, ex) {
  footer.style.background = ok ? "#D7FFB8" : "#FFDFE0";
  footer.style.borderColor = "transparent";
  const color = ok ? "var(--green-d)" : "var(--red-d)";
  let title = ok ? pick(PRAISE) : "Oups, la réponse correcte était :";
  if (ok && L.streak >= 3 && L.streak % 2 === 1) title = `🔥 ${L.streak} bonnes réponses d'affilée !`;
  fb.innerHTML = `
    <div class="flex items-start gap-3 slide-up" style="color:${color}">
      <div class="hidden sm:flex w-14 h-14 rounded-full bg-white items-center justify-center text-3xl font-black shrink-0">${ok ? "✔" : "✖"}</div>
      <div class="min-w-0">
        <div class="text-xl font-black">${title}</div>
        ${(!ok || r.showAnswer) && r.answer ? `<div class="flex items-start gap-2 mt-1">${r.say ? spk(r.say, "spk-sm") : ""}<span class="font-bold">${esc(r.answer)}</span></div>` : ""}
        ${ok && r.say && !r.showAnswer ? `<div class="mt-1">${spk(r.say, "spk-sm")}</div>` : ""}
        ${r.note ? `<div class="text-sm font-semibold mt-1">${r.note}</div>` : ""}
        ${ex.explain ? `<div class="text-sm font-semibold mt-1 opacity-90">💡 ${ex.explain}</div>` : ""}
      </div>
    </div>`;
  mainBtn.className = "btn w-full sm:w-auto " + (ok ? "btn-green" : "btn-red");
  mainBtn.textContent = "Continuer";
  mainBtn.disabled = false;
  mainBtn.focus({ preventScroll: true });
}

mainBtn.onclick = () => {
  if (!L) return;
  if (L.mode === "check") {
    if (L.cur.t === "info") return next();
    if (L.h && L.h.check) grade(L.h.check());
  } else if (L.mode === "continue") {
    if (L.hearts <= 0) return gameOver();
    next();
  }
};
$("#quitBtn").onclick = () => openModal(`<div class="text-center"><div class="text-5xl">😢</div><h2 class="text-xl font-black mt-3">Attends, ne pars pas !</h2><p class="mt-2">Si tu quittes maintenant, tu perdras ta progression dans cette leçon.</p>
  <div class="mt-5 flex flex-col gap-3"><button class="btn btn-blue" onclick="closeModal()">Continuer la leçon</button><button class="btn btn-ghost !text-duo-red" onclick="closeModal();L=null;window.speechSynthesis&&speechSynthesis.cancel();renderHome();show('home')">Quitter</button></div></div>`);

function gameOver() {
  L.mode = "over";
  const i = L.level;
  openModal(`<div class="text-center"><div class="text-6xl bounce-in">💔</div><h2 class="text-2xl font-black mt-3">Tu n'as plus de cœurs !</h2>
    <p class="mt-2">Pas de panique : relis la fiche du niveau puis retente ta chance. Tu as répondu juste à <b>${L.solved}/${L.total}</b> exercices.</p>
    <div class="mt-6 flex flex-col gap-3">
      <button class="btn btn-green" onclick="closeModal();startLevel(${i})">Réessayer</button>
      <button class="btn btn-ghost" onclick="openFiche(${i},true)">📖 Revoir la fiche</button>
      <button class="btn btn-ghost !text-ink/60" onclick="closeModal();L=null;renderHome();show('home')">Retour à la carte</button>
    </div></div>`, true);
}

function finish() {
  L.mode = "done";
  const i = L.level, lv = C.LEVELS[i], last = C.LEVELS.length - 1;
  const acc = Math.round(100 * L.firstOk / L.total);
  const bonus = L.hearts * 2;
  const xp = L.xp + bonus;
  const secs = Math.round((Date.now() - L.start) / 1000);
  const time = `${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, "0")}`;
  const firstClear = !P.done[i];
  P.xp += xp; P.done[i] = true; P.best[i] = Math.max(P.best[i] || 0, acc); save();
  const seen = new Set();
  const mistakes = L.mistakes.filter(m => !seen.has(m.q) && seen.add(m.q));
  const tile = (bg, head, val) => `<div class="rounded-2xl overflow-hidden border-2" style="border-color:${bg}"><div class="text-white text-xs font-extrabold uppercase tracking-wider py-1" style="background:${bg}">${head}</div><div class="py-3 text-2xl font-black" style="color:${bg}">${val}</div></div>`;
  $("#resultInner").innerHTML = `
    <div class="text-center">
      <div class="text-7xl bounce-in">${acc === 100 ? "🏆" : acc >= 70 ? "🎉" : "💪"}</div>
      <h1 class="text-3xl font-black mt-4" style="color:var(--orange,#FF9600)">${acc === 100 ? "Leçon parfaite !" : "Leçon terminée !"}</h1>
      <p class="mt-1 font-semibold text-ink/70">Niveau ${i + 1} · ${esc(lv.title)}${firstClear && i < last ? ` — <b class="text-duo-greenDark">Niveau ${i + 2} débloqué !</b>` : ""}${firstClear && i === last ? ` — <b class="text-duo-greenDark">Cours terminé ! 🎓</b>` : ""}</p>
    </div>
    <div class="grid grid-cols-3 gap-3 mt-8 text-center">
      ${tile("#FFC800", "XP gagnés", "⚡ " + xp)}
      ${tile("#58CC02", "Précision", "🎯 " + acc + "%")}
      ${tile("#1CB0F6", "Temps", "⏱ " + time)}
    </div>
    <p class="text-center text-xs font-bold text-ink/50 mt-2">dont +${bonus} XP bonus pour tes ${L.hearts} ❤️ restants</p>
    <div class="mt-8">
      <h2 class="font-black text-lg">${mistakes.length ? "📝 À revoir (" + mistakes.length + ")" : "✨ Aucune erreur, bravo !"}</h2>
      <div class="mt-3 space-y-2">${mistakes.map(m => `
        <div class="rounded-2xl border-2 border-line p-3">
          <div class="text-sm text-ink/60">${esc(m.q)}</div>
          <div class="flex items-start gap-2 mt-1 font-bold text-duo-greenDark">${m.say ? spk(m.say, "spk-sm") : ""}<span>✔ ${esc(m.a)}</span></div>
        </div>`).join("")}</div>
    </div>
    ${lv.outro ? lv.outro() : ""}
    <div class="mt-10 flex flex-col sm:flex-row gap-3">
      <button class="btn btn-green flex-1" onclick="renderHome();show('home')">Continuer</button>
      <button class="btn btn-ghost flex-1" onclick="startLevel(${i})">Rejouer</button>
    </div>`;
  show("result");
  sfx.win();
  confetti();
}

/* =====================================================================
   TYPES D'EXERCICES
   ===================================================================== */
function head(ex, defTitle) {
  return `<h2 class="text-2xl sm:text-3xl font-black">${ex.title || defTitle}</h2>` +
    (ex.prompt ? `<p class="mt-2 text-lg">${ex.prompt}</p>` : "") +
    (ex.en ? bubble(`<div class="flex items-center gap-2">${spk(ex.en)}${spkSlow(ex.en)}<span class="font-bold text-lg">${esc(ex.en)}</span></div>`) : "");
}
const bubble = inner => `<div class="flex items-end gap-4 mt-5"><div class="mascot" aria-hidden="true">${(C && C.mascot) || "🦉"}</div><div class="bubble">${inner}</div></div>`;

const R = {};

R.info = ex => {
  stage.innerHTML = head({ title: ex.title, en: ex.en }) + ex.html;
  mainBtn.textContent = "C'est parti !"; mainBtn.disabled = false;
  if (!S.muted) setTimeout(() => speak(ex.en), 400);
  return {};
};

R.mcq = ex => {
  const opts = shuffle(ex.options.map((t, i) => ({ t, ok: i === 0 })));
  const long = ex.options.some(o => o.length > 34);
  stage.innerHTML = head(ex, "Choisis la bonne réponse") + `<div id="opts" class="grid gap-3 mt-7 ${long ? "" : "sm:grid-cols-2"}"></div>`;
  const box = $("#opts"); let sel = -1;
  opts.forEach((o, i) => {
    const b = document.createElement("button");
    b.type = "button"; b.className = "opt"; b.dataset.key = i + 1;
    b.innerHTML = `<span class="kbd">${i + 1}</span><span class="flex-1">${esc(o.t)}</span>`;
    b.onclick = () => {
      if (L.mode !== "check") return;
      box.querySelectorAll(".opt").forEach(x => x.classList.remove("sel"));
      b.classList.add("sel"); sel = i;
      if (ex.speakOpts) speak(o.t);
      setReady(true);
    };
    box.appendChild(b);
  });
  return {
    check() {
      const btns = box.querySelectorAll(".opt"), ci = opts.findIndex(o => o.ok);
      btns.forEach(x => { x.disabled = true; x.classList.remove("sel"); });
      btns[ci].classList.add("good");
      if (sel !== ci) btns[sel].classList.add("bad");
      const ans = opts[ci].t;
      return { ok: sel === ci, answer: ans, say: ex.speakOpts ? ans : ex.en };
    }
  };
};

R.fill = ex => {
  const [a, b] = ex.sentence.split("___");
  const opts = shuffle(ex.options);
  stage.innerHTML = head(ex, "Complète la phrase") + `
    <div class="mt-6 rounded-2xl border-2 border-line p-5">
      <p class="text-xl sm:text-2xl font-bold leading-loose">${esc(a)}<button type="button" id="slot" class="slot">&nbsp;</button>${esc(b)}</p>
      ${ex.fr ? `<p class="mt-2 text-ink/60 italic">🇫🇷 ${esc(ex.fr)}</p>` : ""}
    </div>
    <div id="bank" class="flex flex-wrap gap-3 mt-7 justify-center"></div>`;
  const slot = $("#slot"), bank = $("#bank"); let chosen = null;
  const clear = () => { chosen = null; slot.innerHTML = "&nbsp;"; bank.querySelectorAll(".chip").forEach(c => c.classList.remove("sel")); setReady(false); };
  opts.forEach((t, i) => {
    const c = document.createElement("button");
    c.type = "button"; c.className = "chip"; c.dataset.key = i + 1; c.textContent = t;
    c.onclick = () => {
      if (L.mode !== "check") return;
      bank.querySelectorAll(".chip").forEach(x => x.classList.remove("sel"));
      c.classList.add("sel"); chosen = t; slot.textContent = t;
      slot.classList.remove("pop"); void slot.offsetWidth; slot.classList.add("pop");
      setReady(true);
    };
    bank.appendChild(c);
  });
  slot.onclick = () => { if (L.mode === "check") clear(); };
  return {
    check() {
      const ok = chosen === ex.options[0];
      slot.classList.add(ok ? "good" : "bad");
      bank.querySelectorAll(".chip").forEach(x => { x.disabled = true; if (x.textContent === ex.options[0]) x.classList.add("good"); else if (x.textContent === chosen) x.classList.add("bad"); x.classList.remove("sel"); });
      const full = ex.sentence.replace("___", ex.options[0]).replace(/\s+/g, " ");
      return { ok, answer: full, say: full, showAnswer: true };
    }
  };
};

R.order = ex => {
  /* ex.steps (optionnel) : chaque étape est une carte entière, au lieu de découper ex.answer en mots */
  const words = ex.steps ? ex.steps.slice() : ex.answer.split(/\s+/).map(w => w.replace(/[.,!?;:]+$/, ""));
  const pool = shuffle(words.concat(ex.extra || []));
  stage.innerHTML = `<h2 class="text-2xl sm:text-3xl font-black">${ex.title || (ex.steps ? "Remets dans l'ordre" : "Traduis cette phrase")}</h2>` +
    bubble(`<span class="font-bold text-lg">${ex.prompt || "🇫🇷 " + esc(ex.fr)}</span>`) +
    `<div id="ans" class="answer-area mt-6"></div><div id="bank" class="flex flex-wrap gap-2 justify-center mt-6"></div>`;
  const ans = $("#ans"), bank = $("#bank"); let picked = [];
  const chips = pool.map((w, id) => {
    const c = document.createElement("button");
    c.type = "button"; c.className = "chip"; c.textContent = w;
    c.onclick = () => {
      if (L.mode !== "check") return;
      picked.push(id); c.classList.add("ghost"); speak(w); draw();
    };
    bank.appendChild(c);
    return c;
  });
  function draw() {
    ans.innerHTML = "";
    picked.forEach((id, k) => {
      const c = document.createElement("button");
      c.type = "button"; c.className = "chip pop"; c.textContent = pool[id];
      c.onclick = () => {
        if (L.mode !== "check") return;
        picked.splice(k, 1); chips[id].classList.remove("ghost"); draw();
      };
      ans.appendChild(c);
    });
    setReady(picked.length > 0);
  }
  return {
    check() {
      const answer = ex.steps ? ex.steps.join(" → ") : ex.answer;
      const ok = ex.steps ? picked.map(id => pool[id]).join("\n") === ex.steps.join("\n") : norm(picked.map(id => pool[id]).join(" ")) === norm(ex.answer);
      ans.querySelectorAll(".chip").forEach(c => { c.classList.add(ok ? "good" : "bad"); c.disabled = true; });
      chips.forEach(c => c.disabled = true);
      return { ok, answer, say: ex.steps ? ex.steps.join(". ") : ex.answer, showAnswer: true };
    }
  };
};

R.spot = ex => {
  stage.innerHTML = head({ title: ex.title || "Corrige l'erreur", prompt: ex.prompt || "Touche le mot <b>incorrect</b> dans la phrase." }) +
    `<div class="flex items-end gap-4 mt-6"><div class="mascot" aria-hidden="true">🕵️</div><div id="words" class="bubble flex flex-wrap gap-2"></div></div>`;
  const box = $("#words"); let sel = -1;
  ex.words.forEach((w, i) => {
    const c = document.createElement("button");
    c.type = "button"; c.className = "chip"; c.textContent = w;
    c.onclick = () => {
      if (L.mode !== "check") return;
      box.querySelectorAll(".chip").forEach(x => x.classList.remove("sel"));
      c.classList.add("sel"); sel = i; setReady(true);
    };
    box.appendChild(c);
  });
  return {
    check() {
      const cs = box.querySelectorAll(".chip");
      cs.forEach(c => { c.disabled = true; c.classList.remove("sel"); });
      cs[ex.wrong].classList.add(sel === ex.wrong ? "good" : "bad");
      if (sel !== ex.wrong) cs[sel].classList.add("sel");
      return { ok: sel === ex.wrong, answer: ex.fix, say: ex.fix, showAnswer: true, note: `Le mot fautif était « ${esc(ex.words[ex.wrong])} ».` };
    }
  };
};

R.sort = ex => {
  const items = shuffle(ex.items), ans = new Array(items.length).fill(null);
  const cols = ex.cats.length > 2 ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-2";
  stage.innerHTML = head(ex, "Classe les éléments") + `<div id="rows" class="mt-6 space-y-3"></div>`;
  const rows = $("#rows");
  items.forEach((it, i) => {
    const row = document.createElement("div");
    row.className = "rounded-2xl border-2 border-line p-3 transition-colors";
    row.innerHTML = `<div class="flex items-center gap-2 font-bold">${it.en ? spk(it.t, "spk-sm") : ""}<span>${esc(it.t)}</span></div>
      <div class="grid ${cols} gap-2 mt-2">${ex.cats.map(c => `<button type="button" class="chip !text-sm !py-2" data-cat="${c.id}">${c.emoji} ${c.label}</button>`).join("")}</div>`;
    row.querySelectorAll("[data-cat]").forEach(b => b.onclick = () => {
      if (L.mode !== "check") return;
      row.querySelectorAll("[data-cat]").forEach(x => x.classList.remove("sel"));
      b.classList.add("sel"); ans[i] = b.dataset.cat;
      setReady(ans.every(Boolean));
    });
    rows.appendChild(row);
  });
  return {
    check() {
      const wrong = [];
      [...rows.children].forEach((row, i) => {
        const good = ans[i] === items[i].c;
        row.style.borderColor = good ? "var(--green)" : "var(--red)";
        row.querySelectorAll("[data-cat]").forEach(b => {
          b.disabled = true; b.classList.remove("sel");
          if (b.dataset.cat === items[i].c) b.classList.add("good");
          else if (b.dataset.cat === ans[i]) b.classList.add("bad");
        });
        if (!good) wrong.push(`${items[i].t} → ${ex.cats.find(c => c.id === items[i].c).label}`);
      });
      return { ok: !wrong.length, answer: wrong.join("  •  ") };
    }
  };
};

R.match = ex => {
  const n = ex.pairs.length;
  const left = shuffle(ex.pairs.map((p, i) => ({ t: p[0], i }))), right = shuffle(ex.pairs.map((p, i) => ({ t: p[1], i })));
  stage.innerHTML = head(ex, "Associe les paires") +
    `<p class="mt-1 text-sm font-semibold text-ink/60">${ex.hint || C.matchHint || "Touche un élément à gauche puis sa correspondance — ou fais-le glisser dessus."}</p>
     <div class="grid grid-cols-2 gap-3 mt-6"><div id="colL" class="space-y-3"></div><div id="colR" class="space-y-3"></div></div>`;
  mainBtn.classList.add("hidden");
  fb.innerHTML = `<div class="text-sm font-bold text-ink/50">🔗 Trouve les ${n} paires</div>`;
  let selL = null, selR = null, done = 0, missed = false;
  const select = b => {
    if (b.disabled || L.mode !== "check") return;
    if (b.dataset.side === "L") {
      if (selL) selL.classList.remove("sel");
      selL = selL === b ? null : b;
      if (selL) { b.classList.add("sel"); speak(b.dataset.text); }
    } else {
      if (selR) selR.classList.remove("sel");
      selR = selR === b ? null : b;
      if (selR) b.classList.add("sel");
    }
    if (selL && selR) tryPair();
  };
  const tryPair = () => {
    const a = selL, c = selR; selL = selR = null;
    [a, c].forEach(x => x.classList.remove("sel"));
    if (a.dataset.i === c.dataset.i) {
      [a, c].forEach(x => { x.classList.add("good"); x.disabled = true; x.draggable = false; });
      sfx.pair();
      setTimeout(() => [a, c].forEach(x => { x.classList.remove("good"); x.classList.add("matched"); }), 450);
      if (++done === n) setTimeout(finishMatch, 600);
    } else {
      [a, c].forEach(x => { x.classList.add("bad", "shake"); });
      setTimeout(() => [a, c].forEach(x => x.classList.remove("bad", "shake")), 600);
      if (!missed) L.cur._miss = true;
      missed = true;
      L.mistakes.push({ q: "Association : " + a.dataset.text, a: a.dataset.text + " = " + ex.pairs[+a.dataset.i][1], say: a.dataset.text });
      loseHeart(false);
      if (L.hearts <= 0) { L.mode = "over"; setTimeout(gameOver, 700); }
    }
  };
  const mk = (o, side) => {
    const b = document.createElement("button");
    b.type = "button"; b.className = "card-m"; b.textContent = o.t;
    b.dataset.i = o.i; b.dataset.side = side; b.dataset.text = o.t;
    b.onclick = () => select(b);
    if (side === "L") {
      b.draggable = true;
      b.ondragstart = e => { e.dataTransfer.setData("text/plain", o.i); if (selL !== b) select(b); };
    } else {
      b.ondragover = e => { if (!b.disabled) { e.preventDefault(); b.classList.add("over"); } };
      b.ondragleave = () => b.classList.remove("over");
      b.ondrop = e => { e.preventDefault(); b.classList.remove("over"); if (selL && !b.disabled) { if (selR) selR.classList.remove("sel"); selR = b; tryPair(); } };
    }
    return b;
  };
  left.forEach(o => $("#colL").appendChild(mk(o, "L")));
  right.forEach(o => $("#colR").appendChild(mk(o, "R")));
  function finishMatch() {
    if (L.mode !== "check") return;
    mainBtn.classList.remove("hidden");
    L.mode = "continue"; L.solved++; L.streak++;
    if (!missed) L.firstOk++;
    L.xp += missed ? 5 : 10;
    sfx.ok(); updateBar();
    feedback(true, { note: missed ? "Toutes les paires sont trouvées (avec quelques erreurs à revoir)." : "Toutes les paires du premier coup !" }, ex);
  }
  return {};
};

/* ---------- Clavier ---------- */
document.addEventListener("keydown", e => {
  if (!$("#modal").classList.contains("hidden")) { if (e.key === "Escape" && !modalLocked) closeModal(); return; }
  if (!L || $("#lesson").classList.contains("hidden")) return;
  if (e.key === "Enter") {
    if (!mainBtn.disabled && !mainBtn.classList.contains("hidden")) { e.preventDefault(); mainBtn.click(); }
  } else if (/^[1-9]$/.test(e.key) && L.mode === "check") {
    const t = stage.querySelector(`[data-key="${e.key}"]`);
    if (t) t.click();
  }
});

/* ---------- Confettis ---------- */
function confetti() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const c = $("#confetti"), ctx = c.getContext("2d"), dpr = window.devicePixelRatio || 1;
  const W = innerWidth, H = innerHeight;
  c.width = W * dpr; c.height = H * dpr; ctx.scale(dpr, dpr);
  const COLS = ["#58CC02", "#1CB0F6", "#FFC800", "#FF4B4B", "#CE82FF", "#FF9600"];
  const ps = Array.from({ length: 170 }, () => ({
    x: Math.random() * W, y: -20 - Math.random() * H * .6, vx: (Math.random() - .5) * 4, vy: 2 + Math.random() * 4,
    w: 6 + Math.random() * 6, h: 8 + Math.random() * 8, r: Math.random() * 6, vr: (Math.random() - .5) * .3, col: pick(COLS)
  }));
  const t0 = performance.now();
  (function frame(t) {
    ctx.clearRect(0, 0, W, H);
    ps.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.vy += .04; p.r += p.vr;
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.fillStyle = p.col;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h * Math.abs(Math.cos(p.r)));
      ctx.restore();
    });
    if (t - t0 < 4500) requestAnimationFrame(frame); else ctx.clearRect(0, 0, W, H);
  })(t0);
}
