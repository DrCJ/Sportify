const request = require('request');
const expect = require('chai').expect;
const playerGameStats = require('../../server/db/sampleData/playerGameStats');

describe('sockets', () => {
  beforeEach((done) => {
    // console.log('beforeEach ', beforeEach);
    done();
  });

  it('getAllPlayers Test', (done) => {

    request({
      url: 'http://127.0.0.1/api/getAllPlayers',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }, (error, response, body) => {
      if (error) {
        console.log(error);
      } else {
        const parsed = JSON.parse(body);
        expect(response.statusCode).to.equal(200);
        expect(parsed.length).to.equal(25);
        for (var k in playerGameStats) {
          expect(parsed[0]).to.have.property(k);
        }
        done();
      }
    });
  });

  it('getPlayersByParams Test', (done) => {

    request({
      url: 'http://127.0.0.1/api/getPlayersByParams',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }, (error, response, body) => {
      if (error) {
        console.log(error);
      } else {
        const parsed = JSON.parse(body);
        expect(response.statusCode).to.equal(200);
        expect(parsed[0].length).to.equal(25);
        for (var k in playerGameStats) {
          expect(parsed[0][0]).to.have.property(k);
        }
        done();
      }
    });
  });

  it('getPlayersByIds Test', (done) => {

    request({
      url: 'http://127.0.0.1/api/getPlayersByIds',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        playerId: [7200],
      }),
    }, (error, response, body) => {
      if (error) {
        console.log(error);
      } else {
        const parsed = JSON.parse(body);
        expect(response.statusCode).to.equal(200);
        expect(parsed[0][0][0].full).to.equal('Aaron Rodgers');
        for (var k in playerGameStats) {
          expect(parsed[0][0][0]).to.have.property(k);
        }
        done();
      }
    });
  });

  it('getPlayersByName Test', (done) => {

    request({
      url: 'http://127.0.0.1/api/getPlayersByName',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        playerNames: ['Cam'],
      }),
    }, (error, response, body) => {
      if (error) {
        console.log(error);
      } else {
        const parsed = JSON.parse(body);
        expect(response.statusCode).to.equal(200);
        expect(parsed[0][0].Name).to.equal('Cam Newton');
        for (var k in playerGameStats) {
          expect(parsed[0][0]).to.have.property(k);
        }
        done();
      }
    });
  });
});
