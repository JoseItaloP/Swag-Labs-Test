const { defineConfig } = require("cypress");


module.exports = defineConfig({
  env: {
    STANDART_USER: 'standard_user',
    LOCKED_USER: 'locked_out_user',
    PROBLEM_USER: 'problem_user',
    PERFORMACEG_USER: 'performance_glitch_user',
    ERRO_USER: 'error_user',
    VISUAL_USER: 'visual_user',
    PASS: 'secret_sauce',
    URL: 'https://www.saucedemo.com/'
  },
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/reports/junit/results-[hash].xml'
    },
    cypressMochawesomeReporterReporterOptions: {
      charts: true,
      reportPageTitle: 'Relátorio de testes',
      embeddedScreenshots: true,
      inLineAssets: true,
      saveAllAttempts: false
    }
  },
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
      // implement node event listeners here
    },
  },
});
