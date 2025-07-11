import { test, expect } from '@playwright/test';

// Test vertical BarChart (le premier sur la page)
test('BarChart vertical apparence', async ({ page }) => {
  await page.goto('http://localhost:3000'); // ou ta route exacte
  const svg = await page.getByTestId('bar-chart-svg').nth(0);
  expect(await svg.screenshot()).toMatchSnapshot('bar-chart-vertical.png', {
    threshold: 0.2,
  });
});

// Test horizontal BarChart (le deuxième sur la page)
test('BarChart horizontal apparence', async ({ page }) => {
  await page.goto('http://localhost:3000'); // ou ta route exacte
  const svg = await page.getByTestId('bar-chart-svg').nth(1);
  expect(await svg.screenshot()).toMatchSnapshot('bar-chart-horizontal.png', {
    threshold: 0.2,
  });
});
