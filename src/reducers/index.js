import { combineReducers } from 'redux'
import { ADD_PROJECT, GET_ALL_PROJECTS } from '../actionTypes'

const projects = (state = [], action) => {
    switch (action.type) {
      case ADD_PROJECT:
        return [
          ...state,
          {
            id: action.id,
            name: action.name
          }
        ]
      default:
        return state
    }
}
  
export default combineReducers({
  projects,
})
