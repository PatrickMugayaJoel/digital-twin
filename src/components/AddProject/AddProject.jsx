/*eslint no-unused-vars: 0*/
import React from 'react';
import './AddProject.scss';
import { connect } from 'react-redux';
import { addProject } from '../../actionCreators';
import validator from './validator';
import { Formik } from 'formik';

const AddProject = (props) => {
  const initialValues = {
    name: '',
    city: '',
    state: '',
  };

  const submitForm = (values) => {
    // dispatches actions to add todo
    props.addProject(values);
    props.close();
  };

  return (
    <Formik initialValues={initialValues} validate={validator} onSubmit={submitForm}>
      {(formik) => {
        return (
          <div>
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Project Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Project Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={formik.errors.name && formik.touched.name ? 'input-error form-control' : 'form-control'}
                />
                {formik.errors.name && formik.touched.name ? (
                  <span className="error">{formik.errors.name}</span>
                ) : (
                  <small id="nameHelp" className="form-text text-muted">
                    This will be the title displayed on the projects list.
                  </small>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  placeholder="City"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={formik.errors.city && formik.touched.city ? 'input-error form-control' : 'form-control'}
                />
                {formik.errors.city && formik.touched.city && <span className="error">{formik.errors.city}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  id="state"
                  placeholder="State"
                  value={formik.values.state}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={formik.errors.state && formik.touched.state ? 'input-error form-control' : 'form-control'}
                />
                {formik.errors.state && formik.touched.state && <span className="error">{formik.errors.state}</span>}
              </div>
              <button
                type="submit"
                className={formik.dirty && formik.isValid ? 'btn btn-primary' : 'btn btn-primary disabled-btn'}
              >
                Submit
              </button>
              <button className="btn btn-danger float-right" onClick={props.close}>
                Cancel
              </button>
            </form>
            <button className="close-modal" onClick={props.close}>
              &times;
            </button>
          </div>
        );
      }}
    </Formik>
  );
};

// this normally is an object full of action creators
// By passing "addProject" to connect, the component receives it as a prop,
// and it will dispatch the action when it’s called.
const mapDispatchToProps = { addProject };

export default connect(null, mapDispatchToProps)(AddProject);
