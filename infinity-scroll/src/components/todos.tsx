import { useEffect, useState } from 'react'

import throttle from '../utils/throttle'
import throttleByrAF from '../utils/throttleByrAF'

const FETCH_TODO_URL = 'http://localhost:8000/todos'
const FETCH_MORE_COUNT = 10

interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

function Todos() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [limit, setLimit] = useState(FETCH_MORE_COUNT)

  const getTodos = async () => {
    const response = await fetch(`${FETCH_TODO_URL}/?_limit=${limit}`)
    const data = await response.json()

    setTodos(data)
  }

  const handleTodosFetch = () => {
    const 현_화면의_높이 = window.innerHeight
    const 총_스크롤한_높이 = document.documentElement.scrollTop
    const 전체_화면_높이 = document.documentElement.offsetHeight

    if (현_화면의_높이 + 총_스크롤한_높이 >= 전체_화면_높이) {
      setLimit((limit) => (limit += FETCH_MORE_COUNT))
    }
  }

  useEffect(() => {
    getTodos()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit])

  useEffect(() => {
    window.addEventListener(
      'scroll',
      throttleByrAF(() => {
        console.log('발생')
        // handleTodosFetch()
      })
    )
  }, [])

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}

export default Todos
