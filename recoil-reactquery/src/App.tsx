import './App.css'

import TodoList from './components/TodoList'
import { useTodos, useUpdateDone } from './hooks/todo'

function App() {
  const { data: todos = [] } = useTodos()
  const { mutate: updateDoneMutation } = useUpdateDone()

  return (
    <div className='App'>
      <header className='App-header'>
        <TodoList todos={todos} onUpdateDone={updateDoneMutation} />
      </header>
    </div>
  )
}

export default App
