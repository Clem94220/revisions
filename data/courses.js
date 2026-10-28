/* =====================================================================
   LISTE DES MATIÈRES
   ---------------------------------------------------------------------
   Pour ajouter une matière :
   1. Déclare-la ci-dessous (id unique, titre, icône, couleurs, langue TTS).
   2. Crée data/<id>.js qui remplit window.COURSES['<id>'] (copie data/anglais.js) :
        window.COURSES['<id>'] = {
          unit: { label: "...", title: "...", sub: "..." },  // bandeau de la carte
          mascot: "🦉",                                        // optionnel
          matchHint: "...",                                    // optionnel (exercices "match")
          LEVELS: [ { title, sub, emoji, c, d, desc, fiche: () => html, outro?: () => html, ex: [...] } ]
        };
   3. Ajoute la balise script src="data/<id>.js" dans index.html (avant js/engine.js).
   Une matière déclarée sans fichier de données s'affiche « Bientôt disponible ».
   ===================================================================== */
window.COURSES = window.COURSES || {};

window.COURSE_LIST = [
  { id: "anglais", title: "Anglais", icon: "💼", color: "#58CC02", colorDark: "#58A700", lang: "en-GB" },
  { id: "politique-economique", title: "Politique économique", icon: "📈", color: "#1CB0F6", colorDark: "#1899D6", lang: "fr-FR" },
  { id: "sociologie", title: "Sociologie", icon: "👥", color: "#CE82FF", colorDark: "#A568CC", lang: "fr-FR" },
  { id: "espagnol", title: "Espagnol", icon: "💃", color: "#FF4B4B", colorDark: "#EA2B2B", lang: "es-ES" }
];
