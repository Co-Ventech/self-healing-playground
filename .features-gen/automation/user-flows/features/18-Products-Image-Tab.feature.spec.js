// Generated from: automation\user-flows\features\18-Products-Image-Tab.feature
import { test } from "playwright-bdd";

test.describe('Products: Image Tab', () => {

  test('Poster edit Image tab is available', { tag: ['@posters-galore', '@18-Products-Image-Tab'] }, async ({ Given, When, Then, page }) => { 
    await Given('I open a poster edit form for the image tab', null, { page }); 
    await When('I select the Image tab on the poster form', null, { page }); 
    await Then('the poster image field is visible', null, { page }); 
  });

});

// == technical section ==

test.beforeAll('BeforeAll Hooks', ({ $runBeforeAllHooks }) => $runBeforeAllHooks(test, {  }, bddFileData));
test.afterAll('AfterAll Hooks', ({ $registerAfterAllHooks }) => $registerAfterAllHooks(test, {  }, bddFileData));
test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('automation\\user-flows\\features\\18-Products-Image-Tab.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":7,"tags":["@posters-galore","@18-Products-Image-Tab"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I open a poster edit form for the image tab","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When I select the Image tab on the poster form","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then the poster image field is visible","stepMatchArguments":[]}]},
]; // bdd-data-end