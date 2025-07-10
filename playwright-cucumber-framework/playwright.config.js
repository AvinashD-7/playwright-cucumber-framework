

module.exports =({
  testDir: './tests/step-definitions',
  timeout: 30000,
  expect: {
    timeout: 5000
  },
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  reporter: [['list'], ['html']],
});
