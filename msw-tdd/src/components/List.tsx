import { Todo } from '../model/todo'

interface ListProps {
  todos: Todo[]
}

function List({ todos }: ListProps) {
  if (todos.length === 0) {
    return <div>할 일 없음</div>
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.title}</span>
          <input type='checkbox' checked={todo.isDone} />
        </li>
      ))}
    </ul>
  )
}

export default List
