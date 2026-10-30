// Generated from: automation\user-flows\features\33-Navigation-Orders-Menu.feature
import { test } from "playwright-bdd";

test.describe('Navigation: Orders Menu', () => {

  test('Sidebar Orders link opens orders module', { tag: ['@posters-galore', '@33-Navigation-Orders-Menu'] }, async ({ Given, When, Then, page }) => { 
    await Given('I am on the dashboard before using orders menu', null, { page }); 
    await When('I click the Orders sidebar link', null, { page }); 
    await Then('the orders module opens from the sidebar', null, { page }); 
  });

});

// == technical section ==

test.beforeAll('BeforeAll Hooks', ({ $runBeforeAllHooks }) => $runBeforeAllHooks(test, {  }, bddFileData));
test.afterAll('AfterAll Hooks', ({ $registerAfterAllHooks }) => $registerAfterAllHooks(test, {  }, bddFileData));
test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('automation\\user-flows\\features\\33-Navigation-Orders-Menu.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":7,"tags":["@posters-galore","@33-Navigation-Orders-Menu"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am on the dashboard before using orders menu","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When I click the Orders sidebar link","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then the orders module opens from the sidebar","stepMatchArguments":[]}]},
]; // bdd-data-end