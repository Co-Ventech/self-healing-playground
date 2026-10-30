// Generated from: automation\user-flows\features\28-Segments-Link-Customers.feature
import { test } from "playwright-bdd";

test.describe('Segments: Link Customers', () => {

  test('Segment page links through to filtered customers', { tag: ['@posters-galore', '@28-Segments-Link-Customers'] }, async ({ Given, When, Then, page }) => { 
    await Given('I open segments before following a customer link', null, { page }); 
    await When('I follow a segment link to customers', null, { page }); 
    await Then('I land on the customers module from segments', null, { page }); 
  });

});

// == technical section ==

test.beforeAll('BeforeAll Hooks', ({ $runBeforeAllHooks }) => $runBeforeAllHooks(test, {  }, bddFileData));
test.afterAll('AfterAll Hooks', ({ $registerAfterAllHooks }) => $registerAfterAllHooks(test, {  }, bddFileData));
test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('automation\\user-flows\\features\\28-Segments-Link-Customers.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":7,"tags":["@posters-galore","@28-Segments-Link-Customers"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I open segments before following a customer link","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When I follow a segment link to customers","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then I land on the customers module from segments","stepMatchArguments":[]}]},
]; // bdd-data-end