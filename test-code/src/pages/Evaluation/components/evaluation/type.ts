export type StyleType =
  | '00'
  | '01'
  | '02'
  | '03'
  | '04'
  | '05'
  | '06'
  | '07'
  | '08'
  | '09'
  | '10'
export type SizeType = 'large' | 'medium' | 'small'
export type EvaluationType = 'none' | 'review' | 'average' | 'average-review'

export interface EvaluationItemProps {
  size?: SizeType | number
  style: StyleType
}

export interface EvaluationGroupProps {
  size?: SizeType | number
  rating?: number
}

export interface EvaluationProps extends EvaluationGroupProps {
  size?: SizeType
  type?: EvaluationType
  commentCount?: number
}
