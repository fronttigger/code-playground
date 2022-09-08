import { Todo } from '../model/todo'

interface TodoListProps {
  todos: Todo[]
  onUpdateDone: (todo: Todo) => void
}

function TodoList({ todos, onUpdateDone }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} style={{ color: todo.isDone ? 'red' : 'green' }}>
          <span>{todo.title}</span>
          <input
            type='checkbox'
            checked={todo.isDone}
            onChange={() =>
              onUpdateDone({
                ...todo,
                isDone: !todo.isDone,
              })
            }
          />
        </li>
      ))}
    </ul>
  )
}

export default TodoList
