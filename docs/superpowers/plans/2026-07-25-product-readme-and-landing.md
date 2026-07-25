# Product README and Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish a product-oriented Chinese README, matching hand-drawn banner, and a deployed one-page landing site for the Skill.

**Architecture:** Keep the runtime Skill files unchanged. Store README assets under `assets/` and the independently buildable Sites project under `site/`; both surfaces share the same product claims, GitHub URL, palette, and copy hierarchy.

**Tech Stack:** Markdown, PNG, React, TypeScript, CSS, Sites hosting.

## Global Constraints

- Do not change the runtime behavior in `SKILL.md` or `references/`.
- Do not invent capabilities beyond the current Skill.
- Keep the site static and single-page.
- Use the GitHub repository as the primary installation CTA.
- Preserve the supplied bear illustration as a style reference, not as a stretched bitmap.

---

### Task 1: Product README and banner

**Files:**
- Modify: `README.md`
- Create: `assets/resume-experience-deep-dive-banner.png`

**Interfaces:**
- Consumes: current Skill capabilities and the approved visual direction.
- Produces: the canonical public product narrative and reusable banner.

- [ ] Generate one wide hand-drawn banner using the supplied image as the visual reference.
- [ ] Verify the banner composition, text legibility, and absence of invented product claims.
- [ ] Rewrite `README.md` with positioning, three inputs, three outputs, workflow, principles, installation, triggers, and file structure.
- [ ] Confirm every README capability maps to `SKILL.md`.

### Task 2: Landing Page

**Files:**
- Create: `site/.openai/hosting.json`
- Create or modify: `site/app/page.tsx`
- Create or modify: `site/app/layout.tsx`
- Create or modify: `site/app/globals.css`
- Create: `site/public/og.png`

**Interfaces:**
- Consumes: canonical README copy, banner motif, repository URL.
- Produces: responsive single-page product site and social preview.

- [ ] Initialize the Sites project once under `site/`.
- [ ] Implement the approved paper-and-annotation visual system.
- [ ] Add hero, inputs, transformation demo, outputs, truth boundaries, and install CTA.
- [ ] Generate and inspect one matching social preview image.
- [ ] Run the production build and fix any build errors.

### Task 3: Publish and verify

**Files:**
- Modify only generated hosting metadata when required by Sites.

**Interfaces:**
- Consumes: built README, banner, and validated site.
- Produces: pushed GitHub branch, draft PR, and deployed public URL.

- [ ] Validate the Skill folder and ensure runtime files remain unchanged.
- [ ] Inspect the Git diff and stage only the intended README, assets, docs, and site files.
- [ ] Commit and push `agent/product-readme-and-landing`.
- [ ] Open a draft pull request into `main`.
- [ ] Save and deploy the exact pushed site source version.
- [ ] Verify the deployed status and return the GitHub and site URLs.

