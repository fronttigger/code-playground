import React from 'react'
import { useMutation, useQuery } from 'react-query'

import './App.css'
import List from './components/List'
import { Todo } from './models/todo'
import { deleteTodo, getTodos, updateDone } from './remotes/todos'

function App() {
  const { data: todos = [] } = useQuery(
    ['http://localhost:8888/todos'],
    () => getTodos(),
    {
      suspense: true,
    }
  )

  const { mutate: updateDoneMutation } = useMutation((todo: Todo) =>
    updateDone(todo)
  )

  const { mutate: deleteTodoMutation } = useMutation((todoId: number) =>
    deleteTodo(todoId)
  )

  return (
    <List
      todos={todos}
      onUpdateDone={updateDoneMutation}
      onDeleteTodo={deleteTodoMutation}
    />
  )
}

export default App
