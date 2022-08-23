import React, { Suspense } from 'react'

import { QueryClient, QueryClientProvider } from 'react-query'
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from './App'
import List from './components/List'
import Header from './components/Header'

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

const navigate = jest.fn()
const useNavigate = () => navigate

jest.mock('react-router-dom', () => {
  const origin = jest.requireActual('react-router-dom')

  return {
    __esModule: true,
    ...origin,
    useNavigate,
  }
})

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
        onDeleteTodo={() => {}}
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

  test('삭제 버튼이 눌리면 클릭된 Todo의 id를 가지고 삭제 함수를 호출한다.', async () => {
    const deleteTodo = jest.fn()

    render(
      <List
        todos={[{ id: 0, title: '테스트 공부하기', isDone: false }]}
        onUpdateDone={() => {}}
        onDeleteTodo={deleteTodo}
      />
    )

    const $button = await screen.findByRole('button', { name: '삭제' })

    userEvent.click($button)

    expect(deleteTodo).toBeCalledWith(0)
  })

  test('텍스트가 비어있거나 제출 중이라면 submit 버튼이 동작하지 않는다.', async () => {
    const addTodo = jest.fn()

    render(<Header isSubmitting={false} onAddTodo={addTodo} />)

    const $button = await screen.findByRole('button', { name: '추가' })

    userEvent.click($button)

    expect(addTodo).not.toBeCalled()
  })

  test('추가 버튼을 누르게 되면 input에 입력된 값을 가지고 추가될 Todo의 값을 가지고 새로운 Todo를 만든다.', async () => {
    const addTodo = jest.fn()

    render(<Header isSubmitting={false} onAddTodo={addTodo} />)

    const $input = await screen.findByRole('textbox')

    userEvent.type($input, '테스트 공부하기')

    const $button = await screen.findByRole('button', { name: '추가' })

    userEvent.click($button)

    expect(addTodo).toBeCalledWith({
      title: '테스트 공부하기',
      isDone: false,
    })
  })

  test('Todo의 상세보기 버튼을 클릭하면 해당 Todo의 상세 페이지로 이동한다.', async () => {
    render(
      <List
        todos={[{ id: 0, title: '테스트 공부하기', isDone: false }]}
        onUpdateDone={() => {}}
        onDeleteTodo={() => {}}
      />
    )

    const $button = await screen.findByRole('button', { name: '상세보기' })

    userEvent.click($button)

    expect(navigate).toBeCalledWith('/todos/0')
  })

  test('TodoList UI 변경', () => {
    expect(render(<App />, { wrapper: createWrapper() })).toMatchSnapshot()
  })
})
