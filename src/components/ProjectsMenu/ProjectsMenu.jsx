/*eslint no-unused-vars: 0*/
import React from 'react';
import { connect } from 'react-redux';
import './ProjectsMenu.scss';
import { setTarget } from '../../actionCreators';
import ProjectLink from '../ProjectLink/ProjectLink';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

class ProjectsMenu extends React.Component {
  toggleProject(project, setTarget) {
    setTarget({
      assetId: project.assetId,
      longitude: project.longitude,
      latitude: project.latitude,
      height: project.height,
    });
  }

  render() {
    const projects = this.props.projects;
    const toggleProject = this.toggleProject;
    return (
      <div className="projects_field grid-item">
        <div className="projects_heading">
          <h1>PROJECTS</h1>
          <span> &#9899; {projects.length}</span>
        </div>
        <ul className="project_links">
          {projects.map((project, index) => {
            return <ProjectLink key={index} {...project} onClick={() => toggleProject(project, this.props.setTarget)} />;
          })}
        </ul>
        <PrimaryButton /* onClick={() => renderForm(} */ />
      </div>
    );
  }
}

const mapDispatchToProps = { setTarget };

// ... computed data from redux state and optionally ownProps
const mapReduxStateToProps = (state /*, ownProps*/) => {
  // create an external selectors file that exports functions
  // that take state and return your required data.
  // eg. import {getProjects} then in here return {projects: getProjects(state)}
  return {
    projects: state.projects,
  };
};

// `connect` returns a new function that accepts the component to wrap.
// we call that function with the component to return the connected, wrapper component
export default connect(mapReduxStateToProps, mapDispatchToProps)(ProjectsMenu);
