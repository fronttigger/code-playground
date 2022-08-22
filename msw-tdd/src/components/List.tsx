import { useNavigate } from 'react-router-dom'
import { Todo } from '../models/todo'

function List({
  todos,
  onUpdateDone,
  onDeleteTodo,
}: {
  todos: Todo[]
  onUpdateDone: (todo: Todo) => void
  onDeleteTodo: (todoId: number) => void
}) {
  const navigate = useNavigate()

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
          <button onClick={() => onDeleteTodo(todo.id)}>삭제</button>
          <button onClick={() => navigate(`/todos/${todo.id}`)}>
            상세보기
          </button>
        </li>
      ))}
    </ul>
  )
}

export default List
