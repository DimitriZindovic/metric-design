import { test, expect } from '@playwright/test';

test.describe('Button visual regression', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.getByTestId('button').waitFor({ state: 'visible' });
  });

  test('apparence par défaut', async ({ page }) => {
    const bouton = await page.getByTestId('button');
    expect(await bouton.screenshot()).toMatchSnapshot('button.png', {
      threshold: 0.5,
    });
  });
});
