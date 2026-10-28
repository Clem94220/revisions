/* =====================================================================
   COURS : POLITIQUE ÉCONOMIQUE — Chapitre 1 · Introduction aux politiques économiques
   Source : CM1 (fiche de révision). Enregistré dans window.COURSES['politique-economique'].
   Convention : pour mcq et fill, options[0] est TOUJOURS la bonne réponse (mélangée à l'affichage).
   Pour order, `steps` = étapes dans le bon ordre (chaque étape est une carte), `extra` = intrus.
   ===================================================================== */
window.COURSES = window.COURSES || {};

(function () {

const defs = rows => `<table class="w-full text-sm mt-2"><tbody>${rows.map(r => `<tr class="border-t border-line"><td class="py-2 pr-3 w-2/5 font-bold align-top">${r[0]}</td><td class="py-2 text-ink/80">${r[1]}</td></tr>`).join("")}</tbody></table>`;
const box = (bg, html) => `<div class="rounded-2xl p-3 mt-2" style="background:${bg}">${html}</div>`;

const EXAM_QA = [
  ["Quels sont les 4 objectifs du carré magique de Kaldor ?",
   "La <b>croissance économique</b> (taux de croissance du PIB réel), le <b>plein emploi</b> (taux de chômage inversé), la <b>stabilité des prix</b> (taux d'inflation de l'IPC) et l'<b>équilibre extérieur</b> (solde commercial en % du PIB)."],
  ["Pourquoi dit-on que le carré est « magique » ?",
   "Parce qu'il est impossible d'atteindre simultanément les quatre sommets optimaux : les gouvernements font face à des <b>arbitrages structurels inévitables</b> (dilemme inflation-chômage de la courbe de Phillips, fuite par les importations lors d'une relance)."],
  ["Quel est l'angle mort du carré de Kaldor vis-à-vis des fonctions de Musgrave ?",
   "Le carré ne mesure que des moyennes macroéconomiques globales. Il ignore la <b>fonction de redistribution</b> et les inégalités : une économie peut afficher un carré optimal tout en subissant une polarisation sociale extrême."],
  ["Pourquoi mesure-t-on la croissance avec le PIB réel plutôt que le PIB nominal ?",
   "Le PIB nominal est faussé par les hausses de prix. Le <b>PIB réel</b> neutralise l'inflation en utilisant les prix constants d'une année de référence, ce qui isole l'accroissement effectif des volumes produits."]
];
const examQA = () => `<div class="space-y-2 mt-2">${EXAM_QA.map((q, i) => `
  <div class="rounded-2xl border-2 border-line p-3">
    <div class="font-black">Question ${i + 1} · ${q[0]}</div>
    <div class="text-sm text-ink/80 mt-1">${q[1]}</div>
  </div>`).join("")}</div>`;

const OBJ = { id: "obj", label: "Objectif", emoji: "🎯" }, INS = { id: "ins", label: "Instrument", emoji: "🔧" };
const CLA = { id: "cla", label: "Classiques", emoji: "⚖️" }, KEY = { id: "key", label: "Keynes", emoji: "🏗️" };
const NOM = { id: "nom", label: "PIB nominal", emoji: "💶" }, REE = { id: "ree", label: "PIB réel", emoji: "📦" };
const ALL = { id: "all", label: "Allocation", emoji: "🛣️" }, RED = { id: "red", label: "Redistribution", emoji: "🤝" }, STA = { id: "sta", label: "Stabilisation", emoji: "🌊" };
const EXP = { id: "exp", label: "Expansion", emoji: "📈" }, REC = { id: "rec", label: "Récession", emoji: "📉" };

const LEVELS = [
  {
    title: "Ch. 1 · Les fondements", sub: "Pourquoi l'État intervient-il ?", emoji: "🏛️", c: "#1CB0F6", d: "#1899D6",
    desc: "Définition de la politique économique, objectifs vs instruments, et le grand débat Classiques vs Keynes.",
    fiche: () => `
      <h3>Définition : la politique économique</h3>
      <p class="mt-1">Action coordonnée de l'<b>État</b> (Gouvernement) ou de la <b>Banque centrale</b> mobilisant des <b>instruments</b> (budget, taux d'intérêt) pour atteindre des <b>objectifs macroéconomiques</b> précis : croissance économique, plein emploi, stabilité des prix, équilibre extérieur.</p>
      <h3>Objectifs vs Instruments</h3>
      <div class="mt-2 grid sm:grid-cols-2 gap-3 text-sm">
        <div class="rounded-2xl p-3" style="background:#DDF4FF"><b>🎯 Objectifs</b> = résultats macroéconomiques <b>finaux</b> recherchés par les autorités publiques.<br><i>Faire baisser le chômage, juguler l'inflation, relancer le PIB.</i></div>
        <div class="rounded-2xl p-3" style="background:#FFF4CC"><b>🔧 Instruments</b> = <b>leviers d'action directs</b> manipulés par la puissance publique.<br><i>Budget, taux directeurs, taux de change.</i></div>
      </div>
      <h3>Les 3 grands instruments</h3>
      ${defs([
        ["Politique budgétaire", "Dépenses publiques (G) et fiscalité."],
        ["Politique monétaire", "Taux directeurs de la Banque centrale."],
        ["Politique de change", "Valeur externe de la monnaie."]
      ])}
      <h3>Le grand débat : Classiques vs Keynes</h3>
      <div class="mt-2 grid sm:grid-cols-2 gap-3 text-sm">
        <div class="rounded-2xl p-3" style="background:#F3E5FF"><b>⚖️ Classiques / néoclassiques (avant 1929)</b><br>Les marchés <b>s'autorégulent</b> spontanément grâce à la <b>flexibilité des prix</b>. L'État ne doit pas intervenir.</div>
        <div class="rounded-2xl p-3" style="background:#D7FFB8"><b>🏗️ Rupture keynésienne (J. M. Keynes, après la crise de 1929)</b><br>Une économie de marché peut s'enliser durablement dans un <b>équilibre de sous-emploi</b> (chômage de masse). L'État doit intervenir par des <b>politiques conjoncturelles</b> pour stimuler la <b>demande globale</b> et relancer l'activité.</div>
      </div>
      <h3>Les 2 cadres théoriques du cours</h3>
      ${defs([
        ["Carré magique de Kaldor", "Les 4 objectifs de la politique conjoncturelle de court terme."],
        ["3 fonctions de Musgrave", "Le rôle fondamental de l'État : Allocation, Redistribution, Stabilisation."]
      ])}`,
    ex: [
      { t: "mcq", prompt: "Qu'est-ce qu'une <b>politique économique</b> ?", options: ["L'action coordonnée de l'État ou de la Banque centrale mobilisant des instruments pour atteindre des objectifs macroéconomiques", "L'ensemble des décisions d'investissement des entreprises privées", "La libre fixation des prix par le marché, sans intervention publique", "La gestion du budget d'un ménage"], explain: "Deux acteurs (État / Banque centrale), des <b>instruments</b> (budget, taux d'intérêt) et des <b>objectifs</b> macroéconomiques." },
      { t: "match", pairs: [["Objectifs", "Résultats macroéconomiques finaux recherchés"], ["Instruments", "Leviers d'action directs de la puissance publique"], ["Politique budgétaire", "Dépenses publiques (G) et fiscalité"], ["Politique monétaire", "Taux directeurs de la Banque centrale"], ["Politique de change", "Valeur externe de la monnaie"]] },
      { t: "sort", prompt: "Chaque élément est-il un <b>objectif</b> ou un <b>instrument</b> de politique économique ?", cats: [OBJ, INS], items: [{ t: "Faire baisser le chômage", c: "obj" }, { t: "Juguler l'inflation", c: "obj" }, { t: "Relancer le PIB", c: "obj" }, { t: "Dépenses publiques (G)", c: "ins" }, { t: "Fiscalité", c: "ins" }, { t: "Taux directeurs de la Banque centrale", c: "ins" }] },
      { t: "fill", sentence: "Les taux directeurs sont l'instrument de la politique ___.", options: ["monétaire", "budgétaire", "de change", "de redistribution"], explain: "<b>Politique monétaire</b> = pilotage des taux directeurs par la Banque centrale." },
      { t: "spot", words: ["Les", "dépenses", "publiques", "et", "la", "fiscalité", "sont", "des", "objectifs", "de", "politique", "économique."], wrong: 8, fix: "Les dépenses publiques et la fiscalité sont des instruments de politique économique.", explain: "Ce sont des <b>leviers d'action</b> (politique budgétaire), donc des <b>instruments</b>. Les objectifs sont les résultats recherchés (emploi, prix…)." },
      { t: "mcq", prompt: "Selon la vision <b>classique / néoclassique</b> (avant 1929), les marchés…", options: ["s'autorégulent spontanément grâce à la flexibilité des prix", "doivent être pilotés en permanence par l'État", "restent bloqués dans un équilibre de sous-emploi", "dépendent des taux directeurs de la Banque centrale"], explain: "Pour les classiques, la <b>flexibilité des prix</b> suffit : l'État ne doit pas intervenir dans l'économie de marché." },
      { t: "mcq", prompt: "Quel événement marque la <b>rupture keynésienne</b> ?", options: ["La crise de 1929", "La publication du carré magique (1970)", "La classification de Musgrave (1959)", "La fixation de la cible d'inflation de la BCE"], explain: "Keynes rompt avec les classiques <b>après la crise de 1929</b>." },
      { t: "fill", sentence: "Pour Keynes, une économie de marché peut s'enliser durablement dans un équilibre de ___.", options: ["sous-emploi", "plein emploi", "déflation", "excédent"], explain: "<b>Équilibre de sous-emploi</b> = chômage de masse durable : le marché ne se corrige pas seul." },
      { t: "spot", words: ["Selon", "Keynes,", "les", "marchés", "s'autorégulent", "spontanément", "grâce", "à", "la", "flexibilité", "des", "prix."], wrong: 1, fix: "Selon les classiques, les marchés s'autorégulent spontanément grâce à la flexibilité des prix.", explain: "L'autorégulation est la thèse <b>classique / néoclassique</b>. Keynes défend au contraire l'intervention de l'État." },
      { t: "sort", prompt: "Range chaque idée dans le bon courant de pensée.", cats: [CLA, KEY], items: [{ t: "Autorégulation des marchés", c: "cla" }, { t: "Flexibilité des prix", c: "cla" }, { t: "L'État ne doit pas intervenir", c: "cla" }, { t: "Équilibre de sous-emploi possible", c: "key" }, { t: "Stimuler la demande globale", c: "key" }, { t: "Politiques conjoncturelles", c: "key" }] },
      { t: "order", prompt: "Reconstitue le raisonnement <b>keynésien</b>, de la cause à l'effet.", steps: ["Chômage de masse (équilibre de sous-emploi)", "L'État intervient par une politique conjoncturelle", "La demande globale est stimulée", "L'activité est relancée"], extra: ["Les prix s'ajustent seuls"], explain: "Pour Keynes, c'est l'État qui, en stimulant la <b>demande globale</b>, sort l'économie du sous-emploi." },
      { t: "mcq", prompt: "Autour de quels <b>deux cadres théoriques</b> s'articule le cours ?", options: ["Le carré magique de Kaldor et les 3 fonctions de Musgrave", "La courbe de Phillips et la norme BIT", "Le PIB nominal et le PIB réel", "L'IPC et la balance commerciale"], explain: "<b>Kaldor</b> : les 4 objectifs conjoncturels. <b>Musgrave</b> : les 3 fonctions de l'État." }
    ]
  },
  {
    title: "Ch. 1 · Le carré magique de Kaldor", sub: "Les 4 objectifs macroéconomiques", emoji: "🎯", c: "#58CC02", d: "#58A700",
    desc: "Les 4 sommets du carré (croissance, emploi, prix, extérieur), leurs indicateurs et pourquoi le carré est « magique ».",
    fiche: () => `
      <h3>Le carré magique de Nicholas Kaldor (1970)</h3>
      <p class="mt-1">Représentation graphique (radar) des <b>quatre grands objectifs conjoncturels</b> d'un pays :</p>
      ${defs([
        ["1. Croissance", "Taux de croissance du <b>PIB réel</b>."],
        ["2. Plein emploi", "Taux de chômage <b>inversé</b>."],
        ["3. Stabilité des prix", "Taux d'inflation maîtrisé (IPC)."],
        ["4. Équilibre extérieur", "Solde commercial en % du PIB."]
      ])}
      ${box("#DDF4FF", "<b>Règle de lecture :</b> plus un point est éloigné du centre, meilleure est la situation (un chômage faible est placé loin du centre, d'où le taux « inversé »).<br><b>Surface :</b> plus elle est grande et régulière, plus l'économie est performante.")}
      <h3>1. La croissance économique</h3>
      <p class="mt-1">Hausse durable de la quantité de richesses et de la valeur de la production. Indicateur : le <b>PIB</b>.</p>
      ${defs([
        ["PIB nominal", "En valeur / à prix courants : intègre la hausse des volumes <b>et</b> l'inflation."],
        ["PIB réel", "En volume / à prix constants : déflaté de la variation des prix. <b>Seul le PIB réel mesure la croissance effective.</b>"]
      ])}
      ${box("#F7F7F7", "<b>Y = C + I + G + (X − M)</b><br>C = consommation des ménages (plus de 50 % du PIB) · I = investissement (FBCF des entreprises et logements neufs des ménages) · G = dépenses publiques · X − M = solde commercial.")}
      <h3>2. Le plein emploi</h3>
      <p class="mt-1"><b>Taux de chômage (BIT)</b> = nombre de chômeurs ÷ population active × 100. La population active = actifs occupés + chômeurs (hors inactifs, retraités, étudiants).</p>
      ${box("#FFDFE0", "⚠️ <b>Piège :</b> plein emploi ≠ 0 % de chômage. Il subsiste toujours un <b>chômage frictionnel</b> naturel, incompressible et transitoire (prospection, appariement, mobilités).")}
      <h3>3. La stabilité des prix</h3>
      <p class="mt-1"><b>Inflation</b> = hausse générale, durable et auto-entretenue du niveau moyen des prix, mesurée par l'<b>IPC</b>. Cible de la <b>BCE</b> : environ <b>2 % par an</b> à moyen terme (et non 0 %, pour prévenir la déflation).</p>
      ${defs([
        ["Inflation excessive", "Destruction du pouvoir d'achat, érosion de l'épargne non indexée, spirale prix-salaires."],
        ["Déflation", "Anticipation de prix plus bas → report des achats et investissements → effondrement de la demande globale → chute de la production (Y ↓) → explosion du chômage."]
      ])}
      <h3>4. L'équilibre extérieur</h3>
      <p class="mt-1">Mesuré par la balance commerciale (X − M) ou le solde des transactions courantes en % du PIB.</p>
      ${defs([
        ["Déficit excessif (X < M)", "Le pays consomme plus qu'il ne produit et s'endette auprès de l'extérieur."],
        ["Excédent excessif (X > M)", "La demande intérieure (salaires, consommation) est trop bridée au profit de la compétitivité."]
      ])}
      <h3>Pourquoi « magique » ?</h3>
      <p class="mt-1">Il est impossible d'atteindre <b>simultanément</b> les 4 objectifs :</p>
      ${defs([
        ["Courbe de Phillips", "Une relance vigoureuse réduit le chômage mais alimente l'inflation."],
        ["Fuite par les importations", "Les revenus distribués se reportent en partie sur des produits étrangers (M ↑) → dégradation du solde extérieur et effet affaibli sur l'emploi national."]
      ])}`,
    ex: [
      { t: "match", pairs: [["Croissance", "Taux de croissance du PIB réel"], ["Plein emploi", "Taux de chômage inversé"], ["Stabilité des prix", "Taux d'inflation (IPC)"], ["Équilibre extérieur", "Solde commercial en % du PIB"], ["Nicholas Kaldor", "Carré magique (1970)"]] },
      { t: "mcq", prompt: "Sur le carré de Kaldor, un point <b>éloigné du centre</b> signifie…", options: ["Une meilleure situation", "Une situation dégradée", "Une inflation trop forte", "Un chômage élevé"], explain: "Plus on s'éloigne du centre, mieux c'est. C'est pour cela que le chômage est représenté <b>inversé</b> : un chômage faible est placé loin du centre." },
      { t: "fill", sentence: "Seul le PIB ___ mesure la croissance effective.", options: ["réel", "nominal", "courant", "commercial"], explain: "Le <b>PIB réel</b> (à prix constants) neutralise l'inflation et isole la hausse des volumes produits." },
      { t: "sort", prompt: "Ces caractéristiques décrivent-elles le <b>PIB nominal</b> ou le <b>PIB réel</b> ?", cats: [NOM, REE], items: [{ t: "En valeur", c: "nom" }, { t: "À prix courants", c: "nom" }, { t: "Intègre l'inflation", c: "nom" }, { t: "En volume", c: "ree" }, { t: "À prix constants", c: "ree" }, { t: "Déflaté de la variation des prix", c: "ree" }] },
      { t: "mcq", prompt: "Le <b>taux de chômage</b> (norme BIT) se calcule comme…", options: ["Nombre de chômeurs ÷ population active × 100", "Nombre de chômeurs ÷ population totale × 100", "Nombre de chômeurs ÷ nombre d'inactifs × 100", "Population active ÷ nombre de chômeurs × 100"], explain: "Le dénominateur est la <b>population active</b> (actifs occupés + chômeurs), sans les inactifs, retraités et étudiants." },
      { t: "spot", words: ["Le", "plein", "emploi", "correspond", "à", "un", "taux", "de", "chômage", "de", "0 %."], wrong: 10, fix: "Le plein emploi ne correspond jamais à un taux de chômage de 0 % : il subsiste un chômage frictionnel.", explain: "Piège d'examen : il reste toujours un <b>chômage frictionnel</b> naturel, incompressible et transitoire." },
      { t: "fill", sentence: "La BCE vise une inflation d'environ ___ par an à moyen terme.", options: ["2 %", "0 %", "5 %", "10 %"], explain: "Environ <b>2 %</b>, et non 0 %, afin de prévenir le risque de <b>déflation</b>." },
      { t: "order", prompt: "Reconstitue la <b>spirale déflationniste</b>, de la cause à l'effet.", steps: ["Les agents anticipent des prix plus bas", "Ils reportent achats et investissements", "La demande globale s'effondre", "La production chute (Y ↓)", "Le chômage explose"], extra: ["Le pouvoir d'achat est détruit"], explain: "« Le pouvoir d'achat est détruit » est un effet de l'<b>inflation excessive</b>, pas de la déflation." },
      { t: "mcq", prompt: "Un <b>déficit extérieur excessif</b> (X < M) signifie que le pays…", options: ["consomme plus qu'il ne produit et s'endette auprès de l'extérieur", "bride sa demande intérieure au profit de la compétitivité", "a atteint l'équilibre extérieur", "est en déflation"], explain: "Déficit (X < M) → dette extérieure croissante. L'<b>excédent</b> excessif, lui, signale une demande intérieure trop bridée." },
      { t: "mcq", prompt: "Pourquoi dit-on que le carré de Kaldor est <b>« magique »</b> ?", options: ["Parce qu'il est impossible d'atteindre simultanément les quatre objectifs", "Parce que les quatre objectifs se renforcent toujours mutuellement", "Parce qu'il mesure aussi les inégalités", "Parce qu'il garantit le plein emploi"], explain: "Les gouvernements font face à des <b>arbitrages inévitables</b> entre les 4 sommets." },
      { t: "fill", sentence: "Selon la courbe de ___, une relance vigoureuse réduit le chômage mais alimente l'inflation.", options: ["Phillips", "Kaldor", "Musgrave", "Keynes"], explain: "L'arbitrage <b>inflation vs chômage</b> est illustré par la courbe de <b>Phillips</b>." },
      { t: "order", prompt: "Reconstitue la <b>fuite par les importations</b> lors d'une relance.", steps: ["Distribution de revenus supplémentaires", "La demande est stimulée", "Les importations augmentent (M ↑)", "Le solde extérieur (X − M) se dégrade"], extra: ["Les exportations augmentent (X ↑)"], explain: "Une part de la demande se reporte sur des produits étrangers : le solde extérieur se dégrade et l'effet sur l'emploi national s'affaiblit." }
    ]
  },
  {
    title: "Ch. 1 · Musgrave & boîte à outils", sub: "Les 3 fonctions de l'État · Calculs", emoji: "⚖️", c: "#CE82FF", d: "#A568CC",
    desc: "Allocation, Redistribution, Stabilisation, l'angle mort de Kaldor, et le calcul du taux de croissance.",
    fiche: () => `
      <h3>Les 3 fonctions de l'État selon Richard Musgrave (1959)</h3>
      ${defs([
        ["1. Allocation", "Corriger les <b>défaillances de marché</b> : produire ou financer ce que le privé n'assure pas de façon optimale.<br>– <b>Biens publics purs</b> : non-rivaux et non-excluables (éclairage public, défense, justice).<br>– <b>Externalités</b> : pollutions (taxe carbone), R&amp;D (subventions).<br><i>Outils : investissements publics, infrastructures de transport, régulation environnementale.</i><br>↔ Kaldor : <b>absente du carré</b>, mais socle institutionnel indispensable."],
        ["2. Redistribution", "Modifier la <b>répartition primaire</b> des revenus et des patrimoines pour corriger les inégalités jugées excessives et préserver la cohésion sociale.<br><i>Outils : impôt progressif, cotisations sociales, allocations familiales, RSA, retraites.</i><br>↔ Kaldor : <b>l'angle mort</b> ! Un carré parfait peut cacher misère sociale et inégalités extrêmes."],
        ["3. Stabilisation", "<b>Lisser les cycles</b> économiques de court terme : amortir les chocs récessifs et juguler les surchauffes inflationnistes.<br><i>Outils : politique budgétaire contracyclique (plans de relance), politique monétaire (pilotage des taux).</i><br>↔ Kaldor : <b>cœur direct du carré</b>."]
      ])}
      <h3>Formule du taux de croissance</h3>
      ${box("#F7F7F7", "<b>g = (VA − VD) ÷ VD × 100</b><br>VD = valeur de départ (Y<sub>t−1</sub>) · VA = valeur d'arrivée (Y<sub>t</sub>)")}
      ${box("#FFDFE0", "🚨 <b>Règle d'or :</b> le dénominateur est <b>TOUJOURS la valeur de départ</b>. Ne jamais diviser par la valeur d'arrivée, ni par la moyenne des deux périodes.")}
      <h3>Lecture graphique</h3>
      ${defs([
        ["Pente positive", "Dérivée première > 0 → phase d'<b>expansion</b>."],
        ["Pente négative", "Dérivée première < 0 → phase de <b>récession</b>."],
        ["Raideur de la pente", "Plus le segment est pentu, plus la variation est violente."]
      ])}
      <h3>Les 4 questions types d'examen</h3>
      ${examQA()}`,
    outro: () => `<div class="mt-8"><h2 class="font-black text-lg">💡 Les 4 questions types d'examen</h2><p class="text-sm text-ink/60">Essaie d'y répondre de tête avant de relire la réponse.</p>${examQA()}</div>`,
    ex: [
      { t: "match", pairs: [["Allocation", "Corriger les défaillances de marché"], ["Redistribution", "Corriger les inégalités jugées excessives"], ["Stabilisation", "Lisser les cycles économiques de court terme"], ["Bien public pur", "Non-rival et non-excluable"], ["Richard Musgrave", "Les 3 fonctions de l'État (1959)"]] },
      { t: "sort", prompt: "À quelle <b>fonction de Musgrave</b> rattacher chaque outil ?", cats: [ALL, RED, STA], items: [{ t: "Éclairage public, défense, justice", c: "all" }, { t: "Taxe carbone", c: "all" }, { t: "Impôt progressif", c: "red" }, { t: "RSA et allocations familiales", c: "red" }, { t: "Plan de relance contracyclique", c: "sta" }, { t: "Pilotage des taux directeurs", c: "sta" }] },
      { t: "fill", sentence: "La taxe carbone relève de la fonction d'___, car elle corrige une externalité.", options: ["allocation", "redistribution", "stabilisation", "équilibre extérieur"], explain: "Corriger les <b>externalités</b> (pollutions) est une mission de la fonction d'<b>allocation</b>." },
      { t: "mcq", prompt: "La fonction de <b>redistribution</b> modifie…", options: ["la répartition primaire des revenus et des patrimoines", "les taux directeurs de la Banque centrale", "la valeur externe de la monnaie", "le rythme des cycles économiques de court terme"], explain: "Objectif : corriger les inégalités jugées excessives et préserver la <b>cohésion sociale</b>." },
      { t: "mcq", prompt: "Quelle fonction de Musgrave correspond au <b>cœur du carré de Kaldor</b> ?", options: ["La stabilisation", "L'allocation", "La redistribution", "Aucune des trois"], explain: "La <b>stabilisation</b> correspond exactement aux quatre objectifs conjoncturels du carré." },
      { t: "mcq", prompt: "Quel est l'<b>angle mort</b> du carré de Kaldor ?", options: ["La redistribution et les inégalités", "La croissance du PIB réel", "La stabilité des prix", "Le solde commercial"], explain: "Le carré ne mesure que des <b>moyennes</b> macroéconomiques : il ignore les inégalités." },
      { t: "spot", words: ["Un", "carré", "de", "Kaldor", "parfait", "garantit", "l'absence", "d'inégalités", "sociales."], wrong: 5, fix: "Un carré de Kaldor parfait n'empêche pas des inégalités sociales extrêmes.", explain: "Un pays peut afficher un carré parfait tout en subissant une <b>polarisation sociale extrême</b>." },
      { t: "mcq", prompt: "Le PIB passe de <b>200</b> à <b>210</b> milliards d'euros. Quel est le taux de croissance ?", options: ["5 %", "4,76 %", "4,88 %", "10 %"], explain: "(210 − 200) ÷ <b>200</b> × 100 = <b>5 %</b>. 4,76 % = erreur (division par la valeur d'arrivée) ; 4,88 % = erreur (division par la moyenne)." },
      { t: "fill", sentence: "Pour calculer un taux de croissance, on divise toujours par la valeur de ___.", options: ["départ", "arrivée", "la moyenne", "l'année suivante"], explain: "Règle d'or : <b>dénominateur = valeur de départ</b> (Y<sub>t−1</sub>)." },
      { t: "order", prompt: "Remets dans l'ordre les étapes du <b>calcul d'un taux de croissance</b>.", steps: ["Repérer VD (départ) et VA (arrivée)", "Calculer l'écart VA − VD", "Diviser par VD", "Multiplier par 100"], extra: ["Diviser par VA"], explain: "g = (VA − VD) ÷ VD × 100. Diviser par VA est une erreur éliminatoire." },
      { t: "sort", prompt: "Lecture graphique : <b>expansion</b> ou <b>récession</b> ?", cats: [EXP, REC], items: [{ t: "Pente positive", c: "exp" }, { t: "Dérivée première > 0", c: "exp" }, { t: "Pente négative", c: "rec" }, { t: "Dérivée première < 0", c: "rec" }] },
      { t: "spot", words: ["Pour", "mesurer", "la", "croissance", "effective,", "on", "utilise", "le", "PIB", "nominal."], wrong: 9, fix: "Pour mesurer la croissance effective, on utilise le PIB réel.", explain: "Le PIB nominal est faussé par l'inflation ; le <b>PIB réel</b> utilise les prix constants d'une année de référence." }
    ]
  }
];

window.COURSES["politique-economique"] = {
  id: "politique-economique",
  title: "Politique économique",
  icon: "📈",
  color: "#1CB0F6",
  unit: { label: "CM 1 à 6 · Politique économique", title: "Du carré magique à Mundell-Fleming", sub: "Kaldor, Musgrave, multiplicateur, monnaie, IS-LM et économie ouverte" },
  mascot: "🧑‍🏫",
  matchHint: "Touche un concept à gauche puis sa définition — ou fais-le glisser dessus.",
  levels: LEVELS
};
})();

