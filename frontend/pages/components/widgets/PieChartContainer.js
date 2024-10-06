import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import PropTypes from 'prop-types';
import { useDrawingArea } from '@mui/x-charts/hooks';

const data = [
  { label: 'India', value: 50000 },
  { label: 'USA', value: 35000 },
  { label: 'Brazil', value: 10000 },
  { label: 'Other', value: 5000 },
];

const colors = [
  'hsl(220, 20%, 65%)',
  'hsl(220, 20%, 42%)',
  'hsl(220, 20%, 35%)',
  'hsl(220, 20%, 25%)',
];

function PieCenterLabel({ primaryText, secondaryText }) {
  const { width, height, left, top } = useDrawingArea();
  const primaryY = top + height / 2 - 10;
  const secondaryY = primaryY + 24;

  return (
    <>
      <text
        style={{ fontSize: '16px', fontWeight: 'bold', fill: '#666' }}
        x={left + width / 2}
        y={primaryY}
        textAnchor="middle"
      >
        {primaryText}
      </text>
      <text
        style={{ fontSize: '12px', fill: '#999' }}
        x={left + width / 2}
        y={secondaryY}
        textAnchor="middle"
      >
        {secondaryText}
      </text>
    </>
  );
}

PieCenterLabel.propTypes = {
  primaryText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string.isRequired,
};

export default function PieChartContainer() {
  return (
    <div className='piechart-con questrial'>
      <PieChart
        colors={colors}
        margin={{
          left: 70,
          right: 0,
          top: 0,
          bottom: 80,
        }}
        series={[
          {
            data,
            innerRadius: 74,
            outerRadius: 100,
            highlightScope: { faded: 'global', highlighted: 'item' },
            paddingAngle: 1,
            animation: { duration: 1000, easing: 'ease-in-out' },
          },
        ]}
        height={300}
        width={300}
        slotProps={{
            legend: { hidden: true },
          }}
          className='main-piechart'
      >
        <PieCenterLabel primaryText="98.5K" secondaryText="Total" />
      </PieChart>
    </div>
  );
}
