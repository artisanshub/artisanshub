import React from 'react';

import AutorenewIcon from '@mui/icons-material/Autorenew';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import './Subheader.scss';

const Subheader = () => {
  return (
    <div className="subheader-component-search-div">
      <p>Select APP : </p>
      <span>
        <input />
      </span>
      <p>Select Host : </p>
      <span>
        <input />
      </span>
      <AutorenewIcon
        className="subheader-component-icons"
        style={{
          marginRight: '20px'
        }}
      />
      <AccessTimeIcon className="subheader-component-icons" />
    </div>
  );
};

export default Subheader;
