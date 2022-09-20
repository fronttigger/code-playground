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
  return (
    <div className='App'>
      <Header />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={props => console.log('props', props)}
      >
        <Posts />
      </ErrorBoundary>
    </div>
  )
}

export default App
