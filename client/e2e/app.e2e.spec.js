// @ts-check
import { test, expect } from "@playwright/test";

test.describe("ShopSmart Ecommerce — E2E Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("page loads with correct title", async ({ page }) => {
    await expect(page).toHaveTitle("ShopSmart");
  });

  test("topbar is visible with download link", async ({ page }) => {
    const downloadLink = page.getByText("Download shopsmart App");
    await expect(downloadLink).toBeVisible();
  });

  test("header displays search and cart", async ({ page }) => {
    // Logo
    await expect(page.getByRole('heading', { name: "shopsmart", exact: true })).toBeVisible();
    
    // Search input
    const searchInput = page.getByPlaceholder("Search product or brand here...");
    await expect(searchInput).toBeVisible();

    // Cart button
    const cartBtn = page.getByTestId("cart-btn");
    await expect(cartBtn).toBeVisible();
  });

  test("hero section displays promo text", async ({ page }) => {
    await expect(page.getByText("Limited Time Offer!")).toBeVisible();
    await expect(page.getByText("Up to 50% OFF!")).toBeVisible();
  });

  test("categories section is visible", async ({ page }) => {
    await expect(page.getByText("T-Shirt")).toBeVisible();
    await expect(page.getByText("All Category").first()).toBeVisible();
  });

  test("flash sale section displays products", async ({ page }) => {
    await expect(page.getByText("Flash Sale")).toBeVisible();
    // Verify an element from flash sale exists
    await expect(page.getByText("EliteShield Performance")).toBeVisible();
  });

  test("todays for you section is visible", async ({ page }) => {
    await expect(page.getByText("Todays For You!")).toBeVisible();
    await expect(page.getByText("Best Seller")).toBeVisible();
  });

  test("best selling store displays stores", async ({ page }) => {
    await expect(page.getByText("Best Selling Store")).toBeVisible();
    await expect(page.getByText("Nike Sae Mall")).toBeVisible();
  });

  test("footer displays tagline and copyright", async ({ page }) => {
    const tagline = page.getByText("Let's Shop Beyond Boundaries").first();
    await expect(tagline).toBeVisible();

    await expect(page.getByText("© 2025 - 2026, shopsmart")).toBeVisible();
  });

  test("full page layout has all major sections", async ({ page }) => {
    await expect(page.locator(".app-layout")).toBeVisible();
    await expect(page.locator(".topbar")).toBeVisible();
    await expect(page.locator(".header-main")).toBeVisible();
    await expect(page.locator(".hero-section")).toBeVisible();
    await expect(page.locator(".categories-section")).toBeVisible();
    await expect(page.locator(".flash-sale-section")).toBeVisible();
    await expect(page.locator(".todays-for-you-section")).toBeVisible();
    await expect(page.locator(".store-section")).toBeVisible();
    await expect(page.locator(".footer-main")).toBeVisible();
  });
});
