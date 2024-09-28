'use client';

import "../../../app/globals.css";
import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function PieChartContainer() {
  const data = [
    { id: 'PM2.5', value: 81.48, label: 'PM2.5' },
    { id: 'PM10', value: 116.99, label: 'PM10' },
    { id: 'NO', value: 14.05, label: 'NO' },
    { id: 'NO2', value: 20.86, label: 'NO2' },
    { id: 'NOx', value: 27.43, label: 'NOx' },
    { id: 'NH3', value: 0.01, label: 'NH3' },
    { id: 'CO', value: 0.22, label: 'CO' },
    { id: 'SO2', value: 0.001, label: 'SO2' },
    { id: 'O3', value: 24.76, label: 'O3' },
    { id: 'Benzene', value: 0.71, label: 'Benzene' },
    { id: 'Toluene', value: 0.06, label: 'Toluene' },
    { id: 'Xylene', value: 0.03, label: 'Xylene' },
  ];

  return (
    <>
      <PieChart
        series={[
          {
            data: data,
          },
        ]}
        width={560}
        height={200}
        label={(d) => `${d.label}: ${d.value}`}
      />
    </>
  );
}
