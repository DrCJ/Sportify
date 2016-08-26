const db = require('../db/modelConnect');
const express = require('express');

const app = express();
const google = require('google');

app.listen(40, () => {
  console.log('currently listening to port 80');
});

const playerNames = [];
const twitterLinks = [];

db.Player.findAll({
  attributes: ['full'],
  where: {
    twitterID: null,
  },
})
.then(r => {
  const droplets = 8;
  const nPlayers = r.length;
  const slice = Math.floor(nPlayers / droplets);

  for (let j = 0; j < droplets; j++) {
    const breakpoint = slice * (j + 1);
    playerNames.push([]);
    for (let i = 0; i < r.length; i++) {
      if (r[i]) {
        playerNames[j].push(r[i].dataValues.full);
        playerNames.push(r[i].dataValues.full);
      }
    }
  }
  console.log(playerNames);

  google.resultsPerPage = 5;
  let nextCounter = 0;
  const getTwitterLinks = setInterval(() => {
    google(`twitter nfl ${playerNames[nextCounter]}`, (err, res) => {
      if (err) {
        console.log(err);
        console.log('This is the End, Google is Smart');
        console.log(twitterLinks);
      }

      for (let j = 0; j < 1; ++j) {
        const link = res.links[j];

        let twitterHandle = link.href.substr(20);
        let end;
        if (twitterHandle.indexOf('/') !== -1) {
          end = twitterHandle.indexOf('/');
        } else if (twitterHandle.indexOf('?') !== -1) {
          end = twitterHandle.indexOf('?');
        } else {
          end = twitterHandle.length;
        }

        twitterHandle = twitterHandle.substr(0, end);

        const linkObj = { name: playerNames[nextCounter], twitterLink: twitterHandle };
        twitterLinks.push(linkObj);

        db.Player.update(
          {
            twitterID: twitterHandle,
          },
          {
            where: {
              full: playerNames[nextCounter],
            },
          });

        const strMsg = `pushed this guy: ${playerNames[nextCounter]} with this link: ${link.href}`;
        console.log(strMsg);
      }

      if (nextCounter < playerNames.length) {
        nextCounter += 1;
      } else {
        clearInterval(getTwitterLinks);
        console.log(twitterLinks);
      }
    });
  }, 3000);
});
