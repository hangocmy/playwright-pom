import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://playwright.dev/");
  })

  test("main navigation", async ({ page }) => {
    //Assertions use the expect API
    await expect(page).toHaveURL("https://playwright.dev/");
  })
})