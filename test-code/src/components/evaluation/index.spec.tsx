import React from 'react'
import { screen, render } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import Evaluation from './index'

const review = {
  rating: 5,
  commentCount: 200,
}

const server = setupServer(
  rest.get('/review', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(review))
  })
)

beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

describe('Evaluation', () => {
  test('type을 넘기지 않으면 EvaluationGroup 컴포넌트가 렌더링된다.', () => {
    render(<Evaluation />)

    const svgImages = screen.getAllByRole('img')

    expect(svgImages).toHaveLength(5)
  })

  test('type을 review로 하면 후기 텍스트가 포함된 컴포넌트가 렌더링된다.', async () => {
    render(<Evaluation type='review' />)

    const evaluationReviewTextElement = screen.getByText('후기')
    const evaluationReviewCount = screen.getByText('0')

    expect(evaluationReviewTextElement).toBeInTheDocument()
    expect(evaluationReviewCount).toBeInTheDocument()
  })

  test('type을 review로 하고 후기 갯수를 200개 선언하면 후기 갯수 200개가 포함된 컴포넌트가 렌더링된다.', async () => {
    render(<Evaluation type='review' rating={5} commentCount={200} />)

    const response = await fetch('/review')
    const data = await response.json()

    console.log('data', data)

    const evaluationReviewTextElement = screen.getByText('후기')
    const evaluationReviewCountElement = await screen.findByText('200')

    expect(evaluationReviewTextElement).toBeInTheDocument()
    expect(evaluationReviewCountElement).toBeInTheDocument()
  })

  test('type을 average로 하면 후기 점수 텍스트가 포함된 컴포넌트가 렌더링된다.', () => {
    render(<Evaluation type='average' />)

    const evaluationAverageElement = screen.getByText('0.0')

    expect(evaluationAverageElement).toBeInTheDocument()
  })

  test('type을 average로 하고 후기 점수를 4.3으로 선언하면 후기 점수 4.3이 포함된 컴포넌트가 렌더링된다.', async () => {
    render(<Evaluation type='average' rating={4.3} />)

    const evalutaionAverageElement = await screen.findByText('4.3')

    expect(evalutaionAverageElement).toBeInTheDocument()
  })

  test('type을 average-review로 하면 후기 점수와 갯수가 포함된 텍스트가 포함된 컴포넌트가 렌더링된다.', () => {
    render(<Evaluation type='average-review' />)

    const evaluationAverageElement = screen.getByText('0.0')
    const evaluationReviewTextElement = screen.getByText('후기')
    const evaluationReviewCountElement = screen.getByText('0')

    expect(evaluationAverageElement).toBeInTheDocument()
    expect(evaluationReviewTextElement).toBeInTheDocument()
    expect(evaluationReviewCountElement).toBeInTheDocument()
  })

  test('type을 average-review로 하고 후기 점수를 2.8, 후기 갯수를 93개로 선언하면 후기 점수와 갯수가 포함된 컴포넌트가 렌더링된다.', async () => {
    render(<Evaluation type='average-review' rating={2.8} commentCount={93} />)

    const evaluationAverageElement = await screen.findByText('2.8')
    const evaluationReviewTextElement = screen.getByText('후기')
    const evaluationReviewCountElement = await screen.findByText('93')

    expect(evaluationAverageElement).toBeInTheDocument()
    expect(evaluationReviewTextElement).toBeInTheDocument()
    expect(evaluationReviewCountElement).toBeInTheDocument()
  })
})
