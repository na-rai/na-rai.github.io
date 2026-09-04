# Portfolio Site

Built with Jekyll, hosted on GitHub Pages.

## Setup

1. Rename this repo to `<your-username>.github.io` (must match your GitHub username exactly, lowercase).
2. Fill in `_config.yml` — replace every value marked `# PLACEHOLDER`.
3. Replace the content in `index.html`, `about.md`, and `contact.md` (search for `PLACEHOLDER` comments).
4. Delete or replace `_projects/example-project.md` and `_achievements/example-achievement.md` with your real content.

## Adding new content later

- **New project:** add a new `.md` file to `_projects/`, copying the frontmatter format in `example-project.md`. It appears automatically on `/projects/`.
- **New achievement/publication:** same pattern, in `_achievements/`.

No layout or navigation edits are needed for either — that's the point of the collections setup.

## Local development (optional)

```bash
gem install bundler jekyll
bundle init
bundle add jekyll jekyll-feed
bundle exec jekyll serve
```

Then visit `http://localhost:4000`.

## Deployment

Push to GitHub. In the repo's **Settings → Pages**, set the source to the `main` branch (root). GitHub Pages builds Jekyll sites automatically — no GitHub Actions workflow needed unless you want a custom build step. Site publishes at `https://<your-username>.github.io` (can take up to ~10 minutes on first deploy).

See PROMPTS.md for the AI-assistance log required by the assignment.
