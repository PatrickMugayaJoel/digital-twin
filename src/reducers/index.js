import { combineReducers } from 'redux'
import { ADD_PROJECT, FETCH_ALL_PROJECTS, SET_ERROR, TOGGLE_LOGIN, REGISTER, LOGOUT, SET_TARGET } from '../actionTypes'

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

const target = (state = {}, action) => {
  switch (action.type) {
    case SET_TARGET:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export default combineReducers({
  projects, auth, target,
})
