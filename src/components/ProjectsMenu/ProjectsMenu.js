import React from 'react';
import './ProjectsMenu.css';
import ProjectLink from './../ProjectLink/ProjectLink';
import PrimaryButton from './../PrimaryButton/PrimaryButton';

function ProjectsMenu() {
  return (
    <div className="projects_field">
      <div>
        <h2>PROJECTS</h2> <br/>
        <i>.52</i>
      </div>
      <div className="project_links">
        <ProjectLink />
      </div>
      <PrimaryButton />
    </div>
  );
}

export default ProjectsMenu;
