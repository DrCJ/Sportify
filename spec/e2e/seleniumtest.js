//  1) check if you have java installed
//    java -version
//    if not install from: http://www.oracle.com/technetwork/java/javase/downloads/index.html
const {
  runYahooLogin,
  clickMenuBtn,
} = require('./utils');
const expect = require('chai').expect;
const test = require('selenium-webdriver/testing');
const webdriver = require('selenium-webdriver');

process.env.PATH = __dirname;
const driver = new webdriver.Builder()  // create driver outside beforeEach to quit
  .forBrowser('chrome')
  .build();

test.describe('Selenium tests', function() {
  this.timeout(30000);
  beforeEach((done) => {

    driver.get('http://127.0.0.1')
      .then(() => {
        done();
      });
  });

  it('login with yahoo', (done) => {
    runYahooLogin(driver, (err) => {
      expect(err).to.equal(null);
      done();
    });
  });

  it('should clickMenuBtn', (done) => {
    clickMenuBtn(driver, (err) => {
      expect(err).to.equal(null);
      done();
    });
  });

  it('done with tests', (done) => {
    driver.quit();
    done();
  });
});
