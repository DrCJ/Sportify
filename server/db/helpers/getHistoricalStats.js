const yahooPlayerIDs = require('../sampleData/yahooPlayerIDs');

//make one api call at a time

const yahooPlayerFetch = (yahooID, cb) => {
  
};

const initFetchAllPlayers = () => {
  const maxIndex = 5;
  var i = 0;

  const goFetch = () => {
    const yahooID = yahooPlayerIDs[i];
    if (i > maxIndex) {
      console.log('maxIndex set at:', maxIndex, 'index at:', i);
    } else if (yahooID) {
      console.log('prepare to fetch yahooPlayerID:', yahooID, 'at index:', i);
      yahooPlayerFetch(yahooID, () => {
        goFetch();
      });
    } else {
      console.log('yahooID at index:', i, 'does not exist, or end of queue.  Ciao baby');
    }
    i++;
  };
  goFetch();
};

initFetchAllPlayers();
