import React from 'react';
import './SidePanel.scss';
import IconsMenu from '../IconsMenu/IconsMenu';
import ProjectsMenu from '../ProjectsMenu/ProjectsMenu';

function SidePanel() {
  return (
    <div className="side_panel">
      <IconsMenu />
      <ProjectsMenu />
    </div>
  );
}

export default SidePanel;
