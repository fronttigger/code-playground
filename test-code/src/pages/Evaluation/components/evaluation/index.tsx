import EvaluationItem from './evaluationItem'
import EvaluationGroup from './evaluationGroup'
import { EvaluationProps } from './type'
import {
  Container,
  EvaluationAverage,
  EvaluationReviewContainer,
  EvaluationReviewCount,
  EvaluationReviewRatingText,
} from './style'

/**
 * @description
 * 별 5개를 통해 평점과 평점에 관련된 정보를 나타낼 수 있는 컴포넌트
 *
 * @example
 * import { Evaluation } from '@frip/web-fds'
 *
 * function App() {
 *    return <Evaluation type="review" rating={3.5} commentCount={200} />
 * }
 *
 * export default App
 *
 * @returns JSX.Element
 */
function Evaluation({
  type = 'none',
  size = 'medium',
  rating = 0.0,
  commentCount = 0,
}: EvaluationProps): JSX.Element {
  switch (type) {
    case 'review': {
      return (
        <Container>
          <EvaluationGroup size={size} rating={rating} />
          <EvaluationReviewContainer>
            <EvaluationReviewRatingText size={size}>
              후기
            </EvaluationReviewRatingText>
            <EvaluationReviewCount size={size}>
              {commentCount}
            </EvaluationReviewCount>
          </EvaluationReviewContainer>
        </Container>
      )
    }
    case 'average': {
      return (
        <Container>
          <EvaluationGroup size={size} rating={rating} />
          <EvaluationAverage size={size}>{rating.toFixed(1)}</EvaluationAverage>
        </Container>
      )
    }
    case 'average-review': {
      return (
        <Container>
          <EvaluationGroup size={size} rating={rating} />
          <EvaluationAverage size={size}>{rating.toFixed(1)}</EvaluationAverage>
          <EvaluationReviewContainer>
            <EvaluationReviewRatingText size={size}>
              후기
            </EvaluationReviewRatingText>
            <EvaluationReviewCount size={size}>
              {commentCount}
            </EvaluationReviewCount>
          </EvaluationReviewContainer>
        </Container>
      )
    }
    default:
    case 'none': {
      return <EvaluationGroup size={size} rating={rating} />
    }
  }
}

Evaluation.EvaluationItem = EvaluationItem
Evaluation.EvaluationGroup = EvaluationGroup

export default Evaluation
