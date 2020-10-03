import React from 'react';
import './ProjectsMenu.scss';
import ProjectLink from './../ProjectLink/ProjectLink';
import PrimaryButton from './../PrimaryButton/PrimaryButton';

function ProjectsMenu() {
  return (
    <div className="projects_field grid-item">
      <div className="projects_heading">
        <h1>PROJECTS</h1>
        <span> &#9899; 52</span>
      </div>
      <ul className="project_links">
        <ProjectLink />
      </ul>
      <PrimaryButton />
    </div>
  );
}

export default ProjectsMenu;
