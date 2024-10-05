'use client';

import "../../../app/globals.css";
import dynamic from "next/dynamic";
const GaugeComponent = dynamic(() => import('react-gauge-component'), { ssr: false });

export default function GaugeContainer({ value }) {
  return (
    <div className="flex justify-end">
      <GaugeComponent
        value={value}
        type="radial"
        minValue={0}
        className="main-gauge josefin_sans flex justify-end"
        maxValue={400}
        style={{ top: '0', bottom: '0', left: '0', right: '0' }}
        labels={{
          tickLabels: {
            type: "inner",
            ticks: [
              { value: 0, valueConfig: { style: { fill: "#36454F" } }, lineConfig: { color: "#36454F" } },
              { value: 50, valueConfig: { style: { fill: "#36454F" } }, lineConfig: { color: "#36454F" } },
              { value: 100, valueConfig: { style: { fill: "#36454F" } }, lineConfig: { color: "#36454F" } },
              { value: 200, valueConfig: { style: { fill: "#36454F" } }, lineConfig: { color: "#36454F" } },
              { value: 300, valueConfig: { style: { fill: "#36454F" } }, lineConfig: { color: "#36454F" } },
              { value: 400, valueConfig: { style: { fill: "#36454F" } }, lineConfig: { color: "#36454F" } },
            ]
          },
          valueLabel: {
            formatTextValue: (value) => `${value}`,
            style: { fill: "#1B1212" }
          }
        }}
        arc={{
          colorArray: ['#00b050', '#92d050', '#ff8000', '#ffc000'],
          subArcs: [
            { limit: 50 },   
            { limit: 100 },  
            { limit: 200 },  
            { limit: 300 }, 
            { limit: 400 }
          ],
        }}
        pointer={{
          elastic: true,
          animationDelay: 0,
        }}
      />
    </div>
  );
}
