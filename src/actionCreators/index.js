import { ADD_PROJECT, GET_ALL_PROJECTS } from '../actionTypes'

let nextId = 0
export const addProject = name => ({
  type: ADD_PROJECT,
  payload: {
    id: ++nextId,
    name
  }
})

export const getAllProjects = () => ({
  type: GET_ALL_PROJECTS
})
