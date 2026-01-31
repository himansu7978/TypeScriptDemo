# .github/copilot-instructions.md

Purpose
- Short, actionable guidance for AI coding agents working in this repo.
- Focus: how to run, test, and follow project-specific patterns (Playwright + TypeScript demos).

Big picture
- This repo is a TypeScript learning/demo workspace with an active Playwright test suite.
- Tests live in `tests/` (files named `*.spec.ts`). Playwright config is `playwright.config.ts` (controls projects, reporter, trace, screenshots).
- `day1/`..`day6/` contain TypeScript tutorial examples; mostly educational and not tied into test automation flow.

How to run (explicit commands)
- Install browsers: `npx playwright install` (required once locally).
- Run all tests: `npx playwright test`.
- Run a single file: `npx playwright test tests/Dialog.spec.ts`.
- Run a single project: `npx playwright test --project=chromium`.
- View HTML report: `npx playwright show-report` or open `playwright-report/index.html`.
- Helpful flags: `--grep <pattern>`, `--repeat-each`, `--retries <n>`.

Key files to inspect
- `playwright.config.ts` — reporter (`html`), `trace: on-first-retry`, `screenshot: on-first-failure`, `fullyParallel: false` and defined projects (chromium, webkit).
- `tests/*.spec.ts` — canonical examples for test style, lifecycle hooks, and locator usage.
- `package.json` — currently has no npm scripts (use `npx playwright ...` directly).

Conventions & patterns (do not change without discussion)
- Tests use Playwright test runner: `import { test, expect } from '@playwright/test'`.
- File naming: `*.spec.ts` under `tests/`.
- Use built-in fixtures (e.g., `page`) passed as the test parameter — avoid introducing global custom fixtures unless coordinated.
- Locator style: `page.locator(...)`, `page.getByText(...)`, and `page.on('dialog', ...)` (see `tests/Dialog.spec.ts`).
- Lifecycle: `test.beforeAll`, `test.beforeEach`, `test.afterEach`, `test.afterAll` are used (see `tests/Hookes.spec.ts`).
- Tests currently favor explicit waits like `page.waitForTimeout(...)` and `console.log(...)` for debugging; when refactoring, keep compatibility with existing patterns.
- Parallelism: `fullyParallel` is `false`; do not opt into heavy parallel changes without confirming test isolation.

Testing/reporting expectations
- HTML report is primary (`playwright-report/index.html`).
- Traces and screenshots follow config rules (trace on retry, screenshot on first failure).
- Tests may hit external test pages (e.g., `https://testautomationpractice.blogspot.com/`) — network access required.

Dependencies & environment notes
- Dev deps: `@playwright/test`, `@types/node` (see `package.json`).
- No CI workflow file found — if adding CI, follow Playwright's recommended matrix (browsers + headless) and upload reports/artifacts.

Suggested guardrails for AI edits
- Prefer adding tests following existing style over broad refactors (keep assertions with `expect` and simple, readable flows).
- When introducing new helpers or POM, add at least one exemplar test updated to the new pattern and open a PR describing the rationale.
- Do not modify `playwright.config.ts` worker/parallelism settings without confirming with maintainers.
- If you add npm scripts to `package.json`, mention them in this file and get explicit approval.

Examples (from repo)
- Dialogs: `page.on('dialog', dialog => { dialog.accept(); })` — `tests/Dialog.spec.ts`.
- Hooks: `test.beforeEach(...)` and `test.afterEach(...)` — `tests/Hookes.spec.ts`.

Questions for maintainers
- Would you like recommended `npm` scripts added to `package.json` (e.g., `test`, `test:chrome`, `show-report`)?
- Should we add a CI workflow to run Playwright tests and upload the HTML report? 

If something here is unclear or you'd like me to add CI/npm script suggestions, say which option you'd prefer and I'll propose exact changes (small PR with the edits).