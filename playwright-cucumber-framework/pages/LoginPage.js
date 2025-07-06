const BasePage = require('./BasePage');
const waitUtils = require('../utils/waitUtils');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.usernameInput = "//input[@placeholder='Username']";
    this.passwordInput = "//input[@placeholder='Password']";
    this.loginBtn = "//button[normalize-space()='Login']";
  }

   async login(username, password) {
    await waitUtils.safeFill(this.page, this.usernameInput, username);
    await waitUtils.safeFill(this.page, this.passwordInput, password);
    await waitUtils.safeClick(this.page, this.loginBtn);
  }
}

module.exports = LoginPage;