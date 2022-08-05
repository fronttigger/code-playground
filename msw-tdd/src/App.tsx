import { useQuery } from 'react-query'
import List from './components/List'
import { getTodos } from './remotes/todos'

function App() {
  const { data: todos = [] } = useQuery(['http://localhost:8888/todos'], () =>
    getTodos()
  )

  return <List todos={todos} />
}

export default App
