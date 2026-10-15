# ZETA — desktop knowledge atelier

A standalone desktop-first learning workspace. Built in vanilla HTML, CSS and JavaScript; no build dependencies or account required.

## Run locally

Serve this folder with any static HTTP server. For example, `python -m http.server 5175`, then open http://localhost:5175. The site also works on GitHub Pages with hash URLs, including direct course and domain links.

## Explore and practice

- Dashboard with actual enrollment, checkpoint, study-session and bookmark metrics. New profiles begin at zero.
- 102 curated domains, each with foundations, a four-stage practical roadmap, reference resources, connected career paths and authored guidance.
- 29 original ZETA courses and 145 modules. Explore is the initial course view; My Learning contains your enrolled paths, goals and vault.
- Enroll, check off personal checkpoints, write module reflections, set dated goals, and manually log study sessions. Sessions are bounded to 1–720 total minutes per study day.
- Unified reference catalogue, deduplicated by URL while retaining domain/course associations. Search, format, category, domain, level and publisher filters compose. Choose grid or table view and bookmark references.
- Local file vault accepts PDF/TXT/MD/JSON/PNG/JPG up to 20 MB, with optional course/domain association. Download or delete stored files.
- 24 career learning paths, India junior annual CTC guide context, and explicit external job searches on LinkedIn, Naukri and Indeed.
- Profile interests and learning intention; compact view and reduced motion preferences; local JSON backup export.
- Ctrl/Cmd+K global search; keyboard focus; responsive navigation drawer; printable PDF domain study worksheets.

## Local storage and privacy

This website owns the `zeta-web-state` localStorage key and the `zeta-web-files` IndexedDB database. It does not read or write the mobile app's storage, backend, login, repository or deployment. Progress, goals, notes and files stay in this browser. There is no cloud login, syncing or credential storage. Clearing browser site data removes these local records. Backup export includes the learning state, but uploaded file bytes should be downloaded separately.

## Content attribution

The four original curated schemas were copied read-only from the separate ZETA mobile project into `assets/data`. Domain orientations and original course curricula are ZETA-authored. Publisher documents, GitHub repositories, textbook PDFs and platform discovery searches retain their source URLs. Course completions are personal self-assessments, not publisher credentials or professional certificates. Salary context is copied from the cited Talpro 2026 India guide; it is neither a job offer nor a live vacancy feed.

## Files

`index.html` loads `styles.css`, four local content scripts in dependency order, and `app.js`. No third-party executable scripts, API keys, npm installation or generated build is needed. `scripts/check.mjs` verifies source syntax and catalogue invariants.

## Expanded reading and preparation guides

The website also loads `assets/data/content-enrichment.js` and `content-ui.js`. These add 30 direct primary references, field canvases and concept notes, practical learning ladders, detailed course learning contracts, curated reference collections and 24 career preparation profiles. Knowledge prompts explain why a source is useful and suggest an artifact to make from it. Career comparison is temporary UI state; skill matching uses only the text you declare in Profile. See `CONTENT-SOURCES.md` and the machine-readable verification report for source-check scope and limitations.

Run `node scripts/test.mjs` to check the actual loaded script order, domain/course views, new reference coverage and deduplication, local progress calculations, escaping, and every career preparation dialog.
