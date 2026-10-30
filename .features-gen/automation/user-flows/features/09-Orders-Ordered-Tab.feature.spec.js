// Generated from: automation\user-flows\features\09-Orders-Ordered-Tab.feature
import { test } from "playwright-bdd";

test.describe('Orders: Ordered Tab', () => {

  test('Orders page opens on Ordered tab', { tag: ['@posters-galore', '@09-Orders-Ordered-Tab'] }, async ({ Given, Then, page }) => { 
    await Given('I open the orders module for the ordered tab check', null, { page }); 
    await Then('the Ordered status tab is selected on orders', null, { page }); 
  });

});

// == technical section ==

test.beforeAll('BeforeAll Hooks', ({ $runBeforeAllHooks }) => $runBeforeAllHooks(test, {  }, bddFileData));
test.afterAll('AfterAll Hooks', ({ $registerAfterAllHooks }) => $registerAfterAllHooks(test, {  }, bddFileData));
test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('automation\\user-flows\\features\\09-Orders-Ordered-Tab.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":7,"tags":["@posters-galore","@09-Orders-Ordered-Tab"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I open the orders module for the ordered tab check","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then the Ordered status tab is selected on orders","stepMatchArguments":[]}]},
]; // bdd-data-end