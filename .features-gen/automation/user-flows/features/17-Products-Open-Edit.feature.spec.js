// Generated from: automation\user-flows\features\17-Products-Open-Edit.feature
import { test } from "playwright-bdd";

test.describe('Products: Open Edit', () => {

  test('Opening a poster opens the edit form', { tag: ['@posters-galore', '@17-Products-Open-Edit'] }, async ({ Given, When, Then, page }) => { 
    await Given('I open posters before editing a product', null, { page }); 
    await When('I open the first poster from the catalog', null, { page }); 
    await Then('the poster edit form with tabs is displayed', null, { page }); 
  });

});

// == technical section ==

test.beforeAll('BeforeAll Hooks', ({ $runBeforeAllHooks }) => $runBeforeAllHooks(test, {  }, bddFileData));
test.afterAll('AfterAll Hooks', ({ $registerAfterAllHooks }) => $registerAfterAllHooks(test, {  }, bddFileData));
test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('automation\\user-flows\\features\\17-Products-Open-Edit.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":7,"tags":["@posters-galore","@17-Products-Open-Edit"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I open posters before editing a product","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When I open the first poster from the catalog","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then the poster edit form with tabs is displayed","stepMatchArguments":[]}]},
]; // bdd-data-end