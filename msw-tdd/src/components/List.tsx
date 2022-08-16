import { Todo } from '../models/todo'

function List({
  todos,
  onUpdateDone,
}: {
  todos: Todo[]
  onUpdateDone: (todo: Todo) => void
}) {
  if (todos.length === 0) {
    return <div>할 일 없음</div>
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
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

export default List
