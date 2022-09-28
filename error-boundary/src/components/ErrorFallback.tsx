import { FallbackComponentProps } from './ErrorBoundary'

/**
 * 
 * @example
 * <ErrorBoundary FallbackComponent={ErrorFallback} resetKeys={[isBoolean]}>
      {children}
    </ErrorBoundary>
 */
function ErrorFallback({ error, resetErrorBoundary }: FallbackComponentProps) {
  return (
    <div role='alert'>
      <p>에러 발생!!</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>재시도</button>
    </div>
  )
}

export default ErrorFallback
