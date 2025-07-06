const DEFAULT_TIMEOUT = 10000; // Default 10 seconds

const waitUtils = {
  async waitForElement(page, selector, timeout = DEFAULT_TIMEOUT) {
    try {
      console.log(`🔍 Waiting for selector: ${selector}`);
      await page.waitForSelector(selector, { timeout });
      return true;
    } catch (error) {
      console.error(`❌ Timeout after ${timeout}ms for selector: ${selector}`);
      return false;
    }
  },

  async safeClick(page, selector, timeout = DEFAULT_TIMEOUT) {
    const found = await this.waitForElement(page, selector, timeout);
    if (found) {
      console.log(`🖱️ Clicking element: ${selector}`);
      await page.click(selector);
    } else {
      throw new Error(`safeClick failed: Element not found → ${selector}`);
    }
  },

  async safeFill(page, selector, value, timeout = DEFAULT_TIMEOUT) {
    const found = await this.waitForElement(page, selector, timeout);
    if (found) {
      console.log(`✍️ Filling element: ${selector} with value: ${value}`);
      await page.fill(selector, value);
    } else {
      throw new Error(`safeFill failed: Element not found → ${selector}`);
    }
  },

  async safeType(page, selector, value, timeout = DEFAULT_TIMEOUT) {
    const found = await this.waitForElement(page, selector, timeout);
    if (found) {
      console.log(`⌨️ Typing into: ${selector} → ${value}`);
      await page.type(selector, value);
    } else {
      throw new Error(`safeType failed: Element not found → ${selector}`);
    }
  },

  async safeGetText(page, selector, timeout = DEFAULT_TIMEOUT) {
    const found = await this.waitForElement(page, selector, timeout);
    if (found) {
      const text = await page.textContent(selector);
      console.log(`📄 Text from ${selector}: ${text}`);
      return text;
    } else {
      throw new Error(`safeGetText failed: Element not found → ${selector}`);
    }
  },

  async retry(actionFn, retries = 3, delayMs = 1000) {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        return await actionFn();
      } catch (error) {
        console.warn(`⚠️ Retry attempt ${attempt} failed: ${error.message}`);
        if (attempt === retries) throw new Error(`❌ All retries failed.`);
        await new Promise((res) => setTimeout(res, delayMs));
      }
    }
  }
};

module.exports = waitUtils;
