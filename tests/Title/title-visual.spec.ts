import { test, expect } from '@playwright/test';

test('Title H1 apparence', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const title = await page.locator('h1');
  expect(await title.screenshot()).toMatchSnapshot('title-h1.png');
});

test('Title H2 apparence', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const title = await page.locator('h2');
  expect(await title.screenshot()).toMatchSnapshot('title-h2.png');
});

test('Title H3 apparence', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const title = await page.locator('h3');
  expect(await title.screenshot()).toMatchSnapshot('title-h3.png');
});

test('Tous les titres ensemble', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const titlesContainer = await page.locator('div').first();
  expect(await titlesContainer.screenshot()).toMatchSnapshot('all-titles.png');
});
