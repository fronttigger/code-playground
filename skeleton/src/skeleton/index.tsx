import React from 'react'
import styled from '@emotion/styled'
import { css, keyframes, SerializedStyles } from '@emotion/react'

type VariantType = 'text' | 'circular' | 'rectangular'
type AnimationType = 'pulsate' | 'wave' | false

interface SkeletonProps {
  variant?: VariantType
  width?: string
  height?: string
  animation?: AnimationType
}

const variants: { [key in VariantType]: SerializedStyles } = {
  text: css`
    border-radius: 4px;
  `,
  circular: css`
    border-radius: 50%;
  `,
  rectangular: css``,
}

const pulsateAnimation = keyframes`
  0% {
    background-color: rgba(227, 227, 227);
  }
  50% {
    background-color: rgba(227, 227, 227, 0.6);
  }
  100% {
    background-color: rgba(227, 227, 227);
  }
`

const waveAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`

const animations: {
  [key in Exclude<AnimationType, false>]: SerializedStyles
} = {
  pulsate: css`
    animation: ${pulsateAnimation} 1.5s ease-in-out 0.5s infinite;
  `,
  wave: css`
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      width: 100%;
      height: 100%;
      transform: translateX(-100%);
      background: linear-gradient(
        90deg,
        transparent,
        rgba(0, 0, 0, 0.07),
        transparent
      );
      animation: ${waveAnimation} 1.5s ease-in-out 0.5s infinite;
    }
  `,
}

const Container = styled.div<SkeletonProps>`
  background-color: rgba(227, 227, 227);

  ${({ width }) => width && `width: ${width}`};
  ${({ height }) => height && `height: ${height}`};
  ${({ variant }) => variant && variants[variant]};
  ${({ animation }) => animation && animations[animation]}
`

function Skeleton({
  variant = 'text',
  width = '100%',
  height = '100%',
  animation = 'pulsate',
}: SkeletonProps) {
  return (
    <Container
      variant={variant}
      width={width}
      height={height}
      animation={animation}
    />
  )
}

export default Skeleton
