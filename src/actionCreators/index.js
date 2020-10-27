import { ADD_PROJECT, FETCH_ALL_PROJECTS, TOGGLE_LOGIN } from '../actionTypes'

let nextId = 3
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
