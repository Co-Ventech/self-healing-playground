// Generated from: automation\user-flows\features\10-Orders-Delivered-Tab.feature
import { test } from "playwright-bdd";

test.describe('Orders: Delivered Tab', () => {

  test('User can switch to Delivered orders tab', { tag: ['@posters-galore', '@10-Orders-Delivered-Tab'] }, async ({ Given, When, Then, page }) => { 
    await Given('I open orders before switching to delivered', null, { page }); 
    await When('I select the Delivered orders tab', null, { page }); 
    await Then('the Delivered orders tab is selected', null, { page }); 
  });

});

// == technical section ==

test.beforeAll('BeforeAll Hooks', ({ $runBeforeAllHooks }) => $runBeforeAllHooks(test, {  }, bddFileData));
test.afterAll('AfterAll Hooks', ({ $registerAfterAllHooks }) => $registerAfterAllHooks(test, {  }, bddFileData));
test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('automation\\user-flows\\features\\10-Orders-Delivered-Tab.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":7,"tags":["@posters-galore","@10-Orders-Delivered-Tab"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I open orders before switching to delivered","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When I select the Delivered orders tab","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then the Delivered orders tab is selected","stepMatchArguments":[]}]},
]; // bdd-data-end