import { PropsWithChildren } from 'react'

import { act, renderHook, screen } from '@testing-library/react'

import ErrorBoundary from '../../components/ErrorBoundary'
import useErrorBoundary from './index'

describe('useErrorBoundary', () => {
  test('반환되는 setError에 Error를 넘겨주면 throw 된다.', async () => {
    const error = new Error('에러 발생')

    const { result } = renderHook(useErrorBoundary, {
      wrapper: ({ children }: PropsWithChildren<unknown>) => {
        return <ErrorBoundary>{children}</ErrorBoundary>
      },
    })

    act(() => {
      result.current(error)
    })

    const $error = await screen.findByText(/에러 발생!/)

    expect($error).toBeInTheDocument()
  })
})
