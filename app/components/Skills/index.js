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
    const setCount = sets.length;
    return (
      <div className={Styles.skills}>
        <div className={Styles.title}>Technical Skills</div>
        <div className={Styles.setRow}>
          {sets.map(set => (
            <SetRow set={set} />
          ))}
        </div>
      </div>
    );
  }
}

export default Skills;
