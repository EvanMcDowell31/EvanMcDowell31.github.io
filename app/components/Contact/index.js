import React, { Component } from 'react';
import Styles from './contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { email, phone } = this.props;
    return (
      <div className={Styles.contact}>
        <div className={Styles.contactItem}>
          {email}
          &nbsp;
          {phone}
        </div>
      </div>
    );
  }
}

export default Contact;
