import React from 'react';
import './Pannel.scss';
import HeaderSection from '../../components/shared/Header/Header';
import { NavLink, Outlet } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const Pannel = () => {
  return (
    <>
      <HeaderSection />
      <div className="pannel-base-div">
        <div className="left-menu-section">
          <div className="pannel-search-div">
            <input className="pannel-search-box" />{' '}
            <SearchIcon className="search-icon" style={{ fontSize: 50 }} />
          </div>
          <NavLink className="menu-options-base blue-background " to="/pannel/sql-server-dashboard">
            Operation Center
          </NavLink>
          <NavLink
            className="menu-options-base light-blue-background"
            to="/pannel/sql-server-dashboard">
            Executive Summary
          </NavLink>
          <NavLink
            className="menu-options-base light-blue-background "
            to="/pannel/sql-server-dashboard">
            Operations View
          </NavLink>
          <NavLink className="menu-options-base blue-background " to="/pannel/sql-server-dashboard">
            Incident Manager
          </NavLink>
          <NavLink
            className="menu-options-base light-blue-background "
            to="/pannel/sql-server-dashboard">
            Lastes Alerts
          </NavLink>
          <NavLink
            className="menu-options-base light-blue-background "
            to="/pannel/sql-server-dashboard">
            Schedule Downtime
          </NavLink>
          <NavLink className="menu-options-base blue-background" to="/pannel/sql-server-dashboard">
            Details
          </NavLink>
          <NavLink
            className="menu-options-base green-background "
            to="/pannel/sql-server-dashboard">
            SQLServer Dashboard
          </NavLink>
          <NavLink className="menu-options-base blue-background " to="/pannel/db-2-dashboard">
            DB2 Dashboard
          </NavLink>

          <NavLink
            className="menu-options-base blue-background "
            to="/pannel/microsoft-iis-dashboard">
            IIS Dashboard
          </NavLink>
          <NavLink
            className="menu-options-base light-blue-background "
            to="/pannel/sql-server-dashboard">
            Application Summary
          </NavLink>
        </div>

        <div className="right-window-section">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Pannel;
