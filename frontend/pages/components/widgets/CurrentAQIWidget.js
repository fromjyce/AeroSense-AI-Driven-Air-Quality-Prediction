import React from 'react';

export default function CurrentAQIWidget({ date, aqi, pm2Concentration }) {
  const day = new Date(date).toLocaleDateString('en-US', { weekday: 'short' });
  const numericDay = new Date(date).getDate();
  const month = new Date(date).toLocaleDateString('en-US', { month: 'short' });

  return (
    <div className="current-aqi-widget bg-gray-100 shadow-lg rounded-lg p-4 flex flex-col items-center justify-center text-center">
      <p className="font-bold current-date poppins">
        {day}, {month} {numericDay} 
      </p>
      <p className="text-6xl font-bold mt-2 bebas_neue">{aqi}</p>
      <p className="current-concentration josefin_sans mt-2">PM2.5: {pm2Concentration}</p>
    </div>
  );
}
