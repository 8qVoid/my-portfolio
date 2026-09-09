# Mark Erezuela — Portfolio

A responsive web and mobile developer portfolio built with Next.js, React, and TypeScript.

## Run locally

Use Node.js 22 or newer:

    npm ci
    npm run dev

On this PC, start-local.ps1 also detects the compatible bundled Node runtime if the default Node installation is too old:

    powershell -ExecutionPolicy Bypass -File .\start-local.ps1

Open http://localhost:3000. Stop the server with Ctrl+C.

## Checks

    npm run lint
    npm run build

## Editing

- app/page.tsx: introduction, about, toolkit, and contact.
- app/data/projects.ts: project descriptions, repository links, and screenshots.
- app/components/project-grid.tsx: category filtering and expandable details.
- app/components/project-gallery.tsx: image selection and accessible native-dialog previews.
- app/globals.css: responsive charcoal and lime design.
- public/projects/: original project screenshots.

The gallery supports arrow keys, Escape, mobile swipe, modal focus containment, and focus restoration. Reduced-motion preferences are respected. Email links open the visitor's mail app; no backend or credentials are needed.
