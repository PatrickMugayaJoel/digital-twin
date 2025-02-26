import { ADD_PROJECT, FETCH_ALL_PROJECTS, TOGGLE_LOGIN, LOGOUT, SET_TARGET } from '../actionTypes'

let nextId = 3 // TODO auto generate id
export const addProject = body => ({
  type: ADD_PROJECT,
  payload: {
    id: ++nextId,
    ...body
  }
})

export const getAllProjects = () => ({
  type: FETCH_ALL_PROJECTS
})

export const toggleLogin = body => ({
  type: TOGGLE_LOGIN,
  payload: body
})

export const setTarget = body => ({
  type: SET_TARGET,
  payload: body
})

export const logout = body => ({
  type: LOGOUT,
  payload: body
})
