import React from 'react';

const PlayerTweets = ({ tweets }) => (
  <div className="modal-tweets">
    {tweets.map(tweet => {
      return <p>{tweet.text}</p>
    })}
  </div>
);

PlayerTweets.propTypes = {
  modal: React.PropTypes.array.isRequired,
};

export default PlayerTweets;
