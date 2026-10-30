// Generated from: automation\user-flows\features\13-Orders-Open-Edit.feature
import { test } from "playwright-bdd";

test.describe('Orders: Open Edit', () => {

  test('Clicking an order opens the edit view', { tag: ['@posters-galore', '@13-Orders-Open-Edit'] }, async ({ Given, When, Then, page }) => { 
    await Given('I open the orders list to edit an order', null, { page }); 
    await When('I click the first order row in the grid', null, { page }); 
    await Then('the order edit screen is displayed', null, { page }); 
  });

});

// == technical section ==

test.beforeAll('BeforeAll Hooks', ({ $runBeforeAllHooks }) => $runBeforeAllHooks(test, {  }, bddFileData));
test.afterAll('AfterAll Hooks', ({ $registerAfterAllHooks }) => $registerAfterAllHooks(test, {  }, bddFileData));
test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('automation\\user-flows\\features\\13-Orders-Open-Edit.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":7,"tags":["@posters-galore","@13-Orders-Open-Edit"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I open the orders list to edit an order","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When I click the first order row in the grid","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then the order edit screen is displayed","stepMatchArguments":[]}]},
]; // bdd-data-end