/* =====================================================================
   COURS : ESPAGNOL — Civilisation et langue (Espagne et Amérique latine)
   Enregistré dans window.COURSES['espagnol'] (voix de synthèse : es-ES).
   Convention : pour mcq et fill, options[0] est TOUJOURS la bonne réponse (mélangée à l'affichage).
   - `en` d'un mcq = phrase espagnole affichée dans une bulle avec bouton d'écoute.
   - order avec `answer` + `fr` = reconstruire une phrase espagnole à partir du français.
   - order avec `steps` = remettre des étapes (en français) dans l'ordre.
   Les cours suivants s'ajoutent en fin de fichier avec
   window.COURSES['espagnol'].levels.push(...)
   ===================================================================== */
window.COURSES = window.COURSES || {};

/* =====================================================================
   COURS 1 — Espagne contemporaine (séance 1)
   COURS 2 — Amérique latine (séance 2)
   ===================================================================== */
(function () {

const defs = rows => `<table class="w-full text-sm mt-2"><tbody>${rows.map(r => `<tr class="border-t border-line"><td class="py-2 pr-3 w-2/5 font-bold align-top">${r[0]}</td><td class="py-2 text-ink/80">${r[1]}</td></tr>`).join("")}</tbody></table>`;
const grid = (head, rows) => `<div class="overflow-x-auto mt-2"><table class="w-full text-sm"><thead><tr>${head.map(h => `<th class="text-left py-2 pr-3 border-b-2 border-line font-black">${h}</th>`).join("")}</tr></thead><tbody>${rows.map(r => `<tr class="border-t border-line">${r.map((c, i) => `<td class="py-2 pr-3 align-top ${i ? "text-ink/80" : "font-bold"}">${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
const box = (bg, html) => `<div class="rounded-2xl p-3 mt-2" style="background:${bg}">${html}</div>`;
const trap = html => box("#FFDFE0", "⚠️ " + html);
/* Phrase espagnole avec bouton d'écoute (spk et esc viennent de js/engine.js) */
const say = (es, fr) => `<div class="flex items-start gap-2 mt-2">${spk(es, "spk-sm")}<div><i>${esc(es)}</i>${fr ? `<div class="text-sm text-ink/60">${fr}</div>` : ""}</div></div>`;
const tip = html => box("#E5F8FF", "💡 " + html);

const EJE = { id: "eje", label: "Poder ejecutivo", emoji: "🏛️" }, LEG = { id: "leg", label: "Poder legislativo", emoji: "📜" };
const VAC = { id: "vac", label: "España vaciada", emoji: "🏚️" }, URB = { id: "urb", label: "Grandes ciudades", emoji: "🏙️" };
const APX = { id: "apx", label: "Aproximación", emoji: "≈" }, FRA = { id: "fra", label: "Fracción", emoji: "🍰" };
const IND = { id: "ind", label: "Indicios (gauche)", emoji: "🔑" }, APU = { id: "apu", label: "Apuntes (droite)", emoji: "✍️" }, SIN = { id: "sin", label: "Síntesis (bas)", emoji: "📌" };
const MIN = { id: "min", label: "Minería", emoji: "⛏️" }, AGR = { id: "agr", label: "Agricultura y energía", emoji: "🌱" };
const TAN = { id: "tan", label: "tan (invariable)", emoji: "🔒" }, TANTO = { id: "tanto", label: "tanto / -a / -os / -as", emoji: "🔁" };

const VOCAB_1 = [
  ["el paro / el desempleo", "le chômage"],
  ["el paro juvenil", "le chômage des jeunes (~25 % des moins de 25 ans)"],
  ["el alquiler", "le loyer / la location"],
  ["la vivienda", "le logement"],
  ["fijo discontinuo", "CDI intermittent / saisonnier (tourisme, récoltes)"],
  ["la España vaciada", "l'Espagne dépeuplée (intérieur rural)"],
  ["el sueldo", "le salaire"],
  ["las Cortes Generales", "le Parlement espagnol (Congrès + Sénat)"],
  ["la comunidad autónoma", "la région autonome"],
  ["el mar de plástico", "la mer de plastique (serres d'Almería)"]
];
const VOCAB_2 = [
  ["la economía informal", "l'économie informelle / souterraine"],
  ["la población activa", "la population active"],
  ["la recaudación fiscal", "les rentrées fiscales"],
  ["la tasa de paro", "le taux de chômage"],
  ["la sostenibilidad", "la durabilité / soutenabilité"],
  ["la abreviatura", "l'abréviation"],
  ["los indicios", "les indices / repères (colonne gauche de Cornell)"],
  ["la cotización", "la cotisation sociale"],
  ["la materia prima", "la matière première (cuivre, soja, pétrole, lithium)"],
  ["la desigualdad", "l'inégalité"]
];
const PAISES = [
  ["México", "Ciudad de México", "peso mexicano", "Plus grand marché intérieur hispanophone"],
  ["Guatemala", "Ciudad de Guatemala", "quetzal", "Dépend des transferts de fonds"],
  ["Costa Rica", "San José", "colón", "Stabilité institutionnelle, écotourisme"],
  ["Panamá", "Ciudad de Panamá", "balboa / dólar", "Double circulation avec le dollar US"],
  ["Cuba", "La Habana", "peso cubano", "Économie insulaire d'État"],
  ["Colombia", "Bogotá", "peso colombiano", "Café, fleurs, hydrocarbures"],
  ["Venezuela", "Caracas", "bolívar", "Économie rentière pétrolière"],
  ["Ecuador", "Quito", "dólar estadounidense", "Économie entièrement dollarisée"],
  ["Perú", "Lima", "sol", "Leader minier andin (cuivre, argent)"],
  ["Bolivia", "Sucre (constit.) / La Paz (gouv.)", "boliviano", "Deux capitales ; gisement d'Uyuni"],
  ["Chile", "Santiago", "peso chileno", "Cuivre et lithium (Atacama)"],
  ["Argentina", "Buenos Aires", "peso argentino", "Agro-industrie et technologie"],
  ["Uruguay", "Montevideo", "peso uruguayo", "Membre fondateur du Mercosur"],
  ["Paraguay", "Asunción", "guaraní", "Hydroélectricité et soja"]
];

window.COURSES.espagnol = {
  id: "espagnol",
  title: "Espagnol",
  icon: "💃",
  color: "#FF4B4B",
  lang: "es-ES",
  unit: { label: "Cours 1 et 2 · Espagnol", title: "España y América Latina", sub: "Institutions, territoires, économie, grammaire et vocabulaire" },
  mascot: "🧑‍🏫",
  matchHint: "Touche un mot espagnol (il est prononcé) puis sa traduction — ou fais-le glisser dessus.",
  levels: [
    /* ================= COURS 1 · NIVEAU 1 ================= */
    {
      title: "Cours 1 · Las instituciones de España", sub: "Monarchie parlementaire, pouvoirs et Europe", emoji: "👑", c: "#FF4B4B", d: "#EA2B2B",
      desc: "Le régime politique espagnol, le rôle du roi, le gouvernement, les Cortes Generales et l'intégration européenne.",
      fiche: () => `
        <h3>Le régime politique</h3>
        <p class="mt-1">L'Espagne est une <b>monarchie parlementaire démocratique</b>, instaurée par la <b>Constitution de 1978</b>, après la fin de la dictature franquiste (<b>1975</b>).</p>
        ${say("España es una monarquía parlamentaria democrática.", "L'Espagne est une monarchie parlementaire démocratique.")}
        <h3>Qui fait quoi ?</h3>
        ${defs([
          ["El Rey (Felipe VI)", "<b>Chef de l'État</b> (<i>Jefe del Estado</i>). Rôle représentatif, arbitral et modérateur. Il <b>ne dirige pas</b> le gouvernement et n'a pas le pouvoir exécutif."],
          ["El Gobierno", "Détient le <b>pouvoir exécutif</b>. Il est dirigé par le <i>Presidente del Gobierno</i>, qui doit obtenir l'<b>investiture du Parlement</b>."],
          ["Las Cortes Generales", "Le <b>pouvoir législatif</b> : un Parlement bicaméral composé du <i>Congreso de los Diputados</i> et du <i>Senado</i>."]
        ])}
        ${trap("Ne confonds pas : le <b>Rey</b> = <i>Jefe del Estado</i> (symbole) ; le <b>Presidente del Gobierno</b> = celui qui gouverne.")}
        <h3>L'Espagne et l'Europe</h3>
        ${defs([["1986", "Adhésion à la CEE (actuelle Union européenne)."], ["2002", "Adoption de l'euro."]])}
        <h3>Vocabulaire à écouter</h3>
        ${table([
          ["la monarquía parlamentaria", "la monarchie parlementaire"],
          ["el Jefe del Estado", "le chef de l'État"],
          ["el Gobierno", "le gouvernement"],
          ["el Presidente del Gobierno", "le Président du gouvernement"],
          ["las Cortes Generales", "le Parlement espagnol"],
          ["el Congreso de los Diputados", "le Congrès des députés"],
          ["el Senado", "le Sénat"],
          ["la Constitución", "la Constitution"]
        ])}`,
      ex: [
        { t: "mcq", prompt: "Quel est le <b>régime politique</b> de l'Espagne ?", en: "España es una monarquía parlamentaria democrática.", options: ["Une monarchie parlementaire démocratique", "Une république présidentielle", "Une monarchie absolue", "Une république fédérale"], explain: "Régime instauré par la <b>Constitution de 1978</b>, après la fin de la dictature franquiste (1975)." },
        { t: "match", pairs: [["el Jefe del Estado", "le chef de l'État"], ["el Gobierno", "le gouvernement"], ["las Cortes Generales", "le Parlement espagnol"], ["el Senado", "le Sénat"], ["la monarquía", "la monarchie"]] },
        { t: "mcq", prompt: "Qui <b>dirige le gouvernement</b> en Espagne ?", en: "El Presidente del Gobierno dirige el Gobierno.", options: ["Le Président du gouvernement", "Le roi Felipe VI", "Le président du Sénat", "Le président de la Commission européenne"], explain: "Le <i>Presidente del Gobierno</i> détient le pouvoir exécutif, après avoir obtenu l'<b>investiture du Parlement</b>. Le roi, lui, ne gouverne pas." },
        { t: "fill", sentence: "El Rey Felipe VI es el Jefe del ___.", fr: "Le roi Felipe VI est le chef de l'État.", options: ["Estado", "Gobierno", "Senado", "Congreso"], explain: "<i>Jefe del Estado</i> = chef de l'État. Son rôle est <b>représentatif, arbitral et modérateur</b>." },
        { t: "spot", words: ["El", "Rey", "dirige", "el", "Gobierno", "de", "España."], wrong: 2, fix: "El Rey no dirige el Gobierno: es el Jefe del Estado.", explain: "Piège classique : le roi n'a <b>pas le pouvoir exécutif</b>. C'est le <i>Presidente del Gobierno</i> qui dirige le gouvernement." },
        { t: "sort", prompt: "Pouvoir <b>exécutif</b> ou pouvoir <b>législatif</b> ?", cats: [EJE, LEG], items: [{ t: "el Gobierno", c: "eje", en: 1 }, { t: "el Presidente del Gobierno", c: "eje", en: 1 }, { t: "la investidura del Presidente", c: "eje", en: 1 }, { t: "el Congreso de los Diputados", c: "leg", en: 1 }, { t: "el Senado", c: "leg", en: 1 }, { t: "las Cortes Generales", c: "leg", en: 1 }] },
        { t: "order", fr: "L'Espagne est une monarchie parlementaire.", answer: "España es una monarquía parlamentaria.", extra: ["república", "son"] },
        { t: "mcq", prompt: "De quoi sont composées les <b>Cortes Generales</b> ?", en: "Las Cortes Generales: el Congreso de los Diputados y el Senado.", options: ["Du Congrès des députés et du Sénat", "Du gouvernement et du roi", "Des 17 parlements régionaux", "Du Sénat uniquement"], explain: "C'est un Parlement <b>bicaméral</b> (deux chambres) : <i>Congreso de los Diputados</i> + <i>Senado</i>." },
        { t: "order", prompt: "Remets ces dates de l'Espagne contemporaine dans l'<b>ordre chronologique</b>.", steps: ["1975 : fin de la dictature franquiste", "1978 : Constitution démocratique", "1986 : adhésion à la CEE", "2002 : adoption de l'euro"], extra: ["2002 : adhésion à la CEE"], explain: "La CEE, c'est <b>1986</b> ; l'euro, c'est <b>2002</b>." },
        { t: "mcq", prompt: "En quelle année l'Espagne <b>adhère-t-elle à la CEE</b> ?", en: "España entró en la Comunidad Económica Europea en 1986.", options: ["1986", "1978", "2002", "1975"], explain: "1975 : fin du franquisme · 1978 : Constitution · <b>1986 : CEE</b> · 2002 : euro." },
        { t: "fill", sentence: "España adoptó el euro en ___.", fr: "L'Espagne a adopté l'euro en 2002.", options: ["2002", "1986", "1978", "1975"], explain: "<i>adoptó</i> = a adopté (passé simple du verbe <i>adoptar</i>)." },
        { t: "mcq", prompt: "Comment dit-on « <b>le gouvernement</b> » en espagnol ?", options: ["el Gobierno", "el Govierno", "la Gobierna", "el Gobernio"], speakOpts: true, explain: "<i>el Gobierno</i>, avec un <b>b</b>. Écoute bien la prononciation." }
      ]
    },

    /* ================= COURS 1 · NIVEAU 2 ================= */
    {
      title: "Cours 1 · Territorio y economía", sub: "Régions, langues, España vaciada, emploi", emoji: "🗺️", c: "#FF9600", d: "#CC7800",
      desc: "Les 17 communautés autonomes, les langues co-officielles, l'Espagne vide, les grands secteurs économiques et le chômage des jeunes.",
      fiche: () => `
        <h3>Un pays décentralisé</h3>
        ${defs([
          ["17 comunidades autónomas", "Chacune a son <b>parlement</b> et gère l'éducation (<i>educación</i>), la santé (<i>sanidad</i>) et les politiques sociales."],
          ["2 ciudades autónomas", "<b>Ceuta et Melilla</b>, sur le continent africain."]
        ])}
        <h3>Les langues</h3>
        ${defs([
          ["el castellano", "Le castillan : langue officielle sur tout le territoire."],
          ["Langues co-officielles", "Le <b>catalan / valencien</b> (<i>catalán / valenciano</i>), le <b>galicien</b> (<i>gallego</i>) et le <b>basque</b> (<i>euskera</i>), dans leurs régions."]
        ])}
        <h3>La España vaciada</h3>
        <p class="mt-1">Contraste entre les métropoles et littoraux saturés et l'<b>intérieur</b> (Castille-et-León, Aragon, Castille-La Manche), dépeuplé : <b>moins de 15 hab/km²</b>. Conséquences : fermeture de services publics à la campagne et <b>crise du logement</b> (<i>alquiler, vivienda</i>) à Madrid, Barcelone, Valence, Málaga.</p>
        <h3>L'économie espagnole en chiffres</h3>
        ${defs([
          ["Population", "Environ <b>49 millions</b> d'habitants."],
          ["Rang", "<b>4e économie de la zone euro</b> (après l'Allemagne, la France et l'Italie)."],
          ["Services", "Environ <b>75 %</b> du PIB (les trois quarts)."],
          ["Tourisme", "2e pays le plus visité au monde : près de <b>94 millions</b> de touristes en 2024."],
          ["Agriculture", "<i>El mar de plástico</i> : plus de <b>30 000 ha</b> de serres à Almería et Murcie."],
          ["Train", "1er réseau européen de grande vitesse : l'<b>AVE</b> (<i>Alta Velocidad Española</i>)."],
          ["Entreprises", "<b>Inditex</b> (Zara, textile), <b>Banco Santander</b> (banque), <b>Iberdrola</b> (énergies renouvelables)."]
        ])}
        <h3>L'emploi</h3>
        ${defs([
          ["el paro", "Chômage global autour de <b>10-11 %</b>."],
          ["el paro juvenil", "Chômage des jeunes proche de <b>25 %</b>, l'un des plus élevés de l'UE."],
          ["Émancipation tardive", "Les jeunes quittent le foyer <b>après 30 ans</b> en moyenne : salaires faibles, loyers élevés."],
          ["el contrato fijo discontinuo", "CDI pour activités <b>saisonnières</b>, alternant périodes d'activité et d'inactivité."]
        ])}
        ${say("El paro juvenil está cerca del 25 %.", "Le chômage des jeunes est proche de 25 %.")}`,
      ex: [
        { t: "fill", sentence: "España tiene diecisiete comunidades ___.", fr: "L'Espagne compte dix-sept communautés autonomes.", options: ["autónomas", "regionales", "federales", "provinciales"], explain: "<i>comunidades autónomas</i> : chacune a son parlement et gère l'éducation et la santé." },
        { t: "mcq", prompt: "Quelles sont les <b>2 villes autonomes</b> espagnoles situées en Afrique ?", en: "Ceuta y Melilla son ciudades autónomas.", options: ["Ceuta et Melilla", "Ceuta et Tanger", "Melilla et Las Palmas", "Cadix et Melilla"], explain: "En plus des 17 communautés autonomes, l'Espagne compte <b>Ceuta et Melilla</b>, sur le continent africain." },
        { t: "match", pairs: [["el castellano", "le castillan (officiel partout)"], ["el catalán / valenciano", "le catalan / valencien"], ["el gallego", "le galicien"], ["el euskera", "le basque"], ["la sanidad", "la santé"]] },
        { t: "mcq", prompt: "Que désigne « <b>la España vaciada</b> » ?", en: "La España vaciada pierde población.", options: ["L'intérieur rural dépeuplé (moins de 15 hab/km²)", "Les côtes saturées de touristes", "Les villes autonomes d'Afrique", "Les régions bilingues"], explain: "<i>vaciada</i> = vidée. Castille-et-León, Aragon, Castille-La Manche se dépeuplent ; <i>pierde población</i> = perd des habitants." },
        { t: "sort", prompt: "Ces éléments concernent-ils l'<b>Espagne vide</b> ou les <b>grandes villes</b> ?", cats: [VAC, URB], items: [{ t: "Castilla y León", c: "vac", en: 1 }, { t: "Aragón", c: "vac", en: 1 }, { t: "Fermeture de services publics", c: "vac" }, { t: "Madrid", c: "urb", en: 1 }, { t: "Barcelona", c: "urb", en: 1 }, { t: "Crise du logement (alquiler caro)", c: "urb" }] },
        { t: "fill", sentence: "El sector servicios representa ___ del PIB.", fr: "Le secteur des services représente les trois quarts du PIB.", options: ["las tres cuartas partes", "la mitad", "un tercio", "un cuarto"], explain: "Environ <b>75 %</b> du PIB = <i>las tres cuartas partes</i>." },
        { t: "match", pairs: [["Inditex (Zara)", "Leader mondial du textile"], ["Banco Santander", "Géant bancaire international"], ["Iberdrola", "Énergies renouvelables"], ["el AVE", "Le train à grande vitesse"], ["el mar de plástico", "Les serres d'Almería"]] },
        { t: "mcq", prompt: "Combien de <b>touristes internationaux</b> l'Espagne a-t-elle accueillis en 2024 ?", en: "España recibió casi 94 millones de turistas en 2024.", options: ["Près de 94 millions", "Environ 49 millions", "Près de 30 millions", "Plus de 200 millions"], explain: "Record historique : c'est le <b>2e pays le plus visité au monde</b>. (49 millions = sa population.)" },
        { t: "fill", sentence: "El paro juvenil está cerca del ___ %.", fr: "Le chômage des jeunes est proche de 25 %.", options: ["25", "10", "50", "75"], explain: "Chômage global : 10-11 % ; chômage des jeunes (<i>paro juvenil</i>) : environ <b>25 %</b>." },
        { t: "spot", words: ["Los", "jóvenes", "españoles", "se", "emancipan", "muy", "pronto."], wrong: 6, fix: "Los jóvenes españoles se emancipan muy tarde, después de los 30 años.", explain: "<i>pronto</i> = tôt ; <i>tarde</i> = tard. Les salaires faibles et les loyers élevés retardent l'émancipation au-delà de <b>30 ans</b>." },
        { t: "mcq", prompt: "Qu'est-ce qu'un contrat <b>« fijo discontinuo »</b> ?", options: ["Un CDI pour des activités saisonnières, alternant activité et inactivité", "Un CDD de courte durée", "Un contrat d'apprentissage", "Un contrat de fonctionnaire"], explain: "Utilisé dans le <b>tourisme</b> et les <b>récoltes</b> ; la réforme du travail l'a beaucoup développé." },
        { t: "order", fr: "Le logement est très cher à Madrid.", answer: "La vivienda es muy cara en Madrid.", extra: ["caro", "barata"] }
      ]
    },

    /* ================= COURS 1 · NIVEAU 3 ================= */
    {
      title: "Cours 1 · Gramática y vocabulario", sub: "Se lo, pourcentages, fractions, approximations", emoji: "✏️", c: "#1CB0F6", d: "#1899D6",
      desc: "La règle le + lo → se lo, l'article devant les pourcentages, les fractions, les mots d'approximation et tout le vocabulaire de la séance 1.",
      fiche: () => `
        <h3>Règle 1 · le + lo = se lo</h3>
        <p class="mt-1">Quand le COI (<i>le / les</i>) rencontre le COD (<i>lo / la / los / las</i>), <b>le devient se</b>.</p>
        ${say("¿Le diste el informe a Pedro? — Sí, se lo di ayer.", "Tu as donné le rapport à Pedro ? — Oui, je le lui ai donné hier.")}
        ${trap("Jamais <b>le lo</b> ni <b>les la</b> : toujours <b>se lo, se la, se los, se las</b>.")}
        <h3>Règle 2 · L'article devant les pourcentages</h3>
        <p class="mt-1">En espagnol, un pourcentage prend toujours l'<b>article masculin</b> : <b>el 10 %</b>, <b>el 25 %</b>. Avec <i>de</i> : <b>del</b> 10 %.</p>
        ${say("El 25 % de los jóvenes está en paro.", "25 % des jeunes sont au chômage.")}
        <h3>Règle 3 · Les fractions</h3>
        ${table([["la mitad", "la moitié = 50 %"], ["un tercio", "un tiers = 33,3 %"], ["un cuarto", "un quart = 25 %"], ["las tres cuartas partes", "les trois quarts = 75 %"]])}
        <h3>Règle 4 · L'approximation</h3>
        ${table([["casi", "presque"], ["en torno a", "autour de"], ["alrededor de", "autour de / environ"], ["cerca de", "près de"], ["unos / unas", "environ (devant un nombre)"]])}
        <h3>Vocabulaire de la séance 1</h3>
        ${table(VOCAB_1)}`,
      outro: () => `<div class="mt-8"><h2 class="font-black text-lg">📌 À retenir du cours 1</h2>${defs([
        ["Institutions", "Monarchie parlementaire (1978) · Rey = Jefe del Estado · Presidente del Gobierno = exécutif · Cortes Generales = Congreso + Senado · CEE 1986 · euro 2002"],
        ["Territoire", "17 comunidades autónomas + Ceuta et Melilla · castellano + catalán, gallego, euskera · España vaciada (< 15 hab/km²)"],
        ["Économie", "49 M d'hab. · 4e de la zone euro · services 75 % · 94 M de touristes · paro 10-11 %, paro juvenil 25 %"],
        ["Grammaire", "le + lo → <b>se lo</b> · <b>el</b> 25 % · la mitad, un tercio, un cuarto, las tres cuartas partes"]
      ])}</div>`,
      ex: [
        { t: "mcq", prompt: "Choisis la bonne réponse à cette question :", en: "¿Le diste el informe a Pedro?", options: ["Sí, se lo di ayer.", "Sí, le lo di ayer.", "Sí, lo le di ayer.", "Sí, se le di ayer."], speakOpts: true, explain: "<i>le</i> (à Pedro) + <i>lo</i> (le rapport) → <b>se lo</b>. On ne dit jamais « le lo »." },
        { t: "fill", sentence: "¿Le diste el informe a Pedro? — Sí, ___ lo di ayer.", fr: "Oui, je le lui ai donné hier.", options: ["se", "le", "les", "me"], explain: "Devant <i>lo / la / los / las</i>, le pronom <i>le</i> devient <b>se</b>." },
        { t: "spot", words: ["Sí,", "le", "lo", "di", "ayer."], wrong: 1, fix: "Sí, se lo di ayer.", explain: "« le lo » est impossible en espagnol : <b>se lo</b>." },
        { t: "fill", sentence: "___ 25 % de los jóvenes está en paro.", fr: "25 % des jeunes sont au chômage.", options: ["El", "La", "Los", "∅ (rien)"], explain: "Un pourcentage prend toujours l'<b>article masculin</b> : <i>el 25 %</i>." },
        { t: "spot", words: ["España", "tiene", "un", "paro", "de", "10", "%."], wrong: 4, fix: "España tiene un paro del 10 %.", explain: "Il faut l'article devant le pourcentage : <i>de + el 10 %</i> = <b>del 10 %</b>." },
        { t: "match", pairs: [["la mitad", "50 %"], ["un tercio", "33,3 %"], ["un cuarto", "25 %"], ["las tres cuartas partes", "75 %"], ["casi", "presque"]] },
        { t: "sort", prompt: "Expression d'<b>approximation</b> ou <b>fraction</b> ?", cats: [APX, FRA], items: [{ t: "casi", c: "apx", en: 1 }, { t: "en torno a", c: "apx", en: 1 }, { t: "alrededor de", c: "apx", en: 1 }, { t: "cerca de", c: "apx", en: 1 }, { t: "la mitad", c: "fra", en: 1 }, { t: "un cuarto", c: "fra", en: 1 }] },
        { t: "mcq", prompt: "Que signifie « <b>en torno a</b> » ?", en: "El paro está en torno al 10 %.", options: ["autour de", "presque", "plus de", "la moitié de"], explain: "<i>en torno a</i> = <i>alrededor de</i> = autour de. <i>en torno a + el</i> → <b>en torno al</b>." },
        { t: "order", fr: "Presque un quart des jeunes est au chômage.", answer: "Casi un cuarto de los jóvenes está en paro.", extra: ["tercio", "son"] },
        { t: "match", pairs: [["el paro", "le chômage"], ["el alquiler", "le loyer"], ["la vivienda", "le logement"], ["el sueldo", "le salaire"], ["la comunidad autónoma", "la région autonome"]] },
        { t: "mcq", prompt: "Comment dit-on « <b>le loyer</b> » ?", options: ["el alquiler", "la vivienda", "el sueldo", "el paro"], speakOpts: true, explain: "<i>el alquiler</i> = le loyer / la location ; <i>la vivienda</i> = le logement ; <i>el sueldo</i> = le salaire." },
        { t: "fill", sentence: "Los jóvenes no pueden pagar el ___ porque los sueldos son bajos.", fr: "Les jeunes ne peuvent pas payer le loyer car les salaires sont bas.", options: ["alquiler", "paro", "Senado", "sueldo"], explain: "<i>porque</i> = parce que ; <i>bajos</i> = bas. C'est la cause de l'émancipation tardive." }
      ]
    },

    /* ================= COURS 2 · NIVEAU 4 ================= */
    {
      title: "Cours 2 · Tomar apuntes y demografía", sub: "Méthode Cornell, abréviations, population, économie informelle", emoji: "📝", c: "#58CC02", d: "#58A700",
      desc: "La prise de notes Cornell et ses abréviations, la population des pays hispanophones et l'économie informelle en Amérique latine.",
      fiche: () => `
        <h3>La méthode Cornell (Dr Walter Pauk)</h3>
        ${grid(["Zone", "Largeur", "Contenu"], [
          ["Colonne gauche (<i>Indicios</i>)", "25 %", "Mots-clés, définitions, concepts, questions guides"],
          ["Colonne droite (<i>Apuntes</i>)", "75 %", "Prise de notes active : abréviations, chiffres, relations de cause, <b>sans phrases rédigées</b>"],
          ["Bas de page (<i>Síntesis</i>)", "—", "Résumé de 2 à 3 lignes, rédigé <b>à froid</b> après le cours"]
        ])}
        <h3>Abréviations et symboles</h3>
        ${table([["q", "que"], ["xq", "porque"], ["pobl.", "población"], ["ppal.", "principal"], ["aprox.", "aproximadamente"], ["AL", "América Latina"], ["EE. UU.", "Estados Unidos"]])}
        ${defs([["+ / –", "más, además / menos"], ["= / ≠", "equivale a / contraste, diferente"], ["↑ / ↓", "aumento, alza / disminución, retroceso"], ["→", "provoca, desemboca en"]])}
        <h3>La population hispanophone</h3>
        ${defs([
          ["México", "~<b>130 millions</b> : 1er pays hispanophone au monde."],
          ["Colombia", "~<b>53 millions</b> : 2e, devant l'Espagne."],
          ["España", "~<b>49 millions</b>."],
          ["Argentina", "~<b>46 millions</b>, sur 2,78 millions de km²."],
          ["Chile", "~<b>20 millions</b> ; mines de cuivre et de lithium."]
        ])}
        <h3>L'économie informelle (<i>la economía informal</i>)</h3>
        <p class="mt-1">Environ <b>50 %</b> de la population active en Amérique latine (plus de <b>70 %</b> en Bolivie ou au Guatemala).</p>
        ${defs([
          ["Conséquences sociales", "Emplois de subsistance : pas de contrat, pas de salaire garanti, pas d'indemnités chômage, pas d'arrêt maladie, pas de retraite."],
          ["Conséquences fiscales", "Peu d'impôts collectés (<i>recaudación fiscal</i>) → moins d'argent pour les hôpitaux, les écoles et les infrastructures."]
        ])}
        ${say("La economía informal afecta a la mitad de la población activa.", "L'économie informelle touche la moitié de la population active.")}`,
      ex: [
        { t: "mcq", prompt: "Qui a créé le système de prise de notes <b>Cornell</b> ?", options: ["Le Dr Walter Pauk", "Émile Durkheim", "Le roi Felipe VI", "Simón Bolívar"], explain: "La page est divisée en trois zones : <i>Indicios</i>, <i>Apuntes</i>, <i>Síntesis</i>." },
        { t: "sort", prompt: "Dans quelle zone de la page Cornell va chaque élément ?", cats: [IND, APU, SIN], items: [{ t: "Mots-clés et définitions", c: "ind" }, { t: "Questions guides", c: "ind" }, { t: "Abréviations et chiffres", c: "apu" }, { t: "Relations de cause, sans phrases", c: "apu" }, { t: "Résumé de 2 à 3 lignes", c: "sin" }, { t: "Rédigé à froid après le cours", c: "sin" }] },
        { t: "mcq", prompt: "Quelle largeur occupe la colonne de droite (<b>Apuntes</b>) ?", options: ["75 %", "25 %", "50 %", "100 %"], explain: "Gauche (<i>Indicios</i>) : 25 % ; droite (<i>Apuntes</i>) : <b>75 %</b> ; en bas : la <i>Síntesis</i>." },
        { t: "match", pairs: [["xq", "porque"], ["q", "que"], ["pobl.", "población"], ["ppal.", "principal"], ["AL", "América Latina"]] },
        { t: "match", pairs: [["aumento / alza", "↑"], ["disminución / retroceso", "↓"], ["provoca / desemboca en", "→"], ["contraste / diferente", "≠"], ["Estados Unidos", "EE. UU."]] },
        { t: "order", fr: "Le Mexique a environ 130 millions d'habitants.", answer: "México tiene unos 130 millones de habitantes.", extra: ["más", "que"] },
        { t: "mcq", prompt: "Quel est le <b>2e pays hispanophone</b> le plus peuplé ?", en: "Colombia tiene más habitantes que España.", options: ["La Colombie (~53 millions)", "L'Espagne (~49 millions)", "L'Argentine (~46 millions)", "Le Chili (~20 millions)"], explain: "Mexique (130 M) > <b>Colombie (53 M)</b> > Espagne (49 M) > Argentine (46 M) > Chili (20 M)." },
        { t: "order", prompt: "Classe ces pays du <b>plus peuplé</b> au <b>moins peuplé</b>.", steps: ["México (~130 millones)", "Colombia (~53 millones)", "España (~49 millones)", "Argentina (~46 millones)", "Chile (~20 millones)"], extra: ["Cuba (~200 millones)"], explain: "La Colombie dépasse l'Espagne : un piège fréquent." },
        { t: "mcq", prompt: "Quelle part de la population active latino-américaine travaille dans l'<b>économie informelle</b> ?", en: "La economía informal afecta a la mitad de la población activa.", options: ["Environ 50 %", "Environ 10 %", "Environ 25 %", "Plus de 90 %"], explain: "<i>la mitad</i> = la moitié. Plus de <b>70 %</b> en Bolivie ou au Guatemala." },
        { t: "order", prompt: "Reconstitue les <b>conséquences fiscales</b> de l'économie informelle.", steps: ["Des emplois sans contrat ni déclaration", "Pas d'impôts ni de cotisations sociales", "Une faible recaudación fiscal", "Moins d'argent pour les hôpitaux, les écoles et les infrastructures"], extra: ["Une hausse des cotisations retraite"], explain: "<i>la recaudación fiscal</i> = les rentrées d'impôts de l'État." },
        { t: "spot", words: ["En", "la", "economía", "informal,", "los", "trabajadores", "tienen", "contrato."], wrong: 6, fix: "En la economía informal, los trabajadores no tienen contrato.", explain: "C'est toute la définition : ni contrat, ni salaire garanti, ni retraite." },
        { t: "fill", sentence: "Chile es un gran exportador de cobre y de ___.", fr: "Le Chili est un grand exportateur de cuivre et de lithium.", options: ["litio", "café", "petróleo", "soja"], explain: "<i>el cobre</i> = le cuivre ; <i>el litio</i> = le lithium (désert d'Atacama)." }
      ]
    },

    /* ================= COURS 2 · NIVEAU 5 ================= */
    {
      title: "Cours 2 · Países, capitales y monedas", sub: "Le tableau qui tombe en quiz", emoji: "🌎", c: "#CE82FF", d: "#A568CC",
      desc: "Les 14 pays d'Amérique latine du cours : capitales, monnaies et spécialités économiques.",
      fiche: () => `
        <h3>Pays, capitales et monnaies</h3>
        <p class="mt-1 text-sm text-ink/70">Ce tableau fait l'objet de tests réguliers. Clique sur 🔊 pour entendre la prononciation.</p>
        <div class="overflow-x-auto mt-2"><table class="w-full text-sm"><thead><tr>${["País", "Capital", "Moneda", "Particularité"].map(h => `<th class="text-left py-2 pr-3 border-b-2 border-line font-black">${h}</th>`).join("")}</tr></thead><tbody>${PAISES.map(p => `
          <tr class="border-t border-line">
            <td class="py-2 pr-3 align-top"><div class="flex items-center gap-2">${spk(p[0] + ". " + p[1] + ". " + p[2], "spk-sm")}<b>${esc(p[0])}</b></div></td>
            <td class="py-2 pr-3 align-top">${esc(p[1])}</td>
            <td class="py-2 pr-3 align-top"><b>${esc(p[2])}</b></td>
            <td class="py-2 align-top text-ink/70">${esc(p[3])}</td>
          </tr>`).join("")}</tbody></table></div>
        ${tip("Pièges classiques : la Bolivie a <b>deux capitales</b> (Sucre et La Paz) ; l'Équateur utilise le <b>dollar américain</b> ; le Panamá a le balboa <b>et</b> le dollar ; le Pérou utilise le <b>sol</b>, pas le peso.")}`,
      ex: [
        { t: "match", pairs: [["México", "Ciudad de México"], ["Colombia", "Bogotá"], ["Perú", "Lima"], ["Chile", "Santiago"], ["Argentina", "Buenos Aires"]] },
        { t: "match", pairs: [["Venezuela", "Caracas"], ["Ecuador", "Quito"], ["Uruguay", "Montevideo"], ["Paraguay", "Asunción"], ["Cuba", "La Habana"]] },
        { t: "match", pairs: [["Guatemala", "el quetzal"], ["Costa Rica", "el colón"], ["Perú", "el sol"], ["Venezuela", "el bolívar"], ["Paraguay", "el guaraní"]] },
        { t: "mcq", prompt: "Quelles sont les <b>deux capitales</b> de la Bolivie ?", en: "Bolivia tiene dos capitales: Sucre y La Paz.", options: ["Sucre (constitutionnelle) et La Paz (gouvernement)", "La Paz et Lima", "Sucre et Quito", "Santiago et La Paz"], explain: "<b>Sucre</b> est la capitale constitutionnelle, <b>La Paz</b> le siège du gouvernement. Monnaie : le <i>boliviano</i>." },
        { t: "mcq", prompt: "Quelle est la <b>monnaie de l'Équateur</b> ?", en: "Ecuador usa el dólar estadounidense.", options: ["Le dollar américain", "Le sol", "Le peso équatorien", "Le bolívar"], explain: "L'Équateur a une économie <b>entièrement dollarisée</b> : <i>el dólar estadounidense</i>." },
        { t: "fill", sentence: "La capital de Costa Rica es ___.", fr: "La capitale du Costa Rica est San José.", options: ["San José", "Ciudad de Panamá", "Quito", "Bogotá"], explain: "Costa Rica : <b>San José</b>, monnaie le <i>colón</i>, stabilité institutionnelle et écotourisme." },
        { t: "sort", prompt: "Spécialité <b>minière</b> ou <b>agricole / énergétique</b> ?", cats: [MIN, AGR], items: [{ t: "Chile: cobre y litio", c: "min", en: 1 }, { t: "Perú: cobre y plata", c: "min", en: 1 }, { t: "Bolivia: el salar de Uyuni", c: "min", en: 1 }, { t: "Colombia: café y flores", c: "agr", en: 1 }, { t: "Paraguay: soja e hidroelectricidad", c: "agr", en: 1 }, { t: "Argentina: agroindustria", c: "agr", en: 1 }] },
        { t: "mcq", prompt: "Quelle est la particularité monétaire du <b>Panamá</b> ?", en: "En Panamá circulan el balboa y el dólar.", options: ["Le balboa circule légalement avec le dollar américain", "Il utilise l'euro", "Il n'a pas de monnaie nationale", "Il utilise le peso mexicain"], explain: "Double circulation légale : <i>balboa</i> + <i>dólar</i>." },
        { t: "spot", words: ["La", "capital", "de", "Colombia", "es", "Caracas."], wrong: 5, fix: "La capital de Colombia es Bogotá.", explain: "<b>Caracas</b> est la capitale du <b>Venezuela</b> ; la Colombie, c'est <b>Bogotá</b>." },
        { t: "spot", words: ["La", "moneda", "de", "Perú", "es", "el", "peso."], wrong: 6, fix: "La moneda de Perú es el sol.", explain: "Le Pérou utilise le <b>sol</b>. Le peso est la monnaie du Mexique, de la Colombie, de Cuba, du Chili, de l'Argentine et de l'Uruguay." },
        { t: "mcq", prompt: "Quel pays a une économie <b>rentière pétrolière</b> ?", en: "Venezuela tiene una economía petrolera.", options: ["Le Venezuela", "Le Costa Rica", "L'Uruguay", "Le Guatemala"], explain: "Venezuela : capitale Caracas, monnaie le <i>bolívar</i>. (Uruguay = membre fondateur du Mercosur ; Guatemala = transferts de fonds.)" },
        { t: "order", fr: "La capitale de l'Argentine est Buenos Aires.", answer: "La capital de Argentina es Buenos Aires.", extra: ["Santiago", "son"] }
      ]
    },

    /* ================= COURS 2 · NIVEAU 6 ================= */
    {
      title: "Cours 2 · Comparativos y superlativos", sub: "más de + chiffre, tan / tanto, mejor, peor, mayor", emoji: "⚖️", c: "#00CD9C", d: "#00A47C",
      desc: "Comparer en espagnol sans tomber dans les pièges du QCM, et le vocabulaire de la séance 2.",
      fiche: () => `
        <h3>1. Plus / moins … que</h3>
        ${box("#F7F7F7", "<b>más / menos</b> + adjectif ou nom + <b>que</b>")}
        ${say("México tiene más habitantes que Colombia.", "Le Mexique a plus d'habitants que la Colombie.")}
        <h3>2. Le piège du chiffre : más de</h3>
        ${trap("Devant un <b>nombre</b> (phrase affirmative), on dit <b>más de / menos de</b>, jamais « más que ».")}
        ${say("Chile tiene más de 20 millones de habitantes.", "Le Chili a plus de 20 millions d'habitants.")}
        <h3>3. Aussi … que : tan / tanto … como</h3>
        ${defs([
          ["tan + adjectif / adverbe + como", "<b>tan</b> est <b>invariable</b> (jamais « tanta poblada »)."],
          ["tanto / tanta / tantos / tantas + nom + como", "S'accorde avec le nom."]
        ])}
        ${say("Buenos Aires no es tan poblada como Ciudad de México.", "Buenos Aires n'est pas aussi peuplée que Mexico.")}
        ${say("España no exporta tantas materias primas como Chile.", "L'Espagne n'exporte pas autant de matières premières que le Chili.")}
        <h3>4. Superlatifs et irréguliers</h3>
        ${defs([
          ["Superlatif relatif", "<b>el / la más</b> + adjectif + <b>de</b>"],
          ["más bueno → mejor", "meilleur"],
          ["más malo → peor", "pire"],
          ["mayor / menor", "pour l'âge, la taille d'un territoire, les grandeurs abstraites"],
          ["Superlatif absolu", "<b>-ísimo / -ísima</b> ou <b>muy</b> : <i>altísimas</i>"]
        ])}
        ${say("México es el país más poblado de Hispanoamérica.", "Le Mexique est le pays le plus peuplé d'Amérique hispanique.")}
        ${say("Argentina tiene un área mayor que Chile.", "L'Argentine a une superficie plus grande que le Chili.")}
        ${say("Las disparidades son altísimas.", "Les disparités sont très élevées.")}
        <h3>Vocabulaire de la séance 2</h3>
        ${table(VOCAB_2)}`,
      outro: () => `<div class="mt-8"><h2 class="font-black text-lg">📌 À retenir du cours 2</h2>${defs([
        ["Méthode Cornell", "Indicios (25 %) · Apuntes (75 %) · Síntesis (2-3 lignes) · q, xq, pobl., ppal., AL, ↑ ↓ →"],
        ["Population", "México 130 M · Colombia 53 M · España 49 M · Argentina 46 M · Chile 20 M"],
        ["Économie informelle", "~50 % de la population active · pas de contrat ni de cotisations · peu de recaudación fiscal"],
        ["Pièges de capitales et de monnaies", "Bolivia : Sucre + La Paz · Ecuador : dólar · Panamá : balboa + dólar · Perú : sol"],
        ["Comparatifs", "más … <b>que</b> · más <b>de</b> + chiffre · <b>tan</b> + adjectif (invariable) · <b>tanto/a/os/as</b> + nom · mejor, peor, mayor, menor · -ísimo"]
      ])}</div>`,
      ex: [
        { t: "fill", sentence: "México tiene más habitantes ___ Colombia.", fr: "Le Mexique a plus d'habitants que la Colombie.", options: ["que", "de", "como", "tan"], explain: "<b>más</b> + nom + <b>que</b> : comparatif de supériorité." },
        { t: "fill", sentence: "Chile tiene más ___ 20 millones de habitantes.", fr: "Le Chili a plus de 20 millions d'habitants.", options: ["de", "que", "como", "tan"], explain: "Règle d'or : devant un <b>chiffre</b>, <b>más de</b> (jamais « más que »)." },
        { t: "spot", words: ["Chile", "tiene", "más", "que", "20", "millones", "de", "habitantes."], wrong: 3, fix: "Chile tiene más de 20 millones de habitantes.", explain: "Faute sanctionnée au QCM : devant un nombre, on écrit <b>más de</b>." },
        { t: "fill", sentence: "Buenos Aires no es ___ poblada como Ciudad de México.", fr: "Buenos Aires n'est pas aussi peuplée que Mexico.", options: ["tan", "tanta", "tanto", "más"], explain: "Devant un <b>adjectif</b> (<i>poblada</i>) : <b>tan</b>, invariable, + <b>como</b>." },
        { t: "fill", sentence: "España no exporta ___ materias primas como Chile.", fr: "L'Espagne n'exporte pas autant de matières premières que le Chili.", options: ["tantas", "tan", "tantos", "tanta"], explain: "Devant un <b>nom</b> : <i>tanto</i> s'accorde. <i>materias primas</i> est féminin pluriel → <b>tantas</b>." },
        { t: "spot", words: ["Buenos", "Aires", "no", "es", "tanta", "poblada", "como", "México."], wrong: 4, fix: "Buenos Aires no es tan poblada como México.", explain: "Faute classique : devant un adjectif, <b>tan</b> ne s'accorde jamais." },
        { t: "mcq", prompt: "Quelle phrase est <b>correcte</b> ?", options: ["Argentina tiene un área mayor que Chile.", "Argentina tiene un área mayor de Chile.", "Argentina tiene un área más mayor que Chile.", "Argentina tiene un área tan mayor como Chile."], speakOpts: true, explain: "<b>mayor</b> est déjà un comparatif (pour une taille de territoire) : pas de « más mayor ». On compare avec <b>que</b>." },
        { t: "match", pairs: [["mejor", "meilleur (= más bueno)"], ["peor", "pire (= más malo)"], ["mayor", "plus grand / plus âgé"], ["menor", "plus petit / plus jeune"], ["altísimo", "très élevé"]] },
        { t: "order", fr: "Le Mexique est le pays le plus peuplé d'Amérique hispanique.", answer: "México es el país más poblado de Hispanoamérica.", extra: ["que", "menos"] },
        { t: "mcq", prompt: "Comment dire « les disparités sont <b>très élevées</b> » avec le superlatif absolu ?", options: ["Las disparidades son altísimas.", "Las disparidades son más altas.", "Las disparidades son tan altas.", "Las disparidades son altas que."], speakOpts: true, explain: "Superlatif absolu : suffixe <b>-ísimo / -ísima</b> (ou <i>muy altas</i>)." },
        { t: "match", pairs: [["la economía informal", "l'économie informelle"], ["la población activa", "la population active"], ["la recaudación fiscal", "les rentrées fiscales"], ["la materia prima", "la matière première"], ["la desigualdad", "l'inégalité"]] },
        { t: "sort", prompt: "<b>tan</b> (devant un adjectif ou un adverbe) ou <b>tanto / tanta / tantos / tantas</b> (devant un nom) ?", cats: [TAN, TANTO], items: [{ t: "tan poblada", c: "tan", en: 1 }, { t: "tan rica", c: "tan", en: 1 }, { t: "tan rápido", c: "tan", en: 1 }, { t: "tantas materias primas", c: "tanto", en: 1 }, { t: "tantos habitantes", c: "tanto", en: 1 }, { t: "tanto petróleo", c: "tanto", en: 1 }] }
      ]
    }
  ]
};
})();
