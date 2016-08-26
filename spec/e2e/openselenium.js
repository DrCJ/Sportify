const webdriver = require('selenium-webdriver');
const {
  runYahooLogin,
  clickMenuBtn,
} = require('./utils');

const By = webdriver.By;
const until = webdriver.until;

process.env.PATH = __dirname;


const driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

driver.get('http://127.0.0.1');

runYahooLogin(driver, () => {
  console.log('done');
});

driver.quit();
