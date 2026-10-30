// Generated from: automation\user-flows\features\02-Auth-Valid-Login.feature
import { test } from "playwright-bdd";

test.describe('Auth: Valid Login', () => {

  test('User signs in with demo credentials and reaches dashboard', { tag: ['@posters-galore', '@02-Auth-Valid-Login'] }, async ({ When, Then, page }) => { 
    await When('I sign in to Posters Galore using demo credentials', null, { page }); 
    await Then('the Posters Galore dashboard welcome message is displayed', null, { page }); 
  });

});

// == technical section ==

test.beforeAll('BeforeAll Hooks', ({ $runBeforeAllHooks }) => $runBeforeAllHooks(test, {  }, bddFileData));
test.afterAll('AfterAll Hooks', ({ $registerAfterAllHooks }) => $registerAfterAllHooks(test, {  }, bddFileData));
test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('automation\\user-flows\\features\\02-Auth-Valid-Login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":7,"tags":["@posters-galore","@02-Auth-Valid-Login"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I sign in to Posters Galore using demo credentials","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then the Posters Galore dashboard welcome message is displayed","stepMatchArguments":[]}]},
]; // bdd-data-end