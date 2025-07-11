// tests/ProgressCircular/progress-circular-visual.spec.ts
import { test, expect } from '@playwright/test';

test('ProgressCircular apparence à 0%', async ({ page }) => {
  await page.goto('http://localhost:3000/progress-circular-test');
  const circle = await page.getByTestId('progress-0');
  expect(await circle.screenshot()).toMatchSnapshot('progress-0.png', {
    threshold: 0.2,
  });
});

test('ProgressCircular apparence à 50%', async ({ page }) => {
  await page.goto('http://localhost:3000/progress-circular-test');
  const circle = await page.getByTestId('progress-50');
  expect(await circle.screenshot()).toMatchSnapshot('progress-50.png', {
    threshold: 0.2,
  });
});

test('ProgressCircular apparence à 100%', async ({ page }) => {
  await page.goto('http://localhost:3000/progress-circular-test');
  const circle = await page.getByTestId('progress-100');
  expect(await circle.screenshot()).toMatchSnapshot('progress-100.png', {
    threshold: 0.2,
  });
});
