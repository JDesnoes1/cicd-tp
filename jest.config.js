module.exports = {
  testEnvironment: "node",
  reporters: [
    "default",
    ["jest-allure", {
      resultsDir: "./allure-results"
    }]
  ]
};
