// Generated from: automation\user-flows\features\11-Orders-Cancelled-Tab.feature
import { test } from "playwright-bdd";

test.describe('Orders: Cancelled Tab', () => {

  test('User can switch to Cancelled orders tab', { tag: ['@posters-galore', '@11-Orders-Cancelled-Tab'] }, async ({ Given, When, Then, page }) => { 
    await Given('I open orders before switching to cancelled', null, { page }); 
    await When('I select the Cancelled orders tab', null, { page }); 
    await Then('the Cancelled orders tab is selected', null, { page }); 
  });

});

// == technical section ==

test.beforeAll('BeforeAll Hooks', ({ $runBeforeAllHooks }) => $runBeforeAllHooks(test, {  }, bddFileData));
test.afterAll('AfterAll Hooks', ({ $registerAfterAllHooks }) => $registerAfterAllHooks(test, {  }, bddFileData));
test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('automation\\user-flows\\features\\11-Orders-Cancelled-Tab.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":7,"tags":["@posters-galore","@11-Orders-Cancelled-Tab"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I open orders before switching to cancelled","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When I select the Cancelled orders tab","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then the Cancelled orders tab is selected","stepMatchArguments":[]}]},
]; // bdd-data-end