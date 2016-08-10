const { consumerKey, consumerSecret, callbackURL } = require('../../config/credentials');
const YahooFantasy = require('yahoo-fantasy');
const yahoo = new YahooFantasy(consumerKey, consumerSecret);
const { db, Player } = require('../../db/modelConnect');
const yahooIDs = require('../../db/sampleData/yahooPlayerIDs.json');

//2015 348
// const playerKeys = ['348.p.7200'];

const allKeys = yahooIDs.map(id => `348.p.${id}`);
// const playerKeys = all

const interval = 1;
var index = 0;

const fetchPlayers = () => {
  if (!allKeys[index]) {
    console.log('all DONE!');
    return;
  }

  var playerKeys = allKeys.slice(index, index + interval);
  console.log('playerKeys', playerKeys);

  yahoo.players.fetch(playerKeys, (err, data) => {
    if (err) {
      console.log('fetch error at index:', index, err);
      index += interval;
      fetchPlayers();
      return;
    }

    data = data.filter(val => val !== undefined);

    var mappedData = data.map(p => {
      return {
        "player_key": p.player_key,
        "player_id": p.player_id,
        "full": p.name.full,
        "first": p.name.first,
        "last": p.name.last,
        "status": p.status,
        "editorial_player_key": p.editorial_player_key,
        "editorial_team_key": p.editorial_team_key,
        "editorial_team_full_name": p.editorial_team_full_name,
        "editorial_team_abbr": p.editorial_team_abbr,
        "bye_weeks": p.bye_weeks.week,
        "image_url": p.image_url,
        "is_undroppable": p.is_undroppable,
        "position_type": p.position_type,
        "eligible_positions": p.eligible_positions[0],
        "has_player_notes": p.has_player_notes,
      }
    })

    console.log('fetched:', playerKeys, 'at index:', index);

    mappedData.forEach(({
      player_key,
      player_id,
      full,
      first,
      last,
      status,
      editorial_player_key,
      editorial_team_key,
      editorial_team_full_name,
      editorial_team_abbr,
      image_url,
      is_undroppable,
      position_type,
      eligible_positions,
      has_player_notes,
    }) => {
      Player
        .findOrCreate({
          where: { id: player_id },
          defaults: {
            player_key,
            player_id,
            full,
            first,
            last,
            status,
            editorial_player_key,
            editorial_team_key,
            editorial_team_full_name,
            editorial_team_abbr,
            image_url,
            is_undroppable,
            position_type,
            eligible_positions,
            has_player_notes,
          },
        })
        .then(val => {
          // console.log('done:', val);
          index += interval;
          console.log('do next fetch at:', index);
          // setTimeout(fetchPlayers, 2000);
          fetchPlayers();
        })
        .catch(err => {
          console.log('Err:', err);
        });
    });
  });
};

fetchPlayers();
