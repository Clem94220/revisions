# Révisions type Duolingo

Application de révision en HTML, Tailwind (CDN) et JavaScript vanille, sans étape de build.
Elle fonctionne en local (double-clic sur `index.html`) et en ligne (Cloudflare Pages).

## Structure

- `index.html` : squelette, sélecteur de matière, écrans
- `css/style.css` : styles et animations
- `js/engine.js` : moteur de jeu (vies, XP, exercices mcq / fill / order / spot / sort / match)
- `js/app.js` : matières, sauvegarde par matière (localStorage), carte
- `data/courses.js` : liste des matières
- `data/<matière>.js` : contenu de chaque matière

## Ajouter une matière

1. La déclarer dans `data/courses.js`.
2. Créer `data/<id>.js` sur le modèle des fichiers existants.
3. Ajouter la balise `<script src="data/<id>.js">` dans `index.html`, avant `js/engine.js`.

## Mettre en ligne une mise à jour

```bash
git add -A
git commit -m "Description de la mise à jour"
git push
```

Cloudflare Pages redéploie automatiquement le site après chaque `git push` sur `main`.
