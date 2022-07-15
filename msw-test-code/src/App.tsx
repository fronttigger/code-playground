import { useEffect, useState } from 'react'
import Evaluation from './components/Evaluation'
import { getReview } from './components/Evaluation/spec/api'

function App() {
  const [review, setReview] = useState<{
    rating: number
    commentCount: number
  }>()

  useEffect(() => {
    async function getReviewData() {
      const reviewData = await getReview()

      setReview(reviewData)
    }

    getReviewData()
  }, [])

  return (
    <Evaluation
      type='average-review'
      rating={review?.rating}
      commentCount={review?.commentCount}
    />
  )
}

export default App
