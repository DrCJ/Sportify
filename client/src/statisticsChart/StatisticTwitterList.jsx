import React from 'react';
import moment from 'moment';
import StatisticTwitterListEntry from './StatisticTwitterListEntry.jsx';


const StatisticsTwitterList = ({ playerTweets }) => {

  if (playerTweets.data) {
    return (
      <div className="statistics-twitter-wrapper">
        <div className="statistics-twitter-profile">
          <img alt="player twitter profile img" src={playerTweets.data[0].user.profile_image_url} />
          <p className="statistics-player-name">{playerTweets.data[0].user.name}</p>
        </div>
        <ul className="statistics-twitter-list">
          { playerTweets.data.map((tweet) =>
            <StatisticTwitterListEntry
              name={tweet.user.name}
              createdAt={moment(tweet.created_at).fromNow()}
              text={tweet.text}
            />
          )}
        </ul>
      </div>
    );
  }

  return (
    <div>Gimma some tweets!</div>
  );
};

export default StatisticsTwitterList;
