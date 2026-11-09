import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ABTestingPage } from '../pages/ABTestingPage';
import { CheckboxesPage } from '../pages/CheckboxesPage';
import { DropdownPage } from '../pages/DropdownPage';
import { ExitIntentPage } from '../pages/ExitIntentPage';
import { FileDownloadPage } from '../pages/FileDownloadPage';

test('A/B Testing - shows a heading variation', async ({ page }) => {
  const home = new HomePage(page);
  const abTesting = new ABTestingPage(page);

  await home.goto();
  await home.abTestingLink.click();

  // web-first assertion: retries until the heading matches one of the two A/B variants
  await expect(abTesting.heading).toHaveText(/A\/B Test (Control|Variation 1)/);

  await home.goto();
  await expect(page).toHaveURL('/');
});

test('Checkboxes - checks the first and unchecks the second', async ({ page }) => {
  const home = new HomePage(page);
  const checkboxes = new CheckboxesPage(page);

  await home.goto();
  await home.checkboxesLink.click();

  await checkboxes.checkFirst();
  await checkboxes.uncheckSecond();

  await expect(checkboxes.checkbox1).toBeChecked();
  await expect(checkboxes.checkbox2).not.toBeChecked();

  await home.goto();
  await expect(page).toHaveURL('/');
});

test('Dropdown - selects Option 2', async ({ page }) => {
  const home = new HomePage(page);
  const dropdown = new DropdownPage(page);

  await home.goto();
  await home.dropdownLink.click();

  await dropdown.selectOption2();

  await expect(dropdown.dropdown).toHaveValue('2');

  await home.goto();
  await expect(page).toHaveURL('/');
});

test('Exit Intent - shows and closes the modal', async ({ page }) => {
  const home = new HomePage(page);
  const exitIntent = new ExitIntentPage(page);

  await home.goto();
  await home.exitIntentLink.click();

  await exitIntent.triggerModal();
  await expect(exitIntent.modal).toBeVisible();
  await expect(exitIntent.modalHeading).toHaveText('This is a modal window');

  await exitIntent.closeModal();
  await expect(exitIntent.modal).toBeHidden();

  await home.goto();
  await expect(page).toHaveURL('/');
});

test('File Download - downloads test.txt', async ({ page }) => {
  const home = new HomePage(page);
  const fileDownload = new FileDownloadPage(page);

  await home.goto();
  await home.fileDownloadLink.click();

  const download = await fileDownload.downloadTestFile();

  expect(download.suggestedFilename()).toBe('test.txt');

  await home.goto();
  await expect(page).toHaveURL('/');
});
