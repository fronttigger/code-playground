import { useEffect } from 'react'
import EvaluationPage from './pages/Evaluation'

function App() {
  useEffect(() => {
    fetch('/review')
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data)
      })
  }, [])

  return (
    <div>
      <EvaluationPage />
    </div>
  )
}

export default App
