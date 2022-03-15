import './IISDashboard.scss';

import React from 'react';
import Subheader from '../../components/shared/Subheader/Subheader';
import msIISLogo from '../../assets/msIISLogo.png';
import DataInfoCard from '../../components/shared/DataInfoCard/DataInfoCard';
import LineGraphs from '../../components/shared/LineGraph/LineGraphs';

const IISDashboard = () => {
  return (
    <div className="iis-dashboard-base-div">
      <Subheader />
      <div className="iis-dashboard-data-card-div">
        <img src={msIISLogo} />
        <DataInfoCard title="Connected Users" body="20 Users" />
        <DataInfoCard title="Service Uptime" body="3 Days" />
        <DataInfoCard title="Service Status" body="IIFSAdmin" />
      </div>
      <div className="iis-dashboard-graph-base-div">
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
    </div>
  );
};

export default IISDashboard;
