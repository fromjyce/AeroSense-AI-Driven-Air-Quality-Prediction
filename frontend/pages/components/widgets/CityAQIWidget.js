import React from 'react';

function getAQIColor(aqi) {
  if (aqi <= 50) return "#00b050";
  if (aqi <= 100) return "#92d050";
  if (aqi <= 200) return "#ff8000";
  if (aqi <= 300) return "#ffc000";
  if (aqi <= 400) return "#f60000";
  return "#c00000";
}

export default function CityAQIWidget({ cityName, regionalName, aqiValue, imagePath }) {
  const aqiColor = getAQIColor(aqiValue);

  return (
    <div className="aqi-widget bg-white shadow-lg rounded-lg p-4 flex flex-col items-center city-aqi-widget">
      <h4 className="text-xl font-bold city-name poppins">{cityName}</h4>
      <p className="text-md regional-name poppins">{regionalName}</p>
      <img src={imagePath} alt={`${cityName} image`} className="object-cover my-2 city-icon" />
      <p className="text-lg bebas_neue city-aqi" style={{ color: aqiColor }}>
        {aqiValue}
      </p>
    </div>
  );
}
