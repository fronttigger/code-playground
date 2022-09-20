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
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={() => resetErrorBoundary(['props'])}>Try again</button>
    </div>
  )
}

function App() {
  const [isBoolean, setIsBoolean] = useState(false)

  return (
    <div className='App'>
      <Header />
      <button onClick={() => setIsBoolean((prev) => !prev)}>버튼</button>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={(props) => console.log('props', props)}
        resetKeys={[isBoolean]}
      >
        <Posts />
      </ErrorBoundary>
    </div>
  )
}

export default App
