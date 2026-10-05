# Charlie Gallagher - Personal Portfolio

Source for my portfolio site, [cgallagher.dev](https://cgallagher.dev).

## Built with

- [Astro](https://astro.build/) for static site generation
- [React](https://react.dev/) for the few interactive pieces (typewriter, copy email button)
- [Tailwind CSS](https://tailwindcss.com/) v4, with the colour and font tokens in `src/styles/global.css`
- IBM Plex Sans and Mono, self-hosted through Fontsource

## Running locally

```bash
git clone https://github.com/cgallagher-dev/portfolio-site.git
cd portfolio-site
npm install
npm run dev
```

`npm run build` outputs the static site to `dist/`. Pushing to `main` deploys to GitHub Pages through `.github/workflows/deploy.yml`.

## Structure

```text
src/
├── components/   Astro and React components, grouped by page
├── data/         Projects, experience and recognition content
├── layouts/      Base layout and the project detail layout
├── pages/        Routes
└── styles/       Global styles and design tokens
```

Most content changes only need an edit in `src/data/`.
