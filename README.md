# Portfolio Website

Static recruiter-focused portfolio site built from the attached CV content only. It is designed to deploy cleanly on GitHub Pages with no build step and no runtime dependencies.

## File structure

```text
.
├── CV_OOO.pdf
├── README.md
├── index.html
├── script.js
├── styles.css
└── assets
    ├── favicon.svg
    └── og-card.svg
```

## Deploy to GitHub Pages

### Option 1: User site

1. Create a repository named `username.github.io`.
2. Upload the files in this folder to the repository root.
3. Commit and push to the `main` branch.
4. GitHub Pages will serve the site automatically from the root.

### Option 2: Project site

1. Create a repository with any name.
2. Upload the files in this folder to the repository root.
3. In GitHub, open `Settings` → `Pages`.
4. Set the source to `Deploy from a branch`.
5. Select `main` and `/ (root)`.
6. Save. GitHub Pages will publish the site.

All asset paths are relative, so the site works for both `username.github.io` and repo-based GitHub Pages deployment.

## Edit content later

Most content lives in [`script.js`](/Users/une/Desktop/codex/portfolio/script.js).

Update these sections in `script.js`:

- `profile`: name, headline, summary, CTA links, contact info
- `projects`: selected project cards and metrics
- `experience`: timeline entries and bullets
- `publications`: publication details
- `patents`: patent list
- `skills`: grouped technical skills
- `additional`: optional sections such as awards, talks, and open source

Layout and SEO live in:

- [`index.html`](/Users/une/Desktop/codex/portfolio/index.html)
- [`styles.css`](/Users/une/Desktop/codex/portfolio/styles.css)

## Add a new project

1. Open [`script.js`](/Users/une/Desktop/codex/portfolio/script.js).
2. Find the `projects` array.
3. Add a new object matching the existing shape:

```js
{
  title: "Project name",
  context: "Role · Company · Year",
  problem: "What needed to be solved.",
  whatWasDone: [
    "Key implementation point",
    "Another implementation point"
  ],
  stack: ["Python", "AWS", "Milvus"],
  impact: [
    "Measured result",
    "[Add metric]"
  ],
  links: [
    { label: "Case study", href: "[Add link]" }
  ]
}
```

## Customize design

- Update colors and spacing in [`styles.css`](/Users/une/Desktop/codex/portfolio/styles.css) under `:root`.
- Update SEO tags in [`index.html`](/Users/une/Desktop/codex/portfolio/index.html), especially:
  - page title
  - description
  - `og:url`
  - social preview image

## Placeholders to fill before publishing

- `[Add GitHub URL]`
- `[Add LinkedIn URL]`
- `[Add email address]`
- `[Add phone number]`
- `[Add deployed site URL]`
- `[Add retrieval quality metric]`
- `[Add consistency or engagement metric]`
- `[Add quality or task-completion metric]`
- `[Add link]`
- Additional section placeholders for achievements, open source, talks, certifications, awards, leadership, and research interests
- Missing public links for project case studies or demos

## Notes on source fidelity

- The site uses only information present in the attached CV extract.
- Redacted values such as name-adjacent identifiers, links, and some research metadata are preserved as placeholders instead of being guessed.
- Where the CV omitted a metric or URL, the site intentionally shows a placeholder.
