import React from 'react';
import './ProjectLink.scss';
import ReactTooltip from 'react-tooltip';

const ProjectLink = props => {
  return (
    <li className="project_link_item"
    data-tip={props.name}
    data-for={String(props.id)} 
    onClick={props.onClick}
    >
      <h4>{props.name}</h4>
      <span>{props.city}, {props.state}</span>
      <ReactTooltip id={String(props.id)} />
    </li>
  );
}

export default ProjectLink;
