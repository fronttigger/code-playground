import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
}

// ErrorBoundary 내에서 발생하는 에러는 ErrorBoundary 대상이 아님
class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  }

  static getDerivedStateFromError(_: Error): State {
    // fallback UI가 보이도록 state 최신화
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // 에러 로그 수집
    console.error('error:', error, errorInfo)
    console.error('errorInfo:', errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // fallback UI 처리
      return (
        <h1
          style={{ whiteSpace: 'pre-line' }}
        >{`에러입니다. \n다시 새로고침 해주세요`}</h1>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
