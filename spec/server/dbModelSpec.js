const expect = require('chai').expect;
const { createSequelizeShape } = require('../../server/db/helpers/parseStatsHelpers');
const playerGameStats = require('../../server/db/sampleData/playerGameStats');
const { db, User, Player, Team } = require('../../server/db/modelConnect');
// const PlayerGame = require('../../server/db/models/playerGame');


describe('sockets', () => {
  beforeEach((done) => {
    // console.log('beforeEach ', beforeEach);
    done();
  });

  it('createSequelize Tests', (done) => {
    expect(playerGameStats).to.be.an('object');
    expect(playerGameStats.PlayerID).to.be.an('number');
    expect(createSequelizeShape(playerGameStats)).to.be.an('object');
    // console.log(PlayerGame);
    // console.log('db:', db.define);

    expect(21).to.equal(21);

    done();
  });
});
