import React from 'react';
import StatisticTwitterListEntry from './StatisticTwitterListEntry.jsx';


const StatisticsTwitterList = ({ playerTweets }) => {

  if (playerTweets.data) {
    return (

      <ul className="statistics-twitter-list">
        {console.log(playerTweets, 'playerTeets')}
        { playerTweets.data.map((tweet) =>
          <StatisticTwitterListEntry createdAt={tweet.created_At} text={tweet.text} />
        )}
      </ul>
    );
  }

  return (
    <div>Gimma some tweets!</div>
  );
}

export default StatisticsTwitterList;
