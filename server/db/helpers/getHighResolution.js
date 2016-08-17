const getHighResolution = function (array) {
  array[0] = array[0].map((player) => {
    if (player.image_url) {
      player.image_url = player.image_url.substring(155);
    }
    return player;
  });
  return array;
};

module.exports = { getHighResolution }
