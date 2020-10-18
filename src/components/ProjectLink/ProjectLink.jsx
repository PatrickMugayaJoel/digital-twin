import React from 'react';
import './ProjectLink.scss';
import ReactTooltip from 'react-tooltip';

const ProjectLink = props => {
  return (
    <li className="project_link_item"
    data-tip={props.name}
    data-for={String(props.id)} 
    >
      <h3>{props.name}</h3>
      <span>{props.city}, {props.state}</span>
      <ReactTooltip id={String(props.id)} />
    </li>
  );
}

export default ProjectLink;
