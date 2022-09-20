import {
  Component,
  ComponentType,
  ErrorInfo,
  FunctionComponent,
  isValidElement,
  PropsWithChildren,
  ReactElement,
} from 'react'

const isChangedArray = (prevArray: unknown[] = [], nextArray: unknown[] = []) =>
  prevArray.length !== nextArray.length ||
  prevArray.some((item, index) => !Object.is(item, nextArray[index]))

interface FallbackComponentProps {
  error: Error
  resetErrorBoundary: (...args: unknown[]) => void
}

interface ErrorBoundaryBaseProps {
  resetKeys?: unknown[]
  onReset?: (...args: unknown[]) => void
  onError?: (error: Error, info: { componentStack: string }) => void
}

interface ErrorBoundaryPropsWithFallback extends ErrorBoundaryBaseProps {
  fallback: ReactElement<
    unknown,
    string | FunctionComponent | typeof Component
  > | null
  FallbackComponent?: never
}

interface ErrorBoundaryPropsWithComponent extends ErrorBoundaryBaseProps {
  fallback?: never
  FallbackComponent: ComponentType<FallbackComponentProps>
}

type ErrorBoundaryProps =
  | ErrorBoundaryPropsWithFallback
  | ErrorBoundaryPropsWithComponent

type ErrorBoundaryState = { error: Error | null }

const initialState: ErrorBoundaryState = { error: null }

// ErrorBoundary 내에서 발생하는 에러는 ErrorBoundary 대상이 아님
class ErrorBoundary extends Component<
  PropsWithChildren<ErrorBoundaryProps>,
  ErrorBoundaryState
> {
  state = initialState

  resetErrorBoundary = (...args: unknown[]) => {
    this.props.onReset?.(...args)
    this.reset()
  }

  reset() {
    this.setState(initialState)
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // fallback UI가 보이도록 error 최신화
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // MEMO: error, info Logging
    this.props.onError?.(error, info)
  }

  componentDidUpdate(
    prevProps: ErrorBoundaryProps,
    prevState: ErrorBoundaryState
  ) {
    const { error } = this.state
    const { resetKeys } = this.props

    if (
      error !== null &&
      prevState.error !== null &&
      isChangedArray(prevProps.resetKeys, resetKeys)
    ) {
      this.reset()
    }
  }

  render() {
    const { error } = this.state
    const { fallback, FallbackComponent, children } = this.props

    if (error !== null) {
      const props = {
        error,
        resetErrorBoundary: this.resetErrorBoundary,
      }

      if (isValidElement(fallback)) {
        return fallback
      } else if (FallbackComponent) {
        return <FallbackComponent {...props} />
      }
    }

    return children
  }
}

export { ErrorBoundary }
export type { FallbackComponentProps, ErrorBoundaryProps }
