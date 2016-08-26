const webdriver = require('selenium-webdriver');
const { yahooLogin, yahooPassword } = require('../../server/config/credentials');

const By = webdriver.By;
const until = webdriver.until;
const Key = webdriver.Key;

const runYahooLogin = (driver, cb) => {
  driver.findElement(By.linkText('Yahoo Profile Login')).click()
    .then(() => {
      // uncomment to intentionally fail test
      // driver.findElement(By.linkText('No Links should have this Text foool!'));

      driver.wait(until.titleIs('Yahoo - login'));
      const input1 = driver.findElement(By.tagName('input'));
      input1.sendKeys(yahooLogin);  //  username
      input1.sendKeys(Key.TAB);
      input1.sendKeys(Key.ENTER);

      driver.sleep(500);
      driver.wait(until.elementLocated(By.id('login-passwd')));
      const input2 = driver.findElement(By.id('login-passwd'));

      input2.click();
      input2.clear();
      input2.sendKeys(yahooPassword);
      input2.sendKeys(Key.TAB);
      input2.sendKeys(Key.ENTER);

      driver.wait(until.titleIs('Yahoo Review and Continue'));
      return driver.findElement(By.id('xagree')).click();
    })
    .then(() => cb(null))
    .catch(err => cb(err));
};

const clickMenuBtn = (driver, cb) => {
  const menuBtn = driver.findElement(By.className('menu-btn'));
  menuBtn.click()
    .then(() => cb(null))
    .catch(err => cb(err));
};

module.exports = {
  runYahooLogin,
  clickMenuBtn,
};
