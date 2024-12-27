import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Projects = () => (
  <Main title="Projects" description="Learn about Julian O'Leary's projects.">
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>
            <Link to="/projects">Projects</Link>
          </h2>
        </div>
      </header>
      <header>
        <div className="title">
          <h1>Project Page Under Construction</h1>
        </div>
      </header>
    </article>
  </Main>
);

export default Projects;
