// Generated from: automation\user-flows\features\35-Navigation-Customers-Menu.feature
import { test } from "playwright-bdd";

test.describe('Navigation: Customers Menu', () => {

  test('Sidebar Customers link opens customers module', { tag: ['@posters-galore', '@35-Navigation-Customers-Menu'] }, async ({ Given, When, Then, page }) => { 
    await Given('I am on the dashboard before using customers menu', null, { page }); 
    await When('I click the Customers sidebar link', null, { page }); 
    await Then('the customers module opens from the sidebar', null, { page }); 
  });

});

// == technical section ==

test.beforeAll('BeforeAll Hooks', ({ $runBeforeAllHooks }) => $runBeforeAllHooks(test, {  }, bddFileData));
test.afterAll('AfterAll Hooks', ({ $registerAfterAllHooks }) => $registerAfterAllHooks(test, {  }, bddFileData));
test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('automation\\user-flows\\features\\35-Navigation-Customers-Menu.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":7,"tags":["@posters-galore","@35-Navigation-Customers-Menu"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am on the dashboard before using customers menu","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When I click the Customers sidebar link","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then the customers module opens from the sidebar","stepMatchArguments":[]}]},
]; // bdd-data-end