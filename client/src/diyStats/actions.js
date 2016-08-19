export function filterByDay(prevRequest) {
  const request = prevRequest.payload;
  return {
    type: 'FILTER_BY_DAY',
    payload: request,
  };
};
