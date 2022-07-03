import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import Button from './index'

describe('button component', () => {
  test('외부 이벤트를 활용한 버튼 클릭', () => {
    const handleClick = jest.fn()

    render(<Button onClick={handleClick}>클릭</Button>)

    const buttonElement = screen.getByRole('button')

    userEvent.click(buttonElement)
    expect(handleClick).toBeCalledTimes(1)
  })

  test('클릭시 disabled 되는지 확인', () => {
    let disabled = false

    const { rerender } = render(<Button disabled={disabled}>클릭</Button>)
    const buttonElement = screen.getByRole('button')

    expect(buttonElement).toHaveProperty('disabled', false)

    userEvent.click(buttonElement)

    disabled = true

    rerender(<Button disabled={disabled}>클릭</Button>)

    expect(buttonElement).toHaveProperty('disabled', true)
  })
})
