import React from 'react';

const PlayerTweets = ({ tweets }) => (
  <div className="modal-tweets">
    {tweets.map(tweet => {
      return (
        <li className="statistics-tweet">
          <span className="message">
            {tweet.text}
          </span>
        </li>
      );
    })}
  </div>
);

PlayerTweets.propTypes = {
  modal: React.PropTypes.array.isRequired,
};

export default PlayerTweets;
