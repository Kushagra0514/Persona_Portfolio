# Kushagra Garg's portfolio

An Astro static website with a homepage and three Markdown project case studies. The resume is independent of the site; nothing reads or watches `Resume.tex`.

## Local development

Use Node.js 22.12+ (or a newer supported release).

```sh
npm ci
npm run dev
```

Open the localhost URL printed by Astro.

## Edit content

- Homepage introduction, about, skills, and contact: `src/pages/index.astro`
- Project summaries, technologies, links, and case studies: `src/pages/projects/*.md`. Frontmatter also supplies homepage project cards.
- Shared navigation, page metadata, and footer: `src/layouts/Base.astro`
- Colors, type, spacing, and responsive layout: `src/styles/global.css`
- Profile photo: replace `public/profile.jpg`
- Downloadable resume: replace `public/Kushagra-Garg-Resume.pdf` manually
- Project illustrations: `src/components/ProjectVisual.astro`. These explain the projects; they are not application screenshots.

Metrics were transcribed from the supplied resume. Case studies identify them as project evaluations rather than general performance promises. Update them when evaluation conditions or results change.

## Verify and build

```sh
npm run check
npm run build
npm test
npm run preview
```

The build is written to `dist/`. Fonts are bundled locally. No backend, accounts, analytics, or runtime AI calls are required.

## Deploy to GitHub Pages

Push this project to the repository you want to host. In repository Settings → Pages, choose GitHub Actions as the source. The included workflow builds and deploys on pushes to `main` or manual runs.

The workflow obtains the correct site URL and base path from GitHub Pages, including repository subpaths. For a custom domain, configure the domain in GitHub Pages settings. For another static host, set `SITE_URL` to your public origin and `BASE_PATH` to the hosting subpath (default `/`) before building.

Repository: https://github.com/Kushagra0514/Persona_Portfolio

Live site: https://kushagra0514.github.io/Persona_Portfolio/

Push commits to `main` to run checks and publish updates automatically.
