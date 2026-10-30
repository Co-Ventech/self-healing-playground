const { defineConfig, devices } = require('@playwright/test');
const { defineBddConfig, cucumberReporter } = require('playwright-bdd');
const { env } = require('./automation/user-flows/config/env');
const { ASSERT_TIMEOUT_MS } = require('./automation/user-flows/config/timeouts');

const testDir = defineBddConfig({
  features: 'automation/user-flows/features/**/*.feature',
  steps: [
    'automation/user-flows/steps/**/*.js',
    'automation/user-flows/hooks/**/*.js',
  ],
  // Generate specs under tests/ so healing agents recognize them as test-side code
  outputDir: 'tests/features-gen',
});

module.exports = defineConfig({
  testDir,
  // Allow several slow steps per scenario (each assertion can wait up to 3 min)
  timeout: 15 * 60 * 1000,
  expect: {
    // All expect(...) assertions poll up to 3 minutes, then fail
    timeout: ASSERT_TIMEOUT_MS,
  },
  fullyParallel: false,
  workers: 1,
  retries: 0,
  forbidOnly: !!process.env.CI,
  reporter: [
    ['list'],
    cucumberReporter('json', {
      outputFile: 'reports/cucumber/cucumber-report.json',
    }),
  ],
  use: {
    baseURL: env.baseUrl,
    actionTimeout: ASSERT_TIMEOUT_MS,
    navigationTimeout: ASSERT_TIMEOUT_MS,
    screenshot: 'only-on-failure',
    video: 'off',
    trace: 'off',
    ignoreHTTPSErrors: true,
  },
  outputDir: 'test-results',
  preserveOutput: 'failures-only',
  projects: [
    {
      name: 'Posters-Galore',
      // Use Playwright's bundled Chromium; the healing platform installs it
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
