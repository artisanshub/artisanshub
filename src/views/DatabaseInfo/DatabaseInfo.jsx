import React from 'react';
import LineGraphs from '../../components/shared/LineGraph/LineGraphs';
import './DatabaseInfo.scss';
import sqlServerLogo from '../../assets/sqlServer.png';

import AutorenewIcon from '@mui/icons-material/Autorenew';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const DatabaseInfo = () => {
  return (
    <>
      <div className="database-info-search-div">
        <p>Select APP : </p>
        <span>
          <input />
        </span>
        <p>Select Host : </p>
        <span>
          <input />
        </span>
        <AutorenewIcon
          className="database-page-icons"
          style={{
            marginRight: '20px'
          }}
        />
        <AccessTimeIcon className="database-page-icons" />
      </div>
      <div className="database-info-base-div">
        <div className="database-info-data database-page-info-div" style={{ border: 'none' }}>
          <span className="database-info-logo">
            <img src={sqlServerLogo} className="sql-server-logo" />
          </span>
          <span className="database-info-actual-data">
            <div className="database-info-header">Connected Users</div>
            <div className="database-info-body">20 Users</div>
          </span>
          <span className="database-info-actual-data">
            {' '}
            <div className="database-info-header">Connection Time</div>
            <div className="database-info-body">0.02 secs</div>
          </span>
          <span className="database-info-actual-data">
            {' '}
            <div className="database-info-header">Backup Age</div>
            <div className="database-info-body">23 Hours</div>
          </span>
        </div>
        <div className="database-info-data">
          {' '}
          <LineGraphs />{' '}
        </div>
        <div className="database-info-data">
          {' '}
          <LineGraphs />{' '}
        </div>
        <div className="database-info-data">
          {' '}
          <LineGraphs />{' '}
        </div>
        <div className="database-info-data">
          {' '}
          <LineGraphs />{' '}
        </div>
        <div className="database-info-data">
          {' '}
          <LineGraphs />{' '}
        </div>
        <div className="database-info-data">
          {' '}
          <LineGraphs />{' '}
        </div>
        <div className="database-info-data">
          {' '}
          <LineGraphs />{' '}
        </div>
        <div className="database-info-data">
          {' '}
          <LineGraphs />{' '}
        </div>
      </div>
    </>
  );
};

export default DatabaseInfo;
