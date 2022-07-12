import { EvaluationGroupContainer } from './style'
import { EvaluationGroupProps, StyleType } from '../type'
import EvaluationItem from '../evaluationItem'

const EVALUATION_INIT_LIST = Array.from({ length: 5 }, (_, index) => index)
const MODULURES_OPERATOR_NUMBER = 1
const CASTING_TO_INTEGER_NUMBER = 10

/**
 * @description
 * 별 5개를 통해 평점을 나타낼 수 있는 컴포넌트
 *
 * @example
 * import { Evaluation } from '@frip/web-fds'
 *
 * function App() {
 *    return <Evaluation.EvaluationGroup size="small" rating={2.3}  />
 * }
 *
 * export default App
 *
 * @returns JSX.Element
 */
function EvaluationGroup({
  size,
  rating = 0.0,
}: EvaluationGroupProps): JSX.Element {
  const ROUND_DOWN_INTEGER = Math.floor(rating)
  const DEMICAL_TO_INTEGER = (
    (rating % MODULURES_OPERATOR_NUMBER) *
    CASTING_TO_INTEGER_NUMBER
  ).toFixed(0)

  const getEvaluationStyle = (evaluationIndex: number): StyleType => {
    if (evaluationIndex > ROUND_DOWN_INTEGER) {
      return '00'
    } else if (evaluationIndex < ROUND_DOWN_INTEGER) {
      return '10'
    } else {
      return `0${DEMICAL_TO_INTEGER}` as StyleType
    }
  }

  return (
    <EvaluationGroupContainer size={size}>
      {EVALUATION_INIT_LIST.map((_, index) => (
        <EvaluationItem
          key={index}
          size={size}
          style={getEvaluationStyle(index)}
        />
      ))}
    </EvaluationGroupContainer>
  )
}

export default EvaluationGroup
