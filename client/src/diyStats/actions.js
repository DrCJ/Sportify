export function calculateDifference(filteredGames, otherGames) {
  let filteredTotal = 0;
  let otherTotal = 0;
  for (let i = 0; i < filteredGames.length; i++) {
    if (filteredGames[i].FantasyPoints) {
      filteredTotal += filteredGames[i].FantasyPoints;
    }
  }
  for (let j = 0; j < otherGames.length; j++) {
    if (otherGames[j].FantasyPoints) {
      otherTotal += otherGames[j].FantasyPoints;
    }
  }
  const filteredAvg = filteredTotal / filteredGames.length;
  const otherAvg = otherTotal / otherGames.length;
  const percentPerformance = (filteredAvg / otherAvg * 100) - 100;
  return {
    type: 'CALCULATE_DIFFERENCE',
    payload: percentPerformance
  };
}

function filteredOutArray(games, filteredGames) {
  const otherGames = games.filter(game => filteredGames.indexOf(game) < 0);
  return otherGames;
}

export function filter(games, reqObj) {
  let filteredGames = games;
  const filterHistory = [];
  for (var key in reqObj) {
    if ((key === 'Day' || key === 'Started') && reqObj[key] !== '') {
      filterHistory.push(reqObj[key]);
      filteredGames = filteredGames.filter((game) => {
        const date = new Date(game.GameDate);
        const day = date.getUTCDay();
        return day === Number(reqObj[key]);
      });
    } else if (reqObj[key] !== '') {
      filterHistory.push(reqObj[key]);
      filteredGames = filteredGames.filter((game) => {
        return game[key] === reqObj[key];
      });
    }
  }
  const request = {};
  var otherGames = filteredOutArray(games, filteredGames, filterHistory);
  console.log('OTHERGAMES', otherGames)
  request.data = [[filteredGames]];
  request.data[0].push(otherGames)
  return {
    type: 'FILTER',
    payload: request,
  };
};
