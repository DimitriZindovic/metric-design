import { test, expect } from '@playwright/test';

test('Title H1 apparence', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const title = await page.locator('[data-testid="title-h1"]');
  expect(await title.screenshot()).toMatchSnapshot('title-h1.png');
});

test('Title H2 apparence', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const title = await page.locator('[data-testid="title-h2"]');
  expect(await title.screenshot()).toMatchSnapshot('title-h2.png');
});

test('Title H3 apparence', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const title = await page.locator('[data-testid="title-h3"]');
  expect(await title.screenshot()).toMatchSnapshot('title-h3.png');
});
