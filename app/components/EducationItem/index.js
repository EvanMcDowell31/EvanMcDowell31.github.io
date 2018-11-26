import React, { Component } from 'react';
import Styles from './educationItem.css';

class EducationItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { item } = this.props;
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
        </div>
        <div>
          {location}
          &nbsp;
        </div>
        <div>({end})</div>
      </div>
    );
  }
}

export default EducationItem;
