import { render, screen } from '@testing-library/react'

import EvaluationItem from './index'

describe('Evaluation Item', () => {
  test('style에 00을 넣어주면 채워지지 않은 별이 렌더링된다.', () => {
    render(<EvaluationItem style={`00`} />)

    const starElement = screen.getByTestId('star-00')

    expect(starElement).toBeInTheDocument()
  })

  test('style에 05을 넣어주면 반만 채워진 별이 렌더링된다.', () => {
    render(<EvaluationItem style={`05`} />)

    const starElement = screen.getByTestId('star-05')

    expect(starElement).toBeInTheDocument()
  })

  test('style에 10을 전체가 채워진 별이 렌더링된다.', () => {
    render(<EvaluationItem style={`10`} />)

    const starElement = screen.getByTestId('star-10')

    expect(starElement).toBeInTheDocument()
  })
})
