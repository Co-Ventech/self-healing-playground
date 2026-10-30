// Generated from: automation\user-flows\features\26-Customers-Segments-Aside.feature
import { test } from "playwright-bdd";

test.describe('Customers: Segments Aside', () => {

  test('Customers page shows segment filters aside', { tag: ['@posters-galore', '@26-Customers-Segments-Aside'] }, async ({ Given, Then, page }) => { 
    await Given('I open customers to inspect the segments aside', null, { page }); 
    await Then('customer segment filters are visible beside the list', null, { page }); 
  });

});

// == technical section ==

test.beforeAll('BeforeAll Hooks', ({ $runBeforeAllHooks }) => $runBeforeAllHooks(test, {  }, bddFileData));
test.afterAll('AfterAll Hooks', ({ $registerAfterAllHooks }) => $registerAfterAllHooks(test, {  }, bddFileData));
test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('automation\\user-flows\\features\\26-Customers-Segments-Aside.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":7,"tags":["@posters-galore","@26-Customers-Segments-Aside"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I open customers to inspect the segments aside","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then customer segment filters are visible beside the list","stepMatchArguments":[]}]},
]; // bdd-data-end