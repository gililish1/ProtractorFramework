
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine2',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['../tests/calculator.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  // Assign the test reporter to each running instance
  onPrepare: function () {
    var AllureReporter = require('C:/Users/Gilad/AppData/Roaming/npm/node_modules/protractor/node_modules/jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'E:/Program Files/Microsoft VS Code/Projects/ProtractorFramework/allure-results'
    }));
  },

};