"use client";

import React, { useEffect, useState } from 'react';
import CurrentAQIWidget from './widgets/CurrentAQIWidget';

export default function PastAQI() {
  const [aqiData, setAqiData] = useState([]);
  const [locationError, setLocationError] = useState('');

  useEffect(() => {
    const fetchAQIData = async (latitude, longitude) => {
      try {
        const AQI_FORECAST = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latitude}&longitude=${longitude}&hourly=us_aqi,pm2_5&timezone=auto&past_days=3&forecast_days=5`;
        const response = await fetch(AQI_FORECAST);
        const data = await response.json();
        const hourlyData = data.hourly;
        const dailyData = {};

        hourlyData.time.forEach((time, index) => {
          const date = new Date(time).toISOString().split('T')[0];
          if (!dailyData[date]) {
            dailyData[date] = {
              totalAQI: 0,
              totalPM2_5: 0,
              count: 0
            };
          }
          dailyData[date].totalAQI += hourlyData.us_aqi[index];
          dailyData[date].totalPM2_5 += hourlyData.pm2_5[index];
          dailyData[date].count++;
        });
        
        const pastAQIData = Object.keys(dailyData).map(date => ({
          date: date,
          aqi: dailyData[date].totalAQI / dailyData[date].count,
          pm2Concentration: dailyData[date].totalPM2_5 / dailyData[date].count
        }));

        setAqiData(pastAQIData);
      } catch (error) {
        console.error("Error fetching AQI data:", error);
      }
    };
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            fetchAQIData(latitude, longitude);
          },
          (error) => {
            setLocationError("Unable to retrieve your location. Please ensure location services are enabled.");
            console.error("Geolocation error:", error);
          }
        );
      } else {
        setLocationError("Geolocation is not supported by this browser.");
      }
    };

    getLocation();
  }, []);

  return (
    <div className="outer-container px-8">
      <div className="past-aqi-section p-8 shadow-lg">
        <h3 className="text-3xl font-bold mb-6 oswald_card_title text-center">Air Quality Index Forecast</h3>
        {locationError && <p className="text-red-500 text-center">{locationError}</p>}
        <div className="aqi-widget-container flex flex-wrap gap-5 mt-4 items-center justify-center">
          {aqiData.map((item, index) => (
            <CurrentAQIWidget 
              key={index}
              date={item.date}
              aqi={item.aqi.toFixed(1)}
              pm2Concentration={item.pm2Concentration.toFixed(1)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
