import React from 'react'
import './SignUp.scss';
import { connect } from 'react-redux'
import { register } from '../../actionCreators'
import Template from '../Template/Template'

const SignUp = props => {
  const input = {}
  const handleOnSubmit = e => {
    e.preventDefault()
    if (
      !(input.username.value.trim().length > 2) ||
      !(input.password2.value === input.password.value)
    ) {return}

    // dispatches actions to add todo
    props.register({
      username: input.username.value,
      password: input.password.value,
      isLoggedin: true
    })
    window.location.href = "/projects";

    // sets state back to empty string
    input.username.value=''
    input.password.value=''
    input.password2.value=''
  }

  return (
    <Template>
      <form onSubmit={handleOnSubmit}>
        <div><h3>SignUp</h3></div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" className="form-control" id="username" placeholder="Username" ref={node => (input.username = node)} required/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Password" ref={node => (input.password = node)} required/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Confirm Password</label>
          <input type="password" className="form-control" id="password2" placeholder="Confirm Password" ref={node => (input.password2 = node)} required/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <button type="reset" className="btn btn-danger float-right">Cancel</button>
      </form>
    </Template>
  )
}

// this normally is an object full of action creators
// By passing "addProject" to connect, the component receives it as a prop,
// and it will dispatch the action when it’s called.
const mapDispatchToProps = { register }

const mapReduxStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(SignUp)
