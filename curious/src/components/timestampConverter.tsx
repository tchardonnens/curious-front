import React from 'react';
import { format } from 'date-fns';

const TimestampConverter: React.FC<{ timestamp: string }> = ({ timestamp }) => {
  const dateObject = new Date(timestamp);
  const formattedDate = format(dateObject, "EEEE h:mm a");

  return <div>{formattedDate}</div>;
};

export default TimestampConverter;
