"use client";

import { useState, useEffect } from "react";
import { FiRefreshCcw } from "react-icons/fi";

export default function CurrentWeather() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [locationError, setLocationError] = useState(null);

  const fetchWeatherData = async (lat, lon) => {
    const FIFTEEN_MIN_UPDATE_URL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,is_day,precipitation,wind_speed_10m&timezone=auto&past_days=3&forecast_days=3`;
    setLoading(true);
    try {
      const response = await fetch(FIFTEEN_MIN_UPDATE_URL);
      const data = await response.json();
      setWeatherData(data.current);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setLoading(false);
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          setLocationError("Error getting location");
          console.error("Error getting location:", error);
        }
      );
    } else {
      setLocationError("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    if (latitude && longitude) {
      fetchWeatherData(latitude, longitude);
    } else {
      getLocation();
    }
  }, [latitude, longitude]);

  if (loading) {
    return <p className="josefin_sans fetch-line font-bold">Fetching...</p>;
  }

  if (locationError) {
    return <p>{locationError}</p>;
  }

  const isDay = weatherData?.is_day === 1;
  const imageUrl = isDay ? "/day.png" : "/night.png";

  const date = new Date(weatherData?.time);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString(undefined, options);
  const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="flex items-center justify-between p-4 space-x-10">
      <div className="flex-shrink-0">
        <img src={imageUrl} alt={isDay ? "Morning" : "Night"} className="w-24 h-24" />
      </div>

      <div className="flex-grow text-center">
        <p className="font-bold bebas_neue display-big-temp">{weatherData?.temperature_2m}°C</p>
      </div>

      <div className="font-bold flex-grow text-left space-y-1 josefin_sans display-props">
        <p>Humidity: {weatherData?.relative_humidity_2m}%</p>
        <p>Precipitation: {weatherData?.precipitation} mm</p>
        <p>Wind Speed: {weatherData?.wind_speed_10m} km/h</p>
      </div>
      
      <div className="flex flex-row flex-shrink-0 text-right imd-date-box">
        <div className="font-bold flex flex-col">
          <p className="display-time-text josefin_sans">{formattedDate}</p>
          <p className="display-time-text josefin_sans">{formattedTime}</p>
          <button className="bg-blue ml-auto">Hi</button>
        </div>
        <div className="flex-shrink-0">
          <img src="/dept_1.png" alt="Weather Icon" className="w-24 h-24 dept-display-1" />
        </div>
      </div>
    </div>
  );
}
