import './DB2Dashboard.scss';

import React from 'react';

import Subheader from '../../components/shared/Subheader/Subheader';
import LineGraphs from '../../components/shared/LineGraph/LineGraphs';

const DB2Dashboard = () => {
  return (
    <div className="db-2-dashboard-base-div">
      <Subheader />
      <div className="db-2-dashboard-body-div">
        <div className="bd-2-dashboard-graphs">
          {' '}
          <LineGraphs />{' '}
        </div>
        <div className="bd-2-dashboard-graphs">
          {' '}
          <LineGraphs />{' '}
        </div>
        <div className="bd-2-dashboard-graphs">
          {' '}
          <LineGraphs />{' '}
        </div>
        <div className="bd-2-dashboard-graphs">
          {' '}
          <LineGraphs />{' '}
        </div>
        <div className="bd-2-dashboard-graphs">
          {' '}
          <LineGraphs />{' '}
        </div>
        <div className="bd-2-dashboard-graphs">
          {' '}
          <LineGraphs />{' '}
        </div>
        <div className="bd-2-dashboard-graphs">
          {' '}
          <LineGraphs />{' '}
        </div>
        <div className="bd-2-dashboard-graphs">
          {' '}
          <LineGraphs />{' '}
        </div>
        <div className="bd-2-dashboard-graphs">
          {' '}
          <LineGraphs />{' '}
        </div>
      </div>
    </div>
  );
};

export default DB2Dashboard;
