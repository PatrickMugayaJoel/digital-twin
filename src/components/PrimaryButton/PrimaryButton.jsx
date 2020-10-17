import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './PrimaryButton.scss';
import AddProjectForm from "../AddProject/AddProject"

export default () => (
    <Popup trigger={<button className="add_project_btn">&#43; Add Project</button>} modal>
      {close => (<AddProjectForm close={close} />)}
    </Popup>
);
