import { test, expect } from '@playwright/test';

const TEST_ROUTE = 'http://localhost:3000/progress-circular-test';
const THRESHOLD = 0.2;

const states = [
  { progress: 0, testId: 'progress-0', snapshot: 'progress-0.png' },
  { progress: 50, testId: 'progress-50', snapshot: 'progress-50.png' },
  { progress: 100, testId: 'progress-100', snapshot: 'progress-100.png' },
];

test.describe('ProgressCircular visual regression', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(TEST_ROUTE);
  });

  for (const { progress, testId, snapshot } of states) {
    test(`apparence à ${progress}%`, async ({ page }) => {
      const circle = await page.getByTestId(testId);
      expect(await circle.screenshot()).toMatchSnapshot(snapshot, {
        threshold: THRESHOLD,
      });
    });
  }
});
