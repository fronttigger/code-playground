import { useState } from 'react'
import { Todo } from '../models/todo'

function Header({
  isSubmitting,
  onAddTodo,
}: {
  isSubmitting: boolean
  onAddTodo: (todo: Omit<Todo, 'id'>) => void
}) {
  const [text, setText] = useState('')

  const 추가할수없는가 = isSubmitting || text === ''

  return (
    <>
      <input
        placeholder='할 일'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={
          추가할수없는가
            ? undefined
            : () =>
                onAddTodo({
                  title: text,
                  isDone: false,
                })
        }
      >
        추가
      </button>
    </>
  )
}

export default Header
