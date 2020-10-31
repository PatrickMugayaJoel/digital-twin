import { combineReducers } from 'redux'
import { ADD_PROJECT, FETCH_ALL_PROJECTS, TOGGLE_LOGIN, REGISTER, LOGOUT } from '../actionTypes'

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

const auth = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_LOGIN:
      return {
        ...state,
        ...action.payload
      }
    case REGISTER:
      return action.payload
    case LOGOUT:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  projects, auth,
})
