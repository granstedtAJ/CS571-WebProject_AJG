import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The `base` MUST match the GitHub Pages sub-path for a project site:
//   https://<user>.github.io/<repo>/  ->  base: '/<repo>/'
// If this repo is ever renamed, update this value (and package.json `homepage`).
export default defineConfig({
  plugins: [react()],
  base: '/CS571-WebProject_AJG/',
  build: {
    // Output to docs/ so GitHub Pages can serve it via
    // Settings > Pages > "Deploy from a branch" > main / docs.
    // Commit docs/ and push; GitHub publishes it automatically.
    outDir: 'docs',
    emptyOutDir: true,
  },
})
