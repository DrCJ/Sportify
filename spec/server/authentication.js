const expect = require('chai').expect;
const request = require('request');

describe('authentication', () => {
  beforeEach((done) => {
    done();
  });

  it("should direct to yahoo's authentication system", (done) => {

    request({
      url: 'http://127.0.0.1/auth/yahoo',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }, (error, response, body) => {
      if (error) {
        console.log(error);
      } else {
        expect(response.statusCode).to.equal(200);
        done();
      }
    });

  });


  it('should create a token upon logging in', (done) => {

    request({
      url: 'http://127.0.0.1/auth/yahoo',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }, (error, response, body) => {
      if (error) {
        console.log(error);
      } else {
        expect(response.statusCode).to.equal(200);
        done();
      }
    });

  });

  it('should destroy token upon logging in', (done) => {

    request({
      url: 'http://127.0.0.1/logout',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }, (error, response, body) => {
      if (error) {
        console.log(error);
      } else {
        expect(response.statusCode).to.equal(200);
        done();
      }
    });

  });

});
