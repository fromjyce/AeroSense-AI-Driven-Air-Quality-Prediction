'use client';

import "../../app/globals.css";
import GaugeContainer from "./elements/GaugeContainer";
import PieChartContainer from "./elements/PieChartContainer";
import RulesContainer from "./elements/RulesContainer";
import InfoDisplay from "./elements/InfoDisplay";

export default function InformationBoard() {
  const currentDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center p-4 border-gray-300">
        <div className="w-1/2 p-4 first-half-info">
          <InfoDisplay formattedDate={formattedDate} />
        </div>
        <div className="w-1/2 p-4 second-half-gauge">
          <div className="flex flex-col items-center justify-center gap-3 p-2 gauge-main-container border-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-semibold text-center aqi-predict-tile text-white">Predicted AQI</h1>
            <div className="gauge-container ml-9">
              <GaugeContainer />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-9 justify-center items-center p-1">
        <div className="w-1/2 p-1 pie-chart-main-container">
        <PieChartContainer />
        </div>
        <div className="spacer-w"></div>
        <div className="w-1/2 p-1 border-gray-300">
          <RulesContainer />
        </div>
      </div>
    </div>
  );
}
