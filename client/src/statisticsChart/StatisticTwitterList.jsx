import React from 'react';
import StatisticTwitterListEntry from './StatisticTwitterListEntry.jsx';


const StatisticsTwitterList = ({ playerTweets }) => {

  if (playerTweets.data) {
    return (
      <div>
        <div>
          <img alt="player twitter profile img" src={playerTweets.data[0].user.profile_image_url} />
        </div>
        <ul className="statistics-twitter-list">
          { playerTweets.data.map((tweet) =>
            <StatisticTwitterListEntry createdAt={tweet.created_At} text={tweet.text} />
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