/* =====================================================================
   CHAPITRES 2 & 3 — CM2 (demande globale) et CM3 (multiplicateur, dette)
   Ajout des niveaux 4 à 7 au tableau existant.
   ===================================================================== */
(function () {

const defs = rows => `<table class="w-full text-sm mt-2"><tbody>${rows.map(r => `<tr class="border-t border-line"><td class="py-2 pr-3 w-2/5 font-bold align-top">${r[0]}</td><td class="py-2 text-ink/80">${r[1]}</td></tr>`).join("")}</tbody></table>`;
const box = (bg, html) => `<div class="rounded-2xl p-3 mt-2" style="background:${bg}">${html}</div>`;
const ideas = list => box("#E5F8FF", `<b>🧭 Les 5 idées-forces</b><ol class="list-decimal ml-5 mt-1 space-y-1">${list.map(i => `<li>${i}</li>`).join("")}</ol>`);
const trap = html => box("#FFDFE0", "⚠️ " + html);

const PMC = { id: "pmc", label: "PMC", emoji: "📐" }, PMOY = { id: "pmoy", label: "PMoyC", emoji: "➗" };
const CLA = { id: "cla", label: "Classiques", emoji: "⚖️" }, KEY = { id: "key", label: "Keynes", emoji: "🏗️" };
const USA = { id: "us", label: "États-Unis", emoji: "🇺🇸" }, GER = { id: "de", label: "Allemagne", emoji: "🇩🇪" };
const DG = { id: "g", label: "Hausse de G", emoji: "🏗️" }, DT = { id: "t", label: "Baisse d'impôts", emoji: "🧾" };
const DEF = { id: "def", label: "Déficit (flux)", emoji: "🔄" }, DET = { id: "det", label: "Dette (stock)", emoji: "🧱" };
const JP = { id: "jp", label: "Japon", emoji: "🇯🇵" }, AR = { id: "ar", label: "Argentine 2001", emoji: "🇦🇷" };

const CM3_QA = [
  ["Pourquoi le multiplicateur fiscal est-il inférieur au multiplicateur des dépenses ?", "G entre à 100 % dans la demande globale ; une baisse d'impôt n'augmente que le revenu disponible, dont les ménages épargnent la fraction 1 − c dès le premier round. À Kelvinia : k = 5 contre k<sub>T</sub> = −4 (+500 contre +400 pour 100)."],
  ["Énoncez le théorème du budget équilibré.", "Si ΔG = ΔT, l'effet net sur le revenu est égal à ΔG : k<sub>équilibré</sub> = 1 (Haavelmo, 1945). Ex. : ΔG = ΔT = +25 → 5 × 25 − 4 × 25 = +25."],
  ["Pourquoi le multiplicateur réel est-il inférieur au multiplicateur théorique ?", "À cause des fuites (seau percé) : épargne (1 − c), impôt proportionnel (t) et surtout importations (m), qui stimulent l'économie étrangère. À Kelvinia : k' = 1 / 0,46 ≈ 2,17 contre k = 5."],
  ["Le Japon a-t-il « failli » avec une dette de 250 % du PIB ?", "Non : ce qui compte est r vs g, et au Japon r est très bas voire négatif. La dette est en monnaie nationale et détenue par des créanciers domestiques. Les critères de Maastricht sont des seuils conventionnels."],
  ["Expliquez le paradoxe de la dette grecque (130 % → 180 %).", "L'austérité (ΔG < 0) fait jouer le multiplicateur à l'envers : le PIB s'effondre de 25 %. Le dénominateur (PIB) chute plus vite que le numérateur (dette) : le ratio s'aggrave."]
];
const qa = list => `<div class="space-y-2 mt-2">${list.map((q, i) => `
  <div class="rounded-2xl border-2 border-line p-3">
    <div class="font-black">Question ${i + 1} · ${q[0]}</div>
    <div class="text-sm text-ink/80 mt-1">${q[1]}</div>
  </div>`).join("")}</div>`;

window.COURSES["politique-economique"].levels.push(
  /* ---------------- NIVEAU 4 · CM2 ---------------- */
  {
    title: "Ch. 2 · La demande globale", sub: "Consommation, épargne et équilibre Y = D", emoji: "🛒", c: "#FF9600", d: "#CC7800",
    desc: "Le modèle de Kelvinia : fonction de consommation keynésienne, PMC vs PMoyC, épargne et revenu d'équilibre Y* = 500.",
    fiche: () => `
      ${ideas([
        "La <b>demande globale</b> détermine le niveau effectif de production et de revenu (Y).",
        "<b>Loi psychologique fondamentale</b> (Keynes, 1936) : quand le revenu augmente, la consommation augmente, mais d'un montant moindre.",
        "<b>PMC ≠ PMoyC</b> : la PMC est constante (0,8), la PMoyC décroît avec le revenu.",
        "<b>PMC + PMS = 1</b> : chaque euro est soit consommé, soit épargné.",
        "L'équilibre se trouve par <b>Y = D</b> ou par <b>S = I</b> : à Kelvinia, Y* = 500."
      ])}
      <h3>Les hypothèses de Kelvinia</h3>
      ${defs([
        ["Absence d'État", "G = 0 et T = 0, donc le revenu disponible Yd = Y."],
        ["Économie fermée", "X = 0 et M = 0, donc X − M = 0."],
        ["Prix fixes à court terme", "L'ajustement se fait par les <b>quantités produites</b>, pas par les prix."]
      ])}
      <p class="mt-2">L'équation d'équilibre se réduit à <b>Y = C + I</b>.</p>
      <h3>La fonction de consommation : C = c0 + c1·Y</h3>
      ${defs([
        ["c0 = 20", "<b>Consommation autonome</b> (incompressible) : consommée même avec un revenu nul, financée par désépargne ou endettement."],
        ["c1 = 0,8", "<b>Propension marginale à consommer (PMC)</b> : part de chaque euro supplémentaire consommée. Pente de la droite, 0 < c1 < 1."]
      ])}
      ${box("#F7F7F7", "Kelvinia : <b>C(Y) = 20 + 0,8Y</b>")}
      ${trap("<b>Piège PMC vs PMoyC</b><br>PMC = ΔC / ΔY = c1 = 0,8 (constante).<br>PMoyC = C / Y = c0/Y + c1 (décroissante avec Y).<br>Pour Y = 500 : C = 20 + 0,8 × 500 = 420, donc PMoyC = 420 / 500 = <b>0,84 ≠ 0,8</b>.")}
      <h3>L'épargne, miroir de la consommation</h3>
      <p class="mt-1">Y = C + S donc S = Y − C = −c0 + (1 − c1)Y.</p>
      ${defs([
        ["S(Y) = −20 + 0,2Y", "Fonction d'épargne de Kelvinia."],
        ["−c0 = −20", "<b>Désépargne</b> quand le revenu est nul (prélèvement sur le patrimoine)."],
        ["1 − c1 = 0,2", "<b>Propension marginale à épargner (PMS)</b>."]
      ])}
      ${box("#D7FFB8", "🏆 <b>Règle d'or :</b> PMC + PMS = 1 (0,8 + 0,2 = 1).")}
      <h3>Investissement et demande globale</h3>
      ${defs([
        ["I = 80", "Investissement <b>autonome</b>, exogène et constant (il dépendra du taux d'intérêt plus tard, avec IS-LM)."],
        ["D(Y) = 100 + 0,8Y", "D = C + I = (20 + 0,8Y) + 80. Même pente que C (0,8), translation de +80, ordonnée à l'origine = dépense autonome c0 + I = 100."]
      ])}
      <h3>L'équilibre emploi-ressources Y*</h3>
      ${defs([
        ["Méthode 1 : Y = D", "Y = 100 + 0,8Y → 0,2Y = 100 → <b>Y* = 500</b>."],
        ["Méthode 2 : S = I", "−20 + 0,2Y = 80 → 0,2Y = 100 → <b>Y* = 500</b>."],
        ["Croisement keynésien", "Intersection de la bissectrice à 45° (Y = D) et de la droite D(Y) : (Y* = 500 ; D* = 500)."]
      ])}
      ${box("#F7F7F7", "Formule générale : <b>Y* = (c0 + I) / (1 − c1)</b> = 100 / 0,2 = 500")}`,
    ex: [
      { t: "mcq", prompt: "Quelles <b>hypothèses simplificatrices</b> pose le modèle de Kelvinia au CM2 ?", options: ["Pas d'État, économie fermée, prix fixes à court terme", "Présence de l'État, économie ouverte, prix flexibles", "Pas d'État, économie ouverte, prix flexibles", "Présence de l'État, économie fermée, prix fixes"], explain: "G = 0 et T = 0 (donc Yd = Y), X = M = 0 (économie fermée), et prix fixes : l'ajustement se fait par les <b>quantités</b>. L'équilibre se réduit alors à <b>Y = C + I</b>." },
      { t: "match", pairs: [["c0 (= 20)", "Consommation autonome, même avec un revenu nul"], ["c1 (= 0,8)", "Propension marginale à consommer (PMC)"], ["1 − c1 (= 0,2)", "Propension marginale à épargner (PMS)"], ["I (= 80)", "Investissement autonome, exogène"], ["Loi psychologique fondamentale", "Keynes, 1936"]] },
      { t: "fill", sentence: "Quand le revenu augmente, la consommation augmente, mais d'un montant ___ que l'accroissement du revenu.", options: ["moindre", "égal", "supérieur", "double"], explain: "C'est la <b>loi psychologique fondamentale</b> de Keynes (1936) : une fraction du surplus de revenu est systématiquement <b>épargnée</b>, d'où 0 < c1 < 1." },
      { t: "mcq", prompt: "À Kelvinia (C = 20 + 0,8Y), pour <b>Y = 500</b>, que vaut la <b>propension moyenne à consommer</b> (PMoyC) ?", options: ["0,84", "0,8", "0,2", "1"], explain: "C = 20 + 0,8 × 500 = 420, donc PMoyC = C / Y = 420 / 500 = <b>0,84</b>. Piège : ce n'est pas la PMC (0,8), qui est la pente de la droite." },
      { t: "sort", prompt: "Ces propriétés concernent-elles la <b>PMC</b> ou la <b>PMoyC</b> ?", cats: [PMC, PMOY], items: [{ t: "ΔC / ΔY", c: "pmc" }, { t: "Pente de la droite de consommation", c: "pmc" }, { t: "Constante dans le modèle linéaire", c: "pmc" }, { t: "C / Y", c: "pmoy" }, { t: "c0/Y + c1", c: "pmoy" }, { t: "Décroît quand le revenu augmente", c: "pmoy" }] },
      { t: "spot", words: ["La", "PMoyC", "reste", "constante", "quand", "le", "revenu", "augmente."], wrong: 3, fix: "La PMoyC est décroissante quand le revenu augmente.", explain: "PMoyC = c0/Y + c1 : comme c0/Y diminue quand Y augmente, la PMoyC est <b>strictement décroissante</b>. C'est la <b>PMC</b> qui est constante (0,8)." },
      { t: "fill", sentence: "Règle d'or d'examen : PMC + PMS = ___.", options: ["1", "0", "0,8", "100"], explain: "Chaque euro de revenu est soit consommé, soit épargné : 0,8 + 0,2 = <b>1</b>." },
      { t: "mcq", prompt: "Quelle est la <b>fonction d'épargne</b> de Kelvinia ?", options: ["S = −20 + 0,2Y", "S = 20 + 0,8Y", "S = −20 + 0,8Y", "S = 20 − 0,2Y"], explain: "S = Y − C = Y − (20 + 0,8Y) = <b>−20 + 0,2Y</b>. −20 = désépargne à revenu nul ; 0,2 = PMS." },
      { t: "mcq", prompt: "La demande globale s'écrit D(Y) = 100 + 0,8Y. Que représente l'<b>ordonnée à l'origine 100</b> ?", options: ["La dépense autonome totale c0 + I", "La consommation autonome seule", "L'investissement seul", "Le revenu d'équilibre"], explain: "D = C + I = (20 + 0,8Y) + 80 : l'ordonnée à l'origine vaut <b>c0 + I = 20 + 80 = 100</b>. La droite D a la même pente que C (0,8), décalée de +80." },
      { t: "order", prompt: "Remets dans l'ordre la résolution de l'équilibre par la <b>méthode Y = D</b>.", steps: ["Y = 100 + 0,8Y", "Y − 0,8Y = 100", "0,2Y = 100", "Y* = 100 / 0,2 = 500"], extra: ["Y* = 100 / 0,8 = 125"], explain: "On divise par <b>1 − c1 = 0,2</b> (la PMS), pas par la PMC. Formule générale : Y* = (c0 + I) / (1 − c1)." },
      { t: "mcq", prompt: "La <b>méthode 2</b> de calcul de l'équilibre repose sur l'égalité…", options: ["Épargne = Investissement (S = I)", "Consommation = Épargne (C = S)", "PMC = PMS", "Production = Consommation (Y = C)"], explain: "Y = C + I (marché des biens) et Y = C + S (affectation du revenu), donc <b>S = I</b> : −20 + 0,2Y = 80 → Y* = 500. Les deux méthodes donnent le même résultat." },
      { t: "spot", words: ["La", "droite", "de", "demande", "globale", "a", "une", "pente", "de", "0,2."], wrong: 9, fix: "La droite de demande globale a une pente de 0,8 (même pente que la consommation).", explain: "D(Y) = 100 + 0,8Y : même pente que la fonction de consommation (<b>c1 = 0,8</b>). 0,2 est la PMS, pente de la fonction d'épargne." }
    ]
  },

  /* ---------------- NIVEAU 5 · CM2 ---------------- */
  {
    title: "Ch. 2 · Stocks & sous-emploi", sub: "Ajustement par les quantités · cas réels", emoji: "📦", c: "#FF4B4B", d: "#EA2B2B",
    desc: "Pourquoi Y* = 500 est stable, l'équilibre de sous-emploi, et les cas réels : bons d'achat, chèques Covid, Kurzarbeit.",
    fiche: () => `
      ${ideas([
        "L'équilibre est stable grâce aux <b>variations involontaires de stocks</b>.",
        "Chez Keynes, l'ajustement se fait par les <b>quantités</b> produites, pas par les prix (contrairement aux classiques).",
        "Rien ne garantit que Y* corresponde au plein emploi : <b>équilibre de sous-emploi</b>.",
        "La PMC n'est pas automatique : bons d'achat japonais et chèques de relance américains ont été largement épargnés.",
        "Face à la surproduction de 2008, les États-Unis ont licencié, l'Allemagne a utilisé le <b>Kurzarbeit</b>."
      ])}
      <h3>L'ajustement par les stocks</h3>
      ${defs([
        ["Surproduction (Y = 600 > D)", "Stocks invendus s'accumulent → les entreprises réduisent la production → Y diminue vers Y* = 500."],
        ["Sous-production (Y = 400 < D)", "Épuisement imprévu des stocks → les entreprises augmentent la production → Y augmente vers Y* = 500."]
      ])}
      ${box("#F3E5FF", "<b>Nature de l'ajustement keynésien :</b> chez les classiques, l'équilibre se rétablit par la <b>variation des prix</b>. Chez Keynes (court terme), il se fait par les <b>quantités produites</b>, via le signal des variations de stocks.")}
      <h3>L'équilibre de sous-emploi</h3>
      <p class="mt-1">Rien ne garantit que Y* = 500 corresponde au plein emploi. Si la demande globale est insuffisante, l'économie s'installe durablement dans un <b>équilibre de sous-emploi</b>, avec un <b>chômage involontaire</b> persistant (Grande Dépression de 1929).</p>
      <h3>Exemples réels du cours</h3>
      ${defs([
        ["Japon (1999)", "Bons d'achat non épargnables : PMC réelle de seulement <b>0,1 à 0,3</b>. Les ménages ont payé leurs dépenses courantes avec les bons et épargné le numéraire (effet de substitution)."],
        ["États-Unis (2008 & 2020)", "Chèques de relance (<i>Stimulus Checks</i>) : PMC effective d'environ <b>1/3</b>, le reste allant à l'épargne de précaution ou au désendettement."],
        ["Choc d'épargne Covid (2020)", "Taux d'épargne : USA de <b>7 % à 33,7 %</b>, France de <b>15 % à 27,4 %</b>. Puis rattrapage : <i>revenge spending</i>."],
        ["Plan Marshall (1948)", "13 milliards de dollars pour reconstruire l'appareil productif européen."],
        ["Plan chinois (2008-2009)", "4 000 milliards de yuans d'infrastructures pour maintenir la croissance au-delà de 9 %."],
        ["Crise de 2008 : USA", "Effondrement des achats automobiles → stocks à <b>120 jours de vente</b> → fermetures d'usines et licenciements massifs."],
        ["Crise de 2008 : Allemagne", "Même choc, amorti par le <b>Kurzarbeit</b> (chômage partiel financé par l'État) : contrats et pouvoir d'achat maintenus."]
      ])}`,
    ex: [
      { t: "order", prompt: "Y = 600 alors que D = 500 : reconstitue l'<b>ajustement par les stocks</b>.", steps: ["Production supérieure à la demande (Y = 600)", "Accumulation de stocks invendus", "Les entreprises réduisent la production", "Y diminue vers Y* = 500"], extra: ["Les prix baissent"], explain: "Dans le modèle keynésien de court terme, les prix sont fixes : c'est la <b>variation involontaire des stocks</b> qui signale aux entreprises qu'elles doivent produire moins." },
      { t: "order", prompt: "Y = 400 alors que D = 500 : reconstitue l'<b>ajustement par les stocks</b>.", steps: ["Demande supérieure à la production (Y = 400)", "Épuisement imprévu des stocks", "Les entreprises augmentent la production", "Y augmente vers Y* = 500"], extra: ["Les prix augmentent"], explain: "Situation de sous-production : les stocks fondent, les entreprises augmentent les <b>quantités</b> produites jusqu'à Y* = 500. L'équilibre est donc <b>stable</b>." },
      { t: "mcq", prompt: "Dans le modèle keynésien de court terme, l'équilibre se rétablit par…", options: ["les quantités produites, via les variations de stocks", "la variation des prix", "les décisions de la Banque centrale", "la hausse des salaires"], explain: "Contrairement au modèle classique (ajustement par les <b>prix</b>), Keynes retient un ajustement par les <b>quantités</b>, dont le signal est la variation des stocks." },
      { t: "sort", prompt: "Quel mode d'ajustement correspond à quel courant ?", cats: [CLA, KEY], items: [{ t: "Ajustement par les prix", c: "cla" }, { t: "Prix flexibles", c: "cla" }, { t: "Marchés qui s'autorégulent", c: "cla" }, { t: "Ajustement par les quantités", c: "key" }, { t: "Signal : variation des stocks", c: "key" }, { t: "Prix fixes à court terme", c: "key" }] },
      { t: "fill", sentence: "Si la demande globale est insuffisante, l'équilibre de sous-emploi s'accompagne d'un chômage ___ persistant.", options: ["involontaire", "frictionnel", "volontaire", "nul"], explain: "L'<b>équilibre de sous-emploi</b> est marqué par un <b>chômage involontaire</b> persistant, comme lors de la Grande Dépression de 1929 : les chômeurs voudraient travailler mais la demande manque." },
      { t: "spot", words: ["L'équilibre", "Y*", "=", "500", "correspond", "forcément", "au", "plein", "emploi."], wrong: 5, fix: "L'équilibre Y* = 500 ne correspond pas forcément au plein emploi.", explain: "Rien ne garantit que le niveau de production d'équilibre corresponde au plein emploi des facteurs : c'est tout l'enjeu de l'<b>équilibre de sous-emploi</b> keynésien." },
      { t: "mcq", prompt: "Japon, 1999 : l'État distribue des <b>bons d'achat non épargnables</b>. Quelle PMC réelle a été mesurée ?", options: ["Entre 0,1 et 0,3", "Environ 0,8", "Exactement 1", "Supérieure à 1"], explain: "Les ménages ont réglé leurs achats de première nécessité avec les bons et ont <b>épargné le numéraire</b> correspondant (effet de substitution) : la PMC n'est pas automatique." },
      { t: "fill", sentence: "Aux États-Unis (2008 et 2020), la PMC effective des chèques de relance n'a été que d'environ ___.", options: ["1/3", "2/3", "0,8", "1"], explain: "Environ <b>1/3 (0,33)</b> : les deux tiers restants sont allés à l'<b>épargne de précaution</b> ou au <b>remboursement de dettes</b>." },
      { t: "match", pairs: [["Japon (1999)", "Bons d'achat : PMC de 0,1 à 0,3"], ["Stimulus Checks (USA)", "PMC d'environ 1/3"], ["Plan Marshall (1948)", "13 milliards de dollars pour reconstruire l'Europe"], ["Plan chinois (2008-2009)", "4 000 milliards de yuans d'infrastructures"], ["Kurzarbeit (Allemagne)", "Chômage partiel financé par l'État"]] },
      { t: "mcq", prompt: "Au printemps 2020 (Covid), le taux d'épargne des ménages <b>américains</b> est passé de…", options: ["7 % à 33,7 %", "15 % à 27,4 %", "33,7 % à 7 %", "7 % à 15 %"], explain: "USA : <b>7 % → 33,7 %</b> ; France : 15 % → 27,4 %. Les confinements ont bloqué la consommation et fait flamber l'épargne de précaution." },
      { t: "sort", prompt: "Crise de 2008 (surproduction Y > D) : quel pays a réagi comment ?", cats: [USA, GER], items: [{ t: "Stocks à 120 jours de vente", c: "us" }, { t: "Fermetures brutales d'usines", c: "us" }, { t: "Licenciements massifs", c: "us" }, { t: "Recours massif au Kurzarbeit", c: "de" }, { t: "Contrats de travail maintenus", c: "de" }, { t: "Pouvoir d'achat des salariés préservé", c: "de" }] },
      { t: "mcq", prompt: "Comment appelle-t-on la phase de <b>rattrapage de consommation</b> qui a suivi le choc d'épargne Covid ?", options: ["Le revenge spending", "Le Kurzarbeit", "Le tournant de la rigueur", "L'effet boule de neige"], explain: "Après la flambée de l'épargne forcée de 2020, les ménages ont rattrapé leurs achats : c'est le <b>revenge spending</b>." }
    ]
  },

  /* ---------------- NIVEAU 6 · CM3 ---------------- */
  {
    title: "Ch. 3 · Le multiplicateur keynésien", sub: "Dépenses vs impôts, Haavelmo, fuites", emoji: "🔁", c: "#00CD9C", d: "#00A47C",
    desc: "k = 1/(1 − c), multiplicateur fiscal, théorème du budget équilibré et seau percé (t et m).",
    fiche: () => `
      ${ideas([
        "<b>Effet multiplicateur</b> : une dépense publique ΔG se propage en cascade et crée un revenu ΔY bien supérieur à l'injection.",
        "<b>Multiplicateur fiscal plus faible</b> : une baisse d'impôt stimule moins qu'une hausse de dépenses, car les ménages en épargnent une partie.",
        "<b>Budget équilibré</b> (Haavelmo) : ΔG financé par ΔT identique → multiplicateur égal à 1.",
        "<b>Les fuites</b> (impôt t, importations m) réduisent fortement l'effet réel : le seau percé.",
        "<b>Soutenabilité (r vs g)</b> : c'est l'écart r − g, pas le niveau brut de dette, qui compte (niveau suivant)."
      ])}
      <h3>L'effet de cascade</h3>
      <p class="mt-1">ΔG devient un revenu (round 1) → les agents en consomment c et épargnent 1 − c → cette consommation devient le revenu d'autres agents (round 2) → et ainsi de suite. Série géométrique de raison c :</p>
      ${box("#F7F7F7", "ΔY = ΔG × (1 + c + c² + …) = ΔG × 1/(1 − c)<br><b>k = 1 / (1 − c)</b> et <b>ΔY = k × ΔG</b>")}
      ${defs([
        ["Lecture algébrique", "1 − c = PMS, donc k = 1 / PMS : plus l'épargne est faible, plus k est fort."],
        ["Lecture graphique", "Plus c est proche de 1, plus la droite de consommation est proche de la bissectrice, plus k est grand."]
      ])}
      <h3>Kelvinia (c = 0,8)</h3>
      ${defs([
        ["k", "1 / 0,2 = <b>5</b>"],
        ["ΔG = 100", "ΔY = 5 × 100 = <b>500</b> ; nouveau Y* = 500 + 500 = <b>1 000</b>"],
        ["Rounds", "100 → 80 → 64 → 51,2 … (cumul 100, 180, 244, 295,2 … → 500)"]
      ])}
      <h3>Le multiplicateur fiscal</h3>
      ${box("#F7F7F7", "<b>k<sub>T</sub> = −c / (1 − c)</b> ; à Kelvinia : −0,8 / 0,2 = <b>−4</b>")}
      ${defs([
        ["Hausse de dépenses ΔG = +100", "ΔY = +500"],
        ["Baisse d'impôts ΔT = −100", "ΔY = +400"]
      ])}
      <p class="mt-2"><b>Pourquoi |k<sub>T</sub>| < k ?</b> G entre à 100 % dans la demande dès le premier round ; une baisse d'impôt n'augmente que le revenu disponible, dont les ménages épargnent 1 − c. À montant égal, la dépense publique est donc plus efficace.</p>
      ${trap("<b>Piège de signe :</b> ΔT < 0 et k<sub>T</sub> < 0 → produit positif → ΔY > 0. Si ΔT > 0 (hausse d'impôt), l'effet sur le PIB est négatif.")}
      <h3>Théorème du budget équilibré (Haavelmo, 1945)</h3>
      <p class="mt-1">Si ΔG = ΔT, l'effet net sur le revenu est égal à ΔG : <b>k<sub>équilibré</sub> = 1</b>.</p>
      ${box("#F7F7F7", "ΔG = ΔT = +25 : 5 × 25 − 4 × 25 = 125 − 100 = <b>+25 = ΔG</b>")}
      <p class="mt-2">Une relance « neutre » n'est pas neutre : elle augmente le PIB du montant des dépenses (contre la lecture classique selon laquelle la hausse d'impôts annulerait la dépense).</p>
      <h3>Les fuites : le seau percé</h3>
      ${defs([
        ["Épargne (1 − c)", "Part du revenu non consommée (déjà présente dans k)."],
        ["Impôt proportionnel (t)", "Prélevé à chaque cycle de revenu : réduit le revenu disponible."],
        ["Importations (m)", "Une part de la consommation part vers l'étranger : l'argent sort du circuit national."]
      ])}
      ${box("#F7F7F7", "<b>k' = 1 / [1 − c(1 − t) + m]</b><br>Kelvinia (c = 0,8 ; t = 0,2 ; m = 0,1) : 1 / (1 − 0,64 + 0,1) = 1 / 0,46 ≈ <b>2,17</b>, plus de deux fois moins que k = 5.")}
      <h3>Exemples réels</h3>
      ${defs([
        ["France (1981-1983)", "Relance isolée (SMIC, 39 h, fonctionnaires) alors que les partenaires étaient restrictifs : la demande part vers les importations (m élevé) → déficit commercial, 3 dévaluations → <b>tournant de la rigueur</b> en mars 1983."],
        ["Afrique subsaharienne (Kraay)", "Multiplicateurs de 0,4 à 0,7 (contre 1,76 dans les économies avancées) : importations élevées, secteur informel, épargne de précaution."]
      ])}
      ${trap("<b>Pièges QCM :</b> une baisse d'impôts de 100 n'a <b>pas</b> le même impact qu'une hausse de dépenses de 100 (+400 contre +500). ΔG = ΔT = 50 n'a <b>pas</b> un effet nul (+50). Une hausse d'impôts en budget équilibré ne détruit pas l'effet de la dépense : elle réduit le multiplicateur de 5 à 1.")}`,
    ex: [
      { t: "order", prompt: "Reconstitue l'<b>effet de cascade</b> du multiplicateur.", steps: ["L'État injecte ΔG (ex : 100 Mds € de travaux)", "ΔG devient le revenu de salariés et d'entreprises", "Ils consomment une fraction c et épargnent 1 − c", "Cette consommation devient le revenu d'autres agents", "Le revenu total ΔY dépasse l'injection initiale"], extra: ["Toute l'injection est épargnée"], explain: "La série 1 + c + c² + … converge vers 1/(1 − c) : l'injection est <b>multipliée</b> par la reconsommation successive des revenus." },
      { t: "mcq", prompt: "À Kelvinia (c = 0,8), que vaut le <b>multiplicateur des dépenses publiques k</b> ?", options: ["5", "4", "1,25", "0,2"], explain: "k = 1 / (1 − c) = 1 / 0,2 = <b>5</b>. Autre lecture : k = 1 / PMS. (1,25 = 1/0,8 est l'erreur classique : diviser par la PMC.)" },
      { t: "fill", sentence: "Si l'État dépense ΔG = 100 à Kelvinia, le revenu augmente de ΔY = ___.", options: ["500", "100", "400", "1 000"], explain: "ΔY = k × ΔG = 5 × 100 = <b>500</b>. Le nouveau revenu d'équilibre passe de 500 à <b>1 000</b> (piège : 1 000 est le nouveau Y*, pas ΔY)." },
      { t: "mcq", prompt: "Que vaut le <b>multiplicateur fiscal k<sub>T</sub></b> à Kelvinia ?", options: ["−4", "−5", "4", "1"], explain: "k<sub>T</sub> = −c / (1 − c) = −0,8 / 0,2 = <b>−4</b>. Négatif : une baisse d'impôt (ΔT < 0) donne ΔY > 0." },
      { t: "sort", prompt: "Relance de 100 Mds : ces éléments concernent la <b>hausse de G</b> ou la <b>baisse d'impôts</b> ?", cats: [DG, DT], items: [{ t: "Entre à 100 % dans la demande globale", c: "g" }, { t: "k = 1/(1 − c) = 5", c: "g" }, { t: "ΔY = +500", c: "g" }, { t: "Augmente seulement le revenu disponible", c: "t" }, { t: "kT = −c/(1 − c) = −4", c: "t" }, { t: "ΔY = +400", c: "t" }] },
      { t: "mcq", prompt: "Pourquoi le multiplicateur fiscal est-il plus faible que celui des dépenses (|k<sub>T</sub>| < k) ?", options: ["Les ménages épargnent une partie (1 − c) de la baisse d'impôt dès le premier round", "Les impôts réduisent directement les dépenses publiques", "L'État épargne une partie de ses dépenses", "La baisse d'impôt ne profite qu'aux entreprises"], explain: "G entre <b>à 100 %</b> dans la demande globale ; la baisse d'impôt n'augmente que le <b>revenu disponible</b>, dont seuls 80 % sont consommés au premier round. D'où −4 contre 5." },
      { t: "spot", words: ["Une", "baisse", "d'impôts", "de", "100", "a", "le", "même", "impact", "qu'une", "hausse", "de", "dépenses", "de", "100."], wrong: 7, fix: "Une baisse d'impôts de 100 a un impact plus faible (+400) qu'une hausse de dépenses de 100 (+500).", explain: "Piège n° 1 du QCM : |k<sub>T</sub>| = 4 < k = 5, car une partie du gain de revenu disponible est <b>épargnée</b> immédiatement." },
      { t: "mcq", prompt: "ΔG = ΔT = +25 à Kelvinia. Quel est l'<b>effet net</b> sur le PIB ?", options: ["+25", "0", "+125", "−100"], explain: "Effet de ΔG : 5 × 25 = +125 ; effet de ΔT : −4 × 25 = −100 ; net : <b>+25 = ΔG</b>. C'est le théorème du budget équilibré de <b>Haavelmo (1945)</b> : k<sub>équilibré</sub> = 1." },
      { t: "spot", words: ["Si", "l'État", "augmente", "ses", "dépenses", "de", "50", "et", "ses", "impôts", "de", "50,", "l'impact", "sur", "le", "PIB", "est", "nul."], wrong: 17, fix: "Si l'État augmente ses dépenses de 50 et ses impôts de 50, l'impact sur le PIB est de +50.", explain: "Piège n° 3 : multiplicateur de budget équilibré = 1, donc ΔY = ΔG = +50. Vérification : 5 × 50 − 4 × 50 = 250 − 200 = 50." },
      { t: "match", pairs: [["1 − c", "Épargne : fuite déjà présente dans k"], ["t", "Impôt proportionnel prélevé à chaque cycle"], ["m", "Importations : l'argent sort du circuit national"], ["k' = 1/[1 − c(1 − t) + m]", "Multiplicateur avec fuites"], ["Haavelmo (1945)", "Théorème du budget équilibré : k = 1"]] },
      { t: "fill", sentence: "Avec c = 0,8, t = 0,2 et m = 0,1 : k' = 1 / (1 − 0,64 + 0,1) = 1 / 0,46 ≈ ___.", options: ["2,17", "5", "4", "0,46"], explain: "k' ≈ <b>2,17</b>, plus de deux fois inférieur au multiplicateur théorique fermé (k = 5) : l'impôt et les importations amputent le rendement de la relance." },
      { t: "mcq", prompt: "Pourquoi la <b>relance française de 1981</b> a-t-elle échoué ?", options: ["La demande s'est dirigée vers les produits importés, car les partenaires menaient des politiques restrictives", "Le multiplicateur fiscal était positif", "La France empruntait en dollars", "Le Kurzarbeit a bloqué les embauches"], explain: "Relance isolée → <b>m élevé</b>, fuite du multiplicateur → déficit commercial massif, attaques sur le franc, 3 dévaluations → <b>tournant de la rigueur</b> en mars 1983." }
    ]
  },

  /* ---------------- NIVEAU 7 · CM3 ---------------- */
  {
    title: "Ch. 3 · Dette publique & austérité", sub: "r vs g, Maastricht, multiplicateur récessif", emoji: "🏦", c: "#FF86D0", d: "#D46AAD",
    desc: "Déficit vs dette, effet boule de neige, Japon vs Argentine, critères de Maastricht et paradoxe grec.",
    fiche: () => `
      ${ideas([
        "<b>Déficit ≠ dette</b> : le déficit est un flux annuel, la dette un stock accumulé.",
        "<b>r vs g</b> : la dette explose (boule de neige) quand le taux d'intérêt dépasse la croissance.",
        "Le <b>niveau brut</b> de dette ne suffit pas : devise d'emprunt, créanciers et taux comptent (Japon vs Argentine).",
        "Les <b>critères de Maastricht</b> (3 % / 60 %) sont des seuils conventionnels, pas des lois économiques.",
        "L'<b>austérité</b> fait jouer le multiplicateur à l'envers et peut aggraver le ratio dette/PIB (Grèce)."
      ])}
      <h3>Déficit et dette</h3>
      ${defs([
        ["Déficit public (FLUX)", "Écart annuel : Dépenses − Recettes > 0, mesuré sur une année."],
        ["Dette publique (STOCK)", "Cumul des déficits passés, financé par des obligations d'État ; exprimée en % du PIB à un instant donné."]
      ])}
      ${trap("<b>Piège :</b> une dette élevée peut coexister avec un déficit nul, et une dette faible avec un déficit important.")}
      <h3>L'effet boule de neige : r vs g</h3>
      ${box("#F7F7F7", "<b>Δ(D/Y) ≈ (r − g) × D/Y</b><br>r = taux d'intérêt réel de la dette ; g = taux de croissance du PIB")}
      ${defs([
        ["r > g : NON SOUTENABLE", "Les intérêts augmentent plus vite que la richesse créée : le ratio grimpe mécaniquement, même avec un budget primaire équilibré. Ex. : dette 100 %, r = 3 %, g = 1 % → <b>+2 points de PIB/an</b>."],
        ["g > r : SOUTENABLE", "La croissance « digère » la dette : le ratio se stabilise voire diminue."]
      ])}
      <h3>Japon vs Argentine</h3>
      ${defs([
        ["🇯🇵 Japon", "Dette de 230 à 260 % du PIB, en yen, créanciers domestiques, r très bas voire négatif → <b>pas de crise</b>."],
        ["🇦🇷 Argentine (2001)", "Dette de 62 % à 164 % du PIB, en dollars, créanciers étrangers, r très élevé → <b>défaut de 100 Mds $</b>, PIB −20 %, 5 présidents en 2 semaines."]
      ])}
      ${box("#E5F8FF", "<b>3 facteurs de soutenabilité :</b> la <b>devise d'emprunt</b> (en monnaie nationale, pas de risque de change), la <b>nature des créanciers</b> (domestiques = épargne captive ; étrangers = fuite possible), le <b>taux d'intérêt r</b> (primes de risque → boule de neige).")}
      <h3>Les critères de Maastricht (1992)</h3>
      <p class="mt-1">Déficit ≤ <b>3 %</b> du PIB, dette ≤ <b>60 %</b> du PIB : des seuils <b>politiques et conventionnels</b> pour préserver la monnaie unique. Le Japon les enfreint massivement sans crise.</p>
      <h3>L'austérité : le multiplicateur à l'envers</h3>
      <p class="mt-1">ΔY = k × ΔG avec ΔG < 0 → ΔY < 0. Le multiplicateur est <b>symétrique</b> (k = 5 à Kelvinia) : moins de dépenses → moins de revenus → moins de consommation…</p>
      ${defs([
        ["Royaume-Uni (2010-2015)", "Cameron / Osborne : 83 Mds £ de coupes, 490 000 fonctionnaires en moins, investissement public −40 % → environ <b>−1 point de PIB par an</b> (OBR)."],
        ["Grèce (2010-2015)", "Troïka BCE-FMI-UE, plans d'aide de 110 + 130 Mds € → PIB <b>−25 %</b>, chômage <b>27,5 %</b> (plus de 60 % chez les jeunes)."]
      ])}
      ${trap("<b>Paradoxe grec :</b> malgré la baisse des dépenses, la dette passe de <b>130 % à 180 %</b> du PIB : le dénominateur (PIB) chute plus vite que le numérateur (dette). L'austérité peut aggraver la soutenabilité qu'elle prétend restaurer.")}`,
    outro: () => `<div class="mt-8"><h2 class="font-black text-lg">💡 Les questions types du QCM (CM3)</h2><p class="text-sm text-ink/60">Réponds de tête avant de relire la réponse.</p>${qa(CM3_QA)}</div>`,
    ex: [
      { t: "sort", prompt: "Ces caractéristiques décrivent-elles le <b>déficit</b> ou la <b>dette</b> publique ?", cats: [DEF, DET], items: [{ t: "Un flux", c: "def" }, { t: "Mesuré sur une année", c: "def" }, { t: "Dépenses − Recettes", c: "def" }, { t: "Un stock", c: "det" }, { t: "Cumul des déficits passés", c: "det" }, { t: "Financée par des obligations d'État", c: "det" }] },
      { t: "spot", words: ["La", "dette", "publique", "est", "un", "flux", "annuel."], wrong: 5, fix: "La dette publique est un stock (le cumul des déficits passés).", explain: "Piège classique : <b>déficit ≠ dette</b>. Le déficit est un <b>flux</b> annuel ; la dette est un <b>stock</b>, l'« ardoise » accumulée." },
      { t: "mcq", prompt: "Quand la dette publique devient-elle <b>non soutenable</b> (effet boule de neige) ?", options: ["Quand r > g", "Quand g > r", "Quand la dette dépasse 60 % du PIB", "Quand le déficit est nul"], explain: "Δ(D/Y) ≈ (r − g) × D/Y : le ratio n'augmente que si <b>r − g est positif</b>. C'est la seule condition à retenir pour le QCM, pas le niveau brut." },
      { t: "fill", sentence: "Dette = 100 % du PIB, r = 3 %, g = 1 % : le ratio dette/PIB augmente d'environ ___ points de PIB par an.", options: ["2", "4", "3", "1"], explain: "(r − g) × dette = (3 % − 1 %) × 100 % = <b>+2 points</b> de PIB par an, même avec un budget primaire équilibré." },
      { t: "order", prompt: "Reconstitue l'<b>effet boule de neige</b>.", steps: ["Le taux d'intérêt r dépasse la croissance g", "Les intérêts augmentent plus vite que la richesse créée", "Le ratio dette/PIB grimpe mécaniquement", "La dette devient non soutenable"], extra: ["La croissance digère la dette"], explain: "Quand r > g, le numérateur (charge d'intérêts) progresse plus vite que le dénominateur (PIB). « La croissance digère la dette » correspond au cas inverse, g > r." },
      { t: "sort", prompt: "Range chaque caractéristique : <b>Japon</b> ou <b>Argentine (2001)</b> ?", cats: [JP, AR], items: [{ t: "Dette de 230 à 260 % du PIB", c: "jp" }, { t: "Emprunts en monnaie nationale", c: "jp" }, { t: "Créanciers domestiques", c: "jp" }, { t: "Emprunts en dollars US", c: "ar" }, { t: "Créanciers étrangers", c: "ar" }, { t: "Défaut de paiement de 100 Mds $", c: "ar" }] },
      { t: "mcq", prompt: "Quels sont les <b>critères de Maastricht</b> (1992) ?", options: ["Déficit ≤ 3 % du PIB et dette ≤ 60 % du PIB", "Déficit ≤ 60 % du PIB et dette ≤ 3 % du PIB", "Déficit ≤ 3 % du PIB et dette ≤ 100 % du PIB", "Dette ≤ 60 % du PIB et r < g"], explain: "<b>3 % / 60 %</b> : des seuils <b>politiques et conventionnels</b> pour préserver la monnaie unique, pas des lois économiques. Le Japon les enfreint sans crise." },
      { t: "spot", words: ["Un", "pays", "avec", "une", "dette", "à", "200 %", "du", "PIB", "fait", "forcément", "faillite."], wrong: 10, fix: "Un pays avec une dette à 200 % du PIB ne fait pas forcément faillite.", explain: "Piège n° 2 : le <b>Japon</b> (230 à 260 % du PIB) n'a pas de crise de dette souveraine grâce à des créanciers domestiques, une dette en yen et des taux proches de 0 voire négatifs. C'est <b>r vs g</b> qui compte." },
      { t: "match", pairs: [["Devise d'emprunt", "En monnaie nationale : pas de risque de change"], ["Nature des créanciers", "Étrangers : peuvent fuir du jour au lendemain"], ["Taux d'intérêt r", "Élevé : effet boule de neige amplifié"], ["Critères de Maastricht", "Seuils conventionnels, pas des lois économiques"], ["Argentine (2001)", "Dette de 62 % à 164 % du PIB, PIB −20 %"]] },
      { t: "order", prompt: "Reconstitue le <b>multiplicateur récessif</b> de l'austérité.", steps: ["Baisse des dépenses publiques (ΔG < 0)", "Moins de revenus distribués", "Moins de consommation", "Le PIB chute (ΔY = k × ΔG < 0)", "Le ratio dette/PIB augmente"], extra: ["La dette baisse plus vite que le PIB"], explain: "Le multiplicateur est <b>symétrique</b> : il joue aussi à la baisse (k = 5 à Kelvinia). Si le PIB chute plus vite que la dette, le ratio s'aggrave." },
      { t: "mcq", prompt: "Grèce 2010-2015 : malgré l'austérité, la dette passe de <b>130 % à 180 %</b> du PIB. Pourquoi ?", options: ["Le PIB (dénominateur) a chuté plus vite que la dette (numérateur)", "Les dépenses publiques ont fortement augmenté", "Les taux d'intérêt sont devenus négatifs", "La Grèce a emprunté en monnaie nationale"], explain: "L'austérité (ΔG < 0) a fait jouer le multiplicateur à l'envers : PIB <b>−25 %</b>, chômage 27,5 %. Le ratio dette/PIB s'est aggravé mécaniquement : c'est le contrepoint du théorème du budget équilibré." },
      { t: "fill", sentence: "Au Royaume-Uni (2010-2015), l'austérité aurait coûté environ ___ point de PIB par an selon l'OBR.", options: ["1", "5", "25", "0,1"], explain: "Cameron / Osborne : 83 Mds £ de coupes, 490 000 fonctionnaires supprimés, investissement public −40 % → environ <b>1 point de PIB</b> de croissance perdu chaque année." }
    ]
  }
);
})();

