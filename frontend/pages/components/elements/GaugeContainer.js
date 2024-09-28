'use client';

import "../../../app/globals.css";
import dynamic from "next/dynamic";
const GaugeComponent = dynamic(() => import('react-gauge-component'), { ssr: false });

export default function GaugeContainer() {
  return (
    <>
      <GaugeComponent
        value={50.5}
        type="radial"
        minValue={0}
        maxValue={400}
        labels={{
          tickLabels: {
            type: "inner",
            ticks: [
              { value: 0 },
              { value: 50 },
              { value: 100 },
              { value: 200 },
              { value: 300 },
              { value: 400 }
            ]
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
          padding: 0.02,
          width: 0.3
        }}
        pointer={{
          elastic: true,
          animationDelay: 0,
        }}
        className="gauge-text"
      />
    </>
  );
}
