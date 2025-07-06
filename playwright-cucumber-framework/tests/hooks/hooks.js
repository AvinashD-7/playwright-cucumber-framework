const { Before, After } = require('@cucumber/cucumber');
const fs = require('fs');

Before(async function () {
  this.videoDir = `videos/${Date.now()}`;
  fs.mkdirSync(this.videoDir, { recursive: true });
});

After(async function (scenario) {
  if (scenario.result?.status === 'FAILED') {
    const screenshot = await this.page?.screenshot({ path: `${this.videoDir}/failed.png` });
    if (screenshot) this.attach(screenshot, 'image/png');
  }
  await this.page?.close();
  await this.browser?.close();
});