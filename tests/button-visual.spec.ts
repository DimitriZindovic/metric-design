import { test, expect } from '@playwright/test';

test('Button apparence', async ({ page }) => {
  await page.goto('http://localhost:3001');
  const bouton = await page.locator('button');
  expect(await bouton.screenshot()).toMatchSnapshot('button.png');
});
