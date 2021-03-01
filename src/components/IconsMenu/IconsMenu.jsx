/*eslint no-unused-vars: 1*/
import React from 'react';
import './IconsMenu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrinTongueWink } from '@fortawesome/free-solid-svg-icons';
import logo from '../../logo.png';

function IconsMenu() {
  return (
    <div className="icons_menu grid-item">
      {/* <FontAwesomeIcon icon={faGrinTongueWink} /> */}
      <div className="logo home-icon">
        <img src={logo} alt="logo" width="50" height="50" />
      </div>
    </div>
  );
}

export default IconsMenu;
