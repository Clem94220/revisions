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
  unit: { label: "Cours 1 à 4 · Espagnol", title: "España y América Latina", sub: "Institutions, territoires, travail, commerce, grammaire et vocabulaire" },
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

/* =====================================================================
   COURS 3 — Le marché du travail (séance 3)
   COURS 4 — Commerce mondial et informalité (séance 4)
   Ajout des niveaux 7 à 11.
   ===================================================================== */
(function () {

const defs = rows => `<table class="w-full text-sm mt-2"><tbody>${rows.map(r => `<tr class="border-t border-line"><td class="py-2 pr-3 w-2/5 font-bold align-top">${r[0]}</td><td class="py-2 text-ink/80">${r[1]}</td></tr>`).join("")}</tbody></table>`;
const box = (bg, html) => `<div class="rounded-2xl p-3 mt-2" style="background:${bg}">${html}</div>`;
const trap = html => box("#FFDFE0", "⚠️ " + html);
const say = (es, fr) => `<div class="flex items-start gap-2 mt-2">${spk(es, "spk-sm")}<div><i>${esc(es)}</i>${fr ? `<div class="text-sm text-ink/60">${fr}</div>` : ""}</div></div>`;
/* Tableau à trois colonnes avec écoute du mot espagnol */
const table3 = (head, rows) => `<div class="overflow-x-auto mt-2"><table class="w-full text-sm"><thead><tr>${head.map(h => `<th class="text-left py-2 pr-3 border-b-2 border-line font-black">${h}</th>`).join("")}</tr></thead><tbody>${rows.map(r => `
  <tr class="border-t border-line">
    <td class="py-2 pr-3 align-top"><div class="flex items-center gap-2">${spk(r[0], "spk-sm")}<b>${esc(r[0])}</b></div></td>
    <td class="py-2 pr-3 align-top">${r[1]}</td>
    <td class="py-2 align-top text-ink/70">${r[2]}</td>
  </tr>`).join("")}</tbody></table></div>`;

const OK = { id: "ok", label: "Avance de la reforma", emoji: "✅" }, LIM = { id: "lim", label: "Límite persistente", emoji: "⚠️" };
const EMP = { id: "emp", label: "Decide la empresa", emoji: "🏢" }, TRA = { id: "tra", label: "Decide el trabajador", emoji: "🙋" };
const CAU = { id: "cau", label: "Causa", emoji: "🔍" }, CON = { id: "con", label: "Consecuencia", emoji: "➡️" }, OPO = { id: "opo", label: "Oposición", emoji: "↔️" };
const INT = { id: "int", label: "Introducir", emoji: "🚪" }, ANA = { id: "ana", label: "Añadir", emoji: "➕" }, CONC = { id: "conc", label: "Concluir", emoji: "🏁" };
const EXPO = { id: "expo", label: "Exporta (materias primas)", emoji: "📤" }, IMPO = { id: "impo", label: "Importa (bienes industriales)", emoji: "📥" };
const UE = { id: "ue", label: "Intereses de la UE", emoji: "🇪🇺" }, MER = { id: "mer", label: "Intereses del Mercosur", emoji: "🌎" };
const IND = { id: "ind", label: "+ indicatif", emoji: "📏" }, SUB = { id: "sub", label: "+ subjonctif", emoji: "🌀" };

const FALSOS = [
  ["la nómina", "La <b>fiche de paie</b> (ou le salaire mensuel)", "Ne veut pas dire « nomination »."],
  ["despedir", "<b>Licencier</b> un salarié", "Au quotidien : dire au revoir ; en entreprise : rompre le contrat."],
  ["jubilarse", "<b>Partir à la retraite</b>", "Ne veut pas dire « jubiler » (se réjouir)."],
  ["la carrera", "Les <b>études supérieures</b> OU la carrière", "« Hacer una carrera » = faire des études universitaires."],
  ["el becario / la becaria", "Le / la <b>stagiaire</b> en formation", "Vient de <i>beca</i> (bourse), mais désigne l'étudiant en stage."]
];
const LEX_3 = [
  ["el asalariado / la asalariada", "le / la salarié(e)", "Travailleur sous contrat, salaire régulier."],
  ["el autónomo / la autónoma", "le travailleur indépendant", "Travaille à son compte, sans contrat salarié."],
  ["la patronal", "le patronat", "Organisations d'employeurs (ex. : CEOE)."],
  ["el sindicato", "le syndicat", "Défend les droits des salariés (ex. : UGT)."],
  ["el derecho de huelga", "le droit de grève", "Arrêt concerté du travail."],
  ["el despido improcedente", "le licenciement abusif", "Sans motif légal valable."],
  ["dimitir / renunciar", "démissionner", "Rupture à l'initiative du travailleur."],
  ["el periodo de prueba", "la période d'essai", "Phase pour évaluer les compétences."],
  ["las 14 pagas", "les 14 mois de salaire", "12 mensualités + 2 primes obligatoires."],
  ["la precariedad", "la précarité", "Contrats courts et bas salaires."]
];
const LEX_4 = [
  ["la informalidad / la economía sumergida", "l'économie informelle / souterraine", "Activité légale non déclarée."],
  ["la recaudación fiscal", "les recettes fiscales", "Ce que perçoit le fisc pour les services publics."],
  ["el arancel", "le droit de douane", "Taxe sur les marchandises importées ou exportées."],
  ["la relocalización / el nearshoring", "la relocalisation de proximité", "Rapprocher les usines du marché."],
  ["la cadena de suministro", "la chaîne d'approvisionnement", "De la matière première au client final."],
  ["la Inversión Extranjera Directa (IED)", "les investissements directs à l'étranger (IDE)", "Capitaux des multinationales dans des filiales."],
  ["el T-MEC", "l'accord Mexique / États-Unis / Canada", "A remplacé l'ALENA."],
  ["la base imponible", "l'assiette fiscale", "Montant soumis à l'impôt."],
  ["la competencia desleal", "la concurrence déloyale", "Avantage obtenu sans les mêmes règles."],
  ["la deforestación", "la déforestation", "Destruction des forêts (Amazonie)."]
];

window.COURSES.espagnol.levels.push(
  /* ================= COURS 3 · NIVEAU 7 ================= */
  {
    title: "Cours 3 · El mercado laboral", sub: "Précarité, réforme de 2021, économie informelle", emoji: "💼", c: "#6C63FF", d: "#5148D6",
    desc: "Les contrats temporaires en Espagne, la Reforma Laboral de 2021 et ses limites, et l'emploi informel en Amérique latine.",
    fiche: () => `
      <h3>Espagne : le problème de la précarité</h3>
      <p class="mt-1">Pendant des décennies, l'Espagne a eu un taux anormalement élevé de <b>contrats temporaires</b> (<i>contratos temporales</i>), enchaînés les uns après les autres. Résultat : les jeunes accèdent tard au logement (<i>alquiler</i>) et à l'autonomie.</p>
      ${say("Los jóvenes encadenan contratos temporales.", "Les jeunes enchaînent les contrats temporaires.")}
      <h3>La Reforma Laboral de 2021</h3>
      ${defs([
        ["Un accord tripartite", "Signé par le <b>gouvernement</b>, les <b>syndicats</b> (UGT, CCOO) et le <b>patronat</b> (CEOE)."],
        ["Objectif", "Faire du <b>contrato indefinido</b> (CDI) la norme par défaut."],
        ["El fijo discontinuo", "Les contrats saisonniers (hôtellerie, restauration, agriculture) deviennent des CDI alternant périodes d'activité et d'inactivité."]
      ])}
      ${say("La Reforma Laboral de 2021 hace del contrato indefinido la norma.", "La réforme du travail de 2021 fait du CDI la norme.")}
      <h3>Les limites</h3>
      ${defs([
        ["La précarité change de forme", "Plus de CDI à <b>temps partiel subi</b> (<i>jornadas parciales involuntarias</i>) ou avec très peu d'heures."],
        ["Le pouvoir d'achat", "Les salaires réels stagnent face à l'inflation et à l'explosion des loyers."],
        ["El paro juvenil", "Toujours proche de <b>25 %</b> : le <b>double</b> de la moyenne de l'UE."]
      ])}
      <h3>Amérique latine : el empleo informal</h3>
      ${defs([
        ["Ampleur", "Selon l'<b>OIT</b>, environ <b>50 %</b> de la population active : pas de contrat déclaré, pas de cotisations, pas de protection médicale."],
        ["Nature", "Ce n'est <b>pas</b> de la délinquance : c'est une <b>stratégie de survie</b>, faute d'emplois formels et parce que créer une entreprise déclarée coûte cher."],
        ["Pour le travailleur", "Un revenu au jour le jour, mais pas d'assurance chômage, d'arrêt maladie, d'indemnité d'accident ni de retraite."],
        ["Pour l'État", "Moins de <i>recaudación fiscal</i> : moins d'argent pour l'éducation, les hôpitaux et les infrastructures."]
      ])}`,
    ex: [
      { t: "mcq", prompt: "Quel a été le grand problème du marché du travail espagnol pendant des décennies ?", en: "Durante décadas, España tuvo demasiados contratos temporales.", options: ["Un taux très élevé de contrats temporaires", "Un manque de syndicats", "Des salaires trop élevés", "L'absence totale de chômage"], explain: "<i>demasiados contratos temporales</i> = trop de contrats temporaires, enchaînés et instables." },
      { t: "fill", sentence: "La Reforma Laboral de 2021 hace del contrato ___ la norma.", fr: "La réforme du travail de 2021 fait du CDI la norme.", options: ["indefinido", "temporal", "parcial", "informal"], explain: "<i>contrato indefinido</i> = contrat à durée indéterminée (CDI)." },
      { t: "mcq", prompt: "Qui a signé l'<b>accord tripartite</b> de 2021 ?", options: ["Le gouvernement, les syndicats (UGT, CCOO) et le patronat (CEOE)", "Le roi, le Sénat et la BCE", "Les syndicats uniquement", "L'Union européenne et le Mercosur"], explain: "Tripartite = trois parties : <i>el Gobierno</i>, <i>los sindicatos</i> et <i>la patronal</i>." },
      { t: "match", pairs: [["el contrato temporal", "le contrat temporaire"], ["el contrato indefinido", "le CDI"], ["el sindicato", "le syndicat"], ["la patronal", "le patronat"], ["la precariedad", "la précarité"]] },
      { t: "spot", words: ["La", "reforma", "de", "2021", "hace", "del", "contrato", "temporal", "la", "norma."], wrong: 7, fix: "La reforma de 2021 hace del contrato indefinido la norma.", explain: "La réforme a justement voulu <b>réduire</b> les contrats temporaires : la norme devient le <i>contrato indefinido</i>." },
      { t: "mcq", prompt: "Dans quels secteurs le <b>fijo discontinuo</b> a-t-il remplacé les contrats saisonniers ?", options: ["L'hôtellerie, la restauration et l'agriculture", "La banque et l'assurance", "La fonction publique", "L'industrie automobile"], explain: "Ce sont des activités saisonnières : on alterne périodes d'activité et d'inactivité, mais avec un CDI." },
      { t: "sort", prompt: "Est-ce une <b>avancée</b> de la réforme ou une <b>limite</b> qui persiste ?", cats: [OK, LIM], items: [{ t: "Le CDI devient la norme", c: "ok" }, { t: "Les saisonniers passent en fijo discontinuo", c: "ok" }, { t: "Le chômage des jeunes baisse dans les statistiques", c: "ok" }, { t: "Temps partiel involontaire (jornadas parciales)", c: "lim" }, { t: "Salaires réels qui stagnent face aux loyers", c: "lim" }, { t: "Paro juvenil toujours proche de 25 %", c: "lim" }] },
      { t: "fill", sentence: "El paro juvenil es el ___ de la media europea.", fr: "Le chômage des jeunes est le double de la moyenne européenne.", options: ["doble", "triple", "mitad", "cuarto"], explain: "Environ <b>25 %</b>, soit le <i>doble</i> (double) de la moyenne de l'UE." },
      { t: "mcq", prompt: "Selon l'<b>OIT</b>, quelle part de la population active latino-américaine travaille dans l'informel ?", en: "Según la OIT, la mitad de la población activa trabaja en el sector informal.", options: ["Environ 50 %", "Environ 10 %", "Environ 90 %", "Environ 25 %"], explain: "<i>la mitad</i> = la moitié. OIT = Organisation internationale du travail." },
      { t: "spot", words: ["El", "empleo", "informal", "es", "una", "actividad", "criminal."], wrong: 6, fix: "El empleo informal no es una actividad criminal: es una estrategia de supervivencia.", explain: "L'informalité n'est pas de la délinquance : c'est une <b>stratégie de survie</b> (<i>supervivencia</i>)." },
      { t: "order", prompt: "Reconstitue le <b>double impact</b> de l'emploi informel.", steps: ["Peu d'emplois formels, entreprise déclarée trop coûteuse", "Travail informel, revenu au jour le jour", "Pas d'assurance chômage, de maladie ni de retraite", "Moins de recaudación fiscal pour l'école, la santé et les infrastructures"], extra: ["Hausse des cotisations sociales"], explain: "Un impact <b>individuel</b> (vulnérabilité) et un impact <b>fiscal</b> (l'État perd des recettes)." },
      { t: "order", fr: "Les jeunes enchaînent les contrats temporaires.", answer: "Los jóvenes encadenan contratos temporales.", extra: ["indefinidos", "encadena"] }
    ]
  },

  /* ================= COURS 3 · NIVEAU 8 ================= */
  {
    title: "Cours 3 · Falsos amigos y vocabulario", sub: "Les pièges de vocabulaire du travail", emoji: "🎭", c: "#FF86D0", d: "#D46AAD",
    desc: "Les faux-amis qui tombent au QCM (nómina, despedir, jubilarse, carrera, becario) et le lexique du travail de la séance 3.",
    fiche: () => `
      <h3>Les faux-amis du monde professionnel</h3>
      ${table3(["Mot espagnol", "Vrai sens", "Piège"], FALSOS)}
      ${say("Mi padre se jubila este año.", "Mon père part à la retraite cette année.")}
      ${say("La empresa despidió a diez trabajadores.", "L'entreprise a licencié dix salariés.")}
      ${say("Mi hermana hace una carrera de Derecho.", "Ma sœur fait des études de droit.")}
      ${trap("Au QCM, on te proposera exprès le sens « français » : <i>jubilarse</i> ≠ jubiler, <i>nómina</i> ≠ nomination.")}
      <h3>Lexique de la séance 3</h3>
      ${table3(["Terme", "Traduction", "Précision"], LEX_3)}`,
    ex: [
      { t: "mcq", prompt: "Que signifie « <b>la nómina</b> » ?", en: "Recibo la nómina a final de mes.", options: ["La fiche de paie / le salaire mensuel", "La nomination", "Le nom de famille", "La liste des candidats"], explain: "Faux-ami : <i>la nómina</i> = la fiche de paie. <i>Recibo la nómina</i> = je reçois ma paie." },
      { t: "mcq", prompt: "« <b>Jubilarse</b> » signifie…", en: "Mi padre se jubila este año.", options: ["Partir à la retraite", "Se réjouir", "Être licencié", "Démissionner"], explain: "Faux-ami : rien à voir avec « jubiler ». <i>Se jubila</i> = il part à la retraite." },
      { t: "mcq", prompt: "Dans une entreprise, « <b>despedir</b> » signifie…", en: "La empresa despidió a diez trabajadores.", options: ["Licencier", "Accueillir", "Promouvoir", "Payer"], explain: "Au quotidien, <i>despedirse</i> = dire au revoir ; en entreprise, <i>despedir</i> = <b>licencier</b>." },
      { t: "fill", sentence: "Mi hermana hace una ___ de Derecho en Madrid.", fr: "Ma sœur fait des études de droit à Madrid.", options: ["carrera", "nómina", "beca", "huelga"], explain: "<i>Hacer una carrera</i> = faire des études supérieures." },
      { t: "match", pairs: [["la nómina", "la fiche de paie"], ["despedir", "licencier"], ["jubilarse", "partir à la retraite"], ["la carrera", "les études supérieures"], ["el becario", "le stagiaire"]] },
      { t: "spot", words: ["Pedro", "está", "muy", "feliz:", "se", "jubila", "de", "alegría."], wrong: 5, fix: "Pedro está muy feliz: se alegra mucho.", explain: "<i>jubilarse</i> = partir à la retraite. Pour « se réjouir », on dit <i>alegrarse</i>." },
      { t: "match", pairs: [["el asalariado", "le salarié"], ["el autónomo", "le travailleur indépendant"], ["el derecho de huelga", "le droit de grève"], ["el periodo de prueba", "la période d'essai"], ["dimitir", "démissionner"]] },
      { t: "mcq", prompt: "Que sont « <b>las 14 pagas</b> » ?", en: "En España, muchos trabajadores cobran catorce pagas.", options: ["12 mensualités + 2 primes obligatoires", "14 jours de congés payés", "14 heures de travail par semaine", "14 contrats temporaires"], explain: "Une pratique espagnole : 12 salaires mensuels + <b>2 primes</b> (<i>pagas extra</i>)." },
      { t: "sort", prompt: "Qui décide de la rupture du contrat : l'<b>entreprise</b> ou le <b>travailleur</b> ?", cats: [EMP, TRA], items: [{ t: "despedir", c: "emp", en: 1 }, { t: "el despido improcedente", c: "emp", en: 1 }, { t: "el despido", c: "emp", en: 1 }, { t: "dimitir", c: "tra", en: 1 }, { t: "renunciar", c: "tra", en: 1 }, { t: "jubilarse", c: "tra", en: 1 }] },
      { t: "fill", sentence: "El despido ___ es un despido sin causa justificada.", fr: "Le licenciement abusif est un licenciement sans cause justifiée.", options: ["improcedente", "indefinido", "temporal", "informal"], explain: "<i>el despido improcedente</i> = le licenciement abusif, sans motif légal valable." },
      { t: "mcq", prompt: "Comment dit-on « <b>le / la stagiaire</b> » ?", options: ["el becario / la becaria", "el jubilado / la jubilada", "el autónomo / la autónoma", "el asalariado / la asalariada"], speakOpts: true, explain: "<i>becario</i> vient de <i>beca</i> (bourse), mais désigne l'étudiant en stage." },
      { t: "order", fr: "Le stagiaire reçoit une bourse.", answer: "El becario recibe una beca.", extra: ["nómina", "jubila"] }
    ]
  },

  /* ================= COURS 3 · NIVEAU 9 ================= */
  {
    title: "Cours 3 · Conectores y registro académico", sub: "Structurer et écrire comme à l'université", emoji: "🔗", c: "#2EC4B6", d: "#1FA095",
    desc: "Les connecteurs pour introduire, ajouter, opposer, expliquer, conclure, et les règles pour passer au registre académique.",
    fiche: () => `
      <h3>Les connecteurs formels</h3>
      ${table3(["Connecteur", "Sens", "Fonction"], [
        ["En primer lugar / Para empezar", "Tout d'abord / Pour commencer", "Introduire"],
        ["Cabe señalar que", "Il convient de souligner que", "Introduire"],
        ["Asimismo / Por otra parte", "De même / Par ailleurs", "Ajouter"],
        ["No solo… sino también", "Non seulement… mais aussi", "Ajouter"],
        ["Sin embargo / No obstante", "Cependant / Néanmoins", "Opposer"],
        ["A pesar de que / Si bien", "Bien que / Même si", "Concéder"],
        ["Dado que / Ya que / Puesto que", "Étant donné que / Puisque", "Cause"],
        ["Debido a (+ nom / infinitif)", "En raison de", "Cause"],
        ["Por consiguiente / Por lo tanto / Así pues", "Par conséquent / Donc / Ainsi", "Conséquence"],
        ["Es decir / Dicho de otro modo", "C'est-à-dire / Autrement dit", "Reformuler"],
        ["En definitiva / En suma / A modo de conclusión", "En définitive / En somme / Pour conclure", "Conclure"]
      ])}
      <h3>Passer au registre académique</h3>
      ${defs([
        ["Mots vagues → mots précis", "<i>cosa, hacer</i> → <i>factor, reto, implementar, promulgar</i>"],
        ["Pas d'exagération orale", "<i>un montón de problemas</i> → <i>múltiples desafíos estructurales, numerosos obstáculos</i>"],
        ["Objectiver", "<i>el autor dice que…</i> → <i>el investigador sostiene / demuestra que…</i>"]
      ])}
      ${say("El paro ha bajado; sin embargo, sigue siendo muy alto.", "Le chômage a baissé ; cependant, il reste très élevé.")}
      ${say("Existen múltiples desafíos estructurales.", "Il existe de multiples défis structurels.")}`,
    outro: () => `<div class="mt-8"><h2 class="font-black text-lg">📌 À retenir du cours 3</h2>${defs([
      ["Espagne", "Contrats temporaires → <b>Reforma Laboral 2021</b> (Gobierno + UGT, CCOO + CEOE) → contrato indefinido + fijo discontinuo. Limites : temps partiel subi, salaires, paro juvenil ~25 % (double de l'UE)."],
      ["Amérique latine", "~50 % d'informel (OIT) = stratégie de survie, pas délinquance → pas de protection et moins de recaudación fiscal."],
      ["Faux-amis", "nómina = fiche de paie · despedir = licencier · jubilarse = retraite · carrera = études · becario = stagiaire"],
      ["Connecteurs", "sin embargo (opposition) · por lo tanto (conséquence) · ya que (cause) · es decir (reformulation) · en definitiva (conclusion)"]
    ])}</div>`,
    ex: [
      { t: "sort", prompt: "Ce connecteur exprime-t-il une <b>cause</b>, une <b>conséquence</b> ou une <b>opposition</b> ?", cats: [CAU, CON, OPO], items: [{ t: "dado que", c: "cau", en: 1 }, { t: "ya que", c: "cau", en: 1 }, { t: "por lo tanto", c: "con", en: 1 }, { t: "por consiguiente", c: "con", en: 1 }, { t: "sin embargo", c: "opo", en: 1 }, { t: "no obstante", c: "opo", en: 1 }] },
      { t: "sort", prompt: "Pour <b>introduire</b>, <b>ajouter</b> ou <b>conclure</b> ?", cats: [INT, ANA, CONC], items: [{ t: "En primer lugar", c: "int", en: 1 }, { t: "Para empezar", c: "int", en: 1 }, { t: "Asimismo", c: "ana", en: 1 }, { t: "Por otra parte", c: "ana", en: 1 }, { t: "En definitiva", c: "conc", en: 1 }, { t: "En suma", c: "conc", en: 1 }] },
      { t: "match", pairs: [["es decir", "c'est-à-dire"], ["sin embargo", "cependant"], ["por lo tanto", "donc"], ["asimismo", "de même / en outre"], ["a pesar de que", "bien que"]] },
      { t: "fill", sentence: "El paro ha bajado; ___, sigue siendo muy alto.", fr: "Le chômage a baissé ; cependant, il reste très élevé.", options: ["sin embargo", "por lo tanto", "es decir", "en primer lugar"], explain: "Il y a une <b>opposition</b> entre les deux idées : <i>sin embargo</i> (cependant)." },
      { t: "fill", sentence: "Los alquileres suben; ___, los jóvenes no se emancipan.", fr: "Les loyers augmentent ; par conséquent, les jeunes ne s'émancipent pas.", options: ["por consiguiente", "sin embargo", "asimismo", "es decir"], explain: "La deuxième idée est le <b>résultat</b> de la première : <i>por consiguiente</i>." },
      { t: "fill", sentence: "No solo los salarios son bajos, ___ también los alquileres son caros.", fr: "Non seulement les salaires sont bas, mais aussi les loyers sont chers.", options: ["sino", "pero", "que", "y"], explain: "La structure fixe est <b>no solo… sino también</b> (et pas « pero también »)." },
      { t: "mcq", prompt: "Quelle formulation est la plus <b>académique</b> ?", options: ["Existen múltiples desafíos estructurales.", "Hay un montón de problemas.", "Hay muchas cosas que no van bien.", "Es una cosa muy fea."], speakOpts: true, explain: "On évite <i>un montón</i> (oral) et <i>cosa</i> (vague) : <i>múltiples desafíos estructurales</i>." },
      { t: "mcq", prompt: "Comment rendre « <b>el autor dice que…</b> » plus académique ?", options: ["El investigador sostiene que…", "El tío dice que…", "El autor habla que…", "El autor cuenta cosas sobre…"], speakOpts: true, explain: "On objective avec un verbe précis : <i>sostiene</i> (soutient), <i>demuestra</i> (démontre)." },
      { t: "spot", words: ["Hay", "un", "montón", "de", "problemas", "en", "el", "mercado", "laboral."], wrong: 2, fix: "Existen numerosos obstáculos en el mercado laboral.", explain: "<i>un montón</i> est une exagération orale : à l'écrit, <i>numerosos obstáculos</i> ou <i>múltiples desafíos</i>." },
      { t: "match", pairs: [["una cosa", "un factor / un reto"], ["hacer una ley", "promulgar una ley"], ["hacer un plan", "implementar un plan"], ["un montón de problemas", "múltiples desafíos"], ["el autor dice", "el investigador demuestra"]] },
      { t: "order", fr: "Tout d'abord, il convient de souligner que le chômage des jeunes est élevé.", answer: "En primer lugar, cabe señalar que el paro juvenil es alto.", extra: ["sin", "embargo"] },
      { t: "mcq", prompt: "« <b>Debido a</b> » se construit avec…", options: ["un nom ou un infinitif", "« que » + subjonctif", "« que » + indicatif obligatoirement", "un adjectif seul"], explain: "<i>debido a la crisis</i>, <i>debido a tener…</i> : jamais <i>debido a que</i> dans le cours." }
    ]
  },

  /* ================= COURS 4 · NIVEAU 10 ================= */
  {
    title: "Cours 4 · Comercio, Mercosur y nearshoring", sub: "Commerce mondial et relocalisations", emoji: "🚢", c: "#F59E0B", d: "#C27C06",
    desc: "Le commerce extérieur latino-américain, le cercle vicieux de l'informalité, l'accord UE-Mercosur et le nearshoring au Mexique.",
    fiche: () => `
      <h3>Un commerce extérieur à deux vitesses</h3>
      ${defs([
        ["Exportations", "Des <b>matières premières</b> brutes : <i>soja, carne, litio, cobre, petróleo</i>, vers l'Asie, l'Europe et les États-Unis."],
        ["Importations", "Des <b>biens industriels</b> à forte valeur ajoutée : <i>maquinaria especializada, medicamentos, tecnología</i>."]
      ])}
      <h3>Le cercle vicieux de l'informalité</h3>
      <p class="mt-1">Plus de <b>130 millions</b> de travailleurs sans contrat (plus de 70 % en Bolivie ou au Guatemala) → peu de <i>recaudación tributaria</i> → déficit public → pas de modernisation de l'eau, de l'électricité et de la santé.</p>
      <h3>L'accord UE-Mercosur</h3>
      ${defs([
        ["Le projet", "Une zone de libre-échange entre l'UE et le Mercosur (Argentine, Brésil, Uruguay, Paraguay) : environ <b>800 millions</b> de consommateurs, plus de <b>90 %</b> des droits de douane (<i>aranceles</i>) supprimés."],
        ["Intérêts de l'UE", "Exporter des véhicules, des biens d'équipement industriels et des produits chimiques."],
        ["Intérêts du Mercosur", "Exporter viande bovine, volaille, sucre et bioéthanol."],
        ["Blocages (dont la France)", "<b>Competencia desleal</b> (normes sanitaires, pesticides interdits en Europe, bien-être animal) et <b>deforestación</b> de l'Amazonie (Accord de Paris)."],
        ["Dates", "<b>1991</b> : Traité d'Asunción (création du Mercosur) · <b>1999</b> : début des négociations avec l'UE · <b>2019</b> : accord de principe, puis blocages écologiques."]
      ])}
      <h3>Le nearshoring au Mexique</h3>
      ${defs([
        ["Du offshoring au nearshoring", "Tensions géopolitiques et fret transpacifique plus cher : la <b>proximité</b> redevient essentielle."],
        ["Le nord du Mexique", "Grâce au <b>T-MEC</b> (Mexique, États-Unis, Canada) et à <b>3 140 km</b> de frontière, Nuevo León, Coahuila et Chihuahua attirent les <i>IED</i>."],
        ["Secteurs", "Semi-conducteurs, batteries, voitures électriques, matériel médical."],
        ["Avantage", "Livraison aux États-Unis en <b>24-48 heures</b> par la route, au lieu de plusieurs semaines depuis l'Asie."]
      ])}
      ${say("El nearshoring acerca las fábricas al mercado de consumo.", "Le nearshoring rapproche les usines du marché de consommation.")}
      <h3>Lexique de la séance 4</h3>
      ${table3(["Terme", "Traduction", "Précision"], LEX_4)}`,
    ex: [
      { t: "sort", prompt: "L'Amérique latine <b>exporte</b>-t-elle ou <b>importe</b>-t-elle surtout ces produits ?", cats: [EXPO, IMPO], items: [{ t: "la soja", c: "expo", en: 1 }, { t: "la carne", c: "expo", en: 1 }, { t: "el litio", c: "expo", en: 1 }, { t: "la maquinaria especializada", c: "impo", en: 1 }, { t: "los medicamentos", c: "impo", en: 1 }, { t: "la tecnología", c: "impo", en: 1 }] },
      { t: "mcq", prompt: "Combien de travailleurs latino-américains sont <b>sans contrat ni protection</b> ?", en: "Más de 130 millones de trabajadores no tienen contrato.", options: ["Plus de 130 millions", "Environ 13 millions", "Plus de 800 millions", "Environ 49 millions"], explain: "Plus de <b>130 millions</b>. (800 millions = les consommateurs de la zone UE-Mercosur ; 49 millions = la population de l'Espagne.)" },
      { t: "order", prompt: "Reconstitue le <b>cercle vicieux budgétaire</b> de l'informalité.", steps: ["Plus de 130 millions de travailleurs informels", "Peu de recaudación tributaria pour l'État", "Un déficit public récurrent", "Pas de modernisation de l'eau, de l'électricité et de la santé"], extra: ["Une baisse des droits de douane"], explain: "Sans impôts, l'État n'a pas les moyens d'investir dans les réseaux publics." },
      { t: "match", pairs: [["el Mercosur", "Argentine, Brésil, Uruguay, Paraguay"], ["el arancel", "le droit de douane"], ["la competencia desleal", "la concurrence déloyale"], ["la deforestación", "la déforestation"], ["el Tratado de Asunción", "la création du Mercosur (1991)"]] },
      { t: "fill", sentence: "El acuerdo UE-Mercosur eliminaría más del 90 % de los ___.", fr: "L'accord UE-Mercosur supprimerait plus de 90 % des droits de douane.", options: ["aranceles", "sueldos", "alquileres", "sindicatos"], explain: "<i>los aranceles</i> = les droits de douane. La zone compterait environ 800 millions de consommateurs." },
      { t: "sort", prompt: "Qui y gagne : l'<b>UE</b> ou le <b>Mercosur</b> ?", cats: [UE, MER], items: [{ t: "Exporter des véhicules", c: "ue" }, { t: "Exporter des biens d'équipement", c: "ue" }, { t: "Exporter des produits chimiques", c: "ue" }, { t: "Vendre de la viande bovine", c: "mer" }, { t: "Vendre du sucre", c: "mer" }, { t: "Vendre du bioéthanol", c: "mer" }] },
      { t: "order", prompt: "Remets les dates du <b>Mercosur</b> dans l'ordre.", steps: ["1991 : Traité d'Asunción, création du Mercosur", "1999 : début des négociations avec l'UE", "2019 : accord de principe, puis blocages écologiques"], extra: ["2019 : création du Mercosur"], explain: "Le Mercosur naît en <b>1991</b> à Asunción (capitale du Paraguay)." },
      { t: "mcq", prompt: "Pourquoi la France bloque-t-elle l'accord UE-Mercosur ?", options: ["Concurrence déloyale (normes, pesticides, bien-être animal) et déforestation", "Le Mercosur refuse d'acheter des voitures", "L'accord ne concerne que 8 millions de consommateurs", "La France ne fait pas partie de l'UE"], explain: "Les agriculteurs dénoncent la <i>competencia desleal</i> ; les écologistes, la <i>deforestación</i> de l'Amazonie." },
      { t: "mcq", prompt: "Qu'est-ce que le <b>nearshoring</b> ?", en: "El nearshoring acerca las fábricas al mercado de consumo.", options: ["Rapprocher la production du marché de consommation", "Délocaliser la production en Asie", "Fermer les usines", "Augmenter les droits de douane"], explain: "C'est l'inverse de l'<i>offshoring</i> asiatique : le Mexique produit à côté des États-Unis." },
      { t: "fill", sentence: "Desde México, los productos llegan a Estados Unidos en ___ horas.", fr: "Depuis le Mexique, les produits arrivent aux États-Unis en 24 à 48 heures.", options: ["24-48", "2-3", "200-300", "1000"], explain: "Par la route, en <b>24-48 heures</b>, au lieu de plusieurs semaines par bateau depuis l'Asie." },
      { t: "spot", words: ["El", "T-MEC", "une", "a", "México,", "Estados", "Unidos", "y", "Brasil."], wrong: 8, fix: "El T-MEC une a México, Estados Unidos y Canadá.", explain: "Le T-MEC (qui a remplacé l'ALENA) réunit le Mexique, les États-Unis et le <b>Canada</b>." },
      { t: "match", pairs: [["la cadena de suministro", "la chaîne d'approvisionnement"], ["la Inversión Extranjera Directa", "les IDE"], ["la base imponible", "l'assiette fiscale"], ["la economía sumergida", "l'économie souterraine"], ["la relocalización", "la relocalisation"]] }
    ]
  },

  /* ================= COURS 4 · NIVEAU 11 ================= */
  {
    title: "Cours 4 · Causa y consecuencia", sub: "porque, puesto que, por lo tanto, de ahí que + subjonctif", emoji: "🧩", c: "#FF6B35", d: "#D9531F",
    desc: "Les subordonnées de cause et de conséquence : quand utiliser l'indicatif, et les deux pièges au subjonctif (no porque, de ahí que).",
    fiche: () => `
      <h3>1. La cause : indicatif</h3>
      <p class="mt-1">Avec <b>porque, ya que, puesto que, dado que</b>, une cause <b>constatée</b> se met à l'<b>indicatif</b>. <b>Debido a</b> se construit avec un nom ou un infinitif.</p>
      ${say("La recaudación disminuye puesto que un 50 % opera de forma informal.", "Les recettes baissent puisque 50 % opèrent de manière informelle.")}
      <h3>2. Piège : no porque + subjonctif</h3>
      <p class="mt-1">Pour <b>rejeter</b> une cause supposée : <b>no porque + SUBJONCTIF</b>, puis <b>sino</b>.</p>
      ${say("Invierten en México no porque sea barato, sino por su posición estratégica.", "Ils investissent au Mexique non pas parce que c'est bon marché, mais pour sa position stratégique.")}
      <h3>3. La conséquence : indicatif</h3>
      <p class="mt-1"><b>por lo tanto, por consiguiente, así pues</b> + indicatif.</p>
      ${say("La presión fiscal formal es muy alta; por lo tanto, deciden no registrarse.", "La pression fiscale formelle est très forte ; donc, ils décident de ne pas se déclarer.")}
      <h3>4. Règle absolue : de ahí que + subjonctif</h3>
      ${trap("<b>de ahí que</b> (d'où le fait que) impose <b>toujours le subjonctif</b>. L'indicatif est une faute.")}
      ${say("Los costes logísticos son menores; de ahí que muchas firmas prefieran el territorio mexicano.", "Les coûts logistiques sont plus bas ; d'où le fait que beaucoup d'entreprises préfèrent le Mexique.")}
      ${say("Persisten salarios bajos, de ahí que los sindicatos reclamen reformas.", "Les salaires restent bas, d'où le fait que les syndicats réclament des réformes.")}
      ${defs([
        ["Indicatif", "porque · ya que · puesto que · dado que · por lo tanto · por consiguiente · así pues"],
        ["Subjonctif", "<b>no porque</b> (cause rejetée) · <b>de ahí que</b> (conséquence formelle)"]
      ])}`,
    outro: () => `<div class="mt-8"><h2 class="font-black text-lg">📌 À retenir du cours 4</h2>${defs([
      ["Commerce", "Exporte des matières premières (soja, carne, litio, cobre, petróleo), importe des biens industriels (maquinaria, medicamentos, tecnología)."],
      ["Informalité", "Plus de 130 M de travailleurs → peu de recaudación → déficit → pas de modernisation."],
      ["UE-Mercosur", "Argentine, Brésil, Uruguay, Paraguay · ~800 M de consommateurs · −90 % d'aranceles · blocages : competencia desleal, deforestación · 1991 / 1999 / 2019"],
      ["Nearshoring", "T-MEC (Mexique, USA, Canada) · 3 140 km de frontière · nord du Mexique · 24-48 h vers les USA"],
      ["Grammaire", "Cause / conséquence constatée = indicatif · <b>no porque</b> et <b>de ahí que</b> = SUBJONCTIF"]
    ])}</div>`,
    ex: [
      { t: "fill", sentence: "La recaudación disminuye ___ un 50 % opera de forma informal.", fr: "Les recettes baissent puisque 50 % opèrent de manière informelle.", options: ["puesto que", "de ahí que", "sin embargo", "por lo tanto"], explain: "On donne une <b>cause</b> constatée : <i>puesto que</i> + indicatif (<i>opera</i>)." },
      { t: "mcq", prompt: "Après « <b>puesto que</b> » (cause constatée), on utilise…", options: ["l'indicatif", "le subjonctif", "toujours l'infinitif", "le conditionnel"], explain: "Une cause objective, constatée, se met à l'<b>indicatif</b>." },
      { t: "fill", sentence: "Invierten en México no porque ___ barato, sino por su posición estratégica.", fr: "Ils investissent au Mexique non pas parce que c'est bon marché, mais pour sa position stratégique.", options: ["sea", "es", "era", "será"], explain: "Piège : <b>no porque + SUBJONCTIF</b> pour rejeter une cause. <i>ser</i> → <b>sea</b>." },
      { t: "spot", words: ["Invierten", "no", "porque", "es", "barato,", "sino", "por", "su", "posición."], wrong: 3, fix: "Invierten no porque sea barato, sino por su posición.", explain: "Après <i>no porque</i>, le verbe passe au <b>subjonctif</b> : <i>sea</i>, pas <i>es</i>." },
      { t: "fill", sentence: "Los costes logísticos son menores; de ahí que muchas firmas ___ México.", fr: "Les coûts logistiques sont plus bas ; d'où le fait que beaucoup d'entreprises préfèrent le Mexique.", options: ["prefieran", "prefieren", "preferir", "preferían"], explain: "Règle absolue : <b>de ahí que + subjonctif</b>. <i>preferir</i> → <i>prefieran</i>." },
      { t: "spot", words: ["Persisten", "salarios", "bajos,", "de", "ahí", "que", "los", "sindicatos", "reclaman", "reformas."], wrong: 8, fix: "Persisten salarios bajos, de ahí que los sindicatos reclamen reformas.", explain: "Après <i>de ahí que</i> : <b>reclamen</b> (subjonctif), jamais <i>reclaman</i>." },
      { t: "sort", prompt: "Ce connecteur se construit-il avec l'<b>indicatif</b> ou le <b>subjonctif</b> ?", cats: [IND, SUB], items: [{ t: "puesto que", c: "ind", en: 1 }, { t: "ya que", c: "ind", en: 1 }, { t: "por lo tanto", c: "ind", en: 1 }, { t: "por consiguiente", c: "ind", en: 1 }, { t: "de ahí que", c: "sub", en: 1 }, { t: "no porque", c: "sub", en: 1 }] },
      { t: "fill", sentence: "La presión fiscal formal es muy alta; por lo tanto, ___ no registrarse.", fr: "La pression fiscale est très forte ; donc, ils décident de ne pas se déclarer.", options: ["deciden", "decidan", "decidir", "decidiendo"], explain: "<i>por lo tanto</i> exprime un résultat logique : <b>indicatif</b> (<i>deciden</i>)." },
      { t: "mcq", prompt: "Quelle phrase est <b>correcte</b> ?", options: ["Los salarios son bajos, de ahí que los jóvenes no se emancipen.", "Los salarios son bajos, de ahí que los jóvenes no se emancipan.", "Los salarios son bajos, de ahí que los jóvenes no emanciparse.", "Los salarios son bajos, de ahí los jóvenes no se emancipan."], speakOpts: true, explain: "<i>de ahí que</i> + subjonctif : <b>se emancipen</b>." },
      { t: "match", pairs: [["porque", "parce que"], ["puesto que", "puisque"], ["debido a", "en raison de (+ nom)"], ["por lo tanto", "donc"], ["de ahí que", "d'où le fait que (+ subjonctif)"]] },
      { t: "order", fr: "Beaucoup d'entreprises choisissent le Mexique en raison de sa position stratégique.", answer: "Muchas firmas eligen México debido a su posición estratégica.", extra: ["que", "porque"] },
      { t: "order", fr: "Les coûts sont plus bas, d'où le fait que les entreprises préfèrent le Mexique.", answer: "Los costes son menores, de ahí que las empresas prefieran México.", extra: ["prefieren", "porque"] }
    ]
  }
);
})();
