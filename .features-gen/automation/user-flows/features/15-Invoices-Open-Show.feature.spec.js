// Generated from: automation\user-flows\features\15-Invoices-Open-Show.feature
import { test } from "playwright-bdd";

test.describe('Invoices: Open Show', () => {

  test('Opening an invoice shows invoice details', { tag: ['@posters-galore', '@15-Invoices-Open-Show'] }, async ({ Given, When, Then, page }) => { 
    await Given('I open invoices to view a record', null, { page }); 
    await When('I open the first invoice from the list', null, { page }); 
    await Then('invoice detail content is displayed', null, { page }); 
  });

});

// == technical section ==

test.beforeAll('BeforeAll Hooks', ({ $runBeforeAllHooks }) => $runBeforeAllHooks(test, {  }, bddFileData));
test.afterAll('AfterAll Hooks', ({ $registerAfterAllHooks }) => $registerAfterAllHooks(test, {  }, bddFileData));
test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('automation\\user-flows\\features\\15-Invoices-Open-Show.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":7,"tags":["@posters-galore","@15-Invoices-Open-Show"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I open invoices to view a record","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When I open the first invoice from the list","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then invoice detail content is displayed","stepMatchArguments":[]}]},
]; // bdd-data-end