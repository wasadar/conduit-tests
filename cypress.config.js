const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "8ahg9a",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
