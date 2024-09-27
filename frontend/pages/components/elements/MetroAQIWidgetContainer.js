"use client";

import React, { useEffect, useState } from 'react';
import CityAQIWidget from '../widgets/CityAQIWidget';

export default function MetroAQIWidgetContainer() {
  const [metroCitiesData, setMetroCitiesData] = useState([]);
  const cityDetails = [
    { name: "New Delhi", regionalName: "नई दिल्ली", imagePath: "/delhi.svg" },
    { name: "Ahmedabad", regionalName: "અમદાવાદ", imagePath: "/ahmedabad.svg" },
    { name: "Bengaluru", regionalName: "ಬೆಂಗಳೂರು", imagePath: "/bengaluru.jpg" },
    { name: "Mumbai", regionalName: "मुंबई", imagePath: "/mumbai.png" },
    { name: "Pune", regionalName: "पुणे", imagePath: "/pune.webp" },
    { name: "Chennai", regionalName: "சென்னை", imagePath: "/chennai.webp" },
    { name: "Hyderabad", regionalName: "హైదరాబాద్", imagePath: "/hyderabad.webp" },
    { name: "Kolkata", regionalName: "কলকাতা", imagePath: "/kolkata.jpg" },
  ];
  const fetchAQIData = async () => {
    try {
      const CITIES_AQI_URL = "https://air-quality-api.open-meteo.com/v1/air-quality?latitude=28.61,23.0225,12.9789,19.0761,18.5203,13.0825,17.3617,22.5675&longitude=77.23,72.5714,77.5917,72.8775,73.8567,80.275,78.4747,88.37&current=us_aqi&timezone=auto,auto,auto,auto,auto,auto,auto,auto";
      const response = await fetch(CITIES_AQI_URL);
      const data = await response.json();
      const updatedCityData = cityDetails.map((city, index) => ({
        ...city,
        aqi: data[index]?.current?.us_aqi || "N/A"
      }));

      setMetroCitiesData(updatedCityData);
    } catch (error) {
      console.error("Error fetching AQI data:", error);
    }
  };

  useEffect(() => {
    fetchAQIData();
  }, []);

  return (
    <div className="grid grid-cols-6 grid-rows-2 gap-x-2 gap-y-3">
      {metroCitiesData.map((city, index) => (
        <CityAQIWidget 
          key={index} 
          cityName={city.name} 
          regionalName={city.regionalName} 
          aqiValue={city.aqi} 
          imagePath={city.imagePath} 
        />
      ))}
    </div>
  );
}
