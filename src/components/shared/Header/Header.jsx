import React from 'react';
import './Header.scss';
import logo from '../../../assets/logo.png';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
  return (
    <div className="pannel-base-header-div">
      <img src={logo} className="header-logo-image" />
      <p style={{ marginLeft: '20px' }}>IT Monitoring Platform</p>
      <span />
      <div className="user-name-div">
        <span>
          <span className="header-user-name">Anand P</span>
        </span>
        <ArrowDropDownIcon />

        <NotificationsIcon className="header-notification-bell-icon" />
        <button className="header-logout-button">Logout</button>
      </div>
    </div>
  );
};

export default Header;
