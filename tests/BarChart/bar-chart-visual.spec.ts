import { test, expect } from '@playwright/test';

test.describe('BarChart visual regression', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('affichage vertical', async ({ page }) => {
    const svg = await page.getByTestId('bar-chart-svg').nth(0);
    expect(await svg.screenshot()).toMatchSnapshot('bar-chart-vertical.png', {
      threshold: 0.2,
    });
  });

  test('affichage horizontal', async ({ page }) => {
    const svg = await page.getByTestId('bar-chart-svg').nth(1);
    expect(await svg.screenshot()).toMatchSnapshot('bar-chart-horizontal.png', {
      threshold: 0.2,
    });
  });
});
