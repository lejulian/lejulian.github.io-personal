import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Julian O'Leary's Personal Website"
      + 'Transitioning Nuclear Submarine Officer.'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">Hello</Link>
          </h2>
          <p>
            Transitioning Nuclear Submarine Officer overseeing Chemical and
            Radiological Controls onboard The USS San Francisco Moored Training Ship.
          </p>
        </div>
      </header>
      <p>
        {' '}
        Welcome to my website. Please feel free to read more{' '}
        <Link to="/about">about me</Link>, or you can check out my{' '}
        <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>,{' '}
        view <Link to="/stats">site statistics</Link>, or{' '}
        <Link to="/contact">contact</Link> me.
      </p>

    </article>
  </Main>
);

export default Index;
