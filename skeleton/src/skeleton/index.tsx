import React from 'react'
import styled from '@emotion/styled'
import { css, keyframes, SerializedStyles } from '@emotion/react'

const BASE_BACKGROUND_COLOR = 'rgba(227, 227, 227)'
const WAVE_BACKGROUND_COLOR = 'rgba(0, 0, 0, 0.07)'

type VariantType = 'text' | 'circular' | 'rectangular'
type AnimationType = 'pulsate' | 'wave' | false

interface SkeletonProps {
  variant?: VariantType
  width?: string
  height?: string
  animation?: AnimationType
  animationSpeed?: number
  backgroundColor?: string
  waveColor?: string
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

const getPulsateAnimation = (backgroundColor?: string) => keyframes`
  0% {
    background-color: ${backgroundColor};
  }
  50% {
    background-color: ${backgroundColor};
    opacity: 0.6;
  }
  100% {
    background-color: ${backgroundColor}
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

function getBackgroundAnimation(
  animationType?: AnimationType,
  animationSpeed?: number,
  backgroundColor?: string,
  waveColor?: string
): SerializedStyles {
  switch (animationType) {
    case 'pulsate':
    default: {
      return css`
        animation: ${getPulsateAnimation(backgroundColor)}
          ${`${animationSpeed}s`} ease-in-out 0.5s infinite;
      `
    }
    case 'wave': {
      return css`
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
            ${waveColor},
            transparent
          );
          animation: ${waveAnimation} ${`${animationSpeed}s`} ease-in-out 0.5s
            infinite;
        }
      `
    }
    case false: {
      return css``
    }
  }
}

const Container = styled.div<SkeletonProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ backgroundColor }) => backgroundColor};

  ${({ variant }) => variants[variant || 'text']};
  ${({ animation, animationSpeed, backgroundColor, waveColor }) =>
    getBackgroundAnimation(
      animation,
      animationSpeed,
      backgroundColor,
      waveColor
    )};
`

/**
 * @description
 * 데이터가 로드되기 전 컨텐츠를 표시하는 UI
 *
 * @returns JSX.Element
 *
 * @example
 * import { Skeleton } from '@copiest/ui'
 *
 * function Component() {
 *    return <Skeleton variant='circular' animation='wave' />
 * }
 */
function Skeleton({
  variant = 'text',
  width = '100%',
  height = '100%',
  animation = 'pulsate',
  animationSpeed = 1.5,
  backgroundColor = BASE_BACKGROUND_COLOR,
  waveColor = WAVE_BACKGROUND_COLOR,
}: SkeletonProps): JSX.Element {
  return (
    <Container
      variant={variant}
      width={width}
      height={height}
      animation={animation}
      animationSpeed={animationSpeed}
      backgroundColor={backgroundColor}
      waveColor={waveColor}
    />
  )
}

export default Skeleton
