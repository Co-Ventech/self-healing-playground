// Generated from: automation\user-flows\features\05-Dashboard-Welcome.feature
import { test } from "playwright-bdd";

test.describe('Dashboard: Welcome', () => {

  test('Dashboard shows welcome panel after login', { tag: ['@posters-galore', '@05-Dashboard-Welcome'] }, async ({ Given, Then, page }) => { 
    await Given('I open the Posters Galore dashboard for welcome check', null, { page }); 
    await Then('the dashboard welcome panel is visible', null, { page }); 
  });

});

// == technical section ==

test.beforeAll('BeforeAll Hooks', ({ $runBeforeAllHooks }) => $runBeforeAllHooks(test, {  }, bddFileData));
test.afterAll('AfterAll Hooks', ({ $registerAfterAllHooks }) => $registerAfterAllHooks(test, {  }, bddFileData));
test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('automation\\user-flows\\features\\05-Dashboard-Welcome.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":7,"tags":["@posters-galore","@05-Dashboard-Welcome"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I open the Posters Galore dashboard for welcome check","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then the dashboard welcome panel is visible","stepMatchArguments":[]}]},
]; // bdd-data-end