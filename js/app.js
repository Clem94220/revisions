/* =====================================================================
   APPLICATION — matières, sauvegarde par cours, carte (renderHome)
   ===================================================================== */

/* ---------- Sauvegarde (localStorage, optionnel) ---------- */
const STORE = "duo-revision-v2";
const LEGACY_KEY = "job-english-quest-v1";
const emptyProgress = () => ({ xp: 0, done: {}, best: {} });

let S = { muted: false, course: null };
try { Object.assign(S, JSON.parse(localStorage.getItem(STORE + ":settings")) || {}); } catch (e) {}
const saveSettings = () => { try { localStorage.setItem(STORE + ":settings", JSON.stringify(S)); } catch (e) {} };

/* Reprise de l'ancienne sauvegarde (version mono-fichier) dans le cours d'anglais */
try {
  const old = JSON.parse(localStorage.getItem(LEGACY_KEY));
  if (old && localStorage.getItem(STORE + ":anglais") == null) {
    localStorage.setItem(STORE + ":anglais", JSON.stringify({ xp: old.xp || 0, done: old.done || {}, best: old.best || {} }));
    if (old.muted) { S.muted = true; saveSettings(); }
  }
} catch (e) {}

function loadProgress(id) {
  const p = emptyProgress();
  try { Object.assign(p, JSON.parse(localStorage.getItem(STORE + ":" + id)) || {}); } catch (e) {}
  return p;
}

/* C = cours actif (métadonnées de courses.js + données de data/<id>.js), P = sa progression */
let C = null, P = emptyProgress();
const save = () => { try { localStorage.setItem(STORE + ":" + C.id, JSON.stringify(P)); } catch (e) {} };
const hasContent = () => !!(C && C.LEVELS && C.LEVELS.length);
const unlocked = i => i === 0 || !!P.done[i - 1];

/* ---------- Changement de matière ---------- */
function setCourse(id) {
  const list = window.COURSE_LIST || [];
  const meta = list.find(c => c.id === id) || list[0];
  C = Object.assign({}, meta, window.COURSES[meta.id]);
  C.LEVELS = C.LEVELS || C.levels;
  P = loadProgress(C.id);
  S.course = C.id; saveSettings();
  document.title = C.title + " · Révisions";
  closeCourseMenu();
  renderHome();
}

