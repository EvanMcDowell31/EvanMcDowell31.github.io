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

import React, { Fragment } from 'react';
import { resume } from '../../resume/resume';
import Header from '../../components/Header';
import Line from '../../components/Line';
import Education from '../../components/Education';
import Skills from '../../components/Skills';
import Contact from '../../components/Contact';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    const { name, info, education, skills, contact } = resume;
    const { email, phone } = contact;
    return (
      <Fragment>
        <Header name={name} label={info.label} />
        <Line />
        <Education educationHistory={education.history} />
        <Skills sets={skills.sets} />
        <Line />
        <Contact email={email} phone={phone} />
      </Fragment>
    );
  }
}
