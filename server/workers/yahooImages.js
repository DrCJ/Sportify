const Crawler = require('crawler');
const url = require('url');
const db = require('../db/modelConnect');
const express = require('express');
const app = express();
var yahooID = require('../db/sampleData/yahooPlayerIDs.js');

app.listen(40, () => {
  console.log('currently listening to port 80');
});

for (var i = 1000; i < yahooID.length; i++) {
  trick(i);
}

function trick(n) {
  return function(){
    db.Player.findOne({
      where: {
        player_id: `${yahooID[n]}`,
      },
    })
    .then((player) => {

      if (player) {
        var c = new Crawler({
          maxConnections : 10,
          // This will be called for each crawled page
          callback : function (error, result, $) {
            let image = $('.photo');
            if (image[0]) {
              let imageStyle = image[0].attribs.style;
              let imageUrl = imageStyle.substring(22, imageStyle.length - 3);
              player.updateAttributes(
                {
                  image_url: imageUrl,
                }
              );
            }
          },
        });
        c.queue(`http://sports.yahoo.com/nfl/players/${yahooID[n]}/`);
      }
    });
  }();
}
