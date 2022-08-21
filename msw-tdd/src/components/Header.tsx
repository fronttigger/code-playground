import { useState } from 'react'
import { Todo } from '../models/todo'

interface HeaderProps {
  isSubmitting: boolean
  onAddTodo: (todo: Omit<Todo, 'id'>) => void
}

function Header({ isSubmitting, onAddTodo }: HeaderProps) {
  const [text, setText] = useState('')

  const 제출할수없는가 = isSubmitting || text === ''

  return (
    <div>
      <input
        placeholder='오늘의 할 일'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        disabled={제출할수없는가}
        onClick={
          제출할수없는가
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
    </div>
  )
}

export default Header
