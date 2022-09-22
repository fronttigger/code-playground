import { useState } from 'react'
import './App.css'

import {
  ErrorBoundary,
  FallbackComponentProps,
} from './components/ErrorBoundary'
import Header from './components/Header'
import Posts from './components/Posts'

function ErrorFallback({ error, resetErrorBoundary }: FallbackComponentProps) {
  return (
    <div role='alert'>
      <p>에러 발생!!</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>재시도</button>
    </div>
  )
}

function App() {
  const [isBoolean, setIsBoolean] = useState(false)

  return (
    <div className='App'>
      <Header />
      <button onClick={() => setIsBoolean((prev) => !prev)}>상태변경</button>
      <ErrorBoundary FallbackComponent={ErrorFallback} resetKeys={[isBoolean]}>
        <Posts />
      </ErrorBoundary>
    </div>
  )
}

export default App
