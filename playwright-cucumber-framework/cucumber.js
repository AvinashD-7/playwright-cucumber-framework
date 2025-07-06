module.exports = {
  default: {
    require: [
      'tests/step-definitions/**/*.js',
      'tests/hooks/hooks.js'
    ],
    format: ['json:reports/allure-results/result.json'],
    tags: 'not @ignore',
    parallel: 2
  }
};