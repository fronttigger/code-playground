import axios, { AxiosResponse } from 'axios'

import { Todo } from '../model/todo'

const FETCH_URL = 'http://localhost:8080/todos'

const getResult = <T>(response: AxiosResponse<T>) => response.data

export const getTodos = () => {
  return new Promise((_, reject) => reject())
  return axios.get<Todo[]>(FETCH_URL).then(getResult)
}

export const updateDone = (todo: Todo) => {
  return axios.put(`${FETCH_URL}/${todo.id}`, todo)
}
