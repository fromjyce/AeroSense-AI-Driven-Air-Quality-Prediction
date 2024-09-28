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
        <div className="w-1/2 p-4">
          <InfoDisplay formattedDate={formattedDate} />
        </div>
        <div className="w-1/2 p-4">
          <div className="flex flex-col items-center justify-center gap-3">
            <h1 className="text-lg font-semibold text-center">Predicted AQI</h1>
            <div className="gauge-container">
              <GaugeContainer />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-4">
        <div className="w-1/2 p-4">
        <PieChartContainer />
        </div>
        <div className="w-1/2 p-4 border-gray-300">
          <RulesContainer />
        </div>
      </div>
    </div>
  );
}
