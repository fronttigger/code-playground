import { useEffect, useState } from 'react'

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

  const handleTodosFetch = () => {
    const 현_화면의_높이 = window.innerHeight
    const 총_스크롤한_높이 = document.documentElement.scrollTop
    const 전체_화면_높이 = document.documentElement.offsetHeight

    // MEMO: 화면 최하단에 닿으면 조건문 내의 블럭 반응
    if (현_화면의_높이 + 총_스크롤한_높이 >= 전체_화면_높이) {
      setLimit((limit) => (limit += FETCH_MORE_COUNT)) // 현재 컨텐츠 갯수에 10개씩 추가
    }
  }

  useEffect(() => {
    const getTodos = async () => {
      const response = await fetch(`${FETCH_TODO_URL}/?_limit=${limit}`) // API Fetch
      const data = await response.json()

      setTodos(data)
    }

    getTodos()
  }, [limit])

  useEffect(() => {
    window.addEventListener('scroll', handleTodosFetch)

    return () => window.addEventListener('scroll', handleTodosFetch)
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
