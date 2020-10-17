import React from 'react';
import './ProjectLink.scss';

const ProjectLink = props => {
  return (
    <li className="project_link_item">
      <h3>{props.name}</h3>
      <span>{props.city}, {props.state}</span>
    </li>
  );
}

export default ProjectLink;
