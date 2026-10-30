// Generated from: automation\user-flows\features\23-Customers-List.feature
import { test } from "playwright-bdd";

test.describe('Customers: List', () => {

  test('Customers list page loads with rows', { tag: ['@posters-galore', '@23-Customers-List'] }, async ({ Given, Then, page }) => { 
    await Given('I open the customers module list', null, { page }); 
    await Then('customer rows are visible in the customers table', null, { page }); 
  });

});

// == technical section ==

test.beforeAll('BeforeAll Hooks', ({ $runBeforeAllHooks }) => $runBeforeAllHooks(test, {  }, bddFileData));
test.afterAll('AfterAll Hooks', ({ $registerAfterAllHooks }) => $registerAfterAllHooks(test, {  }, bddFileData));
test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('automation\\user-flows\\features\\23-Customers-List.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":7,"tags":["@posters-galore","@23-Customers-List"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I open the customers module list","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then customer rows are visible in the customers table","stepMatchArguments":[]}]},
]; // bdd-data-end