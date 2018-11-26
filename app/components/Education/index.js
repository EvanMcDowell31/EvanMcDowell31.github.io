import React, { Component } from 'react';
import Styles from './education.css';
import EducationItem from '../EducationItem';

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { educationHistory } = this.props;
    return (
      <div className={Styles.education}>
        <div className={Styles.title}>Education</div>
        {educationHistory.map((item, index) => (
          <EducationItem key={index} item={item} />
        ))}
      </div>
    );
  }
}

export default Education;
