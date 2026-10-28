/* =====================================================================
   COURS : ANGLAIS — Unité 1 · Applying for a Job
   Enregistré dans window.COURSES['anglais'].
   Les helpers spk(), esc(), table(), SPK_SVG viennent de js/engine.js
   (ils ne sont appelés qu'à l'affichage, l'ordre de chargement importe peu).
   ===================================================================== */
window.COURSES = window.COURSES || {};

(function () {
const VOCAB_A = [
  ["a cover letter / an application letter", "une lettre de motivation / de candidature"],
  ["to look for", "chercher"],
  ["a work placement / an internship", "un stage"],
  ["a trainee / an intern", "un(e) stagiaire"],
  ["attractive / appealing", "attirant — <i>Your company appeals to me</i> = Votre entreprise m'attire"],
  ["famous / known", "célèbre / connu"],
  ["a company / a firm", "une entreprise"],
  ["a nationwide firm", "une entreprise connue partout dans le pays (d'envergure nationale)"],
  ["to introduce oneself", "se présenter"],
  ["availability / available", "disponibilité / disponible"],
  ["a summer job / a student job", "un job d'été / un job étudiant"],
  ["skills", "les compétences : ce que tu as <b>appris</b>, ce que tu sais <b>faire</b>"],
  ["qualities", "les qualités : ce que tu <b>es</b> naturellement, ta personnalité"],
  ["to advise", "conseiller"],
  ["a client / a customer", "un client"]
];
const VOCAB_B = [
  ["Managing Director", "directeur / directrice général(e)"],
  ["a post-Baccalaureate degree", "un diplôme post-bac"],
  ["specialized in trade", "spécialisé dans le commerce"],
  ["the curriculum", "le programme d'études / le cursus"],
  ["to gain work experience", "acquérir de l'expérience professionnelle"],
  ["to work as part of a team", "travailler en équipe"],
  ["a grocery store", "une épicerie / un magasin d'alimentation"],
  ["a clothing store", "un magasin de vêtements"],
  ["to welcome customers", "accueillir les clients"],
  ["to be in charge of + V-ing", "être chargé(e) de / responsable de"],
  ["displaying items", "mettre en rayon / disposer les articles"],
  ["an interview", "un entretien (d'embauche)"]
];
const SKILLS = [
  ["CAN", "+ base verbale", "Jenna can welcome customers.", "Jenna sait / peut accueillir les clients."],
  ["BE ABLE TO", "+ base verbale", "She is able to advise clients.", "Elle est capable de conseiller les clients."],
  ["KNOW HOW TO", "+ base verbale", "She knows how to work with a team.", "Elle sait travailler en équipe."],
  ["LEARN (HOW) TO", "+ base verbale", "She learnt how to adapt to clients.", "Elle a appris à s'adapter aux clients."],
  ["HAVE THE CAPACITY TO", "+ base verbale", "She has the capacity to communicate with clients.", "Elle a la capacité de communiquer avec les clients."],
  ["BE CAPABLE OF", "+ V-ING ⚠️ exception !", "She is capable of working with a team.", "Elle est capable de travailler en équipe."]
];
const LETTER = [
  ["co", "En-tête & salutation", "Dear Madam,", "Madame,"],
  ["me", "1. Présentation & demande de stage", "I am 20 years old and I am a second year student preparing a post-Baccalaureate degree specialized in trade. Part of the curriculum is based on a work placement, from April to the end of June.", "J'ai 20 ans et je suis étudiante en deuxième année préparant un diplôme post-bac spécialisé dans le commerce. Une partie du cursus repose sur un stage, d'avril à fin juin."],
  ["me", "2. Objectif professionnel", "I would like to gain work experience in a company that would give me the opportunity to use my skills.", "J'aimerais acquérir de l'expérience professionnelle dans une entreprise qui me donnerait l'opportunité d'utiliser mes compétences."],
  ["co", "3. L'entreprise & motivations", "Your company appeals to me since you are a famous, nationwide firm where there may be opportunities to work as part of a team on various projects.", "Votre entreprise m'attire car vous êtes une société célèbre d'envergure nationale où il peut y avoir des opportunités de travailler en équipe sur divers projets."],
  ["me", "4. Qualités personnelles", "I believe I have the necessary qualities to contribute to your company. I am serious and dynamic.", "Je pense avoir les qualités nécessaires pour contribuer à votre entreprise. Je suis sérieuse et dynamique."],
  ["me", "5. Expériences & compétences", "Previously, I had a summer job in a grocery store where I learned how to welcome and advise customers and work with a team. It also helped me develop communication skills. I also work in a clothing store on Saturdays. I welcome and help the clients and I am in charge of displaying items.", "Auparavant, j'ai eu un job d'été dans une épicerie où j'ai appris à accueillir et conseiller les clients et à travailler en équipe. Cela m'a aussi aidée à développer des compétences en communication. Je travaille aussi dans un magasin de vêtements le samedi. J'accueille et j'aide les clients et je suis chargée de la mise en rayon."],
  ["me", "6. Disponibilité & formules de fin", "I am available for an interview to discuss my qualifications. I thank you in advance for considering my application. Looking forward to hearing from you. Yours Sincerely, Jenna Helmet.", "Je suis disponible pour un entretien afin de discuter de mes qualifications. Je vous remercie d'avance d'étudier ma candidature. Dans l'attente de votre réponse. Veuillez agréer, Madame, mes salutations distinguées."]
];
const ARGS = [
  ["🎓", "Studies", "Her studies are specialized in trade, which corresponds to Tesco's activity, a chain of supermarkets."],
  ["💪", "Qualities", "She has a good personality for the job because she is serious and dynamic."],
  ["🛒", "Experience", "She already has work experience in retail thanks to her summer job in a grocery store and her student job in a clothing store on Saturdays."],
  ["🛠️", "Skills", "She already knows how to welcome and advise customers, she is able to work with a team, she has the capacity to communicate clearly and adapt to clients, and she is capable of displaying items."]
];
const HIRE_INTRO = "Yes, I would hire Jenna as a trainee because:";
const CO = { id: "co", label: "Company", emoji: "🏢" }, ME = { id: "me", label: "Candidate", emoji: "🙋" };


const modelAnswer = () => `
  <div class="mt-2 rounded-2xl border-2 border-line p-4 space-y-3">
    <div class="flex items-center gap-2 font-black">${spk(HIRE_INTRO, "spk-sm")}${esc(HIRE_INTRO)}</div>
    ${ARGS.map(a => `<div class="flex items-start gap-2">${spk(a[2], "spk-sm")}<div><div class="text-xs font-extrabold uppercase tracking-wide text-duo-orange">${a[0]} ${a[1]}</div><div>${esc(a[2])}</div></div></div>`).join("")}
    <button type="button" class="btn btn-blue w-full !min-w-0 mt-2" data-say="${esc(HIRE_INTRO + " " + ARGS.map(a => a[2]).join(" "))}">${SPK_SVG} Écouter toute la réponse</button>
  </div>`;

/* Convention : pour mcq et fill, options[0] est TOUJOURS la bonne réponse (mélangée à l'affichage). */
const LEVELS = [
  {
    title: "Vocabulaire clé", sub: "Key Vocabulary", emoji: "📚", c: "#58CC02", d: "#58A700",
    desc: "QCM, associations de cartes anglais / français et phrases à compléter.",
    fiche: () => `
      <h3>A. Le vocabulaire listé par l'enseignant</h3>${table(VOCAB_A)}
      <h3>B. Le vocabulaire de la lettre modèle</h3>${table(VOCAB_B)}
      <div class="mt-4 grid sm:grid-cols-2 gap-3">
        <div class="rounded-2xl p-3 bg-[#DDF4FF]"><b>🛠️ Skills</b> = ce que tu as <b>appris</b> / sais <b>faire</b><br><i>welcome and advise customers</i></div>
        <div class="rounded-2xl p-3 bg-[#FFF4CC]"><b>💪 Qualities</b> = ce que tu <b>es</b> (personnalité)<br><i>serious and dynamic</i></div>
      </div>`,
    ex: [
      { t: "match", pairs: [["a cover letter", "une lettre de motivation"], ["to look for", "chercher"], ["an internship", "un stage"], ["a trainee", "un(e) stagiaire"], ["appealing", "attirant"]] },
      { t: "mcq", prompt: "Que signifie <b>« a nationwide firm »</b> ?", en: "Tesco is a nationwide firm.", options: ["Une entreprise connue dans tout le pays", "Une petite entreprise locale", "Une entreprise étrangère", "Une entreprise familiale"], explain: "<i>Nationwide</i> = connue partout dans le pays (d'envergure nationale)." },
      { t: "mcq", prompt: "Comment dit-on <b>« un(e) stagiaire »</b> ?", options: ["a trainee", "a training", "an internship", "a stager"], speakOpts: true, explain: "<i>a trainee / an intern</i> = un(e) stagiaire. Piège : <i>an internship</i> = <b>un stage</b>." },
      { t: "mcq", prompt: "Quel est le synonyme de <b>« a cover letter »</b> ?", options: ["an application letter", "a curriculum", "a summer letter", "a work placement"], speakOpts: true, explain: "<i>A cover letter = an application letter</i> = une lettre de motivation / de candidature." },
      { t: "fill", sentence: "Your company ___ to me.", fr: "Votre entreprise m'attire.", options: ["appeals", "appealing", "looks", "attracts"], explain: "<i>To appeal to someone</i> = attirer quelqu'un → <i>Your company appeals to me.</i>" },
      { t: "match", pairs: [["a company / a firm", "une entreprise"], ["availability", "la disponibilité"], ["to advise", "conseiller"], ["a customer", "un client"], ["an interview", "un entretien"]] },
      { t: "mcq", prompt: "<b>« Serious and dynamic »</b>, ce sont des…", en: "I am serious and dynamic.", options: ["Qualities (qualités)", "Skills (compétences)", "Experiences", "Availabilities"], explain: "<b>Qualities</b> = ce que tu <b>es</b> naturellement. <b>Skills</b> = ce que tu as <b>appris</b> / sais <b>faire</b>." },
      { t: "mcq", prompt: "<b>« Welcoming and advising customers »</b>, c'est…", en: "I know how to welcome and advise customers.", options: ["a skill (une compétence)", "a quality (une qualité)", "an availability", "a curriculum"], explain: "C'est quelque chose que Jenna a <b>appris à faire</b> → une <b>skill</b>." },
      { t: "match", pairs: [["a grocery store", "une épicerie"], ["a clothing store", "un magasin de vêtements"], ["displaying items", "la mise en rayon"], ["the curriculum", "le cursus"], ["Managing Director", "directeur(-trice) général(e)"]] },
      { t: "mcq", prompt: "Que veut dire <b>« to look for »</b> ?", en: "She is looking for a work placement.", options: ["chercher", "regarder", "trouver", "attendre"], explain: "<i>To look for</i> = chercher. (<i>to look at</i> = regarder)" },
      { t: "fill", sentence: "I am in charge of ___ items.", fr: "Je suis chargée de la mise en rayon des articles.", options: ["displaying", "display", "to display", "displayed"], explain: "<i>To be in charge of</i> + <b>V-ing</b> → <i>in charge of displaying items</i>." },
      { t: "match", pairs: [["to gain work experience", "acquérir de l'expérience pro"], ["to work as part of a team", "travailler en équipe"], ["a post-Baccalaureate degree", "un diplôme post-bac"], ["specialized in trade", "spécialisé dans le commerce"], ["to introduce oneself", "se présenter"]] },
      { t: "mcq", prompt: "Quel est le synonyme de <b>« an internship »</b> ?", options: ["a work placement", "a trainee", "a summer job", "a firm"], speakOpts: true, explain: "<i>An internship = a work placement</i> = un stage." },
      { t: "mcq", prompt: "Comment dit-on <b>« un job d'été »</b> ?", options: ["a summer job", "a student job", "a summer firm", "a holiday work"], speakOpts: true, explain: "<i>a summer job</i> = un job d'été ; <i>a student job</i> = un job étudiant." },
      { t: "mcq", prompt: "<b>« Famous / known »</b> signifie…", en: "Tesco is a famous British chain of supermarkets.", options: ["célèbre / connu", "familial / local", "attirant / séduisant", "disponible"], explain: "<i>Famous / known</i> = célèbre / connu." }
    ]
  },
  {
    title: "Règles de grammaire", sub: "Grammar Rules", emoji: "✏️", c: "#1CB0F6", d: "#1899D6",
    desc: "a / an devant les métiers, et les 6 structures pour exprimer ses compétences.",
    fiche: () => `
      <h3>Règle 1 · a / an devant un métier ou un statut</h3>
      <p class="mt-1">En français : « Je suis stagiaire » (pas d'article). En anglais, <b>a / an est obligatoire</b>.</p>
      ${table([["I am a nurse.", "Je suis infirmière."], ["I am a teacher.", "Je suis professeur."], ["I am a trainee.", "Je suis stagiaire."], ["I am an intern.", "Je suis stagiaire. (<b>an</b> devant un son voyelle)"]])}
      <h3>Règle 2 · Exprimer ses compétences (Focus on Skills)</h3>
      <div class="mt-2 space-y-2">${SKILLS.map(s => `
        <div class="rounded-2xl border-2 ${s[0] === "BE CAPABLE OF" ? "border-duo-red bg-[#FFDFE0]" : "border-line"} p-3">
          <div class="font-black">${s[0]} <span class="font-bold ${s[0] === "BE CAPABLE OF" ? "text-duo-red" : "text-duo-blue"}">${s[1]}</span></div>
          <div class="flex items-center gap-2 mt-1">${spk(s[2], "spk-sm")}<i>${esc(s[2])}</i></div>
          <div class="text-sm text-ink/70 mt-1">${s[3]}</div>
        </div>`).join("")}</div>`,
    ex: [
      { t: "mcq", title: "Traduis", prompt: "<b>« Je suis stagiaire. »</b>", options: ["I am a trainee.", "I am trainee.", "I am an trainee.", "I am the trainee."], speakOpts: true, explain: "En anglais, <b>a / an</b> est obligatoire devant un métier ou un statut." },
      { t: "fill", sentence: "I am ___ intern.", fr: "Je suis stagiaire.", options: ["an", "a", "the", "∅ (rien)"], explain: "Article obligatoire, et <b>an</b> devant un son voyelle : <i>an intern</i>." },
      { t: "fill", sentence: "My mother is ___ nurse.", fr: "Ma mère est infirmière.", options: ["a", "an", "∅ (rien)", "the"], explain: "Article obligatoire devant un métier : <i>a nurse</i>." },
      { t: "mcq", title: "Corrige l'erreur", prompt: "Quelle phrase est correcte ?", options: ["She wants to be a trainee.", "She wants to be trainee.", "She wants to be an trainee.", "She wants be a trainee."], speakOpts: true, explain: "<i>want <b>to</b> be</i> + <b>a</b> trainee (article obligatoire, <i>a</i> devant un son consonne)." },
      { t: "fill", sentence: "Jenna can ___ customers.", fr: "Jenna sait accueillir les clients.", options: ["welcome", "to welcome", "welcoming", "welcomes"], explain: "<b>CAN + base verbale</b> (sans <i>to</i>, sans <i>-s</i>)." },
      { t: "fill", sentence: "She is able ___ advise clients.", fr: "Elle est capable de conseiller les clients.", options: ["to", "of", "for", "∅ (rien)"], explain: "<b>BE ABLE TO + base verbale</b>." },
      { t: "spot", words: ["She", "is", "capable", "of", "work", "with", "a", "team."], wrong: 4, fix: "She is capable of working with a team.", explain: "L'exception du cours : <b>BE CAPABLE OF + V-ing</b>." },
      { t: "fill", sentence: "She knows ___ to work with a team.", fr: "Elle sait travailler en équipe.", options: ["how", "what", "can", "able"], explain: "<b>KNOW HOW TO + base verbale</b>." },
      { t: "mcq", prompt: "Quelle structure est suivie d'un verbe en <b>-ing</b> ?", options: ["be capable of", "be able to", "have the capacity to", "know how to"], speakOpts: true, explain: "C'est <b>l'exception</b> : <i>be capable OF + V-ing</i>. Toutes les autres → base verbale." },
      { t: "spot", words: ["Jenna", "can", "to", "welcome", "customers."], wrong: 2, fix: "Jenna can welcome customers.", explain: "<b>CAN</b> est un modal : jamais de <i>to</i> après." },
      { t: "fill", sentence: "She has the ___ to communicate with clients.", fr: "Elle a la capacité de communiquer avec les clients.", options: ["capacity", "capable", "able", "know"], explain: "<b>HAVE THE CAPACITY TO + base verbale</b>." },
      { t: "fill", sentence: "She learnt how to ___ to clients.", fr: "Elle a appris à s'adapter aux clients.", options: ["adapt", "adapting", "adapted", "adapts"], explain: "<b>LEARN (HOW) TO + base verbale</b>." },
      { t: "spot", words: ["She", "has", "the", "capacity", "of", "communicate", "with", "clients."], wrong: 4, fix: "She has the capacity to communicate with clients.", explain: "<b>HAVE THE CAPACITY TO</b> + base verbale (pas <i>of</i>)." },
      { t: "fill", sentence: "She is capable of ___ items.", fr: "Elle est capable de mettre les articles en rayon.", options: ["displaying", "display", "to display", "displays"], explain: "<b>BE CAPABLE OF + V-ing</b>." },
      { t: "spot", words: ["She", "knows", "how", "to", "working", "with", "a", "team."], wrong: 4, fix: "She knows how to work with a team.", explain: "<b>KNOW HOW TO + base verbale</b> → <i>to work</i>." },
      { t: "order", fr: "Elle est capable de travailler en équipe.", answer: "She is capable of working with a team.", extra: ["to", "work", "able"] },
      { t: "order", fr: "Elle est capable de conseiller les clients.", answer: "She is able to advise clients.", extra: ["of", "advising", "can"] }
    ]
  },
  {
    title: "La lettre de motivation", sub: "The Cover Letter", emoji: "✉️", c: "#CE82FF", d: "#A568CC",
    desc: "Reconstruis les phrases de la lettre de Jenna et range chaque section : Company ou Candidate.",
    fiche: () => `
      <h3>Présenter le document à l'oral</h3>
      ${table([["The document is a cover letter / an application letter.", "C'est une lettre de motivation."], ["It was written by Jenna Helmet to work at Tesco, a famous British chain of supermarkets.", "Écrite par Jenna Helmet pour travailler chez Tesco."], ["She is looking for a work placement related to her studies. She wants to be an intern / a trainee.", "Elle cherche un stage lié à ses études de commerce."]])}
      <h3>Ce qu'il faut mentionner</h3>
      <div class="mt-2 grid sm:grid-cols-2 gap-3 text-sm">
        <div class="rounded-2xl p-3 bg-[#F3E5FF]"><b>🏢 THE COMPANY</b><ul class="list-disc ml-5 mt-1"><li>Motivations (<i>attractive / appealing</i>)</li><li>Réputation (<i>a famous, nationwide firm</i>)</li><li>Opportunités (travailler en équipe sur divers projets)</li></ul></div>
        <div class="rounded-2xl p-3 bg-[#DDF4FF]"><b>🙋 YOURSELF (the applicant)</b><ul class="list-disc ml-5 mt-1"><li>Se présenter : âge, adresse, études</li><li>Qualities (<i>serious and dynamic</i>)</li><li>Experience (<i>summer job, student job</i>)</li><li>Skills (ce que tu sais faire)</li><li>Availability (dates, entretien)</li></ul></div>
      </div>
      <h3>La lettre modèle de Jenna</h3>
      <div class="mt-2 space-y-2">${LETTER.map(l => `
        <div class="rounded-2xl border-2 border-line p-3">
          <div class="text-xs font-extrabold uppercase tracking-wide ${l[0] === "co" ? "text-duo-purple" : "text-duo-blue"}">${l[1]}</div>
          <div class="flex items-start gap-2 mt-1">${spk(l[2], "spk-sm")}<i>${esc(l[2])}</i></div>
          <div class="text-sm text-ink/70 mt-1">${l[3]}</div>
        </div>`).join("")}</div>`,
    ex: [
      { t: "mcq", title: "Introduce the document", prompt: "Comment présenter le document à l'oral ?", options: ["The document is a cover letter.", "The document is a curriculum.", "The document is an interview.", "The document is a summer job."], speakOpts: true, explain: "<i>The document is a cover letter / an application letter.</i>" },
      { t: "fill", sentence: "It was written by Jenna Helmet to work at ___, a famous British chain of supermarkets.", options: ["Tesco", "Endfield", "Devon", "London"], explain: "Jenna écrit à Mrs Devon, Managing Director de <b>Tesco</b>." },
      { t: "fill", sentence: "She is looking ___ a work placement related to her studies.", fr: "Elle cherche un stage lié à ses études.", options: ["for", "at", "after", "to"], explain: "<i>To look for</i> = chercher." },
      { t: "sort", prompt: "Dans la lettre, chaque élément parle-t-il de l'<b>entreprise</b> ou du <b>candidat</b> ?", cats: [CO, ME], items: [{ t: "Motivations (appealing)", c: "co" }, { t: "Réputation (a nationwide firm)", c: "co" }, { t: "Qualités (serious and dynamic)", c: "me" }, { t: "Expérience (summer job)", c: "me" }, { t: "Opportunités de carrière", c: "co" }, { t: "Disponibilité (availability)", c: "me" }] },
      { t: "mcq", prompt: "Quelle formule ouvre la lettre adressée à Mrs Devon ?", options: ["Dear Madam,", "Hello Mrs,", "Hi Devon,", "Dear Sir,"], speakOpts: true, explain: "<i>Dear Madam,</i> = Madame," },
      { t: "order", fr: "Votre entreprise m'attire car vous êtes une entreprise célèbre d'envergure nationale.", answer: "Your company appeals to me since you are a famous, nationwide firm.", extra: ["appealing", "for"] },
      { t: "mcq", prompt: "Dans quelle partie place-t-on cette phrase ?", en: "I am serious and dynamic.", options: ["Qualities (le candidat)", "Motivations (l'entreprise)", "Availability", "Réputation"], explain: "Ce que Jenna <b>est</b> → ses <b>qualities</b>." },
      { t: "order", fr: "J'aimerais acquérir de l'expérience professionnelle.", answer: "I would like to gain work experience.", extra: ["win", "am"] },
      { t: "mcq", prompt: "Que signifie cette phrase ?", en: "Part of the curriculum is based on a work placement, from April to the end of June.", options: ["Une partie du cursus repose sur un stage, d'avril à fin juin.", "Le CV est basé sur un job d'été, d'avril à juin.", "Une partie de l'entreprise recrute des stagiaires en avril.", "Le programme se termine en avril."], explain: "<i>curriculum</i> = cursus ; <i>work placement</i> = stage." },
      { t: "mcq", prompt: "Dans quelle section met-on cette phrase ?", en: "I am available for an interview to discuss my qualifications.", options: ["Availability (disponibilité)", "Skills (compétences)", "Motivations", "Réputation"], explain: "À la fin de la lettre : dates du stage + disponibilité pour un entretien." },
      { t: "order", fr: "Je suis disponible pour un entretien.", answer: "I am available for an interview.", extra: ["a", "availability"] },
      { t: "fill", sentence: "Looking forward to ___ from you.", fr: "Dans l'attente de votre réponse.", options: ["hearing", "hear", "heard", "to hear"], explain: "Formule <b>indispensable</b>. Ici <i>to</i> est une préposition → V-ing : <i>to hearing</i>." },
      { t: "order", fr: "Dans l'attente de votre réponse.", answer: "Looking forward to hearing from you.", extra: ["hear", "for"] },
      { t: "mcq", prompt: "Que signifie <b>« Yours Sincerely, »</b> ?", en: "Yours Sincerely, Jenna Helmet.", options: ["Veuillez agréer, Madame, mes salutations distinguées.", "Dans l'attente de votre réponse.", "Je vous remercie d'avance.", "Bien à toi, Jenna."], explain: "Formule de politesse formelle de fin de lettre." },
      { t: "order", fr: "Je vous remercie d'avance d'étudier ma candidature.", answer: "I thank you in advance for considering my application.", extra: ["to", "consider"] },
      { t: "sort", prompt: "Associe chaque phrase de la lettre à la bonne section.", cats: [CO, ME], items: [{ t: "Your company appeals to me.", c: "co", en: 1 }, { t: "I am 20 years old.", c: "me", en: 1 }, { t: "You are a famous, nationwide firm.", c: "co", en: 1 }, { t: "I had a summer job in a grocery store.", c: "me", en: 1 }] }
    ]
  },
  {
    title: "Would you hire Jenna?", sub: "Défi final · Speaking prep", emoji: "🏆", c: "#FF9600", d: "#CC7800",
    desc: "Construis la réponse orale parfaite : studies, qualities, experience, skills.",
    fiche: () => `
      <h3>La consigne</h3>
      <div class="flex items-start gap-2 mt-1">${spk("Imagine you are Mrs Devon. Would you hire Jenna as a trainee? Justify.", "spk-sm")}<i>Imagine you are Mrs Devon. Would you hire Jenna as a trainee? Justify. Be prepared to answer.</i></div>
      <p class="text-sm text-ink/70 mt-1">Imaginez que vous êtes Mme Devon. Embaucheriez-vous Jenna comme stagiaire ? Justifiez.</p>
      <h3>La réponse modèle</h3>${modelAnswer()}`,
    /* Bloc affiché en bas de l'écran de résultat de ce niveau */
    outro: () => `<div class="mt-8"><h2 class="font-black text-lg">🎤 Ta réponse orale parfaite</h2><p class="text-sm text-ink/60">Lis-la à voix haute, puis écoute-la pour comparer ta prononciation.</p>${modelAnswer()}</div>`,
    ex: [
      { t: "info", title: "Le défi final 🏆", html: "<p class=\"mt-2 text-lg\">Tu es <b>Mrs Devon</b>, Managing Director chez Tesco. Tu as lu la lettre de Jenna. Construis ta réponse orale, argument par argument.</p>", en: "Imagine you are Mrs Devon. Would you hire Jenna as a trainee? Justify." },
      { t: "mcq", prompt: "Commence ta réponse orale :", options: ["Yes, I would hire Jenna as a trainee because…", "Yes, I would hire Jenna as trainee because…", "Yes, I will hiring Jenna as a trainee because…", "Yes, I would hire Jenna as an trainee because…"], speakOpts: true, explain: "<i>would + base verbale</i> et <b>a</b> trainee (article obligatoire)." },
      { t: "mcq", title: "Argument 1 · 🎓 Studies", prompt: "Quel argument parle de ses <b>études</b> ?", options: ["Her studies are specialized in trade, which corresponds to Tesco's activity.", "She is serious and dynamic.", "She works in a clothing store on Saturdays.", "She is available for an interview."], speakOpts: true, explain: "Ses études (commerce) correspondent à l'activité de Tesco." },
      { t: "mcq", prompt: "Pourquoi des études <b>specialized in trade</b> sont un atout pour Tesco ?", options: ["Because Tesco is a chain of supermarkets.", "Because Tesco is a clothing store.", "Because Tesco is a school.", "Because Tesco is in London."], speakOpts: true, explain: "Tesco = <i>a famous British chain of supermarkets</i> → le commerce (trade)." },
      { t: "mcq", title: "Argument 2 · 💪 Qualities", prompt: "Quel argument parle de ses <b>qualités</b> ?", options: ["She has a good personality for the job because she is serious and dynamic.", "She knows how to welcome customers.", "She had a summer job in a grocery store.", "Her studies are specialized in trade."], speakOpts: true, explain: "Piège : <i>knows how to welcome</i> est une <b>skill</b>, pas une qualité." },
      { t: "mcq", title: "Argument 3 · 🛒 Experience", prompt: "Quel argument parle de son <b>expérience</b> ?", options: ["She already has work experience in retail thanks to her summer job in a grocery store.", "She is serious and dynamic.", "She is looking for a work placement.", "She has the capacity to communicate."], speakOpts: true, explain: "<i>retail</i> = la vente au détail : job d'été à l'épicerie + job étudiant au magasin de vêtements." },
      { t: "mcq", prompt: "Où Jenna travaille-t-elle le samedi ?", en: "I also work in a clothing store on Saturdays.", options: ["In a clothing store", "In a grocery store", "At Tesco", "In a school"], speakOpts: true, explain: "<i>a clothing store</i> = un magasin de vêtements (son <i>student job</i>)." },
      { t: "mcq", title: "Argument 4 · 🛠️ Skills", prompt: "Quelle phrase est <b>grammaticalement correcte</b> ?", options: ["She is capable of displaying items.", "She is capable to display items.", "She is capable of display items.", "She can displaying items."], speakOpts: true, explain: "<b>be capable OF + V-ing</b>." },
      { t: "order", fr: "Elle sait déjà accueillir et conseiller les clients.", answer: "She already knows how to welcome and advise customers.", extra: ["welcoming", "can"] },
      { t: "fill", sentence: "She has the capacity to ___ clearly and adapt to clients.", options: ["communicate", "communicating", "communicates", "to communicate"], explain: "<b>have the capacity to + base verbale</b>." },
      { t: "fill", sentence: "She is able ___ work with a team.", options: ["to", "of", "how", "∅ (rien)"], explain: "<b>be able to + base verbale</b>." },
      { t: "sort", prompt: "Classe chaque argument dans la bonne catégorie.", cats: [{ id: "st", label: "Studies", emoji: "🎓" }, { id: "qu", label: "Qualities", emoji: "💪" }, { id: "ex", label: "Experience", emoji: "🛒" }, { id: "sk", label: "Skills", emoji: "🛠️" }], items: [{ t: "specialized in trade", c: "st", en: 1 }, { t: "serious and dynamic", c: "qu", en: 1 }, { t: "a summer job in a grocery store", c: "ex", en: 1 }, { t: "able to work with a team", c: "sk", en: 1 }, { t: "a student job in a clothing store", c: "ex", en: 1 }, { t: "capable of displaying items", c: "sk", en: 1 }] },
      { t: "order", fr: "Oui, j'embaucherais Jenna comme stagiaire parce qu'elle est sérieuse et dynamique.", answer: "Yes, I would hire Jenna as a trainee because she is serious and dynamic.", extra: ["will", "an"] }
    ]
  }
];

window.COURSES.anglais = {
  unit: { label: "Unité 1 · TD d'anglais", title: "Applying for a Job", sub: "Postuler à un emploi / un stage" },
  mascot: "🧑‍💼",
  matchHint: "Touche un mot anglais puis sa traduction — ou fais-le glisser dessus.",
  VOCAB_A, VOCAB_B, SKILLS, LETTER, ARGS, HIRE_INTRO, LEVELS
};
})();
