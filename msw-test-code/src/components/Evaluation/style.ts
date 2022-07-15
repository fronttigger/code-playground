import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { SizeType } from './type'

function getEvaluationReviewTextStyle(
  size: SizeType
): FlattenSimpleInterpolation {
  switch (size) {
    case 'large': {
      return css`
        margin-left: 8px;
        margin-bottom: -2px;
        font-size: 14px;
        line-height: 19px;
      `
    }
    default:
    case 'medium': {
      return css`
        margin-left: 6px;
        margin-bottom: -2px;
        font-size: 12px;
        line-height: 16px;
      `
    }
    case 'small': {
      return css`
        margin-left: 4px;
        margin-bottom: -2px;
        font-size: 10px;
        line-height: 13px;
      `
    }
  }
}

function getEvaluationReviewCountStyle(
  size: SizeType
): FlattenSimpleInterpolation {
  switch (size) {
    case 'large': {
      return css`
        margin-left: 5px;
        margin-bottom: -2px;
        font-size: 14px;
        line-height: 19px;
      `
    }
    default:
    case 'medium': {
      return css`
        margin-left: 4px;
        margin-bottom: -2px;
        font-size: 12px;
        line-height: 16px;
      `
    }
    case 'small': {
      return css`
        margin-left: 3px;
        margin-bottom: -2px;
        font-size: 10px;
        line-height: 13px;
      `
    }
  }
}

function getEvaluationAverageStyle(size: SizeType): FlattenSimpleInterpolation {
  switch (size) {
    case 'large': {
      return css`
        margin-left: 8px;
        margin-bottom: -2px;
        font-size: 16px;
        line-height: 21px;
      `
    }
    default:
    case 'medium': {
      return css`
        margin-left: 6px;
        margin-bottom: -2px;
        font-size: 14px;
        line-height: 19px;
      `
    }
    case 'small': {
      return css`
        margin-left: 4px;
        margin-bottom: -2px;
        font-size: 12px;
        line-height: 16px;
      `
    }
  }
}

export const EvaluationReviewContainer = styled.div`
  display: flex;

  margin-left: 4px;
`

export const EvaluationReviewRatingText = styled.span<{ size?: SizeType }>`
  font-weight: 600;

  ${({ size }) => size && getEvaluationReviewTextStyle(size)}
`

export const EvaluationReviewCount = styled.strong<{ size?: SizeType }>`
  font-weight: 600;

  ${({ size }) => size && getEvaluationReviewCountStyle(size)}
`

export const EvaluationAverage = styled.strong<{ size?: SizeType }>`
  font-weight: 700;

  ${({ size }) => size && getEvaluationAverageStyle(size)}
`

export const Container = styled.div`
  display: flex;
  align-items: center;
`
