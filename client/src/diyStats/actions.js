export function filterByDay(prevRequest, inputDay) {
  const data = prevRequest.payload.data[0].filter((game) => {
    const date = new Date(game.GameDate);
    var day = date.getUTCDay();
    return day === Number(inputDay);
  });
  const request = {};
  request.data = [data];
  console.log(request);
  return {
    type: 'FILTER_BY_DAY',
    payload: request,
  };
};
