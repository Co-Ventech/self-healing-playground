// Generated from: automation\user-flows\features\03-Auth-Logout.feature
import { test } from "playwright-bdd";

test.describe('Auth: Logout', () => {

  test('Logged in user can sign out back to login', { tag: ['@posters-galore', '@03-Auth-Logout'] }, async ({ Given, When, Then, page }) => { 
    await Given('I am signed into Posters Galore before logout', null, { page }); 
    await When('I open the user menu and choose logout', null, { page }); 
    await Then('I am returned to the Posters Galore login page', null, { page }); 
  });

});

// == technical section ==

test.beforeAll('BeforeAll Hooks', ({ $runBeforeAllHooks }) => $runBeforeAllHooks(test, {  }, bddFileData));
test.afterAll('AfterAll Hooks', ({ $registerAfterAllHooks }) => $registerAfterAllHooks(test, {  }, bddFileData));
test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('automation\\user-flows\\features\\03-Auth-Logout.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":7,"tags":["@posters-galore","@03-Auth-Logout"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am signed into Posters Galore before logout","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When I open the user menu and choose logout","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then I am returned to the Posters Galore login page","stepMatchArguments":[]}]},
]; // bdd-data-end