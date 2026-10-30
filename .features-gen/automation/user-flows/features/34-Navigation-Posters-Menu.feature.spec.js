// Generated from: automation\user-flows\features\34-Navigation-Posters-Menu.feature
import { test } from "playwright-bdd";

test.describe('Navigation: Posters Menu', () => {

  test('Sidebar Posters link opens catalog', { tag: ['@posters-galore', '@34-Navigation-Posters-Menu'] }, async ({ Given, When, Then, page }) => { 
    await Given('I am on the dashboard before using posters menu', null, { page }); 
    await When('I click the Posters sidebar link', null, { page }); 
    await Then('the posters catalog opens from the sidebar', null, { page }); 
  });

});

// == technical section ==

test.beforeAll('BeforeAll Hooks', ({ $runBeforeAllHooks }) => $runBeforeAllHooks(test, {  }, bddFileData));
test.afterAll('AfterAll Hooks', ({ $registerAfterAllHooks }) => $registerAfterAllHooks(test, {  }, bddFileData));
test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('automation\\user-flows\\features\\34-Navigation-Posters-Menu.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":7,"tags":["@posters-galore","@34-Navigation-Posters-Menu"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am on the dashboard before using posters menu","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When I click the Posters sidebar link","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then the posters catalog opens from the sidebar","stepMatchArguments":[]}]},
]; // bdd-data-end