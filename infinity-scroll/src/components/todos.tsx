import { useEffect, useState } from 'react'

const FETCH_TODO_URL = 'http://localhost:8000/todos'

interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

function Todos() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)

  useEffect(() => {
    ;(async function getTodos() {
      const response = await fetch(
        `${FETCH_TODO_URL}/?_page=${page}&_limit=${limit}`
      )
      const data = await response.json()

      setTodos(data)
    })()
  }, [limit, page])

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}

export default Todos
