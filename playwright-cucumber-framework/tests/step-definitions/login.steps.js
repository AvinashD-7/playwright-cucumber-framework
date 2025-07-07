const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const LoginPage = require('../../pages/LoginPage');
const config = require('../../config/config');

let browser, page, loginPage;

// 🔹 Before Hook – runs before each scenario
Before(async () => {
  browser = await chromium.launch({ headless: false }); // set to true for CI
  page = await browser.newPage();
  loginPage = new LoginPage(page);
});

// 🔹 After Hook – runs after each scenario
After(async () => {
  if (browser) {
    await browser.close();
  }
});

Given('user navigates to login page', { timeout: 20000 }, async () => {
  console.log("Navigating to URL:", config.baseURL);
  await loginPage.navigate(config.baseURL);
});

When('user logs in with valid credentials', async () => {
  await loginPage.login(config.credentials.username, config.credentials.password);
});

Then('user should see the dashboard', async () => {
  await loginPage.assertPageTitle(page,config.credentials.dashboardtitle);
});
