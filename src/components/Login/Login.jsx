import React from 'react'
import './Login.scss';
import { connect } from 'react-redux'
import { toggleLogin } from '../../actionCreators'
import Template from '../Template/Template'

const Login = props => {
  const input = {}
  const handleOnSubmit = e => {
    e.preventDefault()
    if (
      !(input.username.value.trim() === props.auth.username) ||
      !(input.password.value === props.auth.password)
    ) {return}

    // dispatches actions to add todo
    props.toggleLogin({
      username: input.username.value,
      password: input.password.value,
      isLoggedin: true
    })
    window.location.href = "/projects";

    // sets state back to empty string
    // input.username.value=''
    // input.password.value=''
  }

  return (
    <Template>
      <form onSubmit={handleOnSubmit}>
        <div><h3>LOGIN</h3></div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" className="form-control" id="username" placeholder="Username" ref={node => (input.username = node)} required/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" placeholder="password" ref={node => (input.password = node)} required/>
        </div>
        <button type="submit" className="btn btn-primary">LOGIN</button>
        <button type="reset" className="btn btn-danger float-right">Cancel</button>
      </form>
    </Template>
  )
}

// this normally is an object full of action creators
// By passing "addProject" to connect, the component receives it as a prop,
// and it will dispatch the action when it’s called.
const mapDispatchToProps = { toggleLogin }

const mapReduxStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(Login)
