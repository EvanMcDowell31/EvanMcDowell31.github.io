import React from 'react';
import PropTypes from 'prop-types';
import Styles from './educationItem.css';

const EducationItem = props => {
  const { item } = props;
  const { level, summary, institution, location, end } = item;
  return (
    <div className={Styles.itemContainer}>
      <div className={Styles.bold}>
        {level}
        ,&nbsp;
      </div>
      {summary && (
        <div>
          {summary}
          ,&nbsp;
        </div>
      )}
      <div>
        {institution}
        ,&nbsp;
        {location}
        &nbsp; ({end})
      </div>
    </div>
  );
};

EducationItem.propTypes = {
  item: PropTypes.object,
};

export default EducationItem;
