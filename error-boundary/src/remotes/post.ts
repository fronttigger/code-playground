import axios, { AxiosResponse } from 'axios'

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

const FETCH_URL = 'https://jsonplaceholder.typicode.com/posts1'
const FETCH_URL2 = 'https://jsonplaceholder.typicode.com/todos1'

const getResults = <T>(response: AxiosResponse<T>) => response.data

// 비동기 코드 자체는 ErrorBoundary 대상이 아님
export const getPosts = async () => {
  return axios.get<Post[]>(FETCH_URL).then(getResults)
}

export const getTodos = async () => {
  return axios.get<any>(FETCH_URL2).then(getResults)
}
