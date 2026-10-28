/* =====================================================================
   COURS : SOCIOLOGIE GÉNÉRALE (L1 AEI)
   Enregistré dans window.COURSES['sociologie'].
   Convention : pour mcq et fill, options[0] est TOUJOURS la bonne réponse (mélangée à l'affichage).
   Pour order, `steps` = étapes dans le bon ordre (chaque étape est une carte), `extra` = intrus.
   Les chapitres suivants s'ajoutent en fin de fichier avec
   window.COURSES['sociologie'].levels.push(...)
   ===================================================================== */
window.COURSES = window.COURSES || {};

/* =====================================================================
   CHAPITRE 1 — L'invention et la construction de la sociologie (CM1 + CM2)
   ===================================================================== */
(function () {

const defs = rows => `<table class="w-full text-sm mt-2"><tbody>${rows.map(r => `<tr class="border-t border-line"><td class="py-2 pr-3 w-2/5 font-bold align-top">${r[0]}</td><td class="py-2 text-ink/80">${r[1]}</td></tr>`).join("")}</tbody></table>`;
const grid = (head, rows) => `<div class="overflow-x-auto mt-2"><table class="w-full text-sm"><thead><tr>${head.map(h => `<th class="text-left py-2 pr-3 border-b-2 border-line font-black">${h}</th>`).join("")}</tr></thead><tbody>${rows.map(r => `<tr class="border-t border-line">${r.map((c, i) => `<td class="py-2 pr-3 align-top ${i ? "text-ink/80" : "font-bold"}">${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
const box = (bg, html) => `<div class="rounded-2xl p-3 mt-2" style="background:${bg}">${html}</div>`;
const quote = (src, txt) => box("#F7F7F7", `<div class="text-xs font-extrabold uppercase tracking-wide text-ink/50">${src}</div><div class="italic mt-1">« ${txt} »</div>`);
const trap = html => box("#FFDFE0", "⚠️ " + html);

const PHI = { id: "phi", label: "Philosophie", emoji: "🏛️" }, SOC = { id: "soc", label: "Sociologie", emoji: "👥" };
const ANT = { id: "ant", label: "Antiquité", emoji: "🏺" }, XIX = { id: "xix", label: "XIXe siècle", emoji: "🏭" };
const TRA = { id: "tra", label: "Société traditionnelle", emoji: "⛪" }, MOD = { id: "mod", label: "Société moderne", emoji: "🚂" };
const POL = { id: "pol", label: "Politique", emoji: "🗳️" }, ECO = { id: "eco", label: "Économique", emoji: "🏭" }, CUL = { id: "cul", label: "Culturelle", emoji: "📚" };
const EMP = { id: "emp", label: "Empirique", emoji: "🔎" }, THE = { id: "the", label: "Théorique", emoji: "🧠" };
const QUAL = { id: "qual", label: "Qualitatif", emoji: "🗣️" }, QUAN = { id: "quan", label: "Quantitatif", emoji: "📊" };
const ARI = { id: "ari", label: "Aristocratique", emoji: "👑" }, DEM = { id: "dem", label: "Démocratique", emoji: "🤝" };
const ORD = { id: "ord", label: "Société d'ordres", emoji: "🏰" }, CLS = { id: "cls", label: "Société de classes", emoji: "⚙️" };
const TOC = { id: "toc", label: "Tocqueville", emoji: "🇺🇸" }, MAR = { id: "mar", label: "Marx", emoji: "✊" };

const EXPRESS = [
  ["Définition", "Sociologie = science <b>empirique et théorique</b> de la société."],
  ["Naissance", "Fin du <b>XIXe siècle</b> (années 1880-1890)."],
  ["Fondateurs", "<b>Émile Durkheim</b> (France), <b>Max Weber</b> (Allemagne), <b>École de Chicago</b> (États-Unis)."],
  ["Distinctions clés", "Philosophie = ce qui <b>devrait être</b> ; sociologie = ce qui <b>est</b>. Psychologie = l'individu de l'<b>intérieur</b> ; sociologie = l'individu de l'<b>extérieur</b>."],
  ["3 ruptures de la modernité", "<b>Politique</b> (démocratie, société auto-instituée), <b>économique</b> (révolution industrielle, classes, exode rural), <b>culturelle</b> (sécularisation, pluralisme, autonomie)."],
  ["2 défis de la sociologie naissante", "La <b>régulation sociale</b> (faire tenir la société) et l'<b>action politique rationnelle</b> (connaissance empirique + théorique pour guider les réformes)."],
  ["Pionniers de l'enquête", "Villermé (1840), Le Play (1855), Ducpétiaux (1841), Engels (1845), Booth (1886-1903)."],
  ["Tocqueville vs Marx", "Égalisation des conditions vs lutte des classes ; tyrannie de la majorité vs aliénation ; réformer vs transformer le monde."]
];

window.COURSES.sociologie = {
  id: "sociologie",
  title: "Sociologie",
  icon: "👥",
  color: "#CE82FF",
  unit: { label: "Chapitres 1 et 2 · Sociologie générale (L1 AEI)", title: "De l'invention de la sociologie à Durkheim", sub: "Modernité, enquêtes, Tocqueville, Marx et méthode durkheimienne" },
  mascot: "🧑‍🎓",
  matchHint: "Touche un concept ou un auteur à gauche puis sa définition — ou fais-le glisser dessus.",
  levels: [
    /* ---------------- NIVEAU 1 · CM1 ---------------- */
    {
      title: "Ch. 1 · Qu'est-ce que la sociologie ?", sub: "Définition et place parmi les sciences humaines", emoji: "🔬", c: "#CE82FF", d: "#A568CC",
      desc: "La définition de la sociologie, sa naissance tardive, ses fondateurs et ce qui la distingue de la philosophie, de l'histoire, du droit ou de la psychologie.",
      fiche: () => `
        <h3>Qu'est-ce que la sociologie ?</h3>
        <p class="mt-1">Littéralement, la <b>science de la société</b>. Elle étudie de façon <b>rigoureuse, empirique et théorique</b> les phénomènes sociaux : relations entre individus, groupes sociaux, normes, structures et institutions qui organisent la vie collective.</p>
        <h3>Une discipline jeune</h3>
        <p class="mt-1">Contrairement à la philosophie ou à l'histoire, elle naît tardivement, à la <b>fin du XIXe siècle</b> (décennie 1880-1890) :</p>
        ${defs([
          ["France", "Émile <b>Durkheim</b>"],
          ["Allemagne", "Max <b>Weber</b>"],
          ["États-Unis", "L'<b>École de Chicago</b>"]
        ])}
        <h3>La sociologie face aux autres disciplines</h3>
        ${grid(["Discipline", "Apparition", "Objet", "Différence avec la sociologie"], [
          ["Philosophie", "Antiquité grecque (Platon, Aristote)", "Réflexion normative : justice, morale, cité idéale, contrat social", "Spéculative et <b>prescriptive</b> (ce qui <i>devrait être</i>) ; la sociologie est <b>empirique et descriptive</b> (ce qui <i>est</i>)."],
          ["Histoire", "Antiquité (Hérodote, Thucydide)", "Récit et analyse critique des événements passés", "Singularité et chronologie ; la sociologie dégage des <b>régularités</b> et lois de fonctionnement."],
          ["Géographie", "Antiquité (Strabon, Ératosthène)", "Organisation spatiale, répartition des hommes, milieu physique", "Dimension <b>spatiale</b>, pas les rapports sociaux eux-mêmes."],
          ["Droit", "Antiquité (droit romain)", "Règles formelles, codes et lois", "La <b>norme écrite</b> ; la sociologie étudie les <b>pratiques effectives</b> et les transgressions."],
          ["Biologie / Médecine", "Antiquité (Hippocrate)", "Corps humain, organismes vivants, pathologies", "L'<b>organisme</b>, pas les structures sociales."],
          ["Psychologie", "Début du XIXe siècle", "Psychisme, comportement individuel, affects", "L'individu « de l'<b>intérieur</b> » ; la sociologie l'étudie « de l'<b>extérieur</b> », déterminé par son milieu."]
        ])}
        ${trap("<b>À retenir pour le QCM :</b> philosophie = ce qui devrait être (normatif) ; sociologie = ce qui est (descriptif / explicatif). Psychologie = intérieur ; sociologie = extérieur.")}`,
      ex: [
        { t: "mcq", prompt: "Comment se définit la <b>sociologie</b> ?", options: ["La science de la société, qui étudie de façon rigoureuse, empirique et théorique les phénomènes sociaux", "Une réflexion normative sur la cité idéale et la justice", "Le récit critique des événements singuliers du passé", "L'étude du fonctionnement psychique de l'individu"], explain: "La sociologie est la <b>science de la société</b> : elle étudie les relations entre individus, les groupes, les normes, les structures et les institutions qui organisent la vie collective." },
        { t: "fill", sentence: "La sociologie est une discipline jeune, née à la fin du ___ siècle (décennie 1880-1890).", options: ["XIXe", "XVIIIe", "XVIIe", "XXe"], explain: "Elle naît tardivement, à la <b>fin du XIXe siècle</b>, contrairement à la philosophie ou à l'histoire, qui remontent à l'Antiquité." },
        { t: "match", pairs: [["Émile Durkheim", "Fondateur de la sociologie en France"], ["Max Weber", "Fondateur de la sociologie en Allemagne"], ["École de Chicago", "Naissance de la sociologie aux États-Unis"], ["Philosophie", "Ce qui devrait être (normatif)"], ["Sociologie", "Ce qui est (descriptif)"]] },
        { t: "sort", prompt: "Ces caractéristiques relèvent-elles de la <b>philosophie</b> ou de la <b>sociologie</b> ?", cats: [PHI, SOC], items: [{ t: "Raisonnement spéculatif et prescriptif", c: "phi" }, { t: "Réflexion sur la cité idéale", c: "phi" }, { t: "Ce qui devrait être", c: "phi" }, { t: "Science empirique et descriptive", c: "soc" }, { t: "Ce qui est", c: "soc" }, { t: "Dégage des régularités sociales", c: "soc" }] },
        { t: "mcq", prompt: "Qu'est-ce qui distingue la sociologie de l'<b>histoire</b> ?", options: ["L'histoire se focalise sur la singularité des contextes passés ; la sociologie dégage des régularités", "L'histoire est une science récente née au XIXe siècle", "La sociologie n'étudie que les sociétés du passé", "L'histoire étudie l'individu de l'intérieur"], explain: "L'histoire (Hérodote, Thucydide) s'attache à la <b>singularité</b> et à la <b>chronologie</b> ; la sociologie cherche des <b>récurrences, régularités et lois</b> de fonctionnement social." },
        { t: "mcq", prompt: "Par rapport à la psychologie, comment la sociologie étudie-t-elle l'individu ?", options: ["De l'extérieur, pris dans des réseaux sociaux et déterminé par son milieu", "De l'intérieur : cognition, émotions, inconscient", "Uniquement sous l'angle de son organisme biologique", "À travers les codes juridiques qui le régissent"], explain: "La psychologie étudie l'individu « de l'<b>intérieur</b> » ; la sociologie l'étudie « de l'<b>extérieur</b> », dans ses réseaux sociaux et son milieu." },
        { t: "spot", words: ["La", "psychologie", "est", "apparue", "dans", "l'Antiquité", "grecque."], wrong: 5, fix: "La psychologie est apparue au début du XIXe siècle.", explain: "Philosophie, histoire, géographie, droit et médecine remontent à l'Antiquité. La <b>psychologie</b> naît au <b>début du XIXe siècle</b>, la sociologie à la fin du XIXe." },
        { t: "mcq", prompt: "Le droit étudie la norme écrite. À quoi s'intéresse la <b>sociologie</b> ?", options: ["Aux pratiques effectives, à l'application réelle des règles et aux transgressions", "Aux codes juridiques du droit romain", "À la légalité formelle des lois", "À la répartition spatiale des populations"], explain: "Le droit étudie la <b>légalité formelle</b> ; la sociologie s'intéresse à ce qui se passe réellement : application des règles et <b>transgressions</b>." },
        { t: "mcq", prompt: "Quelle discipline analyse prioritairement la <b>dimension spatiale et territoriale</b> ?", options: ["La géographie", "La sociologie", "Le droit", "La psychologie"], explain: "La géographie (Strabon, Ératosthène) étudie l'organisation spatiale du globe et le milieu physique, <b>pas les rapports sociaux en eux-mêmes</b>." },
        { t: "sort", prompt: "Quand ces disciplines sont-elles apparues ?", cats: [ANT, XIX], items: [{ t: "Philosophie", c: "ant" }, { t: "Histoire", c: "ant" }, { t: "Droit", c: "ant" }, { t: "Géographie", c: "ant" }, { t: "Psychologie", c: "xix" }, { t: "Sociologie", c: "xix" }] },
        { t: "order", prompt: "Remets ces disciplines dans l'<b>ordre chronologique</b> de leur apparition.", steps: ["Philosophie, histoire, droit (Antiquité)", "Psychologie (début du XIXe siècle)", "Sociologie (fin du XIXe siècle)"], extra: ["Sociologie (Antiquité grecque)"], explain: "La sociologie est la <b>plus jeune</b> : elle apparaît dans les années 1880-1890, après la psychologie (début du XIXe)." },
        { t: "spot", words: ["La", "sociologie", "est", "une", "science", "prescriptive", "qui", "dit", "ce", "qui", "devrait", "être."], wrong: 5, fix: "La sociologie est une science descriptive et explicative : elle étudie ce qui est.", explain: "C'est la <b>philosophie</b> qui est prescriptive (ce qui devrait être). La sociologie est <b>empirique et descriptive</b>." }
      ]
    },

    /* ---------------- NIVEAU 2 · CM1 ---------------- */
    {
      title: "Ch. 1 · Les ruptures de la modernité", sub: "Pourquoi la sociologie naît-elle ?", emoji: "🌪️", c: "#1CB0F6", d: "#1899D6",
      desc: "Société traditionnelle vs moderne, les trois ruptures (politique, économique, culturelle) et les deux défis de la sociologie naissante.",
      fiche: () => `
        <h3>Une science née d'une crise</h3>
        <p class="mt-1">La sociologie n'apparaît pas par simple curiosité intellectuelle : elle est le fruit de la <b>crise de passage</b> de la société traditionnelle à la société moderne.</p>
        ${grid(["Société traditionnelle", "Société moderne"], [
          ["Stabilité, reproduction à l'identique", "Mouvement permanent, innovation"],
          ["Ordre divin ou coutumier", "Remise en cause des hiérarchies établies"],
          ["Hiérarchies naturelles et immuables", "Accélération sans précédent du <b>changement social</b>"]
        ])}
        <h3>Les trois ruptures interdépendantes</h3>
        ${defs([
          ["1. Rupture politique : l'avènement démocratique", "Révolution américaine (<b>1776</b>), Révolution française (<b>1789</b>), régimes parlementaires au XIXe. Fin du <b>droit divin</b> : le pouvoir émane du choix des gouvernés. Égalité en droit et libertés. La société devient <b>« instituée » par les hommes</b> : lois et institutions peuvent être débattues et modifiées. Questions : comment gouverner des hommes libres et égaux ? Qu'est-ce qu'une loi légitime ?"],
          ["2. Rupture économique : industrialisation et capitalisme", "Révolution industrielle (fin XVIIIe en Grande-Bretagne, puis XIXe en Europe). Croissance continue, <b>division accrue du travail</b> (hyperspécialisation, interdépendance). <b>Exode rural</b> et urbanisation. Classes antagonistes : <b>bourgeoisie</b> (détient le capital) vs <b>prolétariat</b> (ne possède que sa force de travail). Émergence de la <b>question sociale</b> : misère, exploitation, insalubrité."],
          ["3. Rupture culturelle : sécularisation et pluralisme", "<b>Sécularisation</b> : recul de la religion sur la vie publique ; la croyance devient une <b>affaire privée</b>. <b>Pluralisme axiologique</b> : l'individu gagne en autonomie, des visions du monde concurrentes coexistent et entrent en tension."]
        ])}
        <h3>Les deux interrogations fondatrices</h3>
        ${defs([
          ["1. La régulation sociale", "Qu'est-ce qui maintient le <b>lien social</b> entre des individus libres et autonomes ? Comment éviter « la guerre de tous contre tous » ? Comment concilier <b>libertés individuelles</b> et <b>contraintes collectives</b> sans tomber dans l'autoritarisme ?"],
          ["2. L'éclairage de l'action politique", "La société, œuvre humaine, peut être réformée. Or <i>on ne peut transformer efficacement et justement ce qu'on ne comprend pas</i> : la politique a besoin d'une connaissance scientifique des faits sociaux."]
        ])}
        ${grid(["Démarche empirique", "Démarche théorique"], [
          ["Observer le réel avec des outils rigoureux : statistiques, données chiffrées, observations, entretiens", "Construire des concepts, des grilles de lecture et des modèles d'interprétation"],
          ["Mesurer les inégalités, la pauvreté, la criminalité…", "Expliquer les lois objectives des comportements collectifs"]
        ])}
        <p class="mt-2 text-sm">Ces deux démarches sont <b>doubles et indissociables</b>.</p>`,
      ex: [
        { t: "mcq", prompt: "D'où vient la sociologie, selon le cours ?", options: ["De la crise de passage de la société traditionnelle à la société moderne", "D'une simple curiosité intellectuelle", "De la philosophie grecque antique", "Des progrès de la médecine"], explain: "La sociologie est le <b>fruit d'une crise</b> : le basculement vers la modernité rend la société illisible et anxiogène, et il faut la comprendre." },
        { t: "sort", prompt: "Ces traits caractérisent-ils la société <b>traditionnelle</b> ou <b>moderne</b> ?", cats: [TRA, MOD], items: [{ t: "Stabilité et reproduction à l'identique", c: "tra" }, { t: "Ordre divin ou coutumier", c: "tra" }, { t: "Hiérarchies naturelles et immuables", c: "tra" }, { t: "Mouvement permanent et innovation", c: "mod" }, { t: "Remise en cause des hiérarchies", c: "mod" }, { t: "Accélération du changement social", c: "mod" }] },
        { t: "sort", prompt: "À quelle <b>rupture de la modernité</b> rattacher chaque élément ?", cats: [POL, ECO, CUL], items: [{ t: "Souveraineté du peuple", c: "pol" }, { t: "Égalité de droit", c: "pol" }, { t: "Division du travail", c: "eco" }, { t: "Urbanisation et classes sociales", c: "eco" }, { t: "Recul du religieux", c: "cul" }, { t: "Pluralisme des valeurs", c: "cul" }] },
        { t: "fill", sentence: "Avec la rupture politique, le pouvoir ne repose plus sur le droit ___ : il émane du choix des gouvernés.", options: ["divin", "romain", "naturel", "coutumier"], explain: "Fin du <b>droit divin</b> : le pouvoir ne descend plus du ciel vers les hommes. La société devient <b>« instituée » par les hommes</b>." },
        { t: "mcq", prompt: "Quels <b>repères historiques</b> marquent la rupture politique ?", options: ["La Révolution américaine (1776) et la Révolution française (1789)", "La Révolution industrielle en Grande-Bretagne", "L'exode rural du XIXe siècle", "La chute de l'Empire romain"], explain: "1776, 1789 et la montée des régimes parlementaires au XIXe siècle. La Révolution industrielle relève de la rupture <b>économique</b>." },
        { t: "order", prompt: "Reconstitue l'enchaînement de la <b>rupture économique</b>.", steps: ["Révolution industrielle et essor du capitalisme", "Exode rural et urbanisation massive", "Naissance de classes antagonistes : bourgeoisie et prolétariat", "Émergence de la question sociale : misère, exploitation, insalubrité"], extra: ["Recul de la religion dans la vie publique"], explain: "Le recul de la religion relève de la rupture <b>culturelle</b> (sécularisation), pas de la rupture économique." },
        { t: "match", pairs: [["Sécularisation", "Recul de la religion sur la vie publique"], ["Pluralisme axiologique", "Multiplicité des valeurs et visions du monde"], ["Société instituée", "Lois et institutions modifiables par les hommes"], ["Division du travail", "Hyperspécialisation et interdépendance"], ["Question sociale", "Misère urbaine et exploitation ouvrière"]] },
        { t: "mcq", prompt: "Qu'est-ce qui sépare la <b>bourgeoisie</b> du <b>prolétariat</b> ?", options: ["La bourgeoisie détient le capital ; le prolétariat ne possède que sa force de travail", "La bourgeoisie vit à la campagne, le prolétariat en ville", "Le prolétariat détient les usines et les machines", "Leurs croyances religieuses"], explain: "Le clivage repose sur la <b>propriété du capital</b> (usines, machines) : le prolétariat ouvrier n'a que sa <b>force de travail</b>." },
        { t: "spot", words: ["Avec", "la", "sécularisation,", "la", "croyance", "religieuse", "devient", "une", "affaire", "publique."], wrong: 9, fix: "Avec la sécularisation, la croyance religieuse devient une affaire privée.", explain: "La religion recule de la vie publique : la croyance devient <b>privée</b> et la société perd son ciment transcendantal unique." },
        { t: "mcq", prompt: "En quoi consiste le problème de la <b>régulation sociale</b> ?", options: ["Comprendre ce qui maintient le lien social entre des individus libres et autonomes", "Mesurer la production industrielle", "Définir la cité idéale", "Rétablir l'ordre divin"], explain: "Comment faire tenir la société sans tomber dans « la guerre de tous contre tous » ? Il faut concilier <b>libertés individuelles</b> et <b>contraintes collectives</b>." },
        { t: "fill", sentence: "Principe fondamental : on ne peut transformer efficacement et justement ce qu'on ne ___ pas.", options: ["comprend", "finance", "contrôle", "possède"], explain: "D'où le second défi de la sociologie : <b>éclairer l'action politique</b> par une connaissance scientifique des faits sociaux." },
        { t: "sort", prompt: "Ces outils relèvent-ils de la démarche <b>empirique</b> ou <b>théorique</b> ?", cats: [EMP, THE], items: [{ t: "Statistiques et données chiffrées", c: "emp" }, { t: "Observations directes et entretiens", c: "emp" }, { t: "Mesurer la pauvreté et les inégalités", c: "emp" }, { t: "Construire des concepts", c: "the" }, { t: "Élaborer des grilles de lecture", c: "the" }, { t: "Bâtir des modèles d'interprétation", c: "the" }] }
      ]
    },

    /* ---------------- NIVEAU 3 · CM2 ---------------- */
    {
      title: "Ch. 1 · Les premières enquêtes", sub: "Statistiques, romans sociaux et pionniers", emoji: "🔍", c: "#58CC02", d: "#58A700",
      desc: "Connaître → interpréter → représenter → agir : statistiques d'État et leurs biais, Zola et Hugo, et les pionniers Villermé, Le Play, Ducpétiaux, Engels et Booth.",
      fiche: () => `
        <h3>La démarche de la sociologie appliquée</h3>
        ${box("#F7F7F7", "<b>Connaître → Interpréter → Représenter → Agir</b>")}
        <h3>Typologie des savoirs</h3>
        ${defs([
          ["Empirique", "Fondé sur l'observation, la collecte et l'expérimentation sur le terrain."],
          ["Théorique", "Construction de modèles, d'hypothèses et de grilles explicatives."],
          ["Qualitatif", "Descriptions fines, monographies, entretiens approfondis, observations ethnographiques."],
          ["Quantitatif", "Recensements, mesures chiffrées, séries statistiques, indicateurs numériques."]
        ])}
        <h3>La statistique, instrument de gouvernement</h3>
        <p class="mt-1">Étymologiquement la « <b>science de l'État</b> » (<i>Statistik</i>) : dénombrer, administrer, réguler et contrôler les populations.</p>
        ${defs([
          ["XVIIIe siècle", "Premiers dénombrements fiscaux et recensements de population."],
          ["XIXe siècle", "Statistiques thématiques : industrie, agriculture, hygiène, scolarisation, justice. Ex. : contrôle de l'obligation scolaire en croisant état civil et effectifs scolaires."]
        ])}
        ${trap("<b>Piège d'examen :</b> une hausse statistique ne traduit pas forcément une hausse réelle. La hausse des plaintes pour agressions sexuelles reflète souvent la <b>libération de la parole</b>, un meilleur accueil des victimes et une requalification juridique. Tout indicateur est <b>inséparable du projet politique et institutionnel</b> qui l'a fabriqué.")}
        <h3>Le roman social comme pré-sociologie</h3>
        ${defs([
          ["Zola · <i>Germinal</i>", "Travail au fond des mines, précarité des mineurs, grèves."],
          ["Zola · <i>Au Bonheur des Dames</i>", "Grands magasins, salariat précaire, consommation de masse."],
          ["Zola · <i>La Bête humaine</i>", "Déterminismes sociaux, familiaux et biologiques."],
          ["Hugo · <i>Les Misérables</i>", "Misère urbaine, relégation, criminalisation de la pauvreté."],
          ["Hugo · <i>Mélancholia</i>", "Réquisitoire contre l'exploitation des enfants."]
        ])}
        ${box("#E5F8FF", "<b>Rupture épistémologique du XIXe siècle :</b> les dysfonctionnements sociaux ne sont plus des fatalités divines ou des vices individuels, mais des <b>problèmes sociaux objectifs</b>, analysables avec rigueur et neutralité.")}
        <h3>Les pionniers de l'enquête empirique</h3>
        ${grid(["Auteur", "Ouvrage", "Terrain", "Apport"], [
          ["Louis-René Villermé (1782-1863)", "<i>Tableau de l'état physique et moral des ouvriers…</i> (1840)", "France, manufactures textiles", "Médecin hygiéniste ; enquête médico-sociale <i>in situ</i>. Lois de <b>1841</b> (pas de travail avant 8 ans), <b>1850</b> (logements insalubres), <b>1874</b> (pas de travail industriel avant 12 ans)."],
          ["Frédéric Le Play (1806-1882)", "<i>Les Ouvriers européens</i> (1855)", "Europe", "Ingénieur des mines ; <b>méthode monographique</b> (36 familles), budgets ouvriers. Limite : visée morale réactionnaire, déficit de <b>neutralité axiologique</b>."],
          ["Édouard Ducpétiaux (1804-1868)", "Rapport sur la salubrité publique (1841)", "Belgique, Bruxelles", "<b>Questionnaire standardisé en 26 items</b> ; préfigure les lois d'Ernst Engel (part alimentaire ↓ quand le revenu ↑). Repris par Marx : ouvriers payés moins que l'entretien d'un <b>détenu</b>."],
          ["Friedrich Engels (1820-1895)", "<i>La Situation de la classe laborieuse en Angleterre</i> (1845)", "Manchester", "<b>Observation participante</b>, statistiques locales et critique de l'aliénation capitaliste."],
          ["Charles Booth (1840-1916)", "<i>Life and Labour of the People in London</i> (1886-1903, 17 vol.)", "Londres", "<b>Poverty maps</b> : pauvreté rue par rue, ségrégation sociospatiale."]
        ])}
        ${quote("Villermé, postulat méthodologique", "Examiner les effets de l'industrie sur ceux qu'elle emploie, interroger la misère sans l'humilier, observer l'inconduite sans l'imiter")}`,
      ex: [
        { t: "order", prompt: "Remets dans l'ordre la <b>démarche de la sociologie appliquée</b>.", steps: ["Connaître", "Interpréter", "Représenter", "Agir"], extra: ["Juger"], explain: "On part de la <b>connaissance</b> des faits pour aboutir à l'<b>action</b> : la sociologie sert aussi à éclairer les réformes." },
        { t: "sort", prompt: "Ces méthodes sont-elles <b>qualitatives</b> ou <b>quantitatives</b> ?", cats: [QUAL, QUAN], items: [{ t: "Monographies", c: "qual" }, { t: "Entretiens approfondis", c: "qual" }, { t: "Observations ethnographiques", c: "qual" }, { t: "Recensements", c: "quan" }, { t: "Séries statistiques", c: "quan" }, { t: "Indicateurs numériques", c: "quan" }] },
        { t: "fill", sentence: "Étymologiquement, la statistique est la « science de l'___ ».", options: ["État", "économie", "individu", "enquête"], explain: "<i>Statistik</i> : la <b>science de l'État</b>, un instrument pour dénombrer, administrer, réguler et contrôler les populations." },
        { t: "spot", words: ["Une", "hausse", "des", "plaintes", "enregistrées", "prouve", "une", "hausse", "réelle", "des", "délits."], wrong: 5, fix: "Une hausse des plaintes enregistrées ne prouve pas une hausse réelle des délits.", explain: "Piège d'examen : la hausse des plaintes pour agressions sexuelles reflète souvent la <b>libération de la parole</b>, un meilleur accueil des victimes et une requalification juridique." },
        { t: "mcq", prompt: "Selon la règle sociologique du cours, tout indicateur statistique est…", options: ["inséparable du projet politique et institutionnel qui l'a fabriqué", "un reflet neutre et exact de la réalité", "sans intérêt pour la sociologie", "produit uniquement par des sociologues"], explain: "Un chiffre n'est jamais « brut » : il dépend de <b>qui le produit, comment et pourquoi</b>." },
        { t: "match", pairs: [["Germinal (Zola)", "Travail dans les mines et grèves"], ["Au Bonheur des Dames (Zola)", "Grands magasins et consommation de masse"], ["La Bête humaine (Zola)", "Déterminismes sociaux, familiaux et biologiques"], ["Les Misérables (Hugo)", "Misère urbaine et criminalisation de la pauvreté"], ["Mélancholia (Hugo)", "Réquisitoire contre l'exploitation des enfants"]] },
        { t: "mcq", prompt: "Quelle est la <b>rupture épistémologique</b> du XIXe siècle ?", options: ["Voir les dysfonctionnements sociaux comme des problèmes sociaux objectifs, et non comme des fatalités divines ou des vices individuels", "Remplacer les statistiques par les romans", "Considérer la misère comme un vice moral", "Abandonner l'observation de terrain"], explain: "Les problèmes sociaux deviennent <b>objectifs</b>, déterminés par des structures matérielles et analysables avec <b>rigueur et neutralité</b>." },
        { t: "order", prompt: "Remets dans l'ordre l'enquête de <b>Villermé</b> et ses retombées législatives.", steps: ["1840 : Tableau de l'état physique et moral des ouvriers", "Loi de 1841 : pas de travail des enfants de moins de 8 ans", "Loi de 1850 : assainissement des logements insalubres", "Loi de 1874 : pas de travail industriel avant 12 ans"], extra: ["Loi de 1874 : pas de travail avant 16 ans"], explain: "Les descriptions de l'épuisement des enfants en atelier par Villermé débouchent directement sur les <b>premières lois sociales</b> françaises." },
        { t: "match", pairs: [["Louis-René Villermé", "Enquête médico-sociale (1840)"], ["Frédéric Le Play", "Méthode monographique (1855)"], ["Édouard Ducpétiaux", "Questionnaire standardisé en 26 items (1841)"], ["Friedrich Engels", "Observation participante à Manchester (1845)"], ["Charles Booth", "Cartes de la pauvreté à Londres"]] },
        { t: "mcq", prompt: "Quelle est la <b>limite</b> de la méthode de Le Play ?", options: ["Une visée morale réactionnaire (nostalgie de la famille patriarcale) et un déficit de neutralité axiologique", "L'absence totale de données chiffrées", "Un questionnaire trop court", "Un terrain limité à Londres"], explain: "Le Play collecte des faits avec exactitude (budgets, milieu, modes d'existence), mais sa <b>visée morale</b> nuit à la <b>neutralité axiologique</b>." },
        { t: "fill", sentence: "Marx utilise les budgets de Ducpétiaux pour montrer que les ouvriers sont payés moins que l'entretien quotidien d'un ___.", options: ["détenu en prison", "soldat", "enfant", "paysan"], explain: "Dans <i>Le Capital</i>, Marx reprend ces statistiques budgétaires : le salaire ouvrier est inférieur au <b>coût d'entretien d'un détenu</b>." },
        { t: "mcq", prompt: "Qu'a démontré <b>Charles Booth</b> avec ses <i>poverty maps</i> ?", options: ["La ségrégation sociospatiale et le lien entre habitat et dénuement", "La baisse de la part alimentaire quand le revenu augmente", "L'effet du travail en atelier sur la santé des enfants", "L'exploitation dans les filatures de Manchester"], explain: "Booth cartographie la pauvreté <b>rue par rue</b> à Londres (17 volumes, 1886-1903). La loi sur la part alimentaire est celle d'Engel, préfigurée par Ducpétiaux." }
      ]
    },

    /* ---------------- NIVEAU 4 · CM2 ---------------- */
    {
      title: "Ch. 1 · Tocqueville et Marx", sub: "Les deux premières théories du monde social", emoji: "⚔️", c: "#FF9600", d: "#CC7800",
      desc: "Tocqueville et l'égalisation des conditions, Marx et la société de classes : deux lectures opposées de la modernité.",
      fiche: () => `
        <h3>Alexis de Tocqueville : la démocratie</h3>
        ${quote("Tocqueville, De la démocratie en Amérique, tome 1 (1835)", "Il faut une science politique nouvelle à un monde tout nouveau.")}
        <p class="mt-2">La démocratie est un <b>état social</b> avant d'être un régime politique. Tocqueville l'observe aux États-Unis.</p>
        ${grid(["Sociétés aristocratiques", "Sociétés démocratiques"], [
          ["Inégalité statutaire de naissance", "Rupture avec les privilèges héréditaires"],
          ["Hiérarchies immobiles", "Fluidité sociale théorique"],
          ["Croyance en une inégalité naturelle", "Sentiment d'une commune humanité entre égaux"]
        ])}
        ${box("#E5F8FF", "<b>L'égalisation des conditions</b> : mouvement historique universel, tendanciel et inéluctable. Rapprochement des modes de vie, fin des ordres statutaires, conviction d'être l'égal de n'importe qui.")}
        ${defs([
          ["1. Égalisation des droits", "Universalité juridique et politique."],
          ["2. Démocratie comme mode de vie", "L'« individu démocratique », autonome, refuse toute subordination personnelle."],
          ["3. Passion pour l'égalité des positions", "Recherche du bien-être, méritocratie, rejet des inégalités arbitraires."]
        ])}
        ${trap("<b>Paradoxes et périls :</b> plus l'égalité des droits progresse, plus les moindres inégalités restantes deviennent <b>intolérables</b> (paradoxe de Tocqueville). Risque d'<b>apathie politique</b> (repli sur la sphère privée). <b>Tyrannie de la majorité</b> et État tutélaire : renoncer à ses libertés au profit d'un pouvoir protecteur mais étouffant.")}
        <h3>Karl Marx : l'exploitation</h3>
        ${quote("Marx, Onzième thèse sur Feuerbach (1845)", "Les philosophes n'ont fait qu'interpréter le monde de différentes manières, ce qui importe c'est de le transformer.")}
        <p class="mt-2">Marx combine dialectique, critique de l'économie politique et données d'enquête (<b>Villermé, Ducpétiaux, Engels</b>). But : découvrir les lois du capitalisme pour donner aux travailleurs les armes de leur émancipation.</p>
        ${defs([
          ["Société d'ordres (Ancien Régime)", "Hiérarchie juridique (noblesse, clergé, tiers état), place assignée dès la naissance."],
          ["Société de classes (capitalisme)", "<b>Égalité formelle</b> proclamée, mais inégalités réelles aggravées : <b>bourgeoisie</b> (détient les moyens de production) vs <b>prolétariat</b> (vend sa force de travail)."],
          ["Perspective critique", "L'égalité en droit bourgeoise est une <b>illusion mystificatrice</b> qui masque et légitime l'exploitation."]
        ])}
        <h3>Synthèse comparative</h3>
        ${grid(["Critère", "Tocqueville", "Marx"], [
          ["Concept moteur", "Égalisation des conditions", "Lutte des classes, mode de production"],
          ["Société moderne", "Démocratique et individualiste", "Capitaliste et conflictuelle"],
          ["Égalité", "Égalité de droit vécue comme passion sociale", "Égalité formelle masquant une exploitation réelle"],
          ["Risque majeur", "Apathie, repli individualiste, tyrannie de la majorité", "Aliénation, paupérisation, domination de classe"],
          ["Finalité", "Réformer et préserver la liberté", "Transformer le monde (praxis)"]
        ])}`,
      outro: () => `<div class="mt-8"><h2 class="font-black text-lg">💡 Fiche express du chapitre 1</h2><p class="text-sm text-ink/60">L'essentiel pour le QCM, en un coup d'œil.</p>${defs(EXPRESS)}</div>`,
      ex: [
        { t: "mcq", prompt: "Pour Tocqueville, la démocratie est d'abord…", options: ["un état social, avant d'être un régime politique", "un régime parlementaire", "une société de classes antagonistes", "une illusion qui masque l'exploitation"], explain: "Tocqueville voit dans la démocratie un <b>état social</b> : une société fondée sur l'égalité et la fin des privilèges héréditaires." },
        { t: "sort", prompt: "Ces traits décrivent-ils les sociétés <b>aristocratiques</b> ou <b>démocratiques</b> ?", cats: [ARI, DEM], items: [{ t: "Inégalité statutaire de naissance", c: "ari" }, { t: "Hiérarchies immobiles", c: "ari" }, { t: "Croyance en une inégalité naturelle", c: "ari" }, { t: "Fin des privilèges héréditaires", c: "dem" }, { t: "Fluidité sociale", c: "dem" }, { t: "Sentiment d'une commune humanité", c: "dem" }] },
        { t: "fill", sentence: "Le concept central de Tocqueville est l'égalisation des ___.", options: ["conditions", "revenus", "classes", "salaires"], explain: "L'<b>égalisation des conditions</b> : un mouvement universel et inéluctable qui rapproche les modes de vie et met fin aux ordres statutaires." },
        { t: "order", prompt: "Remets dans l'ordre les <b>trois processus</b> induits par l'égalisation des conditions.", steps: ["Égalisation des droits : universalité juridique", "Démocratie comme mode de vie : l'individu démocratique", "Passion pour l'égalité des positions"], extra: ["Lutte des classes"], explain: "La lutte des classes est le concept de <b>Marx</b>, pas de Tocqueville." },
        { t: "spot", words: ["Plus", "l'égalité", "des", "droits", "progresse,", "plus", "les", "inégalités", "restantes", "semblent", "tolérables."], wrong: 10, fix: "Plus l'égalité des droits progresse, plus les inégalités restantes deviennent intolérables.", explain: "C'est le <b>paradoxe de Tocqueville</b> : l'égalité juridique rend les moindres écarts matériels de plus en plus <b>insupportables</b>." },
        { t: "match", pairs: [["Paradoxe de Tocqueville", "Les moindres inégalités deviennent intolérables"], ["Apathie politique", "Repli sur la sphère privée"], ["Tyrannie de la majorité", "Renoncer à ses libertés au profit d'un pouvoir tutélaire"], ["Onzième thèse sur Feuerbach", "Il ne suffit pas d'interpréter le monde, il faut le transformer"], ["Praxis", "Connaissance au service de la transformation"]] },
        { t: "mcq", prompt: "Sur quelles <b>enquêtes</b> Marx s'appuie-t-il notamment ?", options: ["Celles de Villermé, Ducpétiaux et Engels", "Celles de Tocqueville", "Celles de l'École de Chicago", "Celles de Durkheim et Weber"], explain: "Marx combine dialectique, critique de l'économie politique et <b>données empiriques</b> des enquêteurs de son temps." },
        { t: "sort", prompt: "Société <b>d'ordres</b> ou société <b>de classes</b> ?", cats: [ORD, CLS], items: [{ t: "Noblesse, clergé, tiers état", c: "ord" }, { t: "Hiérarchie juridique institutionnalisée", c: "ord" }, { t: "Place assignée dès la naissance", c: "ord" }, { t: "Égalité formelle proclamée", c: "cls" }, { t: "Bourgeoisie et prolétariat", c: "cls" }, { t: "Clivage selon la propriété des moyens de production", c: "cls" }] },
        { t: "mcq", prompt: "Pour Marx, l'<b>égalité en droit</b> bourgeoise est…", options: ["une illusion qui masque et légitime l'exploitation économique", "la fin de toutes les inégalités", "une passion sociale vécue par chacun", "un héritage de l'Ancien Régime"], explain: "L'égalité est <b>formelle</b> (juridique) tandis que l'exploitation est <b>réelle</b> (matérielle) : c'est une « illusion mystificatrice »." },
        { t: "sort", prompt: "Ces idées sont-elles celles de <b>Tocqueville</b> ou de <b>Marx</b> ?", cats: [TOC, MAR], items: [{ t: "Égalisation des conditions", c: "toc" }, { t: "Tyrannie de la majorité", c: "toc" }, { t: "Préserver la liberté en démocratie", c: "toc" }, { t: "Lutte des classes", c: "mar" }, { t: "Aliénation et paupérisation", c: "mar" }, { t: "Transformer le monde (praxis)", c: "mar" }] },
        { t: "fill", sentence: "Tocqueville (1835) : « Il faut une science politique nouvelle à un monde tout ___. »", options: ["nouveau", "ancien", "libre", "égal"], explain: "Citation de <i>De la démocratie en Amérique</i> (tome 1, 1835) : la modernité démocratique exige une <b>nouvelle science</b>." },
        { t: "mcq", prompt: "Quel ouvrage de Tocqueville est cité dans le cours ?", options: ["De la démocratie en Amérique (1835)", "Le Capital", "Les Ouvriers européens", "La Situation de la classe laborieuse en Angleterre"], explain: "<i>Le Capital</i> est de Marx, <i>Les Ouvriers européens</i> de Le Play, <i>La Situation de la classe laborieuse</i> d'Engels." }
      ]
    }
  ]
};
})();

/* =====================================================================
   CHAPITRE 2 — Émile Durkheim : fonder une science du social (CM3, CM4, CM5)
   Ajout des niveaux 5 à 8.
   ===================================================================== */
(function () {

const defs = rows => `<table class="w-full text-sm mt-2"><tbody>${rows.map(r => `<tr class="border-t border-line"><td class="py-2 pr-3 w-2/5 font-bold align-top">${r[0]}</td><td class="py-2 text-ink/80">${r[1]}</td></tr>`).join("")}</tbody></table>`;
const grid = (head, rows) => `<div class="overflow-x-auto mt-2"><table class="w-full text-sm"><thead><tr>${head.map(h => `<th class="text-left py-2 pr-3 border-b-2 border-line font-black">${h}</th>`).join("")}</tr></thead><tbody>${rows.map(r => `<tr class="border-t border-line">${r.map((c, i) => `<td class="py-2 pr-3 align-top ${i ? "text-ink/80" : "font-bold"}">${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
const box = (bg, html) => `<div class="rounded-2xl p-3 mt-2" style="background:${bg}">${html}</div>`;
const quote = (src, txt) => box("#F7F7F7", `<div class="text-xs font-extrabold uppercase tracking-wide text-ink/50">${src}</div><div class="italic mt-1">« ${txt} »</div>`);
const trap = html => box("#FFDFE0", "⚠️ " + html);

const HOL = { id: "hol", label: "Holisme", emoji: "🌐" }, DET = { id: "det", label: "Déterminisme", emoji: "⛓️" };
const MEC = { id: "mec", label: "Solidarité mécanique", emoji: "🧱" }, ORG = { id: "org", label: "Solidarité organique", emoji: "⚙️" };
const NAT = { id: "nat", label: "Fait de nature", emoji: "🧬" }, IND = { id: "ind", label: "Fait individuel", emoji: "🧍" }, FS = { id: "fs", label: "Fait social", emoji: "👥" };
const EXP = { id: "exp", label: "Explicite", emoji: "⚖️" }, IMP = { id: "imp", label: "Implicite", emoji: "🙄" }, INV = { id: "inv", label: "Invisible", emoji: "🫥" };
const DIA = { id: "dia", label: "Diachronique", emoji: "⏳" }, SYN = { id: "syn", label: "Synchronique", emoji: "📸" };
const PRI = { id: "pri", label: "Données primaires", emoji: "📝" }, SEC = { id: "sec", label: "Données secondaires", emoji: "🗄️" };
const XV = { id: "x", label: "Variable indépendante (X)", emoji: "➡️" }, YV = { id: "y", label: "Variable dépendante (Y)", emoji: "🎯" };
const POS = { id: "pos", label: "Corrélation positive", emoji: "📈" }, NEG = { id: "neg", label: "Corrélation négative", emoji: "📉" };

const PILIERS = () => grid(["Pilier", "Principe", "Règle directrice"], [
  ["1. Autonomie disciplinaire", "Objet spécifique : le <b>fait social</b>", "« Expliquer le social par le social » (rupture avec les causes biologiques et psychologiques)"],
  ["2. Démarche hypothético-déductive", "Rigueur calquée sur les sciences de la nature", "Hypothèses réfutables, vérifiées par des protocoles standardisés"],
  ["3. Objectivation et distanciation", "Rompre avec les prénotions", "Traiter les faits sociaux « <b>comme des choses</b> »"],
  ["4. Administration de la preuve", "L'<b>expérimentation indirecte</b>", "Statistique, variations concomitantes, traque des variables cachées"]
]);

window.COURSES.sociologie.levels.push(
  /* ---------------- NIVEAU 5 · CM3-4 ---------------- */
  {
    title: "Ch. 2 · Durkheim, père fondateur", sub: "Institutionnaliser une science du social", emoji: "🎓", c: "#FF4B4B", d: "#EA2B2B",
    desc: "Comte et Durkheim, l'institutionnalisation de la sociologie, le holisme et le déterminisme, et les quatre œuvres majeures (1893-1912).",
    fiche: () => `
      <h3>Comte invente le mot, Durkheim fonde la discipline</h3>
      ${defs([
        ["Auguste Comte", "Forge le terme de « <b>sociologie</b> ». Penseur athée, il théorise une « <b>religion de l'humanité</b> » (sans Dieu) : la religion a une <b>fonction sociale</b> de régulation, de cohésion et de consensus moral."],
        ["Émile Durkheim (1858-1917)", "<b>Institutionnalise</b> la sociologie en France : il l'introduit à l'université comme science autonome, crée les premiers cursus, la revue <i>L'Année sociologique</i> (<b>1898</b>) et le premier réseau de chercheurs. Il lui donne un <b>objet propre</b> (le fait social) et une <b>méthode rigoureuse</b>."]
      ])}
      ${quote("Règle d'or de Durkheim", "Expliquer le social par le social")}
      <p class="mt-2">Pour comprendre les manières d'agir, de penser et de sentir des individus, il faut partir des <b>structures de la société</b>, non de la psychologie individuelle.</p>
      ${defs([
        ["Holisme", "Le tout social dépasse la somme de ses parties : la société a une réalité propre (<i>sui generis</i>)."],
        ["Déterminisme", "Les structures collectives <b>préexistent</b> à l'individu et exercent sur lui une contrainte, inconsciente ou intériorisée par l'éducation et la socialisation."]
      ])}
      <h3>Les quatre œuvres majeures</h3>
      ${grid(["Année", "Ouvrage", "Concepts clés"], [
        ["1893", "<i>De la division du travail social</i>", "Passage de la <b>solidarité mécanique</b> (sociétés traditionnelles, forte conscience collective, droit répressif) à la <b>solidarité organique</b> (sociétés modernes différenciées, droit restitutif). <b>Anomie</b> : affaiblissement des règles collectives."],
        ["1895", "<i>Les Règles de la méthode sociologique</i>", "Le <b>fait social</b>, extérieur et contraignant ; observation objective et rupture avec les prénotions. Fonde le statut scientifique de la discipline."],
        ["1897", "<i>Le Suicide</i>", "Un acte intime dépend de causes sociales (<b>intégration</b> et <b>régulation</b>). Typologie : suicides <b>égoïste, altruiste, anomique, fataliste</b>. Première application statistique à grande échelle."],
        ["1912", "<i>Les Formes élémentaires de la vie religieuse</i>", "Analyse du totémisme ; le <b>sacré</b> comme projection symbolique de la société ; rôle intégrateur des rituels collectifs."]
      ])}`,
    ex: [
      { t: "mcq", prompt: "Qui a <b>forgé le terme</b> de « sociologie » ?", options: ["Auguste Comte", "Émile Durkheim", "Max Weber", "Karl Marx"], explain: "Comte invente le mot ; <b>Durkheim</b> est le véritable père fondateur académique en France, en lui donnant un objet propre et une méthode." },
      { t: "mcq", prompt: "Comment Durkheim <b>institutionnalise</b>-t-il la sociologie en France ?", options: ["Il l'introduit à l'université, crée les premiers cursus, la revue L'Année sociologique (1898) et un réseau de chercheurs", "Il invente le mot « sociologie »", "Il fonde l'École de Chicago", "Il écrit De la démocratie en Amérique"], explain: "Durkheim fait de la sociologie une <b>science autonome</b> à l'université, avec ses cursus, sa revue (<i>L'Année sociologique</i>, 1898) et ses chercheurs." },
      { t: "fill", sentence: "Règle d'or de Durkheim : « Expliquer le social par le ___. »", options: ["social", "psychologique", "biologique", "hasard"], explain: "On explique les conduites par les <b>structures de la société</b>, pas par la conscience ou la psychologie individuelles." },
      { t: "sort", prompt: "Ces idées relèvent-elles du <b>holisme</b> ou du <b>déterminisme</b> durkheimien ?", cats: [HOL, DET], items: [{ t: "Le tout social dépasse la somme de ses parties", c: "hol" }, { t: "La société est une réalité sui generis", c: "hol" }, { t: "Les structures collectives préexistent à l'individu", c: "det" }, { t: "Contrainte intériorisée par l'éducation", c: "det" }] },
      { t: "order", prompt: "Remets les <b>œuvres de Durkheim</b> dans l'ordre chronologique.", steps: ["1893 : De la division du travail social", "1895 : Les Règles de la méthode sociologique", "1897 : Le Suicide", "1912 : Les Formes élémentaires de la vie religieuse"], extra: ["1835 : De la démocratie en Amérique"], explain: "<i>De la démocratie en Amérique</i> (1835) est de <b>Tocqueville</b>, pas de Durkheim." },
      { t: "match", pairs: [["Solidarité mécanique / organique", "De la division du travail social (1893)"], ["Fait social, rupture avec les prénotions", "Les Règles de la méthode sociologique (1895)"], ["Intégration et régulation", "Le Suicide (1897)"], ["Totémisme et sacré", "Les Formes élémentaires de la vie religieuse (1912)"], ["Revue fondée par Durkheim", "L'Année sociologique (1898)"]] },
      { t: "sort", prompt: "Solidarité <b>mécanique</b> ou solidarité <b>organique</b> ?", cats: [MEC, ORG], items: [{ t: "Sociétés traditionnelles", c: "mec" }, { t: "Forte conscience collective", c: "mec" }, { t: "Droit répressif", c: "mec" }, { t: "Sociétés modernes", c: "org" }, { t: "Sociétés différenciées", c: "org" }, { t: "Droit restitutif", c: "org" }] },
      { t: "fill", sentence: "L'___ désigne, chez Durkheim, l'affaiblissement des règles collectives.", options: ["anomie", "intégration", "solidarité", "aliénation"], explain: "Concept introduit dans <i>De la division du travail social</i> (1893). (L'<i>aliénation</i> est un concept de Marx.)" },
      { t: "mcq", prompt: "Que démontre <b>Le Suicide</b> (1897) ?", options: ["Qu'un acte apparemment intime dépend de causes sociales : l'intégration et la régulation", "Que le suicide a une origine génétique", "Que le suicide s'explique par la chaleur", "Que le suicide relève du pur hasard"], explain: "C'est la <b>première application statistique à grande échelle</b> de la méthode : même l'acte le plus individuel a des causes sociales." },
      { t: "spot", words: ["Durkheim", "distingue", "quatre", "suicides", ":", "égoïste,", "altruiste,", "anomique", "et", "héroïque."], wrong: 9, fix: "Durkheim distingue quatre suicides : égoïste, altruiste, anomique et fataliste.", explain: "La typologie du <i>Suicide</i> : <b>égoïste, altruiste, anomique, fataliste</b>." },
      { t: "mcq", prompt: "Dans <b>Les Formes élémentaires de la vie religieuse</b>, comment Durkheim définit-il le sacré ?", options: ["Comme une projection symbolique de la société elle-même", "Comme une révélation divine", "Comme une illusion de la conscience individuelle", "Comme une invention économique"], explain: "Le sacré exprime la société ; les <b>rituels collectifs</b> ont un rôle intégrateur et cohésif." },
      { t: "mcq", prompt: "Selon <b>Auguste Comte</b>, quelle est la fonction de la religion ?", options: ["Une fonction sociale de régulation, de cohésion et de consensus moral", "Une fonction purement théologique", "Aucune : il faut la supprimer", "Une fonction de domination de classe"], explain: "Athée, Comte imagine une « <b>religion de l'humanité</b> » sans Dieu : la religion n'est pas réductible à la théologie, elle fait tenir la société." }
    ]
  },

  /* ---------------- NIVEAU 6 · CM3-4 ---------------- */
  {
    title: "Ch. 2 · Le fait social", sub: "Extériorité, contrainte, régularité", emoji: "🧲", c: "#00CD9C", d: "#00A47C",
    desc: "Fait de nature, fait individuel et fait social ; la définition de 1895 ; les trois propriétés du fait social et les trois degrés de contrainte.",
    fiche: () => `
      <h3>Le fait social face au biologique et à l'individuel</h3>
      <p class="mt-1">Pour rendre la sociologie autonome, Durkheim la distingue de la biologie et de la psychologie :</p>
      ${defs([
        ["Fait de nature (biologique)", "Inné, constitution physiologique universelle."],
        ["Fait individuel (psychologique)", "Conscience isolée, goûts subjectifs, particularités psychiques."],
        ["Fait social", "<b>Acquis et collectif</b> : comportements, croyances et institutions façonnés par la vie en société et transmis par apprentissage."]
      ])}
      ${grid(["Phénomène", "Dimension biologique", "Dimension sociale"], [
        ["La marche", "Capacité motrice universelle", "Façon de marcher selon le genre et la culture"],
        ["L'alimentation", "Besoin physiologique", "Rites de table, horaires, interdits, manières de manger"],
        ["Le sommeil", "Fonction réparatrice vitale", "Horaires, durée, norme de dormir la nuit en continu"],
        ["Le langage", "Faculté d'émettre des sons articulés", "Langue maternelle, grammaire, vocabulaire"],
        ["Le vieillissement", "Dégénérescence cellulaire", "Seuils d'âge, statut de la vieillesse (30 ans : adulte mûr au XIXe s., jeune aujourd'hui)"]
      ])}
      ${quote("Durkheim, Les Règles de la méthode sociologique (1895)", "Des manières d'agir, de penser et de sentir, extérieures à l'individu, et qui sont dotées d'un pouvoir de coercition en vertu duquel elles s'imposent à lui")}
      <h3>Les trois propriétés du fait social</h3>
      ${defs([
        ["1. Extériorité", "Existe <b>hors des consciences</b> individuelles ; il <b>préexiste</b> à l'individu et lui <b>survit</b>. Ex. : la langue, la monnaie, les croyances religieuses, la mode vestimentaire."],
        ["2. Contrainte", "Pouvoir de <b>coercition</b>, avec des sanctions formelles ou informelles ; souvent intériorisé par l'éducation."],
        ["3. Régularité", "<b>Constance statistique</b> et prévisibilité qui excluent le pur hasard. Ex. : volume annuel stable des accidents de la route ; goûts musicaux et visites de musées liés à l'âge, au diplôme et à l'origine sociale."]
      ])}
      <h3>Les trois degrés de contrainte</h3>
      ${defs([
        ["Explicite (formelle)", "Lois et règlements écrits ; sanction institutionnelle (amende, prison, exclusion)."],
        ["Implicite (informelle)", "Règles coutumières non écrites ; sanctions diffuses (réprobation, moqueries, mise à l'écart)."],
        ["Invisible (intériorisée)", "L'individu obéit en croyant suivre ses goûts : des destins « <b>imposés du dehors</b> »."]
      ])}
      ${box("#E5F8FF", "<b>Orientation scolaire genrée :</b> la sous-représentation des filles en écoles d'ingénieurs ne vient ni d'une « bosse des maths » ni du hasard, mais d'une <b>socialisation différentielle précoce</b> (attentes parentales, stéréotypes, jeux de récréation).")}
      ${quote("Durkheim sur l'éducation", "Un effort continu pour imposer aux enfants des manières de voir, de sentir, d'agir auxquelles ils ne seraient pas spontanément arrivés")}`,
    ex: [
      { t: "sort", prompt: "Fait <b>de nature</b>, fait <b>individuel</b> ou fait <b>social</b> ?", cats: [NAT, IND, FS], items: [{ t: "Capacité motrice universelle de marcher", c: "nat" }, { t: "Besoin physiologique de se nourrir", c: "nat" }, { t: "Goûts subjectifs d'une conscience isolée", c: "ind" }, { t: "Particularités psychiques personnelles", c: "ind" }, { t: "Manières de table et interdits alimentaires", c: "fs" }, { t: "Langue maternelle et grammaire", c: "fs" }] },
      { t: "mcq", prompt: "Selon la définition de 1895, les faits sociaux sont…", options: ["des manières d'agir, de penser et de sentir, extérieures à l'individu et dotées d'un pouvoir de coercition", "des comportements innés, propres à l'espèce humaine", "des états de la conscience individuelle", "des événements dus au hasard"], explain: "Définition canonique des <i>Règles de la méthode sociologique</i> : <b>extériorité</b> et <b>coercition</b>." },
      { t: "match", pairs: [["Extériorité", "Existe hors des consciences, préexiste à l'individu et lui survit"], ["Contrainte", "Pouvoir de coercition, sanctions formelles ou informelles"], ["Régularité", "Constance statistique qui exclut le pur hasard"], ["La langue", "Système préexistant que chacun doit intégrer"], ["Vieillissement (dimension sociale)", "Seuils d'âge et statut variable de la vieillesse"]] },
      { t: "fill", sentence: "Le fait social ___ à l'individu : le monde social est déjà structuré à notre naissance.", options: ["préexiste", "succède", "s'oppose", "échappe"], explain: "Propriété temporelle de l'<b>extériorité</b> : le fait social préexiste à l'individu et lui <b>survit</b>." },
      { t: "spot", words: ["Le", "fait", "social", "disparaît", "avec", "les", "individus", "qui", "le", "portent."], wrong: 3, fix: "Le fait social survit aux individus qui le portent.", explain: "La disparition d'un individu ne détruit pas les règles collectives : le fait social lui <b>survit</b>." },
      { t: "sort", prompt: "À quel <b>degré de contrainte</b> correspond chaque élément ?", cats: [EXP, IMP, INV], items: [{ t: "Amende ou prison", c: "exp" }, { t: "Lois et règlements écrits", c: "exp" }, { t: "Moqueries et réprobation", c: "imp" }, { t: "Règles coutumières non écrites", c: "imp" }, { t: "Obéir en croyant suivre ses goûts", c: "inv" }, { t: "Destins « imposés du dehors »", c: "inv" }] },
      { t: "mcq", prompt: "Pourquoi les filles sont-elles <b>sous-représentées</b> en écoles d'ingénieurs, selon le cours ?", options: ["Par une socialisation différentielle précoce : attentes parentales, stéréotypes, jeux", "Par une « bosse des maths » biologique", "Par un pur hasard", "Par une règle juridique"], explain: "C'est un exemple de <b>contrainte invisible</b> : un choix qui semble personnel est façonné par la socialisation." },
      { t: "spot", words: ["Les", "filles", "évitent", "les", "filières", "d'ingénieurs", "à", "cause", "d'une", "bosse", "des", "maths."], wrong: 9, fix: "Les filles évitent les filières d'ingénieurs à cause d'une socialisation différentielle précoce, pas d'une « bosse des maths ».", explain: "Durkheim refuse l'explication <b>biologique</b> : il faut expliquer le social par le social." },
      { t: "fill", sentence: "Durkheim définit l'éducation comme un « effort continu pour ___ aux enfants des manières de voir, de sentir, d'agir ».", options: ["imposer", "proposer", "cacher", "interdire"], explain: "L'éducation est la preuve empirique de la contrainte : c'est par elle que les contraintes externes sont <b>intériorisées</b>." },
      { t: "order", prompt: "Reconstitue le processus d'<b>intériorisation</b> de la contrainte.", steps: ["Des normes extérieures à l'individu", "L'éducation et la socialisation", "L'intériorisation des contraintes", "Des habitudes sociales durables"], extra: ["Des goûts innés"], explain: "Les contraintes externes, transmises par l'éducation, deviennent des <b>habitudes sociales durables</b> qui semblent naturelles." },
      { t: "mcq", prompt: "Pourquoi les <b>accidents de la route</b> illustrent-ils la régularité du fait social ?", options: ["Vécus comme des coups du sort, ils présentent un volume annuel et des variations stables", "Ils sont imprévisibles et dus au hasard", "Ils dépendent uniquement de la météo", "Ils sont encadrés par le code de la route"], explain: "À l'échelle agrégée, les conduites révèlent une <b>constance statistique</b> : ce qui semble aléatoire individuellement est socialement régulier." },
      { t: "mcq", prompt: "Que montre l'exemple d'une personne de <b>30 ans</b> ?", options: ["La définition de la jeunesse varie : adulte mûr au XIXe siècle, jeune aujourd'hui", "Que le vieillissement est purement biologique", "Que l'âge n'a aucune signification sociale", "Que tout le monde vieillit au même rythme"], explain: "Le vieillissement a une dimension biologique (dégénérescence cellulaire) et une dimension <b>sociale</b> (seuils d'âge, statut de la vieillesse)." }
    ]
  },

  /* ---------------- NIVEAU 7 · CM4-5 ---------------- */
  {
    title: "Ch. 2 · La méthode durkheimienne", sub: "Des choses, des causes et des séries", emoji: "🧪", c: "#6C63FF", d: "#5148D6",
    desc: "Traiter les faits sociaux comme des choses, rompre avec les prénotions, expliquer le social par le social, et construire indicateurs et séries statistiques.",
    fiche: () => `
      <h3>« Considérer les faits sociaux comme des choses »</h3>
      <p class="mt-1">Ce n'est pas réifier les êtres humains, mais <b>objectiver</b> : aborder les phénomènes comme des réalités extérieures, observables, indépendantes de l'esprit du chercheur. Trois exigences :</p>
      ${defs([
        ["1. Renoncer aux prénotions", "Rupture avec le sens commun, les évidences et les jugements moraux. Ex. (François de Singly) : l'amour n'est pas un pur hasard, le choix du conjoint obéit à l'<b>homogamie sociale</b> (capitaux culturels, diplômes, lieux de rencontre sélectifs)."],
        ["2. Définir son objet", "Les mots courants sont flous : il faut des définitions opératoires. <b>Crime</b> : acte heurtant des états forts de la conscience collective et appelant une sanction légale. <b>Conjoint</b> : mariage, concubinage, cohabitation ? <b>Immigré</b> : né étranger à l'étranger, ou descendants inclus ?"],
        ["3. Ne pas se fier aux explications des individus", "Rejet de l'<b>illusion de transparence</b> : les discours spontanés sont subjectifs et rationalisés après coup. Il faut « écarter les données sensibles »."]
      ])}
      <h3>« Expliquer les faits sociaux par des faits sociaux »</h3>
      ${quote("Règle de causalité", "La cause déterminante d'un fait social doit être recherchée dans les faits sociaux antécédents et non parmi les états de la conscience individuelle")}
      ${defs([
        ["Rejet du réductionnisme", "Ni explication <b>psychologique</b> (états d'âme), ni <b>biologique</b> (gènes, constitution physique)."],
        ["Exemple : l'anorexie mentale", "Surreprésentée chez les jeunes femmes de <b>milieux favorisés</b>, liée à des normes corporelles d'excellence et de contrôle de soi intériorisées."]
      ])}
      <h3>L'expérimentation indirecte</h3>
      <p class="mt-1">On ne peut pas manipuler des populations en laboratoire : on utilise la <b>statistique</b> et la <b>méthode comparative</b>.</p>
      ${defs([
        ["Indicateur social", "Traduction mesurable d'un concept abstrait. Violence urbaine → taux d'homicides pour 10 000 habitants, plaintes déposées (pas le ressenti). Suicide → décès par suicide pour 100 000 habitants."],
        ["Variable", "Indicateur dont la valeur varie selon les groupes ou dans le temps."],
        ["Surfréquence", "Écart de fréquence entre groupes, même pour un phénomène minoritaire (les sports d'hiver : marginaux, mais surreprésentés chez les cadres)."]
      ])}
      ${grid(["Données primaires", "Données secondaires"], [
        ["Enquête par <b>questionnaire</b> construite par le chercheur", "Statistiques existantes : <b>INSEE</b>, ministères, justice, hôpitaux, état civil"],
        ["Questions fermées posées à un échantillon", "À critiquer : chiffres des manifestations (syndicats vs préfecture), délinquance = plaintes enregistrées et non infractions réelles"]
      ])}
      <h3>Les séries statistiques</h3>
      ${grid(["Série", "Définition", "Exemple"], [
        ["Diachronique (longitudinale)", "Une variable <b>à travers le temps</b>", "Taux d'homicides en France de 1980 à 2024"],
        ["Synchronique (transversale)", "Comparaison de groupes <b>à un même moment</b>", "Tabagisme en 2024 selon la CSP, l'âge et le genre"],
        ["Croisement", "Évolution comparée de sous-groupes", "Tabac de 1980 à 2024 chez les hommes et les femmes (rattrapage)"]
      ])}`,
    ex: [
      { t: "mcq", prompt: "Que signifie « traiter les faits sociaux <b>comme des choses</b> » ?", options: ["Les objectiver : les aborder comme des réalités extérieures et observables, indépendantes de l'esprit du chercheur", "Considérer les êtres humains comme des objets", "Se fier à ses intuitions personnelles", "Refuser toute statistique"], explain: "Il ne s'agit pas de réifier les humains mais de faire un travail d'<b>objectivation</b>." },
      { t: "order", prompt: "Remets dans l'ordre les <b>trois exigences</b> de la règle « comme des choses ».", steps: ["Renoncer aux prénotions", "Définir son objet", "Ne pas se fier aux explications des individus"], extra: ["Suivre le sens commun"], explain: "Suivre le sens commun est précisément ce qu'il faut <b>éviter</b> : c'est la rupture avec les prénotions." },
      { t: "fill", sentence: "Contre l'idée d'un amour dû au hasard, le choix du conjoint obéit à l'___ sociale (François de Singly).", options: ["homogamie", "anomie", "hétérogamie", "intégration"], explain: "On choisit le plus souvent un conjoint socialement proche : capitaux culturels, diplômes, lieux de rencontre sélectifs." },
      { t: "match", pairs: [["Le crime", "Acte heurtant la conscience collective et appelant une sanction légale"], ["Le conjoint", "Trancher entre mariage, concubinage, cohabitation"], ["L'immigré", "Préciser : né étranger à l'étranger, ou descendants inclus"], ["Prénotions", "Sens commun, évidences et jugements moraux"], ["Illusion de transparence", "Croire les explications spontanées des acteurs"]] },
      { t: "fill", sentence: "« La cause déterminante d'un fait social doit être recherchée dans les faits sociaux ___. »", options: ["antécédents", "individuels", "biologiques", "futurs"], explain: "… « et non parmi les états de la conscience individuelle ». C'est la <b>règle de causalité sociologique</b>." },
      { t: "mcq", prompt: "Quelles explications Durkheim <b>rejette</b>-t-il ?", options: ["Les explications psychologiques et biologiques", "Les explications par des faits sociaux antécédents", "Les explications statistiques", "Les comparaisons entre groupes"], explain: "C'est le <b>rejet du réductionnisme</b> : ni états d'âme, ni gènes ou constitution physique." },
      { t: "mcq", prompt: "Comment le sociologue éclaire-t-il l'<b>anorexie mentale</b> ?", options: ["Par sa surreprésentation chez les jeunes femmes de milieux favorisés, liée à des normes corporelles intériorisées", "Par une cause uniquement génétique", "Par le hasard des tempéraments", "Il ne l'étudie pas : c'est un sujet médical"], explain: "Même un phénomène médical a des <b>causes sociales</b> : normes d'excellence et de contrôle de soi intériorisées." },
      { t: "mcq", prompt: "Pourquoi le sociologue recourt-il à l'<b>expérimentation indirecte</b> ?", options: ["Parce qu'il ne peut pas manipuler des populations en laboratoire", "Parce que les statistiques sont interdites", "Parce que la sociologie est une branche de la philosophie", "Parce qu'il préfère les romans sociaux"], explain: "La <b>statistique</b> et la <b>méthode comparative</b> remplacent l'expérience de laboratoire." },
      { t: "mcq", prompt: "Quel est un bon <b>indicateur</b> de la violence urbaine selon le cours ?", options: ["Le taux d'homicides pour 10 000 habitants", "Le sentiment d'insécurité des habitants", "Le nombre de reportages télévisés", "Le ressenti du chercheur"], explain: "Un indicateur doit être <b>mesurable</b> : taux d'homicides, plaintes pour coups et blessures, dégradations recensées." },
      { t: "spot", words: ["Partir", "aux", "sports", "d'hiver", "est", "une", "pratique", "majoritaire", "chez", "les", "Français."], wrong: 7, fix: "Partir aux sports d'hiver est une pratique marginale chez les Français, mais surreprésentée chez les cadres.", explain: "C'est l'<b>analyse des surfréquences</b> : même un phénomène minoritaire révèle des écarts entre groupes." },
      { t: "sort", prompt: "Série <b>diachronique</b> ou <b>synchronique</b> ?", cats: [DIA, SYN], items: [{ t: "Taux d'homicides de 1980 à 2024", c: "dia" }, { t: "Analyse longitudinale", c: "dia" }, { t: "Évolution du nombre de manifestants", c: "dia" }, { t: "Tabagisme en 2024 selon la CSP", c: "syn" }, { t: "Coupe transversale", c: "syn" }, { t: "Comparaison de groupes au même moment", c: "syn" }] },
      { t: "sort", prompt: "Données <b>primaires</b> ou <b>secondaires</b> ?", cats: [PRI, SEC], items: [{ t: "Enquête par questionnaire", c: "pri" }, { t: "Questions fermées à un échantillon", c: "pri" }, { t: "Outil construit par le chercheur", c: "pri" }, { t: "Statistiques de l'INSEE", c: "sec" }, { t: "Plaintes enregistrées au commissariat", c: "sec" }, { t: "Registres de l'état civil", c: "sec" }] }
    ]
  },

  /* ---------------- NIVEAU 8 · CM5 ---------------- */
  {
    title: "Ch. 2 · Corrélations et preuve statistique", sub: "Variations concomitantes et variables cachées", emoji: "📊", c: "#FF9600", d: "#CC7800",
    desc: "Établir des séries, déceler des variations concomitantes, mesurer r, distinguer corrélation et causalité, traquer les variables cachées et lire un tableau croisé.",
    fiche: () => `
      <h3>Les trois étapes de l'administration de la preuve</h3>
      ${grid(["Étape", "Démarche", "Outils"], [
        ["a) Établir des séries", "Transformer un phénomène abstrait en données numériques", "Indicateurs, variables, séries diachroniques et synchroniques"],
        ["b) Déceler des corrélations", "Rechercher des « <b>variations concomitantes</b> »", "Variable indépendante (X), dépendante (Y), sens et force du lien (r)"],
        ["c) Interpréter la causalité", "Construire un schéma d'intelligibilité théorique", "Écarter le hasard, traquer les variables cachées (Z)"]
      ])}
      <h3>Variations concomitantes et variables</h3>
      <p class="mt-1">Deux phénomènes sont en <b>variation concomitante</b> (Durkheim, 1895) quand les variations de l'un s'accompagnent de variations régulières de l'autre : c'est la <b>corrélation</b>.</p>
      ${defs([
        ["Variable dépendante (Y)", "Le phénomène à expliquer (l'effet présumé) : vote, réussite scolaire, tabagisme."],
        ["Variable indépendante (X)", "Le facteur explicatif (la cause potentielle) : patrimoine, diplôme, CSP, âge, genre."],
        ["Corrélation positive", "Même sens : patrimoine ↗ → vote pour la droite libérale ↗ ; femmes au XXe s. : position sociale ↗ → tabagisme ↗."],
        ["Corrélation négative", "Sens inverse : diplôme ↗ → vote RN ↘ ; hommes : position hiérarchique ↗ → tabagisme ↘."]
      ])}
      ${box("#F7F7F7", "<b>Coefficient r de Pearson</b> : entre <b>−1 et +1</b>. |r| mesure la force (0 = aucun lien linéaire, 1 = lien parfait), le signe donne le sens. En sociologie, <b>0,2 à 0,3</b> est déjà hautement significatif (contre |r| > 0,9 souvent exigé en physique), car les conduites résultent de multiples déterminants.")}
      <h3>Corrélation n'est pas causalité</h3>
      ${trap("Une corrélation <b>ne démontre jamais à elle seule</b> une causalité. Il faut un schéma d'intelligibilité théorique. Ex. : diplôme de la mère et réussite des enfants → transmission du <b>capital culturel</b>, pas la biologie.")}
      ${defs([
        ["Corrélations fallacieuses (Tyler Vigen)", "Fromage et étouffements dans les draps (r = 0,95), margarine et divorces dans le Maine (r = 0,99), abeilles et arrestations pour cannabis (r = −0,93)… Sans théorie, la statistique produit des illusions."],
        ["Variable cachée (Z)", "Cause commune de X et de Y : Z → X et Z → Y, sans causalité directe entre X et Y."]
      ])}
      ${grid(["Exemple", "Corrélation apparente", "Variable cachée"], [
        ["Sophisme de Coluche", "Hospitalisation ↔ décès", "La <b>gravité initiale</b> de la maladie"],
        ["Durkheim : température et suicide", "Été ↔ plus de suicides", "L'<b>intensité de la vie sociale</b> (pas la chaleur)"],
        ["Black-White Test Score Gap", "Origine ↔ scores au SAT", "Revenus et patrimoine, diplôme familial, ségrégation et sous-financement scolaire, accès aux préparations privées"]
      ])}
      <h3>Lire un tableau croisé (panel d'élèves entrés en 6e en 2007)</h3>
      ${grid(["Origine des parents", "Garçons bac général", "Filles bac général"], [
        ["France", "38 %", "51 %"], ["Portugal", "19 %", "36 %"], ["Maghreb", "25 %", "36 %"],
        ["Afrique subsaharienne", "13 %", "29 %"], ["Turquie", "15 %", "29 %"], ["Asie", "52 %", "63 %"]
      ])}
      <p class="mt-2">1. <b>Effet du genre</b> : à origine égale, les filles obtiennent plus souvent le bac général. 2. <b>Effet de l'origine</b> : derrière elle opèrent la position sociale des parents, leur diplôme et le projet migratoire.</p>`,
    outro: () => `<div class="mt-8"><h2 class="font-black text-lg">🏛️ Les 4 piliers de la méthode durkheimienne</h2><p class="text-sm text-ink/60">La conclusion du chapitre 2, à connaître par cœur.</p>${PILIERS()}</div>`,
    ex: [
      { t: "order", prompt: "Remets dans l'ordre les étapes de l'<b>administration de la preuve</b>.", steps: ["Établir des séries statistiques", "Déceler des corrélations (variations concomitantes)", "Interpréter la causalité"], extra: ["Conclure directement à la causalité"], explain: "On ne conclut <b>jamais</b> directement : il faut d'abord écarter le hasard et les variables cachées." },
      { t: "fill", sentence: "Durkheim appelle « variations ___ » ce que l'on nomme aujourd'hui corrélation.", options: ["concomitantes", "aléatoires", "indépendantes", "cachées"], explain: "Concept forgé dans <i>Les Règles de la méthode sociologique</i> (1895)." },
      { t: "sort", prompt: "Variable <b>indépendante (X)</b> ou <b>dépendante (Y)</b> ?", cats: [XV, YV], items: [{ t: "Le facteur explicatif", c: "x" }, { t: "La cause potentielle", c: "x" }, { t: "Le patrimoine financier", c: "x" }, { t: "Le phénomène à expliquer", c: "y" }, { t: "L'effet présumé", c: "y" }, { t: "Le comportement de vote", c: "y" }] },
      { t: "sort", prompt: "Corrélation <b>positive</b> ou <b>négative</b> ?", cats: [POS, NEG], items: [{ t: "Patrimoine ↗ et vote droite libérale ↗", c: "pos" }, { t: "Femmes au XXe : position sociale ↗ et tabagisme ↗", c: "pos" }, { t: "Les deux variables évoluent dans le même sens", c: "pos" }, { t: "Diplôme ↗ et vote RN ↘", c: "neg" }, { t: "Hommes : position hiérarchique ↗ et tabagisme ↘", c: "neg" }, { t: "Les variables évoluent en sens inverse", c: "neg" }] },
      { t: "mcq", prompt: "Entre quelles valeurs est compris le <b>coefficient r</b> de Pearson ?", options: ["Entre −1 et +1", "Entre 0 et 100", "Entre 0 et 1", "Entre −100 et +100"], explain: "Le <b>signe</b> donne le sens du lien, la <b>valeur absolue</b> sa force (0 = aucun lien linéaire, 1 = lien parfait)." },
      { t: "mcq", prompt: "En sociologie, à partir de quelle valeur un coefficient de corrélation est-il déjà <b>hautement significatif</b> ?", options: ["0,2 à 0,3", "Plus de 0,9", "Exactement 1", "0,99"], explain: "Les conduites humaines dépendent de <b>nombreux déterminants</b> imbriqués : 0,2 à 0,3 est déjà fort, contre |r| > 0,9 souvent exigé en physique." },
      { t: "spot", words: ["Une", "forte", "corrélation", "prouve", "qu'une", "variable", "est", "la", "cause", "de", "l'autre."], wrong: 3, fix: "Une corrélation, même forte, ne prouve jamais à elle seule qu'une variable est la cause de l'autre.", explain: "Règle d'or : <b>corrélation n'est pas causalité</b>. Il faut un schéma d'intelligibilité théorique." },
      { t: "mcq", prompt: "Que montrent les corrélations de <b>Tyler Vigen</b> (fromage et étouffements dans les draps, r = 0,95) ?", options: ["Qu'une concordance numérique fortuite n'est pas un fait social sans théorie explicative", "Que le fromage provoque des accidents", "Que r = 0,95 prouve une causalité", "Que la statistique est inutile en sociologie"], explain: "Ce sont des <b>corrélations fallacieuses</b> : sans théorie sociologique, la statistique produit des illusions." },
      { t: "order", prompt: "Reconstitue l'explication de Durkheim : pourquoi les <b>suicides augmentent en été</b> ?", steps: ["Printemps et été : les journées s'allongent", "L'intensité de la vie sociale augmente", "Les exigences d'intégration s'élèvent", "L'isolement des personnes en rupture devient insupportable", "Le taux de suicide augmente"], extra: ["La chaleur échauffe les tissus cérébraux"], explain: "La température est un <b>leurre</b> : la variable cachée est l'<b>intensité de la vie sociale</b>. L'explication par la chaleur est l'explication naturaliste naïve." },
      { t: "match", pairs: [["Hôpital et décès (Coluche)", "Z = gravité initiale de la maladie"], ["Température et suicide (Durkheim)", "Z = intensité de la vie sociale"], ["Diplôme de la mère et réussite", "Transmission du capital culturel"], ["Black-White Test Score Gap", "Revenus, diplôme familial, ségrégation"], ["Variable cachée (Z)", "Cause commune de X et de Y"]] },
      { t: "fill", sentence: "Panel 2007 : quand les parents sont nés en France, ___ % des filles obtiennent un bac général, contre 38 % des garçons.", options: ["51", "63", "36", "22"], explain: "À origine égale, les <b>filles</b> obtiennent systématiquement plus souvent le bac général (Asie : 63 % contre 52 %)." },
      { t: "mcq", prompt: "Selon le cours, que cache la variable « <b>origine géographique</b> » dans ce tableau ?", options: ["La position sociale des parents, leur diplôme dans le pays d'origine et le projet migratoire", "Des différences d'aptitudes naturelles", "Le hasard des affectations scolaires", "Uniquement la langue parlée à la maison"], explain: "Il faut chercher les <b>variables cachées</b> sociales derrière l'origine, et non une explication biologique." }
    ]
  }
);
})();
