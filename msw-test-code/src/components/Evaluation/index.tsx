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
  rating = 0.0,
  commentCount = 0,
}: EvaluationProps): JSX.Element {
  return (
    <Container>
      <EvaluationGroup rating={rating} />
      <EvaluationAverage>{rating.toFixed(1)}</EvaluationAverage>
      <EvaluationReviewContainer>
        <EvaluationReviewRatingText>후기</EvaluationReviewRatingText>
        <EvaluationReviewCount>{commentCount}</EvaluationReviewCount>
      </EvaluationReviewContainer>
    </Container>
  )
}

export default Evaluation
