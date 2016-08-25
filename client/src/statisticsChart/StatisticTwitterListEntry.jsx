import React from 'react';

const StatisticTwitterListEntry = ({ createdAt, text }) => (
  <li> `${createdAt} ${text}`</li>
);

export default StatisticTwitterListEntry;
