# CLAUDE.md

## Project overview

Personal profile site for Siva Krishna Kumar Lokam, served at `https://sivalokam.co.in`. It is a plain static site (HTML, CSS, vanilla JS) with no build step.

## Repository layout

- `index.html` — the whole page: header, hero, About, Expertise, Contact, footer. All profile content lives here.
- `styles.css` — styles. Colors are CSS variables on `:root`, with dark mode via `prefers-color-scheme` and `data-theme`.
- `script.js` — `downloadPdf()`, which exports `#resume_content` to a PDF with html2pdf.
- `assets/img/profile.jpg` — 400×400 profile photo.
- `favicon/` — favicon set.

## Commands

No build, lint, or test tooling. To preview, run `python3 -m http.server 8765` in the repo root and open `http://localhost:8765`.

## Conventions

- Keep the site static and dependency-free. External scripts and styles come from cdnjs or jsdelivr only.
- Only publish profile information that is already public. Don't add private details.
- Don't copy the `bhavin/` material from the sibling `profile-sivalokam` folder. It belongs to someone else.
- Branch from `main`; don't commit directly to it.
- Commit messages and PR descriptions follow the attribution lines set in the session's system reminders.

## Deployment

Not yet configured for `sivalokam.co.in`. The existing setup in `../profile_building/profile-setup/` (Nginx + Certbot + Docker, static files in `sites/`) serves `profile.sivalokam.co.in`. Reuse it with the apex domain.
