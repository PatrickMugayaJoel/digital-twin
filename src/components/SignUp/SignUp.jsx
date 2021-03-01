/*eslint no-unused-vars: 0*/
import React from 'react';
import './SignUp.scss';
import { connect } from 'react-redux';
import { register } from '../../actionCreators/auth';
import Template from '../Template/Template';
import validator from './validator';
import { Formik } from 'formik';

const SignUp = (props) => {
  const initialValues = {
    username: '',
    password: '',
    password2: '',
  };

  const submitForm = (values) => {
    props.register({
      username: values.username,
      password: values.password,
    }, props);
    // window.location.href = '/projects';
  };

  return (
    <Formik initialValues={initialValues} validate={validator} onSubmit={submitForm}>
      {(formik) => {
        return (
          <Template>
            <form className="signupform" onSubmit={formik.handleSubmit}>
              <div>
                <h3>SignUp</h3>
              </div>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={formik.errors.username && formik.touched.username ? 'input-error form-control' : 'form-control'}
                />
                {formik.errors.username && formik.touched.username && (
                  <span className="error">{formik.errors.username}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={formik.errors.password && formik.touched.password ? 'input-error form-control' : 'form-control'}
                />
                {formik.errors.password && formik.touched.password && (
                  <span className="error">{formik.errors.password}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="password">Confirm Password</label>
                <input
                  type="password"
                  id="password2"
                  placeholder="Confirm Password"
                  value={formik.values.password2}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.errors.password2 && formik.touched.password2 ? 'input-error form-control' : 'form-control'
                  }
                />
                {formik.errors.password2 && formik.touched.password2 && (
                  <span className="error">{formik.errors.password2}</span>
                )}
              </div>
              <button
                type="submit"
                className={formik.dirty && formik.isValid ? 'btn btn-primary' : 'btn btn-primary disabled-btn'}
              >
                Submit
              </button>
              <button type="buttom" onClick={formik.resetForm} className="btn btn-danger float-right">
                Cancel
              </button>
            </form>
          </Template>
        );
      }}
    </Formik>
  );
};

// this normally is an object full of action creators
// By passing "addProject" to connect, the component receives it as a prop,
// and it will dispatch the action when it’s called.
const mapDispatchToProps = { register };

const mapReduxStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapReduxStateToProps, mapDispatchToProps)(SignUp);
