# Mohamad Ifas — Portfolio Website

A single-page portfolio site built with plain HTML, CSS, and JavaScript — no build tools or installs required.

## Files
- `index.html` — page structure and content
- `style.css` — all styling and animations
- `script.js` — typing animation, scroll reveals, skill bars, contact form, nav highlighting

## How to view it
Just open `index.html` directly in any browser (double-click it), or run a local server:

```bash
python3 -m http.server 8000
```
then visit `http://localhost:8000`

## How to deploy it (make it live)
Any of these work with zero configuration since it's static HTML:
- **GitHub Pages** — push this folder to a repo, enable Pages in repo settings
- **Netlify** — drag and drop this folder onto netlify.com/drop
- **Vercel** — `vercel deploy` from this folder (needs Vercel CLI)

## Things to customize
- Replace the "Download Resume" button's `href="#"` in `index.html` with a real link to your resume PDF once you upload it somewhere (e.g. the repo itself, or Google Drive)
- The contact form currently doesn't send anywhere — connect it to a service like Formspree or EmailJS if you want it to actually deliver messages
- Update project GitHub links as you push new repos

## Editing content
All text content lives directly in `index.html` — search for the section you want to change (Hero, About, Skills, Projects, Contact) and edit the text between the tags.
