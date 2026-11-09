# Playwright Practice – the-internet.herokuapp.com

A small Playwright + TypeScript project for practicing the Page Object Model (POM)
against [the-internet.herokuapp.com](https://the-internet.herokuapp.com/), built and
maintained manually as hands-on practice for a Playwright test automation assessment.

## Structure

```
pages/
  HomePage.ts          # links to each example page
  ABTestingPage.ts      # /abtest
  CheckboxesPage.ts     # /checkboxes
  DropdownPage.ts       # /dropdown
  ExitIntentPage.ts     # /exit_intent
  FileDownloadPage.ts   # /download
tests/
  assessment.spec.ts    # 5 independent tests, one per page object
```

## Tests

1. **A/B Testing** – asserts the A/B heading variation, returns home.
2. **Checkboxes** – checks checkbox 1, unchecks checkbox 2, asserts both states, returns home.
3. **Dropdown** – selects "Option 2", asserts the selected value, returns home.
4. **Exit Intent** – opens the modal, verifies its heading, closes it, verifies it's hidden, returns home.
5. **File Download** – downloads `test.txt` and validates `suggestedFilename()`, returns home.

## Test results

Last local run — all 5 tests passed:

- ✅ A/B Testing - shows a heading variation
- ✅ Checkboxes - checks the first and unchecks the second
- ✅ Dropdown - selects Option 2
- ✅ Exit Intent - shows and closes the modal
- ✅ File Download - downloads test.txt

Full HTML report: **[view live report](https://wbandara-tech.github.io/playwright-assessment-herokuapp/)**
(published to GitHub Pages by CI on every push to `main`), or generate it locally
via `npm run report`.

## How to install dependencies

```bash
npm install
npx playwright install --with-deps chromium
```

## How to run the test(s)

```bash
npm test              # run all tests headless
npm run test:headed   # run with a visible browser
npm run report        # open the last HTML report
```

## CI

`.github/workflows/playwright.yml` installs dependencies, installs Chromium, runs the
suite, and uploads the HTML report as a build artifact on every push/PR to `main`/`master`.



---
Copied from https://github.com/wbandara-tech/playwright-assessment-herokuapp with more pages and tests in the same page-object style.
