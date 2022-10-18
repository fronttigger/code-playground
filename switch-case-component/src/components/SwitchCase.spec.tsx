import { screen, render } from '@testing-library/react'

import SwitchCase from './SwitchCase'

describe('SwitchCase', () => {
  function RenderSwitchComponent(value: string) {
    return render(
      <SwitchCase
        value={value}
        caseBy={{
          a: <div>a</div>,
          b: <div>b</div>,
        }}
        defaultComponent={<div>default</div>}
      />
    )
  }

  test('value가 "a" 라면 a 텍스트를 포함한 컴포넌트가 보여진다.', () => {
    RenderSwitchComponent('a')

    expect(screen.getByText('a')).toBeInTheDocument()
  })

  test('value가 "a" 라면 b 텍스트를 포함한 컴포넌트는 보여지지 않는다.', () => {
    RenderSwitchComponent('a')

    expect(screen.getByText('a')).toBeInTheDocument()
    expect(screen.queryByText('b')).not.toBeInTheDocument()
  })

  test('value에 해당되는 컴포넌트가 없다면 default 텍스트를 포함한 컴포넌트가 보여진다.', () => {
    RenderSwitchComponent('c')

    expect(screen.queryByText('a')).not.toBeInTheDocument()
    expect(screen.queryByText('b')).not.toBeInTheDocument()
    expect(screen.getByText('default')).toBeInTheDocument()
  })
})
