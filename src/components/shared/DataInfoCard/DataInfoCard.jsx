import './DataInfoCard.scss';

import PropTypes from 'prop-types';
import React from 'react';

const DataInfoCard = ({ title, body }) => {
  return (
    <div className="data-info-card-base-div">
      <div className="data-info-card-header-div">{title}</div>
      <div className="data-info-card-body-div">{body}</div>
    </div>
  );
};

DataInfoCard.propTypes = {
  title: PropTypes.isRequired,
  body: PropTypes.isRequired
};

export default DataInfoCard;
