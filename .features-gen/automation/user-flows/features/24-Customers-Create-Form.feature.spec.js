// Generated from: automation\user-flows\features\24-Customers-Create-Form.feature
import { test } from "playwright-bdd";

test.describe('Customers: Create Form', () => {

  test('Create customer form opens from the list', { tag: ['@posters-galore', '@24-Customers-Create-Form'] }, async ({ Given, When, Then, page }) => { 
    await Given('I open customers before creating a record', null, { page }); 
    await When('I open the create customer form', null, { page }); 
    await Then('customer create fields are displayed', null, { page }); 
  });

});

// == technical section ==

test.beforeAll('BeforeAll Hooks', ({ $runBeforeAllHooks }) => $runBeforeAllHooks(test, {  }, bddFileData));
test.afterAll('AfterAll Hooks', ({ $registerAfterAllHooks }) => $registerAfterAllHooks(test, {  }, bddFileData));
test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('automation\\user-flows\\features\\24-Customers-Create-Form.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":7,"tags":["@posters-galore","@24-Customers-Create-Form"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I open customers before creating a record","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When I open the create customer form","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then customer create fields are displayed","stepMatchArguments":[]}]},
]; // bdd-data-end