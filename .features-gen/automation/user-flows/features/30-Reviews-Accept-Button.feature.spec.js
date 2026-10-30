// Generated from: automation\user-flows\features\30-Reviews-Accept-Button.feature
import { test } from "playwright-bdd";

test.describe('Reviews: Accept Button', () => {

  test('Accept action is available on reviews', { tag: ['@posters-galore', '@30-Reviews-Accept-Button'] }, async ({ Given, Then, page }) => { 
    await Given('I open reviews to inspect the accept action', null, { page }); 
    await Then('an Accept button is visible on the reviews page', null, { page }); 
  });

});

// == technical section ==

test.beforeAll('BeforeAll Hooks', ({ $runBeforeAllHooks }) => $runBeforeAllHooks(test, {  }, bddFileData));
test.afterAll('AfterAll Hooks', ({ $registerAfterAllHooks }) => $registerAfterAllHooks(test, {  }, bddFileData));
test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('automation\\user-flows\\features\\30-Reviews-Accept-Button.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":7,"tags":["@posters-galore","@30-Reviews-Accept-Button"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I open reviews to inspect the accept action","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then an Accept button is visible on the reviews page","stepMatchArguments":[]}]},
]; // bdd-data-end