function renderCourseMenu() {
  $("#courseMenu").innerHTML = `<div class="px-2 pt-1 pb-2 text-xs font-extrabold uppercase tracking-wider text-ink/50">Mes matières</div>` +
    window.COURSE_LIST.map(m => {
      const data = window.COURSES[m.id], lv = data && (data.LEVELS || data.levels), n = lv ? lv.length : 0;
      const active = m.id === C.id, p = active ? P : loadProgress(m.id);
      const done = Object.keys(p.done).filter(k => p.done[k]).length;
      return `
        <button type="button" role="option" aria-selected="${active}" data-course="${esc(m.id)}" class="w-full flex items-center gap-3 rounded-xl p-2 text-left transition-colors ${active ? "bg-[#DDF4FF]" : "hover:bg-[#F7F7F7]"}">
          <span class="w-11 h-11 rounded-xl flex items-center justify-center text-2xl shrink-0" style="background:${m.color};box-shadow:0 3px 0 ${m.colorDark}">${m.icon}</span>
          <span class="flex-1 min-w-0">
            <span class="block font-black truncate ${active ? "text-duo-blue" : ""}">${esc(m.title)}</span>
            <span class="block text-xs font-bold text-ink/50">${n ? `${done}/${n} niveaux · ⚡ ${p.xp} XP` : "Bientôt disponible"}</span>
          </span>
          ${active ? `<span class="text-duo-blue font-black pr-1">✔</span>` : ""}
        </button>`;
    }).join("");
}
function openCourseMenu() {
  renderCourseMenu();
  const m = $("#courseMenu");
  m.classList.remove("hidden", "pop"); void m.offsetWidth; m.classList.add("pop");
  $("#courseBtn").setAttribute("aria-expanded", "true");
}
function closeCourseMenu() {
  $("#courseMenu").classList.add("hidden");
  $("#courseBtn").setAttribute("aria-expanded", "false");
}
$("#courseBtn").onclick = () => $("#courseMenu").classList.contains("hidden") ? openCourseMenu() : closeCourseMenu();
$("#courseMenu").addEventListener("click", e => {
  const b = e.target.closest("[data-course]"); if (!b) return;
  if (b.dataset.course === C.id) return closeCourseMenu();
  sfx.pair();
  setCourse(b.dataset.course);
  window.scrollTo(0, 0);
});
document.addEventListener("click", e => { if (!e.target.closest("#courseSwitch")) closeCourseMenu(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeCourseMenu(); });

/* =====================================================================
   CARTE DU COURS
   ===================================================================== */
function renderHome() {
  $("#courseIcon").textContent = C.icon;
  $("#courseTitle").textContent = C.title;
  $("#xpTotal").textContent = P.xp;
  $("#muteBtn").textContent = S.muted ? "🔇" : "🔊";

  const u = C.unit || {}, banner = $("#banner");
  banner.style.background = C.color;
  banner.style.boxShadow = `0 5px 0 ${C.colorDark}`;
  $("#unitLabel").textContent = u.label || C.title;
  $("#unitTitle").textContent = u.title || C.title;
  $("#unitSub").textContent = u.sub || (hasContent() ? "" : "Aucune leçon pour l'instant");
  $("#guideBtn").classList.toggle("hidden", !hasContent());
  $("#resetWrap").classList.toggle("hidden", !hasContent());

  if (!hasContent()) {
    $("#path").innerHTML = `
      <div class="w-full rounded-2xl border-2 border-line p-6 text-center">
        <div class="text-5xl">🚧</div>
        <h2 class="text-xl font-black mt-3">Bientôt disponible</h2>
        <p class="mt-2 text-ink/70">Le cours <b>${esc(C.title)}</b> n'a pas encore de leçons.</p>
        <p class="mt-2 text-sm text-ink/50">Crée <code class="font-bold">data/${esc(C.id)}.js</code> sur le modèle de <code class="font-bold">data/anglais.js</code>, puis ajoute-le dans <code class="font-bold">index.html</code>.</p>
      </div>`;
    return;
  }

  const offsets = [0, 70, 0, -70];
  const current = C.LEVELS.findIndex((_, i) => unlocked(i) && !P.done[i]);
  $("#path").innerHTML = C.LEVELS.map((lv, i) => {
    const lock = !unlocked(i), done = !!P.done[i], cur = i === current;
    return `
      <div class="flex flex-col items-center relative" style="transform:translateX(${offsets[i % offsets.length]}px)">
        ${cur ? `<div class="tip absolute -top-12 bg-white border-2 border-line rounded-xl px-3 py-1.5 font-extrabold text-sm whitespace-nowrap" style="color:${lv.c}">${i === 0 && !P.xp ? "COMMENCER" : "C'EST ICI !"}</div>` : ""}
        <button class="node ${lock ? "locked" : ""} ${cur ? "current" : ""}" style="--c:${lv.c};--d:${lv.d}" data-level="${i}" aria-label="Niveau ${i + 1} : ${esc(lv.title)}${lock ? " (verrouillé)" : ""}">
          ${lock ? "🔒" : lv.emoji}
          ${done ? `<span class="absolute -right-1 -top-1 w-7 h-7 rounded-full bg-duo-yellow text-white text-sm flex items-center justify-center border-2 border-white">✔</span>` : ""}
        </button>
        <div class="mt-4 text-center">
          <div class="text-xs font-extrabold uppercase tracking-wider text-ink/50">Niveau ${i + 1}</div>
          <div class="font-black ${lock ? "text-ink/40" : ""}">${esc(lv.title)}</div>
          ${P.best[i] != null ? `<div class="text-xs font-bold text-duo-greenDark">Record : ${P.best[i]}%</div>` : ""}
        </div>
      </div>`;
  }).join("");
}

$("#path").addEventListener("click", e => {
  const b = e.target.closest("[data-level]"); if (!b) return;
  const i = +b.dataset.level, lv = C.LEVELS[i];
  if (!unlocked(i)) {
    openModal(`<div class="text-center"><div class="text-5xl">🔒</div><h2 class="text-xl font-black mt-3">Niveau verrouillé</h2><p class="mt-2">Termine le niveau ${i} « ${esc(C.LEVELS[i - 1].title)} » pour débloquer celui-ci.</p><button class="btn btn-blue mt-5" onclick="closeModal()">Compris</button></div>`);
    return;
  }
  openModal(`
    <div class="flex items-center gap-4">
      <div class="node shrink-0" style="--c:${lv.c};--d:${lv.d};width:64px;height:60px;font-size:28px">${lv.emoji}</div>
      <div><div class="text-xs font-extrabold uppercase tracking-wider text-ink/50">Niveau ${i + 1} · ${esc(lv.sub)}</div><h2 class="text-2xl font-black">${esc(lv.title)}</h2></div>
    </div>
    <p class="mt-4">${lv.desc}</p>
    <p class="mt-2 text-sm font-bold text-ink/60">${gradedCount(i)} exercices · 5 ❤️ · jusqu'à ${gradedCount(i) * 10 + 10} XP</p>
    <div class="mt-6 flex flex-col sm:flex-row gap-3">
      <button class="btn btn-green flex-1" onclick="closeModal();startLevel(${i})">Commencer</button>
      <button class="btn btn-ghost flex-1" onclick="openFiche(${i})">📖 Lire la fiche</button>
    </div>`);
});

function openFiche(i, fromGameOver) {
  const lv = C.LEVELS[i];
  openModal(`
    <div class="flex items-center justify-between gap-3">
      <h2 class="text-xl font-black">📖 Fiche · ${esc(lv.title)}</h2>
      <button class="text-2xl text-ink/40 hover:text-ink" onclick="closeModal()" aria-label="Fermer">✕</button>
    </div>
    <div class="fiche">${lv.fiche()}</div>
    <button class="btn btn-green w-full mt-6" onclick="closeModal();startLevel(${i})">${fromGameOver ? "Réessayer le niveau" : "Commencer le niveau"}</button>`);
}

$("#guideBtn").onclick = () => openModal(`
  <div class="flex items-center justify-between gap-3"><h2 class="text-xl font-black">📖 Fiche complète · ${esc((C.unit && C.unit.title) || C.title)}</h2>
  <button class="text-2xl text-ink/40 hover:text-ink" onclick="closeModal()" aria-label="Fermer">✕</button></div>
  ${C.LEVELS.map((lv, i) => `<div class="fiche mt-6 pt-4 ${i ? "border-t-2 border-line" : ""}"><div class="text-lg font-black" style="color:${lv.d}">${lv.emoji} ${i + 1}. ${esc(lv.title)}</div>${lv.fiche()}</div>`).join("")}`);
$("#muteBtn").onclick = () => { S.muted = !S.muted; saveSettings(); renderHome(); };
$("#resetBtn").onclick = () => openModal(`<div class="text-center"><div class="text-5xl">♻️</div><h2 class="text-xl font-black mt-3">Tout recommencer ?</h2><p class="mt-2">Ton XP et tes niveaux débloqués en <b>${esc(C.title)}</b> seront effacés.</p>
  <div class="mt-5 flex flex-col sm:flex-row gap-3 justify-center"><button class="btn btn-red" onclick="P=emptyProgress();save();closeModal();renderHome()">Réinitialiser</button><button class="btn btn-ghost" onclick="closeModal()">Annuler</button></div></div>`);

/* ---------- Démarrage ---------- */
setCourse(S.course);
