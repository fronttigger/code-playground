import { render, screen } from '@testing-library/react'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import App from './App'
import mockApi, { mockServer } from './utils/mock-server'

const queryClient = new QueryClient({})

const createWrapper =
  () =>
  ({ children }: { children: React.ReactNode }) => {
    return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
  }

beforeAll(() => {
  mockServer.listen()
})
afterAll(() => {
  mockServer.close()
})

describe('TODO', () => {
  beforeEach(() => {
    queryClient.clear()
  })

  describe('list', () => {
    test('리스트가 비어있다면 할 일 없음이 노출된다.', async () => {
      mockApi.get('http://localhost:8888/todos', [])

      render(<App />, { wrapper: createWrapper() })

      const $todo = await screen.findByText(/할 일 없음/i)

      expect($todo).toBeInTheDocument()
    })
  })
})
