import { test, expect } from '@playwright/test';

const TEST_ROUTE = 'http://localhost:3000';

const titles = [
  { level: 'h1', testId: 'title-h1', snapshot: 'title-h1.png' },
  { level: 'h2', testId: 'title-h2', snapshot: 'title-h2.png' },
  { level: 'h3', testId: 'title-h3', snapshot: 'title-h3.png' },
];

test.describe('Title visual regression', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(TEST_ROUTE);
  });

  for (const { level, testId, snapshot } of titles) {
    test(`Title ${level.toUpperCase()} apparence`, async ({ page }) => {
      const title = await page.getByTestId(testId);
      expect(await title.screenshot()).toMatchSnapshot(snapshot);
    });
  }
});
