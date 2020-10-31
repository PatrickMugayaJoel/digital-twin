import React from 'react'
import './Template.scss';
import { Link } from "react-router-dom";

const Template = props => {

  return (
    <div>
        <div><h1>This is the wrapper</h1></div>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/login">Signin</Link>
            <Link to="/register">SignUp</Link>
          </ul>
        {props.children}
    </div>
  )
}

export default Template
