
const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const sqlServer = require('cypress-sql-server');
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');

async function setupNodeEvents(on, config) {

  config.db = {
    userName: "mvuadmin001",
    password: "Learning1!",
    server: "mvulearningdb001.database.windows.net",
    options: {
      database: "mvulearningdb001",
      encrypt: true,
      rowCollectionOnRequestCompletion: true
    }
  }
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  tasks = sqlServer.loadDBPlugin(config.db);
  on('task', tasks);
  on('task', {
    excelToJsonConverter(filePath) {
      const result = excelToJson({
      source: fs.readFileSync(filePath) // fs.readFileSync return a Buffer
      });
    }
  });
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}
module.exports = defineConfig({

  defaultCommandTimeout: 6000,
  env: {
    url: "https://rahulshettyacademy.com",
  },


  retries: {
    runMode: 1,

  },
  projectId: "nodpcq",

  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/integration/examples/*.js'
    // specPattern: 'cypress/integration/examples/BDD/*.feature'
  },
});

//messages -> json file ->html