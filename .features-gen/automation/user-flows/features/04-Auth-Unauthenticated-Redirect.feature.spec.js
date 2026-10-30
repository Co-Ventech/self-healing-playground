// Generated from: automation\user-flows\features\04-Auth-Unauthenticated-Redirect.feature
import { test } from "playwright-bdd";

test.describe('Auth: Unauthenticated Redirect', () => {

  test('Visiting orders while logged out redirects to login', { tag: ['@posters-galore', '@04-Auth-Unauthenticated-Redirect'] }, async ({ When, Then, page }) => { 
    await When('I open the orders route without an authenticated session', null, { page }); 
    await Then('Posters Galore forces the login page for protected orders', null, { page }); 
  });

});

// == technical section ==

test.beforeAll('BeforeAll Hooks', ({ $runBeforeAllHooks }) => $runBeforeAllHooks(test, {  }, bddFileData));
test.afterAll('AfterAll Hooks', ({ $registerAfterAllHooks }) => $registerAfterAllHooks(test, {  }, bddFileData));
test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('automation\\user-flows\\features\\04-Auth-Unauthenticated-Redirect.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":7,"tags":["@posters-galore","@04-Auth-Unauthenticated-Redirect"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I open the orders route without an authenticated session","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then Posters Galore forces the login page for protected orders","stepMatchArguments":[]}]},
]; // bdd-data-end