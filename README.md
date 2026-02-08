# Dayita — Personal AI (Static site)

This repository contains a small static single-page app that provides a local "personal AI" interface over `products.json`.

It can be hosted as a static site (GitHub Pages). The repo already includes a GitHub Actions workflow which deploys the repository root to GitHub Pages on push to `main`.

Quick start

1. Create a GitHub repository and push this folder to it (replace `YOUR-REPO-URL`):

```bash
git init
git add .
git commit -m "Initial site"
git remote add origin YOUR-REPO-URL
git branch -M main
git push -u origin main
```

2. On push to `main`, the included workflow will build and publish the site to GitHub Pages automatically.

Local testing

To avoid CORS/fetch restrictions when opening `index.html` directly, serve the folder locally:

```bash
# from the project root
python -m http.server 8000
# then open http://localhost:8000/
```

Notes
- The app fetches `products.json` from the repository root. Keep that file alongside `index.html`.
- If you prefer manual configuration, you can enable GitHub Pages in the repository settings and set the source to the `gh-pages` branch or `main`/root.

If you want, I can also set up a custom domain or tweak the workflow behavior (publish branch, build step, etc.).