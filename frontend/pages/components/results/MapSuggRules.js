import React, { useEffect, useState } from "react";
import AISuggestionsContainer from "../elements/results/AISuggestionsContainer";
import MapContainer from "../elements/results/MapContainer";
import Papa from "papaparse";


const CITY_CSV_PATH = "/dataset/city_data.csv";
const STATION_CSV_PATH = "/dataset/stations_data.csv";
export default function MapSuggRules({ city, stationId }) {
  const [markers, setMarkers] = useState([{ lat: 13.0843, lng: 80.2705, title: "Chennai" }]);

  useEffect(() => {
    if (city) {
      loadCityData(city);
    } else if (stationId) {
      loadStationData(stationId);
    }
  }, [city, stationId]);
  const loadCityData = (cityName) => {
    Papa.parse(CITY_CSV_PATH, {
      download: true,
      header: true,
      complete: (results) => {
        const cityData = results.data.find((row) => row.City === cityName);
        if (cityData) {
          setMarkers([
            {
              lat: parseFloat(cityData.Latitude),
              lng: parseFloat(cityData.Longitude),
              title: `${cityData.City}, ${cityData.State}`,
            },
          ]);
        }
      },
    });
  };

  const loadStationData = (stationId) => {
    Papa.parse(STATION_CSV_PATH, {
      download: true,
      header: true,
      complete: (results) => {
        const stationData = results.data.find((row) => row.StationId === stationId);
        if (stationData) {
          setMarkers([
            {
              lat: parseFloat(stationData.Latitude),
              lng: parseFloat(stationData.Longitude),
              title: `${stationData.StationName}, ${stationData.City}`,
            },
          ]);
        }
      },
    });
  };

  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 h-full">
      <div className="w-full md:w-[25%] flex flex-col">
        <MapContainer markers={markers} />
      </div>
      <div className="w-full md:w-[50%] flex flex-col">
        <AISuggestionsContainer />
      </div>
      <div className="w-full md:w-[25%] flex flex-col justify-center">
        <img
          src="/misc/cpcb_rules.png"
          alt="CBCP Rules"
          className="rounded-lg rules-image shadow-lg"
        />
      </div>
    </div>
  );
}
