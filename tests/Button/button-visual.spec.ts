import { test, expect } from '@playwright/test';

test('Button apparence', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Attendre que le bouton soit visible (rendu complet)
  await page.waitForSelector('[data-testid="button"]', { state: 'visible' });

  const bouton = await page.locator('[data-testid="button"]');
  expect(await bouton.screenshot()).toMatchSnapshot('button.png', {
    threshold: 0.5,
  });
});
