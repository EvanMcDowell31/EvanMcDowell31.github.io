import React, { Component } from 'react';
import Styles from './skills.css';

class SetRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { set } = this.props;
    const { name, skills } = set;
    return (
      <div className={Styles.setCol}>
        <div className={Styles.title}>{name}</div>
        <ul>
          {skills.map(skill => (
            <li>&nbsp; {skill}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SetRow;
