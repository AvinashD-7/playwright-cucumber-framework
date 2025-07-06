class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate(url) {
  console.log("Navigating to:", url);
  await this.page.goto(url, { waitUntil: 'domcontentloaded', timeout: 20000 });
}

  async getTitle() {
    return await this.page.title();
  }
}

module.exports = BasePage;