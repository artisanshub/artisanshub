/* eslint-disable */
import React from 'react';
import './LineGraphs.scss';
import {
  XAxis,
  YAxis,
  VerticalGridLines,
  LineSeries,
  HorizontalGridLines,
  FlexibleXYPlot
  // DiscreteColorLegend
} from 'react-vis';

const LineGraphs = () => {
  const ITEMS = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <FlexibleXYPlot className="xy-plot-base-div">
      <VerticalGridLines />
      <HorizontalGridLines />
      {/* <DiscreteColorLegend items={['ItemOne', 'ItemTwo', 'ItemThree']} /> */}

      <XAxis title="X  Data" />
      <YAxis title="Y  Data" />
      <LineSeries
        color="blue"
        strokeWidth="4px"
        opacity={0.7}
        data={[
          { x: 1, y: 4 },
          { x: 5, y: 2 },
          { x: 15, y: 6 }
        ]}
      />
      <LineSeries
        color="green"
        opacity={0.7}
        data={[
          { x: 3, y: 2 },
          { x: 4, y: 4 },
          { x: 5, y: 1 }
        ]}
        strokeWidth="4px"
      />
      <LineSeries
        color="#E21717"
        opacity={0.7}
        data={[
          { x: 0, y: 8 },
          { x: 1, y: 1 },
          { x: 8, y: 6 }
        ]}
        strokeWidth="4px"
      />
    </FlexibleXYPlot>
  );
};

export default LineGraphs;
