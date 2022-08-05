import { Todo } from '../model/todo'

interface ListProps {
  todos: Todo[]
}

function List({ todos }: ListProps) {
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
