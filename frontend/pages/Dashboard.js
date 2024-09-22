"use client";

import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const cityDataUrl = '/city_data.csv';
const stationDataUrl = '/stations_data.csv';

export default function Dashboard() {
  const [predictOption, setPredictOption] = useState('city');
  const [cities, setCities] = useState([]);
  const [stations, setStations] = useState({});
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [availableCities, setAvailableCities] = useState([]);
  const [selectOption, setSelectOption] = useState('date');
  const [selectedDate, setSelectedDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [isWithRange, setIsWithRange] = useState(false);
  const today = new Date();

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

  const handleTimeChange = (e) => {
    const timeValue = e.target.value + ":00";
    setSelectedTime(timeValue);
  };

  const handleEndTimeChange = (e) => {
    const timeValue = e.target.value + ":00";
    setEndTime(timeValue);
  };

  const isValidDate = (date) => {
    const dateFormat = /^\d{4}-\d{2}-\d{2}$/;
    const timeFormat = /^\d{2}:\d{2}:\d{2}$/;
    
    if (!date) return false;
  
    const dateString = date.toISOString().split('T')[0];
    const timeString = date.toTimeString().split(' ')[0];
    
    return dateFormat.test(dateString) && timeFormat.test(timeString);
  };

  const handleStartDateChange = (date) => {
    if (isValidDate(date)) {
      setSelectedDate(date);
    } else {
      alert("Selected date and time must be in the format yyyy-mm-dd hh:mm:ss.");
    }
  };
  
  const handleEndDateChange = (date) => {
    if (isValidDate(date) && date > selectedDate) {
      setEndDate(date);
    } else {
      alert("End datetime must be after the start datetime and in the correct format.");
    }
  };

  return (
    <div className="dashboard-section flex justify-between gap-8 p-8">
      <div id="predict" className="first-card w-[30%] bg-white p-4 shadow-lg flex flex-col items-start">
        <h3 className="text-3xl font-bold text-left oswald_card_title">Predict AQI</h3>
        <div className="input-boxes">
          <div className="flex flex-row gap-4">
            <div className='flex flex-col items-start'>
              <label htmlFor="predict-option" className="text-lg mt-2 text-left josefin_sans_dropdowns">Select an Option.</label>
              <select id="predict-option" onChange={handleOptionChange} className="mt-2 mb-5 p-2 border rounded josefin_sans uniform-width-aqi-dropdown">
                <option value="city">Predict by City</option>
                <option value="station">Predict by Station</option>
              </select>
            </div>
            <div className='flex flex-col items-start'>
              {predictOption === 'city' && (
                <>
                  <label htmlFor="city-select" className="mt-2 text-lg text-left josefin_sans_dropdowns">Select a City.</label>
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
                <select id="city-select" onChange={(e) => setSelectedCity(e.target.value)} className="mt-2 mb-5 p-2 border rounded josefin_sans uniform-width-aqi-dropdown">
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
        <div className="secondary-input-boxes">
          <div className='flex flex-row gap-12'>
            <div className='flex flex-col items-start'>
              <label htmlFor="select-option" className="mt-2 text-lg text-left josefin_sans_dropdowns">Select an Option.</label>
              <select id="select-option" value={selectOption} onChange={(e) => setSelectOption(e.target.value)} className="mt-2 mb-5 p-2 border rounded josefin_sans uniform-width-aqi-dropdown">
                <option value="date">Predict Date wise</option>
                <option value="hourly">Predict Hourly</option>
                <option value="datetime">Predict DataTime wise</option>
              </select>
            </div>
            <div className='flex flex-row gap-1 items-center mt-3'>
              <input 
                type="checkbox" 
                id="with-range" 
                onChange={(e) => setIsWithRange(e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="with-range" className="text-lg text-left josefin_sans_dropdowns">With Range</label>
            </div>
          </div>
        </div>
        <div className='actual-input-boxes'>
  {selectOption === 'date' && (
    <div className='flex flex-row gap-4'>
      <div className='flex flex-col items-start'>
        <label htmlFor="date-picker" className="mt-2 text-lg text-left josefin_sans_dropdowns">
          {isWithRange ? 'Select a Start Date.' : 'Select a Date.'}
        </label>
        <DatePicker
          id="date-picker"
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          className="mt-2 p-2 mb-5 border rounded josefin_sans uniform-width-aqi-dropdown"
          dateFormat="yyyy-MM-dd"
          minDate={today}
        />
      </div>
      {isWithRange && (
        <div className='flex flex-col items-start'>
          <label htmlFor="end-date-picker" className="mt-2 text-lg text-left josefin_sans_dropdowns">Select an End Date.</label>
          <DatePicker
            id="end-date-picker"
            selected={endDate}
            onChange={(date) => {
              if (date > selectedDate) {
                setEndDate(date);
              } else {
                alert("End date must be after the start date.");
              }
            }}
            className="mt-2 p-2 border rounded josefin_sans uniform-width-aqi-dropdown"
            dateFormat="yyyy-MM-dd"
            minDate={selectedDate ? new Date(selectedDate) : today}
          />
        </div>
      )}
    </div>
  )}

{selectOption === 'hourly' && (
  <div className='flex flex-row gap-4'>
    <div className='flex flex-col items-start'>
      <label htmlFor="time-picker" className="mt-2 text-lg text-left josefin_sans_dropdowns">
        {isWithRange ? 'Select a Start Hour.' : 'Select an Hour.'}
      </label>
      <select
        value={selectedTime.split(':')[0]}
        onChange={(e) => {
          const hourValue = e.target.value;
          const timeValue = `${hourValue}:00:00`;
          setSelectedTime(timeValue);
        }}
        className="mt-2 p-2 mb-5 border rounded josefin_sans uniform-width-aqi-dropdown"
      >
        {Array.from({ length: 24 }, (_, i) => (
          <option key={i} value={String(i).padStart(2, '0')}>{String(i).padStart(2, '0')}</option>
        ))}
      </select>
    </div>
    {isWithRange && (
      <div className='flex flex-col items-start'>
        <label htmlFor="end-time-picker" className="mt-2 text-lg text-left josefin_sans_dropdowns">Select an End Hour.</label>
        <select
          value={endTime.split(':')[0]}
          onChange={(e) => {
            const hourValue = e.target.value;
            const timeValue = `${hourValue}:00:00`;
            if (timeValue > selectedTime) {
              setEndTime(timeValue);
            } else {
              alert("End time must be after the start time.");
            }
          }}
          className="mt-2 p-2 border rounded josefin_sans uniform-width-aqi-dropdown"
        >
          {Array.from({ length: 24 }, (_, i) => (
            <option key={i} value={String(i).padStart(2, '0')}>{String(i).padStart(2, '0')}</option>
          ))}
        </select>
      </div>
    )}
  </div>
)}

{selectOption === 'datetime' && (
  <div className='flex flex-row gap-4'>
    <div className='flex flex-col items-start'>
      <label htmlFor="date-time-picker" className="mt-2 text-lg text-left josefin_sans_dropdowns">
        {isWithRange ? 'Select a Start Date & Time.' : 'Select a Date & Time.'}
      </label>
      <DatePicker
        selected={selectedDate}
        onChange={handleStartDateChange}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={60}
        dateFormat="yyyy-MM-dd HH:mm"
        className="mt-2 p-2 mb-5 border rounded josefin_sans uniform-width-aqi-dropdown"
        minDate={today}
      />
    </div>
    {isWithRange && (
      <div className='flex flex-col items-start'>
        <label htmlFor="end-date-time-picker" className="mt-2 text-lg text-left josefin_sans_dropdowns">Select an End Date & Time.</label>
        <DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={60}
          dateFormat="yyyy-MM-dd HH:mm"
          className="mt-2 p-2 border rounded josefin_sans uniform-width-aqi-dropdown"
          minDate={selectedDate ? new Date(selectedDate) : today}
        />
      </div>
    )}
  </div>
)}
</div>
      </div>

      <div className="second-card w-[70%] bg-white p-4 shadow-lg flex flex-col items-start justify-center">
        <h3 className="text-3xl font-bold text-left oswald_card_title">Current Weather Status</h3>
        <p className="text-lg mt-2 text-left josefin_sans">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
}
