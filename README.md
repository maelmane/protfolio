# Portfolio — TypeScript + React + Vite

A lightweight, macOS-style portfolio showcasing windowed UI components, animations, and small utilities (PDF viewer, terminal-like window, image viewer). Built with modern TypeScript tooling and optimized for development with Vite + TailwindCSS.

**Quick Start**
- **Install:** `npm install`
- **Dev server:** `npm run dev` — start Vite with hot reload
- **Build:** `npm run build` — TypeScript build + Vite production bundle
- **Preview:** `npm run preview` — preview production build locally
- **Lint:** `npm run lint` — run ESLint

**Scripts**
- **dev:** `vite`
- **build:** `tsc -b && vite build`
- **preview:** `vite preview`
- **lint:** `eslint .`

**Tech Stack**
- **Framework:** React 19 + TypeScript
- **Bundler:** Vite
- **Styling:** TailwindCSS
- **Animations:** GSAP
- **State:** Zustand + Immer
- **PDF Viewer:** react-pdf
- **Tooling:** ESLint, TypeScript

**Features**
- Windowed UI with draggable and closable windows
- Dock, Navbar, and window controls UI
- Embedded resume (PDF) viewer and image viewer
- Terminal-like interactive window and Finder
- Smooth GSAP-powered animations and tooltips

**Project Structure**
- **Entry:** [src/main.tsx](src/main.tsx)
- **App shell:** [src/App.tsx](src/App.tsx)
- **Components:** [src/components](src/components)
- **Windows:** [src/windows](src/windows)
- **Store:** [src/store](src/store)
- **Constants & types:** [src/constants](src/constants)

**Development Notes**
- Path aliases configured in `package.json` (`@/constants/*`, `@/components/*`) for convenience.
- TypeScript build is run as part of `npm run build` (`tsc -b`).
- Ensure Tailwind production purge is correctly configured if adding classes dynamically.

**Deploy**
- Build with `npm run build` and serve the `dist` folder.
- For static hosts (Netlify, Vercel), point the deploy output to the `dist` directory.

**Contributing**
- Fork, create a feature branch, and open a PR.
- Run `npm run lint` and ensure TypeScript compiles before opening PRs.
- Describe behavior changes clearly in PR descriptions.


**Credits**
- Built with Vite and open-source libraries listed in `package.json`.
