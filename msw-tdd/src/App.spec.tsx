import React, { Suspense } from 'react'

import { QueryClient, QueryClientProvider } from 'react-query'
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from './App'
import List from './components/List'

const queryClient = new QueryClient({})
const mockServer = setupServer()

const createWrapper =
  () =>
  ({ children }: { children: React.ReactNode }) => {
    return (
      <Suspense fallback={<></>}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </Suspense>
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

  describe('List', () => {
    test('리스트가 비어있다면 할 일 없음이 노출된다.', async () => {
      mockServer.use(
        rest.get('http://localhost:8888/todos', (_, res, ctx) => {
          return res(ctx.json([]))
        })
      )

      render(<App />, { wrapper: createWrapper() })

      const $todo = await screen.findByText(/할 일 없음/i)

      expect($todo).toBeInTheDocument()
    })
  })

  test('TODO 데이터가 있다면 TODO 내용을 노출한다.', async () => {
    mockServer.use(
      rest.get('http://localhost:8888/todos', (_, res, ctx) => {
        return res(
          ctx.json([{ id: 0, title: '테스트 공부하기', isDone: false }])
        )
      })
    )

    render(<App />, { wrapper: createWrapper() })

    const $todo = await screen.findByText(/테스트 공부하기/i)

    expect($todo).toBeInTheDocument()
  })

  test('isDone이 false인 TODO는 체크가 되어있지 않다.', async () => {
    mockServer.use(
      rest.get('http://localhost:8888/todos', (_, res, ctx) => {
        return res(
          ctx.json([{ id: 0, title: '테스트 공부하기', isDone: false }])
        )
      })
    )

    render(<App />, { wrapper: createWrapper() })

    const $checkbox = await screen.findByRole('checkbox')

    expect($checkbox).toBeInTheDocument()
    expect($checkbox).not.toBeChecked()
  })

  test('isDone이 false인 TODO의 checkbox를 클릭하면 isDone이 true가 된다.', async () => {
    const updateDone = jest.fn()

    render(
      <List
        todos={[{ id: 0, title: '테스트 공부하기', isDone: false }]}
        onUpdateDone={updateDone}
      />,
      { wrapper: createWrapper() }
    )

    const $checkbox = await screen.findByRole('checkbox')

    userEvent.click($checkbox)

    expect(updateDone).toBeCalledWith({
      id: 0,
      title: '테스트 공부하기',
      isDone: true,
    })
  })
})
