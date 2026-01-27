import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://printables.hp.com/us/en');
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.getByRole('link', { name: 'Highlights for Children' }).click();
  await page.locator('#printable_17 > .relative.block > .group.relative > .absolute.left-0.top-0').click();
  await page.getByTestId('Print_Single').click();
});