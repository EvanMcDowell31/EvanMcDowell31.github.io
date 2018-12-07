import React from 'react';
import PropTypes from 'prop-types';
import Styles from './contact.css';

const Contact = props => {
  const { name, email, phone } = props;
  return (
    <div className={Styles.contact}>
      <div className={Styles.name}>{name}</div>
      <div className={Styles.email}>{email}</div>
      <div className={Styles.phone}>{phone}</div>
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
};

export default Contact;
