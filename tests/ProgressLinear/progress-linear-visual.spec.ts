import { test, expect } from '@playwright/test';

// Centralise la route de test (à adapter si besoin)
const TEST_ROUTE = 'http://localhost:3000/progress-linear-test';
const THRESHOLD = 0.2;

const states = [
  { progress: 0, testId: 'linear-progress-0', snapshot: 'progress-linear-0.png' },
  { progress: 50, testId: 'linear-progress-50', snapshot: 'progress-linear-50.png' },
  {
    progress: 100,
    testId: 'linear-progress-100',
    snapshot: 'progress-linear-100.png',
  },
];

test.describe('ProgressLinear visual regression', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(TEST_ROUTE);
  });

  for (const { progress, testId, snapshot } of states) {
    test(`apparence à ${progress}%`, async ({ page }) => {
      const bar = await page.getByTestId(testId);
      expect(await bar.screenshot()).toMatchSnapshot(snapshot, {
        threshold: THRESHOLD,
      });
    });
  }
});
