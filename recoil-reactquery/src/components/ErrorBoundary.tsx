import React, { ReactNode } from 'react'

class ErrorBoundary extends React.Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: any) {
    // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트 합니다.
    console.log('error', error)
    return { hasError: true }
  }

  componentDidCatch(error: any, errorInfo: any) {
    // 에러 리포팅 서비스에 에러를 기록할 수도 있습니다.
    console.log('catch error', error)
    console.log('catch errorInfo', errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // 폴백 UI를 커스텀하여 렌더링할 수 있습니다.
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}

export default ErrorBoundary
