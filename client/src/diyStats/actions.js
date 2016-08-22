export function calculateDifference (games, filteredGames, filterHistory) {
  const otherGames = games.filter(game => filteredGames.indexOf(game) < 0);
  let filteredTotal = 0;
  let otherTotal = 0;
  for (var i = 0; i < filteredGames.length; i++) {
    filteredTotal += filteredGames[i].FantasyPoints;
  }
  for (var j = 0; j < otherGames.length; j++) {
    otherTotal += otherGames[j].FantasyPoints;
  }
  const filteredAvg = filteredTotal / filteredGames.length;
  const otherAvg = otherTotal / otherGames.length;
  const percentPerformance = (filteredAvg / otherAvg * 100) - 100;
  return {
    type: 'CALCULATE_DIFFERENCE',
    payload: percentPerformance,
    filterHistory,
  }
};

export function filter(games, reqObj) {
  let filteredGames = games;
  const filterHistory = [];
  for (var key in reqObj) {
    if ((key === 'Day' || key === 'Started') && reqObj[key] !== '') {
      filterHistory.push(reqObj[key]);
      filteredGames = filteredGames.filter((game) => {
        const date = new Date(game.GameDate);
        var day = date.getUTCDay();
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
  const difference = calculateDifference(games, filteredGames, filterHistory);
  filteredGames.unshift(difference);
  request.data = [filteredGames];
  return {
    type: 'FILTER',
    payload: request,
  };
};
