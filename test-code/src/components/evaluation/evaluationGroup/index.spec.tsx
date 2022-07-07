import { screen, render } from '@testing-library/react'

import EvaluationGroup from './index'

describe('Evaluation Group', () => {
  test('기본적으로 5개의 별점 컴포넌트가 그려진다.', async () => {
    render(<EvaluationGroup />)

    const svgImages = await screen.findAllByRole('img')

    expect(svgImages).toHaveLength(5)
  })

  test('4.5 평점을 넘기면 꽉 찬 별 4개와 0.5 컴포넌트가 그려진다.', async () => {
    render(<EvaluationGroup rating={4.5} />)

    const fullEvaluationImages = await screen.findAllByTestId('star-10')

    expect(fullEvaluationImages).toHaveLength(4)

    const halfEvaluationImages = await screen.findAllByTestId('star-05')

    expect(halfEvaluationImages).toHaveLength(1)
  })

  test('2.3 평점을 넘기면 꽉 찬 별 2개 0.3 빈 별 2개 컴포넌트가 그려진다.', async () => {
    render(<EvaluationGroup rating={2.3} />)

    const fullEvaluationImages = await screen.findAllByTestId('star-10')

    expect(fullEvaluationImages).toHaveLength(2)

    const threeEvaluationImages = await screen.findAllByTestId('star-03')

    expect(threeEvaluationImages).toHaveLength(1)

    const noneEvaluationImages = await screen.findAllByTestId('star-00')

    expect(noneEvaluationImages).toHaveLength(2)
  })
})