/* =====================================================================
   CHAPITRES 4 & 5 — CM4 (politique monétaire) et CM5 (modèle IS-LM)
   Ajout des niveaux 8 à 11 au tableau existant.
   ===================================================================== */
(function () {

const defs = rows => `<table class="w-full text-sm mt-2"><tbody>${rows.map(r => `<tr class="border-t border-line"><td class="py-2 pr-3 w-2/5 font-bold align-top">${r[0]}</td><td class="py-2 text-ink/80">${r[1]}</td></tr>`).join("")}</tbody></table>`;
const grid = (head, rows) => `<div class="overflow-x-auto mt-2"><table class="w-full text-sm"><thead><tr>${head.map(h => `<th class="text-left py-2 pr-3 border-b-2 border-line font-black">${h}</th>`).join("")}</tr></thead><tbody>${rows.map(r => `<tr class="border-t border-line">${r.map((c, i) => `<td class="py-2 pr-3 align-top ${i ? "text-ink/80" : "font-bold"}">${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
const box = (bg, html) => `<div class="rounded-2xl p-3 mt-2" style="background:${bg}">${html}</div>`;
const ideas = list => box("#E5F8FF", `<b>🧭 Les 5 idées-forces</b><ol class="list-decimal ml-5 mt-1 space-y-1">${list.map(i => `<li>${i}</li>`).join("")}</ol>`);
const trap = html => box("#FFDFE0", "⚠️ " + html);
const qa = (title, list) => `<div class="mt-8"><h2 class="font-black text-lg">💡 ${title}</h2><p class="text-sm text-ink/60">Réponds de tête avant de relire la réponse.</p><div class="space-y-2 mt-2">${list.map((q, i) => `
  <div class="rounded-2xl border-2 border-line p-3">
    <div class="font-black">${i + 1} · ${q[0]}</div>
    <div class="text-sm text-ink/80 mt-1">${q[1]}</div>
  </div>`).join("")}</div></div>`;

const RES = { id: "res", label: "Restrictive", emoji: "🧊" }, ACC = { id: "acc", label: "Accommodante", emoji: "🔥" };
const DY = { id: "y", label: "Dépend de Y", emoji: "💼" }, DR = { id: "r", label: "Dépend de r", emoji: "📉" };
const WEI = { id: "wei", label: "Weimar 1923", emoji: "🇩🇪" }, ZIM = { id: "zim", label: "Zimbabwe", emoji: "🇿🇼" };
const IS = { id: "is", label: "Courbe IS", emoji: "📉" }, LM = { id: "lm", label: "Courbe LM", emoji: "📈" };
const BUD = { id: "bud", label: "Relance budgétaire", emoji: "🏗️" }, MON = { id: "mon", label: "Relance monétaire", emoji: "💶" };

window.COURSES["politique-economique"].levels.push(
  /* ---------------- NIVEAU 8 · CM4 ---------------- */
  {
    title: "Ch. 4 · Taux directeur, Fisher & canaux", sub: "Fondements de la politique monétaire", emoji: "💶", c: "#6C63FF", d: "#5148D6",
    desc: "Taux directeur, relation de Fisher (r ≈ i − π), mandats BCE vs Fed, 4 canaux de transmission, Volcker et BCE 2022.",
    fiche: () => `
      ${ideas([
        "La <b>Banque centrale</b> agit principalement via son <b>taux directeur</b>, le loyer de l'argent pour tout le système bancaire.",
        "<b>Relation de Fisher (r ≈ i − π)</b> : ce qui compte est le taux <b>réel</b>. Un taux nominal de 4 % peut être accommodant ou restrictif selon l'inflation.",
        "Les <b>3 motifs de détention de monnaie</b> (Keynes) : transaction, précaution (liés à Y), spéculation (liée négativement à r).",
        "<b>Trappe à liquidité et QE</b> : à taux zéro, la politique conventionnelle est impuissante ; la Banque centrale achète massivement des actifs.",
        "<b>L'hyperinflation</b> : quand un État en faillite finance ses dépenses par la planche à billets en supprimant l'indépendance de sa Banque centrale (Weimar 1923, Zimbabwe 2008)."
      ])}
      <h3>La Banque centrale</h3>
      <p class="mt-1">Institution publique <b>indépendante</b> chargée de concevoir et d'exécuter la politique monétaire. Objectif central : la <b>stabilité des prix</b> (un sommet du carré de Kaldor). Elle régule l'émission de monnaie, le système de paiement et la stabilité financière.</p>
      ${defs([
        ["Incohérence temporelle", "Avant une élection, un gouvernement est tenté de baisser les taux pour stimuler la croissance à court terme, au risque d'une spirale inflationniste."],
        ["Rôle de l'indépendance", "Mettre la Banque centrale à l'abri du cycle électoral pour ancrer la <b>crédibilité</b> du signal monétaire et la valeur de la monnaie."]
      ])}
      <h3>Mandat unique vs double mandat</h3>
      ${grid(["Banque centrale", "Mandat", "Priorité"], [
        ["BCE", "Mandat <b>hiérarchisé</b>", "Stabilité des prix : inflation d'environ <b>2 %</b> à moyen terme."],
        ["Fed", "<b>Double mandat</b>", "Stabilité des prix <b>ET</b> plein emploi maximal."]
      ])}
      <h3>Le taux directeur</h3>
      <p class="mt-1">Taux auquel la Banque centrale prête des liquidités aux banques commerciales à très court terme (opérations de refinancement).</p>
      ${defs([
        ["Politique restrictive", "Hausse des taux : renchérit le crédit pour freiner la surchauffe et l'inflation."],
        ["Politique accommodante", "Baisse des taux : allège l'emprunt pour encourager consommation et investissement."]
      ])}
      <h3>La relation de Fisher</h3>
      ${box("#F7F7F7", "<b>r ≈ i − π</b> (soit i ≈ r + π)<br>i = taux nominal · π = inflation · r = taux réel (coût véritable du crédit)")}
      ${grid(["Cas", "Calcul", "Lecture"], [
        ["i = 4 %, π = 6 %", "r = 4 − 6 = <b>−2 %</b>", "Taux réel négatif : politique <b>accommodante</b> (les emprunteurs remboursent en monnaie dépréciée)."],
        ["i = 4 %, π = 2 %", "r = 4 − 2 = <b>+2 %</b>", "Taux réel positif : politique <b>réellement restrictive</b>."]
      ])}
      <h3>Cas historiques</h3>
      ${defs([
        ["Volcker (USA, 1979-1982)", "Inflation record de 13,5 % en 1980 → taux directeur porté à <b>19-20 %</b> (juin 1981) → inflation à <b>3,2 %</b> en 1983, au prix d'une récession de 16 mois et d'un chômage à 10,8 %."],
        ["BCE (2022-2024)", "Juillet 2022 : taux de dépôt à −0,50 % avec une inflation proche de 9 % → r ≈ <b>−9,5 %</b>. Puis <b>10 hausses en 14 mois</b> jusqu'à +4,00 % → inflation de 10,6 % (oct. 2022) à moins de 3 % fin 2023."]
      ])}
      <h3>Les 4 canaux de transmission</h3>
      ${defs([
        ["1. Taux d'intérêt", "Taux directeur ↑ → taux des banques ↑ → coût du crédit ↑ → C et I ↓."],
        ["2. Crédit", "Risque de défaut ↑ → les banques durcissent l'octroi de prêts → volume de crédit ↓."],
        ["3. Taux de change", "Capitaux attirés → demande de devise ↑ → appréciation → exportations plus chères, importations moins chères → activité et inflation freinées."],
        ["4. Anticipations", "Un engagement crédible ancre les anticipations d'inflation à 2 % et modère salaires et prix."]
      ])}
      ${box("#D7FFB8", "🏆 <b>Long and variable lags :</b> il faut en moyenne <b>12 à 18 mois</b> pour qu'une variation du taux directeur produise son effet maximal.")}
      ${trap("<b>Pièges QCM :</b> un taux nominal à 0 % n'est pas un coût réel nul (si π = −2 %, r = +2 %, donc restrictif). La politique monétaire n'agit pas instantanément (12 à 18 mois). La BCE n'a pas de mandat d'emploi comme la Fed : seule la Fed a un double mandat.")}`,
    ex: [
      { t: "mcq", prompt: "Qu'est-ce que le <b>taux directeur</b> ?", options: ["Le taux auquel la Banque centrale prête des liquidités aux banques commerciales à très court terme", "Le taux auquel les ménages empruntent pour acheter un logement", "Le taux d'inflation visé par la Banque centrale", "Le taux de rendement des obligations d'État à 10 ans"], explain: "C'est le taux des <b>opérations de refinancement</b> : il fixe le loyer de l'argent pour tout le système bancaire, puis se diffuse à l'économie." },
      { t: "sort", prompt: "Ces éléments relèvent-ils d'une politique monétaire <b>restrictive</b> ou <b>accommodante</b> ?", cats: [RES, ACC], items: [{ t: "Hausse du taux directeur", c: "res" }, { t: "Freiner la surchauffe et l'inflation", c: "res" }, { t: "Renchérir le coût du crédit", c: "res" }, { t: "Baisse du taux directeur", c: "acc" }, { t: "Encourager consommation et investissement", c: "acc" }, { t: "Taux réel négatif (i = 4 %, π = 6 %)", c: "acc" }] },
      { t: "fill", sentence: "Relation de Fisher : le taux réel r ≈ i − ___.", options: ["π", "g", "h", "k"], explain: "<b>r ≈ i − π</b> : taux réel = taux nominal − inflation. Équivalent : i ≈ r + π. C'est le <b>taux réel</b> qui mesure le coût véritable du crédit." },
      { t: "mcq", prompt: "i = 4 % et π = 6 %. Quel est le <b>taux réel</b>, et quelle est l'orientation de la politique ?", options: ["r = −2 % : politique accommodante", "r = +2 % : politique restrictive", "r = +10 % : politique restrictive", "r = −2 % : politique restrictive"], explain: "r = 4 % − 6 % = <b>−2 %</b>. Malgré un taux affiché de 4 %, le coût réel est négatif : les emprunteurs remboursent en monnaie dépréciée. Avec π = 2 %, le même i = 4 % donnerait r = +2 % (restrictif)." },
      { t: "spot", words: ["Un", "taux", "nominal", "à", "0 %", "signifie", "que", "le", "coût", "réel", "du", "crédit", "est", "nul."], wrong: 13, fix: "Un taux nominal à 0 % ne signifie pas un coût réel nul : avec π = −2 %, r = 0 − (−2) = +2 %.", explain: "Piège n° 1 : en <b>déflation</b>, un taux nominal nul reste strictement <b>restrictif</b>, car le taux réel est positif." },
      { t: "mcq", prompt: "Quelle banque centrale a un <b>double mandat</b> (stabilité des prix ET plein emploi) ?", options: ["La Fed", "La BCE", "La Bundesbank", "Les deux, BCE et Fed"], explain: "Piège n° 4 : la <b>BCE</b> a un mandat <b>hiérarchisé</b> centré sur la stabilité des prix (2 %). Seule la <b>Fed</b> traite à égalité stabilité des prix et plein emploi." },
      { t: "mcq", prompt: "Pourquoi l'<b>indépendance</b> de la Banque centrale est-elle cruciale ?", options: ["Pour la protéger de la tentation électorale de baisser les taux au risque d'une spirale inflationniste", "Pour qu'elle puisse financer directement le déficit de l'État", "Pour lui permettre de fixer les impôts", "Pour qu'elle fasse passer le plein emploi avant les prix"], explain: "C'est le problème d'<b>incohérence temporelle</b> : un gouvernement est tenté de stimuler l'économie avant une élection. L'indépendance ancre la <b>crédibilité</b> et la valeur de la monnaie." },
      { t: "match", pairs: [["Canal du taux d'intérêt", "Coût du crédit en hausse : C et I baissent"], ["Canal du crédit", "Les banques durcissent l'octroi de prêts"], ["Canal du taux de change", "Appréciation : exportations plus chères"], ["Canal des anticipations", "Ancrage crédible de l'inflation à 2 %"], ["Long and variable lags", "12 à 18 mois pour l'effet maximal"]] },
      { t: "order", prompt: "Reconstitue le <b>canal du taux de change</b> après une hausse des taux.", steps: ["Hausse du taux directeur", "Les capitaux internationaux affluent", "La demande de devise nationale augmente", "Le taux de change s'apprécie", "Exportations plus chères : l'activité et l'inflation ralentissent"], extra: ["Les exportations deviennent moins chères"], explain: "Une monnaie qui s'<b>apprécie</b> rend les exportations plus chères et les importations moins chères : l'activité intérieure ralentit et les pressions inflationnistes baissent." },
      { t: "fill", sentence: "Une variation du taux directeur produit son effet maximal après ___ mois en moyenne.", options: ["12 à 18", "1 à 2", "3 à 6", "36 à 48"], explain: "Piège n° 2 : la politique monétaire n'est <b>jamais instantanée</b>. Ce sont les « <i>long and variable lags</i> » : <b>12 à 18 mois</b>." },
      { t: "mcq", prompt: "Volcker (1979-1982) a fait passer l'inflation de 13,5 % à 3,2 %. <b>À quel prix ?</b>", options: ["Une récession de 16 mois et un chômage à 10,8 %", "Une hyperinflation", "Un taux directeur négatif", "Une sortie de la Fed de son double mandat"], explain: "Volcker relève brutalement le taux directeur jusqu'à <b>19-20 %</b> (juin 1981). La désinflation réussit, mais au prix d'une <b>sévère récession</b> de 16 mois et d'un chômage de <b>10,8 %</b>." },
      { t: "order", prompt: "Reconstitue la réaction de la <b>BCE face au choc énergétique</b> (2022-2024).", steps: ["Juillet 2022 : taux de dépôt à −0,50 % et inflation proche de 9 %", "Taux réel d'environ −9,5 % : conditions ultra-accommodantes", "10 hausses consécutives en 14 mois, jusqu'à +4,00 %", "L'inflation recule de 10,6 % (oct. 2022) à moins de 3 % fin 2023"], extra: ["La BCE abaisse son taux de dépôt"], explain: "Fisher : r ≈ −0,50 % − 9 % ≈ <b>−9,5 %</b>. Le resserrement sans précédent (+4,00 %) a ramené l'inflation sous 3 %." }
    ]
  },

  /* ---------------- NIVEAU 9 · CM4 ---------------- */
  {
    title: "Ch. 4 · Marché de la monnaie, QE & hyperinflation", sub: "Motifs de Keynes · Kelvinia · politiques non conventionnelles", emoji: "🖨️", c: "#00B8D9", d: "#0093AE",
    desc: "Les 3 motifs de détention de monnaie, l'équilibre monétaire de Kelvinia (r* = 5 %), la trappe à liquidité, le QE et l'hyperinflation.",
    fiche: () => `
      <h3>La demande de monnaie : les 3 motifs (Keynes, 1936)</h3>
      ${defs([
        ["Transaction (L1)", "Régler les achats courants. Dépend <b>positivement</b> du revenu Y."],
        ["Précaution (L2)", "Réserve de sécurité face aux imprévus. Dépend aussi <b>positivement</b> de Y."],
        ["Spéculation (L3)", "Arbitrage entre monnaie (rendement nul, sans risque) et obligations (rendement r, risque de perte en capital). Si r monte, le <b>coût d'opportunité</b> de la monnaie augmente : la demande spéculative <b>baisse</b>."]
      ])}
      ${box("#F7F7F7", "<b>L(Y, r) = k·Y − h·r</b><br>k > 0 : sensibilité au revenu · h > 0 : sensibilité au taux d'intérêt")}
      <h3>L'offre de monnaie</h3>
      <p class="mt-1">L'offre réelle M/P est <b>exogène</b> : fixée par la Banque centrale. Dans le repère (M/P, r), c'est une <b>droite verticale</b>.</p>
      <h3>L'équilibre monétaire de Kelvinia</h3>
      ${box("#F7F7F7", "Données : k = 0,5 · h = 1000 · Y = 1000 · M/P = 450<br>M/P = k·Y − h·r → 450 = 500 − 1000r → 1000r = 50 → <b>r* = 5 %</b>")}
      ${defs([
        ["Choc restrictif (M/P = 400)", "400 = 500 − 1000r → 1000r = 100 → <b>r* = 10 %</b>. L'offre se translate vers la gauche : la raréfaction des liquidités <b>double</b> le taux."]
      ])}
      <h3>La trappe à liquidité (Keynes)</h3>
      <p class="mt-1">Quand r → 0, la demande de monnaie devient <b>horizontale</b> : les agents pensent que les taux ne peuvent plus baisser et que les cours obligataires sont au sommet. Toute liquidité injectée est <b>thésaurisée</b>. La baisse des taux devient <b>inopérante</b>.</p>
      <h3>Le Quantitative Easing (QE)</h3>
      <p class="mt-1">Pour contourner le plancher zéro (<i>Zero Lower Bound</i>), la Banque centrale <b>achète massivement des actifs de long terme</b> (dette publique, obligations d'entreprises).</p>
      ${defs([
        ["1. Taux longs", "Achats d'obligations → prix ↑ → taux de long terme ↓."],
        ["2. Anticipations (<i>forward guidance</i>)", "Engagement crédible à rester ultra-accommodant longtemps."],
        ["3. Prix des actifs (effet de richesse)", "Actions et obligations ↑ → patrimoine des ménages et des banques ↑."],
        ["4. Taux de change", "Abondance de monnaie → dépréciation → exportations plus compétitives."]
      ])}
      ${defs([
        ["Japon (2001-2006)", "Pionnier : taux zéro (ZIRP) en 1999, premier QE en mars 2001 (réserves bancaires × 6). Stabilise les banques et finance une dette de plus de 200 % du PIB à taux quasi nuls."],
        ["États-Unis (2008-2014)", "Taux à 0,25 %, QE1, QE2, QE3 : bilan de la Fed de 900 à plus de 4 500 Mds $. <b>Pas d'inflation</b>, car les liquidités sont restées en <b>réserves excédentaires</b> auprès de la Fed, sans emballement du crédit."]
      ])}
      <h3>L'hyperinflation (plus de 50 % par mois)</h3>
      <p class="mt-1">Déficit massif (plus d'impôts ni d'emprunt possibles) → l'État subordonne la Banque centrale et monétise sa dette (planche à billets) → l'offre de monnaie explose sans lien avec la production → perte de confiance, la vitesse de circulation s'emballe → effondrement et abandon de la devise.</p>
      ${grid(["", "🇩🇪 Weimar (1923)", "🇿🇼 Zimbabwe (2007-2009)"], [
        ["Origine", "Réparations de guerre + occupation de la Ruhr", "Effondrement agricole (réforme agraire) + dépenses opaques"],
        ["Chiffres", "Pain : 250 marks (janv.) → 200 Mds marks (nov.)", "79,6 Mds % par mois (nov. 2008), prix doublés toutes les 24 h"],
        ["Billet record", "Dizaines de milliers de milliards de marks", "100 000 milliards de $Z (janv. 2009)"],
        ["Sortie", "Rentenmark fin 1923, gagé sur des actifs réels", "Dollarisation complète (avril 2009)"],
        ["Héritage", "Culture de la stabilité des prix : Bundesbank puis BCE", "Une hyperinflation est toujours précédée de la perte d'indépendance de la Banque centrale"]
      ])}
      ${trap("<b>Piège n° 3 :</b> le QE ne produit pas obligatoirement d'hyperinflation. Si les liquidités restent en réserves excédentaires sans se convertir en crédits, l'inflation reste contenue (USA 2008-2014).")}`,
    outro: () => qa("Les pièges classiques du CM4", [
      ["« Un taux nominal à 0 % signifie un coût réel nul. »", "<b>FAUX.</b> Si π = −2 %, r = 0 − (−2) = +2 % : en déflation, un taux nul reste restrictif."],
      ["« La politique monétaire agit instantanément. »", "<b>FAUX.</b> Délais longs et variables : 12 à 18 mois."],
      ["« Le QE produit obligatoirement une hyperinflation. »", "<b>FAUX.</b> USA 2008-2014 : les liquidités sont restées en réserves excédentaires auprès de la Fed."],
      ["« La BCE doit optimiser l'emploi comme la Fed. »", "<b>FAUX.</b> Mandat hiérarchisé (prix, 2 %) pour la BCE ; double mandat pour la seule Fed."]
    ]),
    ex: [
      { t: "match", pairs: [["Motif de transaction (L1)", "Régler les achats courants, dépend de Y"], ["Motif de précaution (L2)", "Réserve pour les imprévus, dépend de Y"], ["Motif de spéculation (L3)", "Arbitrage monnaie / obligations, dépend de r"], ["k (= 0,5)", "Sensibilité de la demande de monnaie au revenu"], ["h (= 1000)", "Sensibilité de la demande de monnaie au taux"]] },
      { t: "sort", prompt: "Dans L(Y, r) = k·Y − h·r, ces éléments dépendent-ils du <b>revenu Y</b> ou du <b>taux r</b> ?", cats: [DY, DR], items: [{ t: "Motif de transaction", c: "y" }, { t: "Motif de précaution", c: "y" }, { t: "Le terme k·Y", c: "y" }, { t: "Motif de spéculation", c: "r" }, { t: "Le terme −h·r", c: "r" }, { t: "Coût d'opportunité de détenir de la monnaie", c: "r" }] },
      { t: "mcq", prompt: "Si le taux d'intérêt r <b>monte</b>, la demande de monnaie <b>spéculative</b>…", options: ["diminue, car détenir de la monnaie a un coût d'opportunité plus élevé", "augmente, car la monnaie rapporte davantage", "reste inchangée", "devient parfaitement horizontale"], explain: "La monnaie ne rapporte rien ; les obligations rapportent r. Plus r est élevé, plus il est <b>coûteux</b> de garder de la monnaie : la demande spéculative baisse, d'où le signe <b>−h·r</b>." },
      { t: "mcq", prompt: "Dans le repère (M/P, r), comment est représentée l'<b>offre de monnaie</b> ?", options: ["Par une droite verticale, car elle est exogène", "Par une droite croissante", "Par une droite horizontale", "Par une courbe décroissante"], explain: "L'offre réelle de monnaie est <b>fixée par la Banque centrale</b>, indépendamment de r : c'est une <b>droite verticale</b>." },
      { t: "order", prompt: "Kelvinia (k = 0,5 ; h = 1000 ; Y = 1000 ; M/P = 450) : remets dans l'ordre le calcul de <b>r*</b>.", steps: ["450 = 0,5 × 1000 − 1000r", "450 = 500 − 1000r", "1000r = 50", "r* = 50 / 1000 = 5 %"], extra: ["r* = 450 / 1000 = 45 %"], explain: "À l'équilibre, <b>M/P = k·Y − h·r</b>. On isole r : 1000r = 500 − 450 = 50, donc r* = 0,05 = <b>5 %</b>." },
      { t: "fill", sentence: "Si l'offre de monnaie de Kelvinia baisse de 450 à 400, le taux d'équilibre passe de 5 % à ___.", options: ["10 %", "2,5 %", "5 %", "40 %"], explain: "400 = 500 − 1000r → 1000r = 100 → r* = <b>10 %</b>. La droite d'offre se déplace vers la gauche : la raréfaction des liquidités <b>double</b> le taux." },
      { t: "mcq", prompt: "Que se passe-t-il dans une <b>trappe à liquidité</b> (r → 0) ?", options: ["Les liquidités injectées sont thésaurisées et la baisse des taux devient inopérante", "Les taux d'intérêt remontent automatiquement", "La demande de monnaie devient verticale", "L'inflation explose immédiatement"], explain: "La demande de monnaie devient <b>horizontale</b> : les agents pensent que les taux ne peuvent plus baisser. Toute injection est <b>thésaurisée</b> : la politique conventionnelle est impuissante." },
      { t: "mcq", prompt: "En quoi consiste le <b>Quantitative Easing</b> ?", options: ["Acheter massivement des actifs de long terme (dette publique, obligations d'entreprises) sur les marchés", "Relever le taux directeur au-dessus de l'inflation", "Financer directement le déficit de l'État par la planche à billets", "Fixer un taux de change officiel"], explain: "Le QE contourne le plancher zéro. Ses 4 canaux : <b>taux longs</b>, <b>anticipations</b> (forward guidance), <b>prix des actifs</b> (effet de richesse), <b>taux de change</b> (dépréciation)." },
      { t: "spot", words: ["Créer", "massivement", "de", "la", "monnaie", "via", "le", "QE", "produit", "obligatoirement", "une", "hyperinflation."], wrong: 9, fix: "Créer massivement de la monnaie via le QE ne produit pas obligatoirement une hyperinflation.", explain: "Piège n° 3 : aux USA (2008-2014), le bilan de la Fed est passé de 900 à plus de 4 500 Mds $ sans inflation, car les liquidités sont restées en <b>réserves excédentaires</b>." },
      { t: "fill", sentence: "Le QE américain n'a pas créé d'inflation car les liquidités sont restées sous forme de réserves ___ auprès de la Fed.", options: ["excédentaires", "obligatoires", "d'or", "de change"], explain: "Les banques ont laissé ces liquidités en <b>réserves excédentaires</b> à la Fed, sans emballement des crédits à l'économie réelle." },
      { t: "order", prompt: "Reconstitue le <b>mécanisme fatal de l'hyperinflation</b>.", steps: ["Déficit massif : l'État ne peut plus lever d'impôts ni emprunter", "L'État impose la monétisation de sa dette (planche à billets)", "L'offre de monnaie explose sans lien avec la production", "Perte de confiance : la vitesse de circulation s'emballe", "Effondrement du système monétaire et abandon de la devise"], extra: ["La Banque centrale reste indépendante"], explain: "L'étape clé est la <b>subordination de la Banque centrale</b> : une hyperinflation est toujours précédée de la perte d'indépendance (seuil conventionnel : plus de 50 % par mois)." },
      { t: "sort", prompt: "Weimar ou Zimbabwe ?", cats: [WEI, ZIM], items: [{ t: "Réparations de guerre et occupation de la Ruhr", c: "wei" }, { t: "Pain : 250 marks puis 200 Mds marks", c: "wei" }, { t: "Sortie par le Rentenmark", c: "wei" }, { t: "Effondrement de la production agricole", c: "zim" }, { t: "Billet de 100 000 milliards", c: "zim" }, { t: "Dollarisation en avril 2009", c: "zim" }] }
    ]
  },

  /* ---------------- NIVEAU 10 · CM5 ---------------- */
  {
    title: "Ch. 5 · Le modèle IS-LM", sub: "L'équilibre macroéconomique conjoint", emoji: "🔀", c: "#A560E8", d: "#8445C2",
    desc: "Hicks (1937), la courbe IS (Y = 1000 − 4000r), la courbe LM (Y = 700 + 2000r) et l'équilibre Y* = 800, r* = 5 %.",
    fiche: () => `
      ${ideas([
        "<b>Hicks (1937)</b> unifie le marché des biens (I dépend de r) et le marché de la monnaie (la demande de monnaie dépend de Y).",
        "<b>IS (décroissante)</b> : r ↑ → I ↓ → demande et revenu ↓ via le multiplicateur.",
        "<b>LM (croissante)</b> : Y ↑ → besoin d'encaisses ↑ ; à offre fixe, r doit monter pour comprimer la spéculation.",
        "<b>Politique budgétaire et éviction</b> : ΔG > 0 déplace IS à droite, mais la hausse de r réduit l'investissement privé.",
        "<b>Politique monétaire et entraînement</b> : ΔM/P > 0 déplace LM à droite ; la baisse de r stimule l'investissement."
      ])}
      <h3>Pourquoi unifier les marchés ?</h3>
      ${defs([
        ["Limite des CM2-CM3", "L'investissement était <b>exogène</b> (I = 80), sans lien avec le coût du crédit."],
        ["Limite du CM4", "Le revenu était <b>fixé</b> (Y = 1000) pour isoler un taux d'équilibre."],
        ["Réalité", "I dépend de r (fixé sur le marché monétaire) et la demande de monnaie dépend de Y (fixé sur le marché des biens) : les deux s'ajustent <b>simultanément</b>."]
      ])}
      ${defs([
        ["Courbe IS (<i>Investment-Saving</i>)", "Couples (Y, r) qui équilibrent le <b>marché des biens</b>."],
        ["Courbe LM (<i>Liquidity-Money</i>)", "Couples (Y, r) qui équilibrent le <b>marché de la monnaie</b>."]
      ])}
      <h3>La courbe IS</h3>
      ${box("#F7F7F7", "<b>I(r) = I0 − d·r = 80 − 800r</b><br>I0 = 80 : investissement autonome · d = 800 : +1 point de taux (+0,01) → I baisse de <b>8 Mds €</b>")}
      <p class="mt-2">Kelvinia : C = 20 + 0,8Y ; I = 80 − 800r ; G = 100.</p>
      ${box("#F7F7F7", "Y = 20 + 0,8Y + (80 − 800r) + 100<br>0,2Y = 200 − 800r<br>× k = 5 → <b>Y = 1000 − 4000r</b>")}
      ${defs([
        ["Pente négative", "−4000 = d × k = 800 × 5. Une hausse de r renchérit le financement des projets et le coût d'opportunité des fonds propres."],
        ["Points de repère", "r = 0 % → Y = 1000 · r = 5 % → Y = 800 · r = 10 % → Y = 600"]
      ])}
      <h3>La courbe LM</h3>
      ${box("#F7F7F7", "L(Y, r) = 0,5Y − 1000r et M/P = 350<br>350 = 0,5Y − 1000r → 0,5Y = 350 + 1000r<br>× 2 → <b>Y = 700 + 2000r</b>")}
      ${defs([
        ["Pente positive", "Y ↑ → demande de monnaie de transaction ↑. M/P étant constante, r doit monter pour comprimer la demande spéculative."],
        ["Points de repère", "r = 0 % → Y = 700 · r = 5 % → Y = 800 · r = 10 % → Y = 900"]
      ])}
      <h3>L'équilibre simultané</h3>
      ${box("#D7FFB8", "1000 − 4000r = 700 + 2000r → 300 = 6000r → <b>r* = 5 %</b><br>Par IS : 1000 − 200 = 800 · Par LM : 700 + 100 = 800 → <b>(Y* = 800 ; r* = 5 %)</b>")}
      <p class="mt-2">C'est le seul point où les entreprises écoulent exactement leur production (pas de variation involontaire de stocks) <b>et</b> où l'encaisse désirée égale la monnaie en circulation. Tout autre point déclenche des forces de rappel.</p>
      ${grid(["", "Forme générale", "Kelvinia"], [
        ["Investissement", "I(r) = I0 − d·r", "80 − 800r"],
        ["IS", "Y = (C0 + I0 + G)/(1 − c) − [d/(1 − c)]·r", "1000 − 4000r"],
        ["LM", "Y = (1/kY)·(M/P) + (h/kY)·r", "700 + 2000r"],
        ["Pente de IS (r en fonction de Y)", "Δr/ΔY = −(1 − c)/d", "−1/4000"],
        ["Pente de LM (r en fonction de Y)", "Δr/ΔY = kY/h", "+1/2000"]
      ])}
      ${trap("<b>Piège n° 2 :</b> la courbe LM n'a <b>pas</b> une pente négative. Si Y s'élève, la demande de transaction augmente ; l'offre étant fixe, r doit monter. LM est strictement <b>croissante</b>.")}`,
    ex: [
      { t: "mcq", prompt: "Qui a <b>unifié</b> le marché des biens et le marché de la monnaie dans le modèle IS-LM (1937) ?", options: ["John Hicks", "John Maynard Keynes", "Nicholas Kaldor", "Richard Musgrave"], explain: "<b>John Hicks (1937)</b> : l'investissement dépend désormais de r et la demande de monnaie de Y. Les deux marchés s'ajustent simultanément." },
      { t: "mcq", prompt: "Quelle limite des <b>CM2 et CM3</b> le modèle IS-LM dépasse-t-il ?", options: ["L'investissement y était exogène (I = 80), sans lien avec le taux d'intérêt", "Le revenu y était fixé arbitrairement à Y = 1000", "La consommation n'y dépendait pas du revenu", "Le multiplicateur n'y existait pas"], explain: "Aux CM2-CM3, <b>I = 80</b> était constant. (Le revenu fixé à Y = 1000 était la limite du <b>CM4</b>, pour le marché monétaire.)" },
      { t: "match", pairs: [["Courbe IS", "Équilibre du marché des biens"], ["Courbe LM", "Équilibre du marché de la monnaie"], ["I(r) = 80 − 800r", "Investissement sensible au taux d'intérêt"], ["d = 800", "+1 point de taux : I baisse de 8 Mds"], ["John Hicks (1937)", "Unification des deux marchés"]] },
      { t: "order", prompt: "Remets dans l'ordre la <b>dérivation de IS</b> à Kelvinia (G = 100).", steps: ["Y = 20 + 0,8Y + (80 − 800r) + 100", "Y − 0,8Y = 200 − 800r", "0,2Y = 200 − 800r", "Y = 1000 − 4000r"], extra: ["Y = 250 − 1000r"], explain: "On divise par la PMS (0,2), ce qui revient à multiplier par <b>k = 5</b> : 200 × 5 = 1000 et 800 × 5 = 4000." },
      { t: "fill", sentence: "Sur la courbe IS de Kelvinia, si r = 10 %, alors Y = 1000 − 4000 × 0,10 = ___.", options: ["600", "800", "1 000", "400"], explain: "1000 − 400 = <b>600</b>. Repères de IS : r = 0 % → 1000 ; r = 5 % → 800 ; r = 10 % → 600. Plus r monte, plus Y baisse." },
      { t: "sort", prompt: "Ces caractéristiques décrivent-elles la courbe <b>IS</b> ou la courbe <b>LM</b> ?", cats: [IS, LM], items: [{ t: "Pente négative", c: "is" }, { t: "Y = 1000 − 4000r", c: "is" }, { t: "Équilibre du marché des biens", c: "is" }, { t: "Pente positive", c: "lm" }, { t: "Y = 700 + 2000r", c: "lm" }, { t: "Équilibre du marché de la monnaie", c: "lm" }] },
      { t: "spot", words: ["La", "courbe", "LM", "a", "une", "pente", "négative."], wrong: 6, fix: "La courbe LM a une pente positive (elle est strictement croissante).", explain: "Piège n° 2 : si Y monte, la demande de monnaie de transaction augmente ; l'offre étant fixe, <b>r doit monter</b> pour comprimer la demande spéculative." },
      { t: "mcq", prompt: "Avec M/P = 350 et L = 0,5Y − 1000r, quelle est l'<b>équation de LM</b> ?", options: ["Y = 700 + 2000r", "Y = 350 + 1000r", "Y = 700 − 2000r", "Y = 175 + 500r"], explain: "350 = 0,5Y − 1000r → 0,5Y = 350 + 1000r → on multiplie par 2 : <b>Y = 700 + 2000r</b>." },
      { t: "mcq", prompt: "Pourquoi la courbe <b>IS</b> est-elle décroissante ?", options: ["Une hausse de r réduit l'investissement, ce qui baisse la demande et le revenu via le multiplicateur", "Une hausse de r augmente la demande de monnaie", "Une hausse de Y fait baisser l'offre de monnaie", "Une hausse de r augmente la consommation"], explain: "r ↑ → coût de financement ↑ → <b>I ↓</b> → baisse des dépenses propagée par le <b>multiplicateur</b> (k = 5) → Y ↓. La pente −4000 = d × k." },
      { t: "order", prompt: "Remets dans l'ordre la <b>résolution du système IS-LM</b>.", steps: ["1000 − 4000r = 700 + 2000r", "300 = 6000r", "r* = 300 / 6000 = 5 %", "Y* = 1000 − 4000 × 0,05 = 800"], extra: ["r* = 300 / 2000 = 15 %"], explain: "On égalise les deux expressions de Y, puis on réinjecte r* dans IS (ou LM, même résultat : 700 + 100 = 800)." },
      { t: "fill", sentence: "À l'équilibre IS-LM de Kelvinia, Y* = 800 et r* = ___.", options: ["5 %", "7,5 %", "3 %", "10 %"], explain: "<b>(Y* = 800 ; r* = 5 %)</b>. Attention : 7,5 % et 3 % sont les taux après la relance budgétaire et après la relance monétaire." },
      { t: "mcq", prompt: "Que signifie le point <b>(800 ; 5 %)</b> ?", options: ["Le seul point où le marché des biens et celui de la monnaie sont simultanément à l'équilibre", "Le point de plein emploi garanti", "Le point où l'investissement est nul", "Le point où l'inflation vaut 5 %"], explain: "Pas de variation involontaire de stocks <b>et</b> encaisse désirée = monnaie en circulation. Ailleurs, des déséquilibres déclenchent des forces de rappel. (Rien ne garantit le plein emploi.)" }
    ]
  },

  /* ---------------- NIVEAU 11 · CM5 ---------------- */
  {
    title: "Ch. 5 · Politiques sous IS-LM", sub: "Éviction, entraînement et confrontation empirique", emoji: "🎛️", c: "#FF6B35", d: "#D9531F",
    desc: "Relance budgétaire (ΔG = +30, éviction) vs relance monétaire (ΔM/P = +60, entraînement), Reagan-Volcker, Japon 1990, plan Obama.",
    fiche: () => `
      <h3>Relance budgétaire (ΔG = +30) et effet d'éviction</h3>
      ${box("#F7F7F7", "G : 100 → 130 → 0,2Y = 230 − 800r → <b>IS : Y = 1150 − 4000r</b><br>IS se translate vers la droite de k × ΔG = 5 × 30 = +150")}
      ${box("#F7F7F7", "1150 − 4000r = 700 + 2000r → 450 = 6000r → <b>r = 7,5 %</b> ; Y = 700 + 2000 × 0,075 = <b>850</b>")}
      ${defs([
        ["Effet théorique pur (r bloqué à 5 %)", "800 + 150 = <b>950 Mds €</b>"],
        ["Effet réel", "<b>850 Mds €</b>, soit +50 Mds €"],
        ["Perte d'efficacité", "<b>100 Mds €</b> de PIB évincés"],
        ["Investissement privé", "r = 5 % : I = 40 → r = 7,5 % : I = <b>20</b> (ΔI = −20)"]
      ])}
      <p class="mt-2"><b>Mécanisme :</b> ΔG = +30 → Y ↑ → demande de monnaie de transaction ↑ → offre fixe donc r ↑ (5 % → 7,5 %) → crédit plus cher, I ↓ (40 → 20) → gain de PIB limité à +50 au lieu de +150.</p>
      <h3>Relance monétaire (ΔM/P = +60) et effet d'entraînement</h3>
      ${box("#F7F7F7", "M/P : 350 → 410 → 0,5Y = 410 + 1000r → <b>LM : Y = 820 + 2000r</b><br>LM se translate vers la droite de 2 × 60 = +120")}
      ${box("#F7F7F7", "1000 − 4000r = 820 + 2000r → 180 = 6000r → <b>r = 3 %</b> ; Y = 820 + 60 = <b>880</b>")}
      ${defs([
        ["Investissement privé", "r = 3 % : I = 80 − 24 = <b>56</b> (ΔI = +16)"],
        ["Production", "800 → 880 Mds € (ΔY = +80)"]
      ])}
      <h3>Tableau comparatif</h3>
      ${grid(["", "Budgétaire (ΔG = +30)", "Monétaire (ΔM/P = +60)"], [
        ["Courbe déplacée", "IS vers la droite", "LM vers la droite"],
        ["Taux r", "Hausse : 5 % → 7,5 %", "Baisse : 5 % → 3 %"],
        ["Investissement I", "Baisse : 40 → 20", "Hausse : 40 → 56"],
        ["Revenu Y", "800 → 850", "800 → 880"],
        ["Effet sur I", "Éviction (<i>crowding-out</i>)", "Entraînement (<i>crowding-in</i>)"]
      ])}
      ${box("#E5F8FF", "<b>Remarque :</b> l'ampleur des effets dépend des pentes de IS (d, k) et de LM (kY, h). Les chiffres de Kelvinia ne sont pas des constantes universelles.")}
      <h3>IS-LM à l'épreuve de l'histoire</h3>
      ${defs([
        ["Reagan-Volcker (1981-1985)", "Reagan : baisses d'impôts et dépenses militaires (IS à droite). Volcker : resserrement contre une inflation de 13,5 % (LM à gauche). Les deux font monter r : taux directeurs proches de 20 %. Désinflation (3,2 % en 1983), mais déficit fédéral triplé (74 → 212 Mds $), dollar +50 %, déficit commercial quadruplé (31 → 122 Mds $)."],
        ["Japon (années 1990)", "Bulles éclatées en 1990 ; relances d'environ 65 000 Mds de yens (1992-1996) et taux à 0 % (LM plate, éviction nulle). Pourtant croissance atone (rebond isolé à 3 % en 1996) et dette de 63 % à plus de 180 % du PIB."],
        ["Adam Posen", "Un mécanisme théorique cohérent est nécessaire mais <b>non suffisant</b> : dépenses effectives inférieures aux annonces, retards, rigueur prématurée (TVA 1997), manque de confiance."],
        ["Plan Obama (ARRA, 2009)", "787 Mds $ (environ 5,5 % du PIB) au plancher zéro : pas de hausse de taux, éviction minime. Gain estimé par le CBO de +1 à +4 points de PIB en 2010 (multiplicateurs de 0,5 à 2,5)."]
      ])}
      ${trap("<b>Pièges :</b> une relance n'augmente le PIB de k × ΔG que si r reste fixe. Une relance monétaire ne détruit pas l'investissement (à prix fixes, elle le stimule). L'effet d'éviction n'est pas maximal mais <b>nul</b> quand LM est horizontale (trappe à liquidité).")}`,
    outro: () => qa("Les questions types de TD (CM5)", [
      ["Comment expliquer la pente de IS ?", "r ↑ → coût de financement ↑ → I ↓ → baisse propagée par le multiplicateur k → demande globale et Y ↓."],
      ["Qu'est-ce que l'effet d'éviction et comment le calcule-t-on ?", "La compression de l'investissement privé due à la hausse de r après une relance. Kelvinia : gain pur 5 × 30 = +150, gain réel 850 − 800 = +50, perte 100 Mds €, I de 40 à 20."],
      ["Quels sont les effets d'une politique monétaire expansive ?", "LM se déplace vers la droite ; r baisse (5 % → 3 %), I augmente (40 → 56) et le PIB passe de 800 à 880."]
    ]),
    ex: [
      { t: "mcq", prompt: "Une hausse des dépenses publiques (ΔG = +30) déplace…", options: ["la courbe IS vers la droite", "la courbe LM vers la droite", "la courbe IS vers la gauche", "les deux courbes vers la droite"], explain: "G fait partie de la demande sur le <b>marché des biens</b> : IS se translate vers la droite de k × ΔG = 5 × 30 = <b>+150</b>. LM est inchangée." },
      { t: "fill", sentence: "Avec G = 130, la nouvelle courbe IS de Kelvinia s'écrit Y = ___ − 4000r.", options: ["1150", "1030", "1000", "1300"], explain: "0,2Y = 20 + 80 + 130 − 800r = 230 − 800r → Y = <b>1150</b> − 4000r (décalage de +150)." },
      { t: "order", prompt: "Reconstitue l'<b>effet d'éviction</b> étape par étape.", steps: ["Hausse des dépenses publiques (ΔG = +30)", "Le revenu national augmente", "La demande de monnaie de transaction augmente", "Offre de monnaie fixe : r monte de 5 % à 7,5 %", "Le crédit renchérit : I recule de 40 à 20", "Gain de PIB limité à +50 au lieu de +150"], extra: ["Le taux d'intérêt baisse à 3 %"], explain: "C'est la <b>hausse de r</b>, provoquée par le besoin accru de monnaie, qui évince une partie de l'investissement privé." },
      { t: "mcq", prompt: "À Kelvinia, combien de PIB est <b>perdu</b> à cause de l'effet d'éviction (ΔG = +30) ?", options: ["100 Mds €", "50 Mds €", "150 Mds €", "20 Mds €"], explain: "Effet pur à taux fixe : 800 + 150 = 950. Effet réel : 850. Perte : 950 − 850 = <b>100 Mds €</b>. (20 = baisse de l'investissement ; 50 = gain réel de PIB.)" },
      { t: "spot", words: ["Une", "relance", "budgétaire", "augmente", "toujours", "le", "PIB", "de", "k", "×", "ΔG."], wrong: 4, fix: "Une relance budgétaire n'augmente le PIB de k × ΔG que si le taux d'intérêt reste fixe.", explain: "Piège n° 1 : dans IS-LM, la hausse de Y accroît la demande de monnaie, fait monter r et <b>évince</b> une partie de l'investissement privé." },
      { t: "fill", sentence: "Avec ΔM/P = +60, r baisse à 3 % et le PIB de Kelvinia passe de 800 à ___.", options: ["880", "860", "820", "950"], explain: "LM : Y = 820 + 2000r. Équilibre : 180 = 6000r → r = 3 % → Y = 820 + 60 = <b>880</b> (ΔY = +80)." },
      { t: "mcq", prompt: "Après la relance monétaire (r = 3 %), que vaut l'investissement <b>I = 80 − 800r</b> ?", options: ["56 Mds €", "40 Mds €", "20 Mds €", "64 Mds €"], explain: "I = 80 − 800 × 0,03 = 80 − 24 = <b>56</b>, contre 40 avant (ΔI = +16) : c'est l'<b>effet d'entraînement</b> (crowding-in)." },
      { t: "sort", prompt: "Ces effets relèvent-ils de la relance <b>budgétaire</b> ou de la relance <b>monétaire</b> ?", cats: [BUD, MON], items: [{ t: "IS se déplace vers la droite", c: "bud" }, { t: "r passe de 5 % à 7,5 %", c: "bud" }, { t: "Effet d'éviction (crowding-out)", c: "bud" }, { t: "LM se déplace vers la droite", c: "mon" }, { t: "r passe de 5 % à 3 %", c: "mon" }, { t: "Effet d'entraînement (crowding-in)", c: "mon" }] },
      { t: "spot", words: ["L'effet", "d'éviction", "est", "maximal", "quand", "la", "courbe", "LM", "est", "horizontale."], wrong: 3, fix: "L'effet d'éviction est nul quand la courbe LM est horizontale (trappe à liquidité).", explain: "Piège n° 4 : si LM est plate (r ≈ 0), la relance ne fait <b>pas monter les taux</b>. L'éviction est nulle et le multiplicateur joue à plein (plan Obama 2009)." },
      { t: "match", pairs: [["Reagan-Volcker (1981-1985)", "IS à droite et LM à gauche : taux proches de 20 %"], ["Dollar sous Reagan-Volcker", "+50 %, déficit commercial de 31 à 122 Mds $"], ["Japon (années 1990)", "LM plate, mais croissance atone et dette de 63 % à 180 %"], ["Adam Posen", "Mécanisme nécessaire mais non suffisant"], ["Plan Obama (ARRA, 2009)", "787 Mds $ au plancher zéro, éviction minime"]] },
      { t: "mcq", prompt: "Selon <b>Adam Posen</b>, pourquoi les relances japonaises des années 1990 ont-elles déçu ?", options: ["Dépenses effectives inférieures aux annonces, retards, hausse de TVA prématurée (1997) et manque de confiance", "Un effet d'éviction massif dû à la hausse des taux", "Une hyperinflation incontrôlée", "Des taux directeurs maintenus à 20 %"], explain: "Avec LM plate, la théorie prévoyait une efficacité maximale. Mais la mise en œuvre a failli : un mécanisme cohérent est <b>nécessaire mais non suffisant</b>." },
      { t: "mcq", prompt: "Pourquoi le <b>plan Obama</b> (2009) a-t-il subi une éviction minime ?", options: ["Le taux directeur était bloqué au plancher zéro, donc la relance n'a pas fait monter les taux", "Il était financé par une hausse d'impôts équivalente", "Les États-Unis étaient une économie fermée", "La Fed avait porté ses taux à 20 %"], explain: "Au <b>Zero Lower Bound</b>, LM est quasi horizontale : pas de hausse de r, pas d'éviction. Le CBO estime un gain de <b>+1 à +4 points</b> de PIB en 2010 (multiplicateurs de 0,5 à 2,5)." }
    ]
  }
);
})();

/* =====================================================================
   CHAPITRE 6 — CM6 (Mundell-Fleming : IS-LM en économie ouverte)
   Ajout des niveaux 12 à 14 et de la synthèse finale du cours.
   ===================================================================== */
(function () {

const defs = rows => `<table class="w-full text-sm mt-2"><tbody>${rows.map(r => `<tr class="border-t border-line"><td class="py-2 pr-3 w-2/5 font-bold align-top">${r[0]}</td><td class="py-2 text-ink/80">${r[1]}</td></tr>`).join("")}</tbody></table>`;
const grid = (head, rows) => `<div class="overflow-x-auto mt-2"><table class="w-full text-sm"><thead><tr>${head.map(h => `<th class="text-left py-2 pr-3 border-b-2 border-line font-black">${h}</th>`).join("")}</tr></thead><tbody>${rows.map(r => `<tr class="border-t border-line">${r.map((c, i) => `<td class="py-2 pr-3 align-top ${i ? "text-ink/80" : "font-bold"}">${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
const box = (bg, html) => `<div class="rounded-2xl p-3 mt-2" style="background:${bg}">${html}</div>`;
const chain = steps => box("#F7F7F7", steps.map((s, i) => `<div class="flex gap-2"><b class="shrink-0">${i + 1}.</b><span>${s}</span></div>`).join(""));
const trap = html => box("#FFDFE0", "⚠️ " + html);
const RM = "r<sub>monde</sub>";

const FIX = { id: "fix", label: "Change fixe", emoji: "📌" }, FLO = { id: "flo", label: "Change flexible", emoji: "🌊" };
const BW = { id: "bw", label: "Bretton Woods", emoji: "🏦" }, P70 = { id: "p70", label: "Post-1970", emoji: "🌐" }, EUR = { id: "eur", label: "Zone euro", emoji: "🇪🇺" };
const EFF = { id: "eff", label: "Efficace", emoji: "✅" }, INE = { id: "ine", label: "Inefficace", emoji: "❌" };
const UK = { id: "uk", label: "Royaume-Uni 1992", emoji: "🇬🇧" }, GR = { id: "gr", label: "Grèce 2010-2015", emoji: "🇬🇷" };

const TABLE_TD5 = () => grid(["Politique", "Économie fermée (CM5)", "Change fixe", "Change flexible"], [
  ["Relance budgétaire (ΔG = +30)", "Efficacité modérée (éviction par le taux) : Y 800 → 850, r 5 % → 7,5 %", "<b>PLEINE EFFICACITÉ</b> (LM accompagne IS, zéro éviction) : Y 800 → <b>950</b>, r = 5 %", "<b>INEFFICACITÉ ABSOLUE</b> (appréciation, chute de X − M) : Y 800 → <b>800</b>, r = 5 %"],
  ["Relance monétaire (ΔM/P = +60)", "Efficacité classique (entraînement) : Y 800 → 880, r 5 % → 3 %", "<b>INEFFICACITÉ ABSOLUE</b> (perte de réserves, destruction monétaire) : Y 800 → <b>800</b>, r = 5 %", "<b>PLEINE EFFICACITÉ AMPLIFIÉE</b> (IS accompagne LM) : Y 800 → <b>920</b>, r = 5 %"]
]);

const REFLEXES = [
  ["CM1 · Objectifs et rôle de l'État", "Carré de Kaldor : croissance (PIB <b>réel</b>), plein emploi (≠ 0 % de chômage), stabilité des prix (BCE ≈ 2 %), équilibre extérieur. Il est « magique » car les 4 objectifs sont incompatibles (Phillips, fuite par les importations). Musgrave : allocation, redistribution (angle mort de Kaldor), stabilisation. Taux de croissance : toujours diviser par la <b>valeur de départ</b>."],
  ["CM2 · Demande globale", "PMC (0,8, constante) ≠ PMoyC (décroissante). PMC + PMS = 1. Y* = (c0 + I)/(1 − c1) = 100/0,2 = <b>500</b>. Ajustement par les <b>quantités</b> (stocks), équilibre de sous-emploi possible."],
  ["CM3 · Multiplicateur et dette", "k = 1/(1 − c) = <b>5</b> ; k<sub>T</sub> = −c/(1 − c) = <b>−4</b> ; budget équilibré = <b>1</b> (Haavelmo) ; avec fuites k' ≈ <b>2,17</b>. Déficit = flux, dette = stock ; la dette explose si <b>r > g</b> (pas selon son niveau brut)."],
  ["CM4 · Politique monétaire", "Fisher : <b>r ≈ i − π</b>. BCE : mandat hiérarchisé (2 %) ; Fed : double mandat. Effets en <b>12 à 18 mois</b>. Kelvinia : 450 = 500 − 1000r → r* = 5 %. Le QE n'entraîne pas forcément d'inflation (réserves excédentaires)."],
  ["CM5 · IS-LM", "IS décroissante (Y = 1000 − 4000r), LM <b>croissante</b> (Y = 700 + 2000r) → Y* = 800, r* = 5 %. ΔG = +30 → Y = 850 (éviction de 100, I de 40 à 20). ΔM/P = +60 → Y = 880 (I de 40 à 56). LM plate → éviction nulle."],
  ["CM6 · Économie ouverte", "BP <b>horizontale</b> (r = r<sub>monde</sub>). Trilemme : change fixe + mobilité des capitaux + autonomie monétaire impossibles ensemble. Change fixe → le <b>budget</b> gagne (Y = 950), la monnaie est neutralisée. Change flexible → la <b>monnaie</b> gagne (Y = 920), le budget est neutralisé."]
];

window.COURSES["politique-economique"].levels.push(
  /* ---------------- NIVEAU 12 · CM6 ---------------- */
  {
    title: "Ch. 6 · Économie ouverte & trilemme", sub: "Courbe BP, régimes de change, triangle de Mundell", emoji: "🌍", c: "#2EC4B6", d: "#1FA095",
    desc: "De Kelvinia fermée à l'économie ouverte : X − M, mobilité parfaite des capitaux, BP horizontale, régimes de change et trilemme de Mundell.",
    fiche: () => `
      ${box("#E5F8FF", `<b>🧭 Les 5 piliers du CM6</b><ol class="list-decimal ml-5 mt-1 space-y-1">
        <li><b>Mobilité parfaite des capitaux</b> : r = ${RM} → courbe BP <b>horizontale</b>.</li>
        <li><b>Trilemme de Mundell</b> : impossible de cumuler change fixe, mobilité parfaite des capitaux et autonomie monétaire.</li>
        <li><b>Change fixe</b> : ajustement par M/P (interventions de la Banque centrale) → budget pleinement efficace, monnaie inopérante.</li>
        <li><b>Change flexible</b> : ajustement par X − M → monnaie ultra-efficace, budget neutralisé.</li>
        <li><b>Coût historique du change fixe</b> : crise du SME au Royaume-Uni (1992), austérité en Grèce (2010-2015).</li></ol>`)}
      <h3>Point de départ : Kelvinia fermée (CM5)</h3>
      ${defs([
        ["IS", "Y = 1000 − 4000r"],
        ["LM", "Y = 700 + 2000r"],
        ["Équilibre", "<b>Y* = 800</b> et <b>r* = 5 %</b>"]
      ])}
      <h3>Deux nouveaux vecteurs de transmission</h3>
      ${defs([
        ["Flux réels", "Biens et services : le <b>solde commercial</b> (exportations nettes X − M)."],
        ["Flux financiers", "Entrées et sorties de capitaux gouvernées par le différentiel de rendement <b>r − " + RM + "</b>."]
      ])}
      <h3>Les régimes de change</h3>
      ${grid(["Régime", "Rôle de la Banque centrale", "Ajustement"], [
        ["Change fixe", "<b>Intervention obligatoire</b> : défense d'une parité par l'achat ou la vente de réserves de devises.", "L'offre de monnaie devient <b>endogène</b>."],
        ["Change flexible", "<b>Abstention complète</b> : aucune intervention, aucune parité.", "Ajustement continu par l'offre et la demande de devises."]
      ])}
      <h3>Mobilité parfaite et courbe BP</h3>
      ${defs([
        ["Si r > " + RM, "Afflux massif et illimité de capitaux étrangers."],
        ["Si r < " + RM, "Fuite massive et intégrale des capitaux nationaux."]
      ])}
      ${box("#D7FFB8", `L'équilibre de la balance des paiements impose <b>r = ${RM} = 5 %</b> : la courbe BP est une <b>droite horizontale</b>.`)}
      <h3>Le trilemme de Mundell</h3>
      <p class="mt-1">Une économie ne peut pas atteindre simultanément ces trois objectifs ; elle doit en sacrifier un :</p>
      ${defs([
        ["1. Stabilité du change", "Régime de change fixe."],
        ["2. Libre circulation des capitaux", "Mobilité financière parfaite."],
        ["3. Autonomie monétaire", "Fixation souveraine du taux directeur."]
      ])}
      ${grid(["Période", "Choix", "Sacrifice"], [
        ["Bretton Woods (1944-1971)", "Change fixe + autonomie monétaire", "Contrôle strict de la <b>mobilité des capitaux</b>"],
        ["Post-1970 (globalisation financière)", "Mobilité des capitaux + autonomie monétaire", "Abandon du <b>change fixe</b> (changes flottants)"],
        ["Zone euro", "Monnaie unique (fixité absolue) + mobilité des capitaux", "Abandon de la <b>souveraineté monétaire</b> nationale au profit de la BCE"]
      ])}
      <h3>Les deux chaînes d'ajustement</h3>
      ${defs([
        ["Change fixe", `r ≠ ${RM} → mouvements de capitaux → pression sur la parité → intervention de la Banque centrale → <b>ΔM/P</b> (variable d'ajustement endogène).`],
        ["Change flexible", `r ≠ ${RM} → mouvements de capitaux → variation libre du taux de change → <b>Δ(X − M)</b>.`]
      ])}
      ${trap("<b>Piège n° 4 :</b> la courbe BP n'est <b>pas</b> croissante comme LM. En mobilité parfaite, r est contraint par r<sub>monde</sub> : BP est parfaitement <b>horizontale</b>.")}`,
    ex: [
      { t: "mcq", prompt: "Quels sont les <b>deux nouveaux vecteurs de transmission</b> en économie ouverte ?", options: ["Les flux réels (X − M) et les flux financiers gouvernés par r − r_monde", "La consommation et l'épargne des ménages", "Les impôts et les dépenses publiques", "L'inflation et le chômage"], explain: "L'ouverture ajoute le <b>solde commercial</b> (exportations nettes X − M) et les <b>mouvements de capitaux</b>, guidés par le différentiel de rendement entre le taux national et le taux mondial." },
      { t: "fill", sentence: "Rappel du CM5 : Kelvinia fermée est à l'équilibre avec Y* = 800 et r* = ___.", options: ["5 %", "7,5 %", "3 %", "10 %"], explain: "IS : Y = 1000 − 4000r et LM : Y = 700 + 2000r se croisent en <b>Y* = 800, r* = 5 %</b>. C'est aussi le taux mondial retenu au CM6." },
      { t: "mcq", prompt: "En parfaite mobilité des capitaux, que se passe-t-il si <b>r > r<sub>monde</sub></b> ?", options: ["Un afflux massif et illimité de capitaux étrangers", "Une fuite massive des capitaux nationaux", "Rien : les capitaux restent immobiles", "Le taux mondial s'aligne sur le taux national"], explain: "Les arbitrages sont instantanés et sans coût : un rendement national supérieur attire <b>sans limite</b> les capitaux. À l'inverse, si r < r<sub>monde</sub>, les capitaux fuient intégralement." },
      { t: "fill", sentence: "En parfaite mobilité des capitaux, la courbe BP est une droite ___ au niveau r = r_monde = 5 %.", options: ["horizontale", "verticale", "croissante", "décroissante"], explain: "L'équilibre de la balance des paiements impose <b>r = r<sub>monde</sub></b> : la BP a une élasticité infinie, c'est une droite <b>horizontale</b>." },
      { t: "spot", words: ["La", "courbe", "BP", "est", "une", "fonction", "croissante", "de", "Y."], wrong: 6, fix: "La courbe BP est une droite horizontale (r = r_monde = 5 %).", explain: "Piège n° 4 du TD 5 : BP n'est pas croissante comme LM. Avec une mobilité parfaite, le taux national est rigoureusement contraint par r<sub>monde</sub>." },
      { t: "sort", prompt: "Ces caractéristiques décrivent-elles un régime de <b>change fixe</b> ou <b>flexible</b> ?", cats: [FIX, FLO], items: [{ t: "Intervention obligatoire de la Banque centrale", c: "fix" }, { t: "Défense d'une parité avec les réserves de devises", c: "fix" }, { t: "Offre de monnaie endogène", c: "fix" }, { t: "Abstention complète de la Banque centrale", c: "flo" }, { t: "Aucun engagement de parité", c: "flo" }, { t: "Ajustement par l'offre et la demande de devises", c: "flo" }] },
      { t: "match", pairs: [["Trilemme de Mundell", "Impossible de cumuler les trois objectifs"], ["Stabilité du change", "Régime de change fixe"], ["Libre circulation des capitaux", "Mobilité financière parfaite"], ["Autonomie monétaire", "Fixation souveraine du taux directeur"], ["Courbe BP", "Équilibre de la balance des paiements"]] },
      { t: "sort", prompt: "Trilemme : à quelle période correspond chaque choix ?", cats: [BW, P70, EUR], items: [{ t: "Change fixe et autonomie monétaire", c: "bw" }, { t: "Contrôle strict des capitaux", c: "bw" }, { t: "Mobilité des capitaux et autonomie monétaire", c: "p70" }, { t: "Passage aux changes flottants", c: "p70" }, { t: "Monnaie unique et mobilité des capitaux", c: "eur" }, { t: "Politique monétaire confiée à la BCE", c: "eur" }] },
      { t: "mcq", prompt: "Dans la <b>zone euro</b>, quel sommet du trilemme a été abandonné ?", options: ["L'autonomie de la politique monétaire nationale", "La stabilité du change", "La libre circulation des capitaux", "Aucun : les trois sont atteints"], explain: "Monnaie unique (fixité absolue) + mobilité parfaite des capitaux → les États abandonnent leur <b>souveraineté monétaire</b> au profit de la BCE." },
      { t: "order", prompt: "Reconstitue la chaîne d'ajustement en <b>change fixe</b>.", steps: ["Un choc écarte r du taux mondial", "Des capitaux entrent ou sortent", "Pression sur la parité de change", "La Banque centrale intervient sur le marché des changes", "M/P varie jusqu'au retour à r = r_monde"], extra: ["Le taux de change varie librement"], explain: "En change fixe, la Banque centrale doit défendre la parité : la masse monétaire devient une <b>variable d'ajustement endogène</b>, et non plus un instrument." },
      { t: "order", prompt: "Reconstitue la chaîne d'ajustement en <b>change flexible</b>.", steps: ["r s'écarte de r_monde", "Des capitaux entrent ou sortent", "Le taux de change varie librement", "Le solde commercial (X − M) s'ajuste"], extra: ["La Banque centrale vend ses réserves"], explain: "En change flexible, la Banque centrale <b>n'intervient jamais</b> : tout l'ajustement passe par le change et les exportations nettes." },
      { t: "mcq", prompt: "<b>Bretton Woods</b> (1944-1971) a choisi change fixe et autonomie monétaire. Qu'a-t-il sacrifié ?", options: ["La mobilité des capitaux, strictement contrôlée", "L'autonomie monétaire", "La stabilité du change", "Le commerce extérieur"], explain: "Impossible d'avoir les trois : Bretton Woods a <b>limité la mobilité des capitaux</b>. Après 1970, on a fait l'inverse en abandonnant le change fixe." }
    ]
  },

  /* ---------------- NIVEAU 13 · CM6 ---------------- */
  {
    title: "Ch. 6 · Change fixe vs change flexible", sub: "Efficacité comparée des politiques", emoji: "💱", c: "#FF4B91", d: "#D93A78",
    desc: "Change fixe : budget à pleine efficacité (Y = 950), monnaie inopérante. Change flexible : budget neutralisé, monnaie amplifiée (Y = 920).",
    fiche: () => `
      <h3>Change fixe : M/P devient la variable d'ajustement</h3>
      <p class="mt-1 font-bold">Relance budgétaire (ΔG = +30) : pleine efficacité sans éviction</p>
      ${chain([
        `G : 100 → 130 : IS se déplace à droite (Y = 1150 − 4000r) → tension sur la demande de monnaie → pression à la hausse sur r (r > ${RM}).`,
        "Différentiel favorable → entrées massives de capitaux → pression d'<b>appréciation</b>.",
        "Défense de la parité → la Banque centrale <b>achète les devises</b> en émettant de la monnaie (ΔM/P > 0).",
        "<b>LM se déplace à droite</b> jusqu'au retour à r = 5 %."
      ])}
      ${box("#D7FFB8", "Aucune éviction financière (r reste à 5 %) : ΔY = k × ΔG = 5 × 30 = +150 → <b>Y : 800 → 950</b>.")}
      <p class="mt-3 font-bold">Relance monétaire (ΔM/P = +60) : inefficacité absolue</p>
      ${chain([
        `Injection de liquidités (350 → 410) → r passe sous ${RM}.`,
        "Différentiel défavorable → fuite des capitaux → pression de <b>dépréciation</b>.",
        "Défense de la parité → la Banque centrale <b>vend ses réserves</b> et rachète sa propre devise.",
        "Contraction monétaire jusqu'à résorption intégrale de l'injection."
      ])}
      ${box("#FFDFE0", "LM revient exactement à M/P = 350 : <b>Y = 800 et r = 5 %</b>, équilibre inchangé.")}
      <h3>Change flexible : X − M devient la variable d'ajustement</h3>
      <p class="mt-1 font-bold">Relance budgétaire (ΔG = +30) : neutralisation totale</p>
      ${chain([
        `Hausse de la demande globale → pression à la hausse sur r (r > ${RM}).`,
        "Entrées de capitaux → <b>forte appréciation</b> du change.",
        "Perte de compétitivité-prix → exportations ↓, importations ↑ (<b>X − M ↓</b>).",
        "La baisse des exportations nettes ramène IS vers la gauche jusqu'à annuler la relance."
      ])}
      ${box("#FFDFE0", "Éviction totale, non par les taux mais par le <b>change et le commerce extérieur</b>. LM immobile : <b>Y = 800 et r = 5 %</b>.")}
      <p class="mt-3 font-bold">Relance monétaire (ΔM/P = +60) : efficacité maximale amplifiée</p>
      ${chain([
        `M/P : 350 → 410 : LM se déplace à droite → r passe sous ${RM}.`,
        "Sorties de capitaux → <b>dépréciation</b> de la monnaie nationale.",
        "Gain de compétitivité-prix → <b>X − M ↑</b>.",
        "IS se déplace aussi à droite : <b>IS et LM bougent ensemble</b>."
      ])}
      ${box("#D7FFB8", "Y : 800 → <b>920</b> avec r = 5 %, mieux qu'en économie fermée (880).")}
      <h3>Tableau d'efficacité comparative (TD 5)</h3>
      ${TABLE_TD5()}
      ${box("#E5F8FF", "<b>Règle de symétrie de Mundell-Fleming :</b> chaque instrument atteint sa puissance maximale quand le régime de change laisse jouer son canal propre. Le <b>change fixe</b> contraint la monnaie à soutenir le budget ; le <b>change flexible</b> déploie la puissance de la monnaie via le canal commercial.")}
      ${trap("<b>Pièges n° 1 à 3 :</b> en change fixe, le budget ne subit <b>aucune</b> éviction (r reste à 5 %). En change flexible, l'inefficacité budgétaire ne vient pas d'un taux qui reste élevé : r revient à r<sub>monde</sub>, l'éviction est <b>commerciale</b>. En change flexible, une relance monétaire déplace <b>LM et IS</b>.")}`,
    ex: [
      { t: "mcq", prompt: "En <b>change fixe</b>, une relance budgétaire ΔG = +30 fait passer Y de 800 à…", options: ["950", "850", "800", "920"], explain: "La Banque centrale émet de la monnaie pour défendre la parité : LM accompagne IS, r reste à 5 %. <b>Aucune éviction</b> : ΔY = 5 × 30 = +150 → <b>950</b>. (850 = économie fermée, avec éviction.)" },
      { t: "order", prompt: "Change fixe : reconstitue la transmission d'une <b>relance budgétaire</b>.", steps: ["Hausse des dépenses publiques (G : 100 → 130)", "Pression à la hausse sur r (r > r_monde)", "Entrées massives de capitaux : pression d'appréciation", "La Banque centrale achète les devises en créant de la monnaie", "LM se déplace à droite jusqu'au retour à r = 5 %"], extra: ["Le taux reste durablement à 7,5 %"], explain: "C'est la <b>création monétaire forcée</b> qui empêche r de monter : l'offre de monnaie progresse avec IS. Le multiplicateur joue à plein (Y = 950)." },
      { t: "spot", words: ["En", "change", "fixe,", "la", "relance", "budgétaire", "subit", "une", "forte", "éviction", "financière."], wrong: 8, fix: "En change fixe, la relance budgétaire ne subit aucune éviction financière.", explain: "Piège n° 1 : l'afflux de capitaux oblige la Banque centrale à monétiser l'excédent ; M/P progresse avec IS et <b>r reste à r<sub>monde</sub> = 5 %</b>." },
      { t: "order", prompt: "Change fixe : reconstitue l'<b>auto-neutralisation</b> d'une relance monétaire.", steps: ["Injection de liquidités : r passe sous r_monde", "Fuite des capitaux : pression de dépréciation", "La Banque centrale vend ses réserves et rachète sa devise", "Contraction monétaire jusqu'à résorber l'injection", "Retour à M/P = 350 : Y = 800 et r = 5 %"], extra: ["Y monte à 920"], explain: "Pour défendre la parité, la Banque centrale <b>détruit</b> la monnaie qu'elle venait de créer : la politique monétaire est totalement <b>inopérante</b> en change fixe." },
      { t: "fill", sentence: "En change fixe, la masse monétaire M/P n'est plus un instrument mais une variable d'ajustement ___.", options: ["endogène", "exogène", "constante", "nulle"], explain: "La Banque centrale doit acheter ou vendre des devises pour tenir la parité : M/P est <b>subie</b> (endogène), elle n'est plus pilotée librement." },
      { t: "mcq", prompt: "En <b>change flexible</b>, pourquoi la relance budgétaire est-elle totalement neutralisée ?", options: ["L'appréciation du change fait chuter X − M, ce qui ramène IS vers la gauche", "Le taux d'intérêt reste durablement au-dessus du taux mondial", "La Banque centrale détruit la monnaie créée", "Les ménages épargnent toute la relance"], explain: "Entrées de capitaux → <b>appréciation</b> → perte de compétitivité-prix → X − M ↓ → IS revient à gauche. Résultat : <b>Y = 800, r = 5 %</b>. L'éviction est commerciale." },
      { t: "spot", words: ["En", "change", "flexible,", "l'inefficacité", "budgétaire", "vient", "d'un", "taux", "d'intérêt", "durablement", "élevé."], wrong: 9, fix: "En change flexible, r revient à r_monde : l'inefficacité budgétaire vient de l'appréciation du change, qui fait chuter X − M.", explain: "Piège n° 2 : le taux national <b>revient systématiquement</b> au niveau mondial. L'éviction est purement <b>commerciale</b>." },
      { t: "order", prompt: "Change flexible : reconstitue l'<b>amplification</b> d'une relance monétaire.", steps: ["Excès d'offre de monnaie : r passe sous r_monde", "Sorties de capitaux : dépréciation de la monnaie", "Gain de compétitivité-prix : X − M augmente", "IS se déplace à droite en même temps que LM", "Y passe de 800 à 920 avec r = 5 %"], extra: ["Seule la courbe LM se déplace"], explain: "La dépréciation dope les exportations nettes : IS suit LM. Le revenu (<b>920</b>) dépasse même celui de l'économie fermée (880)." },
      { t: "spot", words: ["Lors", "d'une", "relance", "monétaire", "en", "change", "flexible,", "seule", "la", "courbe", "LM", "se", "déplace."], wrong: 7, fix: "Lors d'une relance monétaire en change flexible, les courbes LM et IS se déplacent toutes deux vers la droite.", explain: "Piège n° 3 : la dépréciation redresse X − M, ce qui entraîne mécaniquement un <b>déplacement simultané de IS</b> vers la droite." },
      { t: "fill", sentence: "En change flexible, une relance monétaire ΔM/P = +60 porte le revenu de Kelvinia à Y = ___.", options: ["920", "880", "800", "950"], explain: "Y = <b>920</b> avec r = 5 %. À comparer : 880 en économie fermée (CM5), 800 en change fixe (monnaie neutralisée), 950 pour le budget en change fixe." },
      { t: "sort", prompt: "Selon Mundell-Fleming, chaque politique est-elle <b>efficace</b> ou <b>inefficace</b> ?", cats: [EFF, INE], items: [{ t: "Budget en change fixe (Y = 950)", c: "eff" }, { t: "Monnaie en change flexible (Y = 920)", c: "eff" }, { t: "Monnaie en change fixe (Y = 800)", c: "ine" }, { t: "Budget en change flexible (Y = 800)", c: "ine" }] },
      { t: "match", pairs: [["Change fixe", "La monnaie est contrainte de soutenir le budget"], ["Change flexible", "La monnaie agit via le canal commercial"], ["Variable d'ajustement en change fixe", "M/P, l'offre de monnaie"], ["Variable d'ajustement en change flexible", "X − M, le solde commercial"], ["Économie fermée, ΔG = +30", "Y = 850 avec r = 7,5 %"]] }
    ]
  },

  /* ---------------- NIVEAU 14 · CM6 ---------------- */
  {
    title: "Ch. 6 · Crises, pièges & Grand Chelem", sub: "Mercredi Noir, Grèce et révision finale", emoji: "🏆", c: "#F59E0B", d: "#C27C06",
    desc: "Le coût du change fixe (Royaume-Uni 1992, Grèce 2010-2015), le débat stabilité vs autonomie, les 4 pièges du TD 5 et une révision de tout le cours.",
    fiche: () => `
      <h3>Le coût du maintien d'un change fixe</h3>
      ${grid(["", "🇬🇧 « Mercredi Noir » (16 sept. 1992)", "🇬🇷 Grèce (2010-2015)"], [
        ["Cadre", "SME : parité fixe <b>surévaluée</b> face au Deutschemark", "Zone euro : fixité <b>irréversible</b> du change"],
        ["Déséquilibre et réaction", "Attaques spéculatives ; hausse des taux (10 % → 12 % → 15 %) et 3,3 Mds £ de réserves dépensés", "Impossible de dévaluer une monnaie propre face aux déficits jumeaux"],
        ["Issue", "Sortie forcée du SME le jour même : <b>dévaluation externe de −15 %</b> (change flottant)", "<b>Dévaluation interne</b> : austérité drastique, baisse des salaires, déflation"],
        ["Bilan", "Relance rapide de la croissance grâce à la compétitivité", "Choc récessif : PIB <b>−25 %</b>, chômage <b>27,5 %</b>"],
        ["Leçon", "Confirmation du trilemme face à des capitaux dérégulés", "Sans taux de change comme soupape, l'économie réelle absorbe <b>tout</b> le choc"]
      ])}
      <h3>Stabilité de change vs autonomie</h3>
      ${grid(["Change fixe (stabilité)", "Change flexible (autonomie)"], [
        ["Élimine le risque de change et les coûts d'incertitude", "Préserve la politique monétaire comme outil conjoncturel"],
        ["Ancrage anti-inflationniste (crédibilité importée)", "Stabilisateur automatique des chocs asymétriques, sans austérité"],
        ["Évite les dévaluations compétitives non coopératives", "Préserve les réserves de change de la Banque centrale"]
      ])}
      <h3>Les 4 pièges du TD 5</h3>
      ${defs([
        ["1. Éviction en change fixe", "FAUX de dire que le budget subit une forte éviction : la Banque centrale monétise l'afflux de capitaux, r reste à 5 %, <b>aucune éviction</b>."],
        ["2. Persistance des taux en flexible", "FAUX de dire que r reste élevé : il revient à r<sub>monde</sub>. L'éviction est <b>commerciale</b> (appréciation, X − M ↓)."],
        ["3. Déplacement unique en flexible", "FAUX de dire que seule LM bouge : la dépréciation redresse X − M et <b>IS se déplace aussi</b> à droite."],
        ["4. Pente de BP", "FAUX de dire que BP est croissante : en mobilité parfaite, elle est <b>horizontale</b> (r = r<sub>monde</sub>)."]
      ])}
      <h3>Le tableau à connaître par cœur</h3>
      ${TABLE_TD5()}`,
    outro: () => `
      <div class="mt-8 rounded-2xl p-4 text-white" style="background:#F59E0B;box-shadow:0 5px 0 #C27C06">
        <div class="text-3xl">🎓</div>
        <h2 class="text-xl font-black mt-1">Cours de politique économique terminé !</h2>
        <p class="text-sm font-semibold opacity-90">Voici les réflexes clés de chaque chapitre pour réussir l'examen.</p>
      </div>
      <div class="space-y-2 mt-3">${REFLEXES.map(r => `
        <div class="rounded-2xl border-2 border-line p-3">
          <div class="font-black">${r[0]}</div>
          <div class="text-sm text-ink/80 mt-1">${r[1]}</div>
        </div>`).join("")}</div>
      ${box("#FFF4CC", "📝 <b>Méthode le jour J :</b> pose les données de Kelvinia, écris l'équation avant de calculer, vérifie le signe et le dénominateur, et termine toujours par une phrase d'interprétation économique (quel canal, quel effet, quelle limite).")}`,
    ex: [
      { t: "sort", prompt: "Royaume-Uni 1992 ou Grèce 2010-2015 ?", cats: [UK, GR], items: [{ t: "Parité surévaluée face au Deutschemark (SME)", c: "uk" }, { t: "Taux relevés de 10 % à 12 % puis 15 %", c: "uk" }, { t: "Dévaluation externe de −15 %", c: "uk" }, { t: "Fixité irréversible du change (zone euro)", c: "gr" }, { t: "Baisse autoritaire des salaires", c: "gr" }, { t: "PIB −25 % et chômage à 27,5 %", c: "gr" }] },
      { t: "mcq", prompt: "Comment s'est dénoué le <b>« Mercredi Noir »</b> du 16 septembre 1992 ?", options: ["Par la sortie forcée du SME et une dévaluation de −15 % via le change flottant", "Par le maintien de la parité grâce aux réserves de change", "Par l'adhésion immédiate du Royaume-Uni à la zone euro", "Par une dévaluation interne fondée sur la baisse des salaires"], explain: "Malgré la hausse des taux (jusqu'à 15 %) et 3,3 Mds £ de réserves dépensés, la parité a cédé. La <b>dévaluation externe</b> a ensuite relancé rapidement la croissance britannique." },
      { t: "fill", sentence: "Ne pouvant pas dévaluer, la Grèce a subi une dévaluation ___ : austérité, baisse des salaires et déflation.", options: ["interne", "externe", "compétitive", "monétaire"], explain: "Dans la zone euro, le change est fixé de façon <b>irréversible</b> : faute de soupape monétaire, l'ajustement passe par les salaires et les prix (<b>dévaluation interne</b>)." },
      { t: "order", prompt: "Reconstitue l'enchaînement de la <b>crise grecque</b> (2010-2015).", steps: ["Fixité irréversible du change dans la zone euro", "Impossible de dévaluer face aux déficits jumeaux", "Dévaluation interne : austérité, baisse des salaires, déflation", "Choc récessif : PIB −25 % et chômage à 27,5 %"], extra: ["Dévaluation externe de −15 %"], explain: "La dévaluation externe de −15 % est la solution <b>britannique</b> de 1992. La Grèce n'avait pas cette soupape : l'économie réelle a absorbé tout le choc." },
      { t: "mcq", prompt: "Quel <b>enseignement</b> le CM6 tire-t-il de la crise grecque ?", options: ["Sans taux de change comme soupape, l'économie réelle absorbe tout le choc", "Le change fixe protège toujours la croissance", "La dévaluation interne est indolore pour l'emploi", "La BCE peut dévaluer la monnaie d'un seul pays membre"], explain: "Le change fixe a un <b>coût</b> : en cas de choc, ce sont la production, les salaires et l'emploi qui s'ajustent (PIB −25 %, chômage 27,5 %)." },
      { t: "sort", prompt: "Cet argument plaide-t-il pour le <b>change fixe</b> ou pour le <b>change flexible</b> ?", cats: [FIX, FLO], items: [{ t: "Élimine le risque de change", c: "fix" }, { t: "Ancrage anti-inflationniste importé", c: "fix" }, { t: "Évite les dévaluations compétitives", c: "fix" }, { t: "Préserve l'autonomie monétaire", c: "flo" }, { t: "Absorbe les chocs asymétriques sans austérité", c: "flo" }, { t: "Préserve les réserves de change", c: "flo" }] },
      { t: "mcq", prompt: "Vrai ou faux : « En change fixe, la relance budgétaire subit une forte éviction par les taux. »", options: ["Faux : la Banque centrale monétise l'afflux de capitaux, r reste à 5 % et il n'y a aucune éviction", "Vrai : r monte à 7,5 % comme en économie fermée", "Vrai : la monnaie se déprécie et l'investissement chute", "Faux : la relance est neutralisée par la chute de X − M"], explain: "Piège n° 1. La dernière option décrit le <b>change flexible</b>, pas le change fixe. En change fixe, LM accompagne IS et Y monte à <b>950</b>." },
      { t: "spot", words: ["En", "change", "flexible,", "l'éviction", "budgétaire", "passe", "par", "le", "taux", "d'intérêt."], wrong: 9, fix: "En change flexible, l'éviction budgétaire passe par le taux de change (appréciation) et la chute de X − M.", explain: "Piège n° 2 : r revient à r<sub>monde</sub>. C'est l'<b>appréciation du change</b> qui détériore les exportations nettes et annule la relance." },
      { t: "mcq", prompt: "Lors d'une relance monétaire en <b>change flexible</b>, quelles courbes se déplacent ?", options: ["LM, puis IS, toutes deux vers la droite", "Seulement LM, vers la droite", "Seulement IS, vers la gauche", "BP, vers le haut"], explain: "Piège n° 3 : la dépréciation dope X − M, donc <b>IS suit LM</b> vers la droite. BP ne bouge pas : elle reste horizontale à r<sub>monde</sub>." },
      { t: "mcq", prompt: "Quelle est la forme de la <b>courbe BP</b> en parfaite mobilité des capitaux ?", options: ["Une droite horizontale à r = r_monde", "Une droite croissante, comme LM", "Une droite verticale", "Une courbe décroissante, comme IS"], explain: "Piège n° 4 : le taux national est contraint par le taux mondial, d'où une BP <b>horizontale</b> à 5 %." },
      { t: "match", pairs: [["Nicholas Kaldor (1970)", "Carré magique : 4 objectifs"], ["Richard Musgrave (1959)", "Allocation, redistribution, stabilisation"], ["Tjalling Haavelmo (1945)", "Multiplicateur de budget équilibré = 1"], ["John Hicks (1937)", "Modèle IS-LM"], ["Mundell-Fleming", "IS-LM en économie ouverte"]] },
      { t: "fill", sentence: "Tableau du TD 5 : budget en change fixe → Y = 950 ; monnaie en change flexible → Y = ___.", options: ["920", "880", "800", "850"], explain: "Règle de symétrie : chaque instrument est maximal quand le régime laisse jouer son canal. Monnaie + change flexible → <b>920</b> ; budget + change fixe → 950. Les deux autres combinaisons donnent 800." }
    ]
  }
);
})();
