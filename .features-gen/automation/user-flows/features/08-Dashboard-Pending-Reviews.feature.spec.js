// Generated from: automation\user-flows\features\08-Dashboard-Pending-Reviews.feature
import { test } from "playwright-bdd";

test.describe('Dashboard: Pending Reviews', () => {

  test('Dashboard shows Pending Reviews section', { tag: ['@posters-galore', '@08-Dashboard-Pending-Reviews'] }, async ({ Given, Then, page }) => { 
    await Given('I open the dashboard to inspect pending reviews', null, { page }); 
    await Then('the Pending Reviews section is visible on the dashboard', null, { page }); 
  });

});

// == technical section ==

test.beforeAll('BeforeAll Hooks', ({ $runBeforeAllHooks }) => $runBeforeAllHooks(test, {  }, bddFileData));
test.afterAll('AfterAll Hooks', ({ $registerAfterAllHooks }) => $registerAfterAllHooks(test, {  }, bddFileData));
test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('automation\\user-flows\\features\\08-Dashboard-Pending-Reviews.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":7,"tags":["@posters-galore","@08-Dashboard-Pending-Reviews"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I open the dashboard to inspect pending reviews","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then the Pending Reviews section is visible on the dashboard","stepMatchArguments":[]}]},
]; // bdd-data-end