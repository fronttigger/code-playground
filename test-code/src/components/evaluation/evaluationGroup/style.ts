import styled from 'styled-components'

import { EvaluationGroupProps } from '../type'

export const EvaluationGroupContainer = styled.div<
  Pick<EvaluationGroupProps, 'size'>
>`
  svg:not(:last-child) {
    margin-right: ${({ size }) => (size === 'small' ? '1px' : '2px')};
  }
`
