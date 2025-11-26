const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://marsair.recruiting.thoughtworks.net',
  },
});
