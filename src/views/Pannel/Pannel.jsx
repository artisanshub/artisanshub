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
          <NavLink className="menu-options-base blue-background " to="/pannel/database">
            Operation Center
          </NavLink>
          <NavLink className="menu-options-base light-blue-background" to="/pannel/database">
            Executive Summary
          </NavLink>
          <NavLink className="menu-options-base light-blue-background " to="/pannel/database">
            Operations View
          </NavLink>
          <NavLink className="menu-options-base blue-background " to="/pannel/database">
            Incident Manager
          </NavLink>
          <NavLink className="menu-options-base light-blue-background " to="/pannel/database">
            Lastes Alerts
          </NavLink>
          <NavLink className="menu-options-base light-blue-background " to="/pannel/database">
            Schedule Downtime
          </NavLink>
          <NavLink className="menu-options-base blue-background" to="/pannel/database">
            Details
          </NavLink>
          <NavLink className="menu-options-base green-background " to="/pannel/database">
            SQLServer Dashbord
          </NavLink>
          <NavLink className="menu-options-base light-blue-background " to="/pannel/database">
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
