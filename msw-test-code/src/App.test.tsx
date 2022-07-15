import { render, screen } from '@testing-library/react'

import App from './App'
import { getReview } from './components/Evaluation/spec/handlers'
import { server } from './mocks/server'

describe('StarReview', () => {
  test('평점과 후기수가 표현된다.', async () => {
    render(<App />)

    const $rating = await screen.findByText('4.3')
    const $commentCount = await screen.findByText('200')

    expect($rating).toBeInTheDocument()
    expect($commentCount).toBeInTheDocument()
  })

  test('평점과 후기수가 없다면 초기값이 표현된다.', async () => {
    server.use(getReview(true))

    render(<App />)

    const $rating = await screen.findByText('0.0')
    const $commentCount = await screen.findByText('0')

    expect($rating).toBeInTheDocument()
    expect($commentCount).toBeInTheDocument()
  })
})
