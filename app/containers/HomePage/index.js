/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { resume } from '../../resume/resume';
import Header from '../../components/Header';
import Profile from '../../components/Profile';
import Line from '../../components/Line';
import Education from '../../components/Education';
import Skills from '../../components/Skills';
import Experience from '../../components/Experience';
import Contact from '../../components/Contact';
import Social from '../../components/Social';
import Styles from './homePage.css';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    const {
      name,
      info,
      education,
      skills,
      contact,
      employment,
      social,
    } = resume;
    const { email, phone } = contact;
    return (
      <div className={Styles.page}>
        <Header name={name} label={info.label} />
        <Line />
        <Profile brief={info.brief} />
        <Education educationHistory={education.history} />
        <Skills sets={skills.sets} />
        <Experience experience={employment.history} />
        <Line />
        <Contact name={name} email={email} phone={phone} />
        <Social social={social} />
      </div>
    );
  }
}
