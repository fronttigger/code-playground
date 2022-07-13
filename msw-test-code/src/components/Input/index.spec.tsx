import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Input from './index'

describe('input component', () => {
  test('텍스트 입력', () => {
    render(<Input type='text' placeholder='입력' />)

    const inputElement = screen.getByRole('textbox')

    userEvent.type(inputElement, '스터디 하자!')
    expect(inputElement).toHaveValue('스터디 하자!')
  })
})
