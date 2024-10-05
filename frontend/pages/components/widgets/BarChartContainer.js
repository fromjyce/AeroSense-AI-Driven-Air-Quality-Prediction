"use client";

import { BarChart } from "@mui/x-charts/BarChart";
import { Poppins } from "next/font/google";
import { useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function BarChartContainer() {
  const colorPalette = ['#4caf50', '#ff9800', '#f44336'];
  const [tickPlacement, setTickPlacement] = useState('middle');
  const [tickLabelPlacement, setTickLabelPlacement] = useState('middle');
  const customFont = {
    fontFamily: poppins.style.fontFamily,
    fontSize: '14px',
    fontWeight: 500,
  };

  return (
    <div>
      <BarChart
        borderRadius={9}
        colors={colorPalette}
        xAxis={[
          {
            scaleType: 'band',
            categoryGapRatio: 0.3,
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
            label: 'Dates',
            labelStyle: customFont,
            labelPlacement: 'below',
            tickPlacement, tickLabelPlacement,
          },
        ]}
        series={[
          {
            id: 'page-views',
            label: 'Page views',
            data: [2234, 3872, 2998, 4125, 3357, 2789, 2998],
            stack: 'A',
          },
          {
            id: 'downloads',
            label: 'Downloads',
            data: [3098, 4215, 2384, 2101, 4752, 3593, 2384],
            stack: 'A',
          },
          {
            id: 'conversions',
            label: 'Conversions',
            data: [4051, 2275, 3129, 4693, 3904, 2038, 2275],
            stack: 'A',
          },
        ]}
        width={500}
        height={300}
        margin={{ left: 120, right: 20, top: 10, bottom: 50 }}
        grid={{ horizontal: false }}
        slotProps={{
          legend: {
            hidden: true,
          },
          xAxis: {
            tickStyle: customFont,
            labelPlacement: 'below',
          },
          yAxis: {
            tickStyle: customFont,
            labelStyle: customFont,
          },
          tooltip: {
            style: customFont,
          },
        }}
      />
    </div>
  );
}
