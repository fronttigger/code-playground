import { ButtonHTMLAttributes, PropsWithChildren, useState } from 'react'

import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

import { useTimeout } from '../hooks/useTimeout'

const fillKeyframe = keyframes`
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(0%);
  }
`

const ButtonEl = styled.button<{ isDelaying: boolean }>`
  position: relative;
  width: 100%;
  padding: 8px 16px 8px 16px;
  border-radius: 8px;
  overflow: hidden;
  background: ${({ isDelaying }) => (isDelaying ? '#dfe3ec' : '#FF5447')};
  cursor: ${({ isDelaying }) => (isDelaying ? 'not-allowed' : ' pointer')};
`

const Delay = styled.div<{ delay: number }>`
  position: absolute;
  left: 0;
  bottom: 0;
  width: inherit;
  height: 100%;
  border-radius: 8px;
  background: #8c9cba;
  animation-name: ${fillKeyframe};
  animation-duration: ${({ delay }) => delay}ms;
  animation-timing-function: linear;
`

const Text = styled.span`
  position: relative;
  font-size: 15px;
  font-weight: 600;
  line-height: 24px;
  color: #ffffff;
`

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  delay?: number
}

function Button({ children, delay = 0 }: PropsWithChildren<ButtonProps>) {
  const [isDelaying, setIsDelaying] = useState(!!delay)

  useTimeout(() => {
    setIsDelaying(false)
  }, delay)

  return (
    <ButtonEl isDelaying={isDelaying}>
      {isDelaying && <Delay delay={delay} />}
      <Text>{children}</Text>
    </ButtonEl>
  )
}

export default Button
