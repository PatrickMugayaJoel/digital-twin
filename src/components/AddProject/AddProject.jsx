import React from 'react'
import './AddProject.scss';
import { connect } from 'react-redux'
import { addProject } from '../../actionCreators'

const AddProject = props => {
  const input = {}
  const handleOnSubmit = e => {
    e.preventDefault()
    if (
        !input.name.value.trim() ||
        !input.city.value.trim() ||
        !input.state.value.trim()
      ) {return}

    // dispatches actions to add todo
    props.addProject({
      name: input.name.value,
      city: input.city.value,
      state: input.state.value
    })

    props.close()

    // sets state back to empty string
    input.name.value=''
    input.city.value=''
    input.state.value=''
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div className="form-group">
          <label htmlFor="name">Project Name</label>
          <input type="text" className="form-control" id="name" placeholder="Project Name" ref={node => (input.name = node)} required/>
          <small id="nameHelp" className="form-text text-muted">This will be the title displayed on the projects list.</small>
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input type="text" className="form-control" id="city" placeholder="City" ref={node => (input.city = node)} required/>
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <input type="text" className="form-control" id="state" placeholder="state" ref={node => (input.state = node)} required/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <button className="btn btn-danger float-right" onClick={props.close}>Cancel</button>
      </form>
      <button className="close-modal" onClick={props.close}>&times;</button>
    </div>
  )
}

// this normally is an object full of action creators
// By passing "addProject" to connect, the component receives it as a prop,
// and it will dispatch the action when it’s called.
const mapDispatchToProps = { addProject }

export default connect(null, mapDispatchToProps)(AddProject)
