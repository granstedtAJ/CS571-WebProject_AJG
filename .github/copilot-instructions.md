# Copilot Instructions — CS571 Web Project (AJG)

These instructions describe the architecture, constraints, and conventions of this
repository. Follow them when generating or modifying code.

## Project overview

A **client-side-only** React single-page application (SPA) hosted on **GitHub Pages**.
It is a small "compendium" app with four sections: Home, Compendium, Lore, and Rules.

Live URL: `https://granstedtAJ.github.io/CS571-WebProject_AJG/`

## Hard constraints — do not violate

- **No server-side code.** GitHub Pages serves static files only. No backend, no API
  routes, no SSR, no serverless functions. Any data must be bundled at build time
  (static JS/JSON) or fetched from a public, read-only, CORS-enabled endpoint.
- **No Next.js** (or any SSR/SSG meta-framework). This is plain React.
- **Pure React + JavaScript.** No TypeScript. Files use `.jsx` / `.js`.
- **No server-side URL rewriting.** GitHub Pages cannot rewrite unknown paths to
  `index.html`, so we use **`HashRouter`** (routes live in the URL fragment, e.g.
  `.../#/lore`). Do **not** switch to `BrowserRouter` — a refresh or deep link on a
  non-hash path would 404.

## Tech stack

| Concern     | Choice                          | Notes                                            |
| ----------- | ------------------------------- | ------------------------------------------------ |
| Build tool  | **Vite** (`@vitejs/plugin-react`) | Fast dev server + optimized static build.      |
| UI runtime  | **React 18**                    | `react` + `react-dom`.                           |
| UI library  | **Bootstrap 5** + **React Bootstrap** | Use React Bootstrap components, not raw HTML/CSS where a component exists. |
| Routing     | **React Router v6 (declarative mode)** | JSX `<Routes>/<Route>` with `HashRouter`.   |

### React Router — declarative mode

Routing is defined declaratively with `<Routes>` and `<Route>` JSX elements
(in [src/App.jsx](../src/App.jsx)) — **not** with the data-router API
(`createBrowserRouter` / `RouterProvider`). Keep it that way.

- `HashRouter` wraps the app in [src/main.jsx](../src/main.jsx).
- Navigation: use React Bootstrap `Nav.Link`/`Navbar.Brand` with `as={NavLink}`
  (from `react-router-dom`) for links, and the `useNavigate()` hook for
  programmatic navigation. Avoid raw `<a href>` for internal links (it reloads).
- A `path="*"` catch-all route renders the 404 page.

### React Bootstrap

- Bootstrap's CSS is imported **once** in [src/main.jsx](../src/main.jsx)
  (`import 'bootstrap/dist/css/bootstrap.min.css'`) before `index.css`, so custom
  styles in `index.css` override Bootstrap.
- Import components from `react-bootstrap` (e.g. `import { Container, Navbar } from 'react-bootstrap'`).
- Prefer Bootstrap utility classes (`className="py-5"`, `text-muted`, grid `Row`/`Col`)
  over ad-hoc CSS.

## Project structure

```
.
├─ index.html              # Vite entry HTML (favicon uses root-relative /vite.svg)
├─ vite.config.js          # base path + build.outDir = 'docs'
├─ package.json            # scripts: dev / build / preview
├─ public/                 # copied verbatim into the build (vite.svg, .nojekyll)
├─ src/
│  ├─ main.jsx             # React root; HashRouter + Bootstrap CSS import
│  ├─ App.jsx              # declarative <Routes> + NavigationBar
│  ├─ index.css            # app-wide overrides on top of Bootstrap
│  ├─ components/
│  │  └─ NavigationBar.jsx # React Bootstrap Navbar with NavLink integration
│  └─ pages/
│     ├─ Home.jsx          # cards + programmatic nav (useNavigate)
│     ├─ Compendium.jsx    # controlled search input + filtered Table
│     ├─ Lore.jsx          # Accordion
│     ├─ Rules.jsx         # Alert + numbered ListGroup
│     └─ NotFound.jsx      # 404 catch-all
└─ docs/                   # BUILD OUTPUT — committed and served by GitHub Pages
```

## Conventions

- Components are function components with named default exports; one component per file.
- Page components live in `src/pages/`, reusable UI in `src/components/`.
- Dummy/static data is defined as a module-level `const` array at the top of the file
  (see `SECTIONS`, `ENTRIES`, `CHAPTERS`, `RULES`). Real data should follow the same
  pattern or load from a static asset — never a server call to our own backend.
- Keep state local with `useState`/`useMemo`; there is no global store and none is needed
  at this size.

## Adding a new page

1. Create `src/pages/MyPage.jsx` exporting a default function component.
2. Add a `<Route path="/my-page" element={<MyPage />} />` in [src/App.jsx](../src/App.jsx).
3. Add a `<Nav.Link as={NavLink} to="/my-page">` entry in
   [src/components/NavigationBar.jsx](../src/components/NavigationBar.jsx).

## Commands

```bash
npm install     # install dependencies
npm run dev     # local dev server at http://localhost:5173/CS571-WebProject_AJG/
npm run build   # production build -> docs/
npm run preview # serve the production build locally to verify
```

## Build & deploy (manual, via docs/ folder)

Deployment is **manual and developer-controlled** — there is no CI/CD workflow.

1. Run `npm run build`. Vite outputs the static site to **`docs/`**
   (configured by `build.outDir` in [vite.config.js](../vite.config.js)).
2. Commit the updated `docs/` folder along with your source changes.
3. Push to `main`. GitHub Pages serves it automatically.

GitHub repo setting (one-time): **Settings → Pages → Build and deployment →
Source: "Deploy from a branch" → Branch: `main` / folder: `/docs`.**

### Base path — critical

`vite.config.js` sets `base: '/CS571-WebProject_AJG/'` because this is a GitHub Pages
**project site** served from a sub-path. If the repository is ever renamed, update:

- `base` in [vite.config.js](../vite.config.js)
- `homepage` in `package.json`
- `location.replace(...)` targets (none currently — HashRouter needs no such hack)

`public/.nojekyll` disables GitHub's Jekyll processing so the `assets/` folder is
served untouched.
