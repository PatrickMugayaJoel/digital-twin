import { ADD_PROJECT, GET_ALL_PROJECTS } from '../actionTypes'

let nextId = 3
export const addProject = body => ({
  type: ADD_PROJECT,
  payload: {
    id: ++nextId,
    ...body
  }
})

export const getAllProjects = () => ({
  type: GET_ALL_PROJECTS
})
