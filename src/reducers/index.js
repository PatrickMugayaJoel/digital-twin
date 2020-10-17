import { combineReducers } from 'redux'
import { ADD_PROJECT, GET_ALL_PROJECTS } from '../actionTypes'

const projects = (state = [], action) => {
    switch (action.type) {
      case ADD_PROJECT:
        return [
          ...state,
          {...action.payload}
        ]
      default:
        return state
    }
}
  
export default combineReducers({
  projects,
})
