import React from 'react'
import './Template.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSignInAlt, faUserPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const Template = props => {

  return (
    <div className="wrapper row">
          <div className="col-sm-3 sidebar">
            <Link className="sidebarlink" to="/"><FontAwesomeIcon icon={faHome} /> Home</Link>
            <Link className="sidebarlink" to="/register"><FontAwesomeIcon icon={faUserPlus} /> SignUp</Link>
            <Link className="sidebarlink" to="/login"><FontAwesomeIcon icon={faSignInAlt} /> Signin</Link>
            <Link className="sidebarlink" to="/logout"><FontAwesomeIcon icon={faSignOutAlt} /> Signout</Link>
          </div>
          <div className="col-sm-9">
            <div className="content">
              {props.children}
            </div>
            <footer className="page-footer font-small blue">
              <div className="footer-copyright text-center">© 2020 Copyright: Digital Twin</div>
            </footer>
          </div>
    </div>
  )
}

export default Template
