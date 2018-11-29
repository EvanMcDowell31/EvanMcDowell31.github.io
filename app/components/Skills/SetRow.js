import React, { Component } from 'react';
import Styles from './skills.css';

class SetRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getColumnStyles = () => {
    const { column, length } = this.props;
    return column !== length - 1 ? Styles.setCol : Styles.lastCol;
  };

  render() {
    const { set } = this.props;
    const { name, skills } = set;
    return (
      <div className={this.getColumnStyles()}>
        <div className={Styles.colTitle}>{name}</div>
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
