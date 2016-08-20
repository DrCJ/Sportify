export function filterByDay(games, reqObj) {
  console.log('Day is:', reqObj.filters.Day);
  const data = games.filter((game) => {
    const date = new Date(game.GameDate);
    var day = date.getUTCDay();
    return day === Number(reqObj.filters.Day);
  });
  const request = {};
  request.data = [data];
  console.log(request);
  return {
    type: 'FILTER_BY_DAY',
    payload: request,
  };
};
