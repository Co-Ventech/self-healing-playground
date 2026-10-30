// Generated from: automation\user-flows\features\12-Orders-Table-Rows.feature
import { test } from "playwright-bdd";

test.describe('Orders: Table Rows', () => {

  test('Orders table lists order rows', { tag: ['@posters-galore', '@12-Orders-Table-Rows'] }, async ({ Given, Then, page }) => { 
    await Given('I open orders to verify the datagrid rows', null, { page }); 
    await Then('at least one order row is listed in the orders table', null, { page }); 
  });

});

// == technical section ==

test.beforeAll('BeforeAll Hooks', ({ $runBeforeAllHooks }) => $runBeforeAllHooks(test, {  }, bddFileData));
test.afterAll('AfterAll Hooks', ({ $registerAfterAllHooks }) => $registerAfterAllHooks(test, {  }, bddFileData));
test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('automation\\user-flows\\features\\12-Orders-Table-Rows.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":7,"tags":["@posters-galore","@12-Orders-Table-Rows"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I open orders to verify the datagrid rows","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then at least one order row is listed in the orders table","stepMatchArguments":[]}]},
]; // bdd-data-end