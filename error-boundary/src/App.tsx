// import { useState } from 'react'
import './App.css'

import { ErrorBoundary } from './components/ErrorBoundary'
import ErrorBoudaryBasic from './components/ErrorBoundaryBasic'
import ErrorFallback from './components/ErrorFallback'
import Header from './components/Header'
import Posts from './components/Posts'

function App() {
  // const [isBoolean, setIsBoolean] = useState(false)

  return (
    <div className='App'>
      <Header />
      {/* <button onClick={() => setIsBoolean((prev) => !prev)}>상태변경</button> */}
      {/* <ErrorBoudaryBasic>
        <Posts />
      </ErrorBoudaryBasic> */}
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Posts />
      </ErrorBoundary>
    </div>
  )
}

export default App