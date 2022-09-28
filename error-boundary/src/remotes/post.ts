import axios, { AxiosResponse } from 'axios'

export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

const FETCH_URL = 'https://jsonplaceholder.typicode.com/posts/1'

const getResults = <T>(response: AxiosResponse<T>) => response.data

// 비동기 코드 자체는 ErrorBoundary 대상이 아님
export const getPosts = async () => {
  return axios.get<Post[]>(FETCH_URL).then(getResults)
}
