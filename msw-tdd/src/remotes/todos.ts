import axios, { AxiosResponse } from 'axios'

import { Todo } from '../models/todo'

const getResult = <T>(response: AxiosResponse<T>) => response.data

export const getTodos = () => {
  return axios.get<Todo[]>('http://localhost:8888/todos').then(getResult)
}

export const updateDone = (todo: Todo) => {
  return axios.put(`http://localhost:8888/todos/${todo.id}`, todo)
}

export const deleteTodo = (todoId: number) => {
  return axios.delete(`http://localhost:8888/todos/${todoId}`)
}
