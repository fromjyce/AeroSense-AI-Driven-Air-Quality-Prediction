"use client";

import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

const cityDataUrl = '/city_data.csv';
const stationDataUrl = '/stations_data.csv';

export default function Dashboard() {
  const [predictOption, setPredictOption] = useState('city');
  const [cities, setCities] = useState([]);
  const [stations, setStations] = useState({});
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [availableCities, setAvailableCities] = useState([]);

  useEffect(() => {
    Papa.parse(cityDataUrl, {
      download: true,
      header: true,
      complete: (results) => {
        const cityList = results.data.map(({ City, State }) => `${City}, ${State}`);
        setCities(cityList);
      },
    });

    Papa.parse(stationDataUrl, {
      download: true,
      header: true,
      complete: (results) => {
        const stationList = results.data.reduce((acc, { State, City, StationName, Status }) => {
          if (!acc[State]) acc[State] = {};
          if (!acc[State][City]) acc[State][City] = [];
          acc[State][City].push({ name: StationName, status: Status });
          return acc;
        }, {});
        setStations(stationList);
      },
    });
  }, []);

  const handleOptionChange = (e) => {
    setPredictOption(e.target.value);
    setSelectedState('');
    setSelectedCity('');
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setAvailableCities(Object.keys(stations[e.target.value] || {}));
  };

  return (
    <div className="dashboard-section flex justify-between gap-8 p-8">
      <div className="first-card w-[30%] bg-white p-4 shadow-lg flex flex-col items-start">
        <h3 className="text-xl font-bold text-left oswald">Predict AQI</h3>
        <div>
          <div className="flex flex-row gap-4">
            <div className='flex flex-col items-start'>
              <label htmlFor="predict-option" className="text-lg mt-2 text-left josefin_sans_dropdowns">Select an option.</label>
              <select id="predict-option" onChange={handleOptionChange} className="mt-2 mb-5 p-2 border rounded josefin_sans uniform-width-aqi-dropdown">
                <option value="city">Predict by City</option>
                <option value="station">Predict by Station</option>
              </select>
            </div>
            <div className='flex flex-col items-start'>
              {predictOption === 'city' && (
                <>
                  <label htmlFor="city-select" className="mt-2 text-lg text-left josefin_sans_dropdowns">Select A City.</label>
                  <select id="city-select" className="mt-2 p-2 border rounded josefin_sans uniform-width-aqi-dropdown">
                    <option value="">--Select a city--</option>
                    {cities.map((city, index) => (
                      <option key={index} value={city}>{city}</option>
                    ))}
                  </select>
                </>
              )}
            </div>
            <div className='flex flex-col items-start'>
              {predictOption === 'station' && (
                <>
                  <label htmlFor="state-select" className="mt-2 text-lg text-left josefin_sans_dropdowns">Select a State.</label>
                  <select id="state-select" onChange={handleStateChange} className="mt-2 p-2 border rounded josefin_sans uniform-width-aqi-dropdown">
                    <option value="">--Select a state--</option>
                    {Object.keys(stations).map((state, index) => (
                      <option key={index} value={state}>{state}</option>
                    ))}
                  </select>
                </>
              )}
            </div>
          </div>
          {predictOption === 'station' && selectedState && (
            <div className="flex flex-row">
              <div className="flex flex-col items-start mr-8">
                <label htmlFor="city-select" className="mt-2 text-lg text-left josefin_sans_dropdowns">Select A City.</label>
                <select id="city-select" onChange={(e) => setSelectedCity(e.target.value)} className="mt-2 p-2 border rounded josefin_sans uniform-width-aqi-dropdown">
                  <option value="">--Select a city--</option>
                  {availableCities.map((city, index) => (
                    <option key={index} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              {selectedCity && (
                <div className="flex flex-col items-start">
                  <label htmlFor="station-select" className="mt-2 text-lg text-left josefin_sans_dropdowns">Select a Station.</label>
                  <select id="station-select" className="mt-2 p-2 border rounded josefin_sans uniform-width-aqi-dropdown">
                    <option value="">--Select a station--</option>
                    {stations[selectedState][selectedCity].map((station, index) => (
                      <option key={index} value={station.name} disabled={station.status !== "Active"}>
                        {station.name} {station.status !== "Active" ? '(Inactive)' : ''}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="second-card w-[70%] bg-white p-4 shadow-lg flex flex-col items-start justify-center">
        <h3 className="text-xl font-bold text-left oswald">Current Weather Status</h3>
        <p className="text-lg mt-2 text-left josefin_sans">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry...
        </p>
      </div>
    </div>
  );
}
