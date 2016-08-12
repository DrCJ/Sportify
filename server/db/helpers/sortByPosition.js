const sortByPosition = function (array) {
  const output = [];
  const qb = [];
  const wr = [];
  const rb = [];
  const te = [];
  const etc = [];

  for (let i = 0; i < array[0].length; i++) {
    switch (array[0][i].Position) {
      case 'QB':
        qb.push(array[0][i]);
        break;
      case 'WR':
        wr.push(array[0][i]);
        break;
      case 'RB':
        rb.push(array[0][i]);
        break;
      case 'TE':
        te.push(array[0][i]);
        break;
      default:
        etc.push(array[0][i]);
    }
  }
  output[0] = qb.concat(wr, rb, te, etc);
  return output;
};

module.exports = { sortByPosition }
