import { test, expect } from "@playwright/test";
test.describe("Login Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
  });
  test("header section", async ({ page }) => {
    await expect(page.getByTestId("MenuIcon")).toBeVisible();
    await expect(page.getByText("WBH000000: Login")).toBeVisible();
    await expect(page.getByText("Operation Plant")).toBeVisible();
    await expect(page.getByTestId("ApartmentIcon")).toBeVisible();
    // await expect(page.getByText("Ant Co., Ltd.")).toBeVisible();
    await expect(page.getByTestId("PersonIcon")).toBeVisible();
    // await expect(page.getByText("React User Ant")).toBeVisible();
  });
  test("detail section", async ({ page }) => {
    await expect(page.getByRole("button", { name: "Sign In" })).toBeVisible();
    const userNameDiv = page.getByTestId("input-username");
    await expect(userNameDiv).toBeVisible();
    await expect(userNameDiv.filter({ hasText: "Username *" })).toBeVisible();
    const userNameInput = userNameDiv.getByRole("textbox");
    await expect(userNameInput).toBeVisible();
    await expect(userNameInput).toBeEmpty();
    await expect(userNameInput).toHaveAttribute("required", "");
    const passwordDiv = page.getByTestId("input-password");
    await expect(passwordDiv).toBeVisible();
    await expect(passwordDiv.filter({ hasText: "Password *" })).toBeVisible();
    const passwordInput = passwordDiv.getByRole("textbox");
    await expect(passwordInput).toBeEmpty();
    await expect(passwordInput).toHaveAttribute("required", "");
    const signInElement = page.getByTestId("btn-sign-in");
    await expect(signInElement).toBeVisible();
    await expect(signInElement.getByText("SIGN IN")).toBeVisible();
    await expect(signInElement).toBeEnabled();
  });
});
