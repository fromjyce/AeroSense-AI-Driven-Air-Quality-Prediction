import React from 'react';

const getAqiInfo = (aqi) => {
  if (aqi <= 50) return { color: "#00b050" };
  if (aqi <= 100) return { color: "#92d050" };
  if (aqi <= 200) return { color: "#ffff00" };
  if (aqi <= 300) return { color: "#ffc000" };
  if (aqi <= 400) return { color: "#f60000" };
  return { color: "#c00000" };
};

export default function CurrentAQIWidget({ date, aqi, pm2Concentration }) {
  const day = new Date(date).toLocaleDateString('en-US', { weekday: 'short' });
  const numericDay = new Date(date).getDate();
  const month = new Date(date).toLocaleDateString('en-US', { month: 'short' });
  const { color } = getAqiInfo(aqi);
  const currentDate = new Date().toISOString().split('T')[0];
  const widgetDate = new Date(date).toISOString().split('T')[0];
  const backgroundColor = widgetDate === currentDate ? "#F9F6EE" : "#ffffff";

  return (
    <div
      className="current-aqi-widget shadow-lg rounded-lg p-4 flex flex-col items-center justify-center text-center"
      style={{ backgroundColor: backgroundColor }}
    >
      <p className="font-bold current-date poppins">
        {day}, {month} {numericDay}
      </p>
      <p className="text-6xl font-bold mt-2 bebas_neue" style={{ color: color }}>
        {aqi}
      </p>
      <p className="current-concentration josefin_sans mt-2">PM2.5: {pm2Concentration}</p>
    </div>
  );
}
