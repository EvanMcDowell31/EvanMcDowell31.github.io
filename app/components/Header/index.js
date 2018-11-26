import React, { Component } from 'react';
import Styles from './header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, label } = this.props;
    return (
      <div className={Styles.header}>
        <div className={Styles.headerContent}>
          <div className={Styles.headerText}>{name}</div>
          <div className={Styles.subtitle}>{label}</div>
        </div>
      </div>
    );
  }
}

export default Header;
