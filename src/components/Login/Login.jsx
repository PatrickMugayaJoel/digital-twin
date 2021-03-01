/*eslint no-unused-vars: 0*/
/*eslint no-console: 1*/
import React, { useState } from 'react';
import axios from 'axios';
import errorHandler from '../../utils/apiError';
import './Login.scss';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { toggleLogin } from '../../actionCreators';
import Template from '../Template/Template';

const Login = (props) => {
  const input = {};
  const [invalidLogin, setInvalidLogin] = useState(false);

  const handleOnSubmit = async e => {
    e.preventDefault();
    await axios.post(`${process.env.REACT_APP_API_SERVER}/auth/login`,{
      username: input.username.value.trim(),
      password: input.password.value.trim()
    }).then(response => {
        toast.success('Logged In Successfully', 'success', 5000);
        localStorage.setItem("user_token", response.data.user.token);
        localStorage.setItem("username", response.data.user.username);
        props.toggleLogin({
          username: input.username.value,
          password: input.password.value,
          isLoggedin: true,
        });
        // props.history.push('/projects');
        window.location.href = '/projects';
    })
    .catch(err => {
      setInvalidLogin(true);
      errorHandler(err);
    });
  };

  return (
    <Template>
      <form className="loginform" onSubmit={handleOnSubmit}>
        <div>
          <h3>LOGIN</h3>
        </div>
        {invalidLogin && (
          <div className="login-error">
            <span className="error" style={{}}>
              Invalid Login credentials!
            </span>
          </div>
        )}
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Username"
            ref={(node) => (input.username = node)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="password"
            ref={(node) => (input.password = node)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          LOGIN
        </button>
        <button type="reset" className="btn btn-danger float-right">
          Cancel
        </button>
      </form>
    </Template>
  );
};

// this normally is an object full of action creators
// By passing "addProject" to connect, the component receives it as a prop,
// and it will dispatch the action when it’s called.
const mapDispatchToProps = { toggleLogin };

export default connect(null, mapDispatchToProps)(Login);
