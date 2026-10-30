// Generated from: automation\user-flows\features\01-Auth-Login-Page-Loads.feature
import { test } from "playwright-bdd";

test.describe('Auth: Login Page Loads', () => {

  test('Login page shows username and password fields', { tag: ['@posters-galore', '@01-Auth-Login-Page-Loads'] }, async ({ Given, Then, page }) => { 
    await Given('I open the Posters Galore login screen for page load check', null, { page }); 
    await Then('the login username password and sign in controls are visible', null, { page }); 
  });

});

// == technical section ==

test.beforeAll('BeforeAll Hooks', ({ $runBeforeAllHooks }) => $runBeforeAllHooks(test, {  }, bddFileData));
test.afterAll('AfterAll Hooks', ({ $registerAfterAllHooks }) => $registerAfterAllHooks(test, {  }, bddFileData));
test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('automation\\user-flows\\features\\01-Auth-Login-Page-Loads.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":7,"tags":["@posters-galore","@01-Auth-Login-Page-Loads"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I open the Posters Galore login screen for page load check","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then the login username password and sign in controls are visible","stepMatchArguments":[]}]},
]; // bdd-data-end