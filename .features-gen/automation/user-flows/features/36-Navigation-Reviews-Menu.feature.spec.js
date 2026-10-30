// Generated from: automation\user-flows\features\36-Navigation-Reviews-Menu.feature
import { test } from "playwright-bdd";

test.describe('Navigation: Reviews Menu', () => {

  test('Sidebar Reviews link opens reviews module', { tag: ['@posters-galore', '@36-Navigation-Reviews-Menu'] }, async ({ Given, When, Then, page }) => { 
    await Given('I am on the dashboard before using reviews menu', null, { page }); 
    await When('I click the Reviews sidebar link', null, { page }); 
    await Then('the reviews module opens from the sidebar', null, { page }); 
  });

});

// == technical section ==

test.beforeAll('BeforeAll Hooks', ({ $runBeforeAllHooks }) => $runBeforeAllHooks(test, {  }, bddFileData));
test.afterAll('AfterAll Hooks', ({ $registerAfterAllHooks }) => $registerAfterAllHooks(test, {  }, bddFileData));
test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('automation\\user-flows\\features\\36-Navigation-Reviews-Menu.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":7,"tags":["@posters-galore","@36-Navigation-Reviews-Menu"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am on the dashboard before using reviews menu","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When I click the Reviews sidebar link","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then the reviews module opens from the sidebar","stepMatchArguments":[]}]},
]; // bdd-data-end