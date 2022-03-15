import './DashboardTwo.scss';

import React from 'react';
import Subheader from '../../../components/shared/Subheader/Subheader';
import LineGraphs from '../../../components/shared/LineGraph/LineGraphs';
import '../IISDashboard.scss';
const DashBoardTwo = () => {
  return (
    <div className="iis-dashboard-base-div-2">
      <Subheader />

      <div className="iis-dashboard-graph-base-div-2">
        <span>
          <LineGraphs />
        </span>

        <span>
          <LineGraphs />
        </span>

        <span>
          <LineGraphs />
        </span>
      </div>
    </div>
  );
};

export default DashBoardTwo;
