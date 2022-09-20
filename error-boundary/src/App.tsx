import './App.css'

import ErrorBoundary from './components/ErrorBoundary'
import Header from './components/Header'
import Posts from './components/Posts'

function App() {
  return (
    <div className='App'>
      <Header />
      <ErrorBoundary>
        <Posts />
      </ErrorBoundary>
    </div>
  )
}

export default App
