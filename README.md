# Self-Healing Playground

Test suites used to check an automated test-repair agent. Every scenario is its own branch, so each branch is a
complete project. The agent runs the suite, decides why each test fails, repairs only what is safe to repair
(locators, waits) and opens a pull request for a person to review. Real defects and assertions are never edited.

| Branch | Framework | State | Expected outcome |
|---|---|---|---|
| `playwright/gaming-webapp-baseline` | Playwright (TypeScript) | all tests pass | nothing to repair |
| `playwright/gaming-webapp-broken-locator` | Playwright (TypeScript) | the app renamed a test id; page objects still use the old one | tests that fail on the old test id are repaired in `src/pages`, assertions untouched, one pull request |

More branches (other frameworks, other kinds of breakage) are added over time. The pull request is a proposal only:
nothing is merged automatically.
