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

const animations: { [key in Exclude<AnimationType, false>]: any } = {
  pulsate: keyframes`
    0% {
      background-color: rgba(227, 227, 227, 0.1);
    }
    50% {
      background-color: rgba(227, 227, 227, 0.8);
    }
    100% {
      background-color: rgba(227, 227, 227, 0.1);
    }
  `,
  wave: keyframes`
    to {
      background-position: 100% 0;
    }
  `,
}

const Container = styled.div<SkeletonProps>`
  background-color: #e3e3e3;

  ${({ width }) => width && `width: ${width}`};
  ${({ height }) => height && `height: ${height}`};
  ${({ variant }) => variant && variants[variant]};
  ${({ animation }) =>
    animation &&
    css`
      animation: ${animations[animation]} 1.5s ease-in-out 0.5s infinite;
    `}
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
