import React from 'react';

const StatisticTwitterListEntry = ({ name, createdAt, text }) => (
  <li className="statistics-tweet">
    <span className="message">{`${name}: ${text}`} </span>
    <span className="time">{`${createdAt}`}</span>
  </li>
);

export default StatisticTwitterListEntry;
