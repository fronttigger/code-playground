import axios, { AxiosResponse } from 'axios'

import { Todo } from '../model/todo'

export const getResult = <T>(response: AxiosResponse<T>) => response.data

export const getTodos = () => {
  return axios.get<Todo[]>('http://localhost:8888/todos').then(getResult)
}
