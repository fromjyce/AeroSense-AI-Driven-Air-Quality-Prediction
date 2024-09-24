"use client";

import React, { useEffect, useState } from 'react';
import WeatherWidget from "./WeatherWidget";

export default function WidgetContainer() {
  const [weatherData, setWeatherData] = useState([]);
  
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const DAYS_WEATHER_URL = "https://api.open-meteo.com/v1/forecast?latitude=26.9000&longitude=75.8000&daily=temperature_2m_max,temperature_2m_min&timezone=auto&past_days=3&forecast_days=5";
        const response = await fetch(DAYS_WEATHER_URL);
        const data = await response.json();
        const currentDate = new Date().toISOString().split('T')[0];
        const filteredWeather = data.daily.time
          .map((date, index) => ({
            date,
            maxTemp: data.daily.temperature_2m_max[index],
            minTemp: data.daily.temperature_2m_min[index],
          }))
          .filter(item => item.date !== currentDate)
          .slice(0, 7);
        
        setWeatherData(filteredWeather);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="flex flex-wrap justify-between items-start gap-4 p-5">
      {weatherData.map((weather) => (
        <WeatherWidget
          key={weather.date}
          date={weather.date}
          maxTemp={weather.maxTemp}
          minTemp={weather.minTemp}
        />
      ))}
    </div>
  );
}
