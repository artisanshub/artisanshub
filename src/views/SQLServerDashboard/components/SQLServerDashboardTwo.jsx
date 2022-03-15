import './SQLServerDashboardTwo.scss';

import React from 'react';
import Subheader from '../../../components/shared/Subheader/Subheader';
import LineGraphs from '../../../components/shared/LineGraph/LineGraphs';
import FlexibleWidthDataInfoCard from '../../../components/shared/FlexibleWidthDataInfoCard/FlexibleWidthDataInfoCard';
const SQLServerDashboardTwo = () => {
  return (
    <>
      <Subheader />

      <div className="sql-server-dashboard-base-div">
        <div className="sql-server-graph-div">
          <span>
            <LineGraphs />
          </span>

          <span>
            <LineGraphs />
          </span>

          <span>
            <LineGraphs />
          </span>

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
        <div className="sql-server-info-div">
          <span>
            <FlexibleWidthDataInfoCard />
          </span>
          <span>
            <FlexibleWidthDataInfoCard />
          </span>
          <span>
            <FlexibleWidthDataInfoCard />
          </span>
          <span>
            <FlexibleWidthDataInfoCard />
          </span>
          <span>
            <FlexibleWidthDataInfoCard />
          </span>
          <div className="sql-server-dashboard-sub-grid">
            <div className="sql-sub-grid-background-color-red">DATA INFO 1</div>
            <div className="sql-sub-grid-background-color-green">DATA INFO 2</div>
            <div className="  sql-sub-grid-background-color-green">DATA INFO 3</div>
            <div className=" sql-sub-grid-background-color-red">DATA INFO 4</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SQLServerDashboardTwo;
