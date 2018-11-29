import React, { Component } from 'react';
import Styles from './skills.css';
import SetRow from './SetRow';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { sets } = this.props;
    return (
      <div className={Styles.skills}>
        <h1>Technical Skills</h1>
        <div className={Styles.setRow}>
          {sets.map((set, index) => (
            <SetRow set={set} column={index} length={sets.length} />
          ))}
        </div>
      </div>
    );
  }
}

export default Skills;
