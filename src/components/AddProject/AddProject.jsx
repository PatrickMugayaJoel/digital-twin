import React from 'react'
import { connect } from 'react-redux'
import { addProject } from '../../actionCreators'

const AddProject = ({ dispatch }) => {
  const handleOnSubmit = e => {
    e.preventDefault()
    if (!this.state.value.trim()) {return}

    // dispatches actions to add todo
    this.props.addProject(this.state.input)

    // sets state back to empty string
    this.setState({ input: '' })
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        {/* <input ref={node => (input = node)} /> */}
        <button type="submit"></button>
      </form>
    </div>
  )
}

// this normally is an object full of action creators
// By passing "addProject" to connect, the component receives it as a prop,
// and it will dispatch the action when it’s called.
const mapDispatchToProps = { addProject }

export default connect(null, mapDispatchToProps)(AddProject)
