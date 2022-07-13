import { useEffect, useState } from 'react'
import Evaluation from './components/Evaluation'

function App() {
  const [review, setReview] = useState<{
    rating: number
    commentCount: number
  }>()

  useEffect(() => {
    fetch('/review')
      .then((res) => res.json())
      .then((data) => {
        setReview(data)
      })
  }, [])

  return (
    <div>
      <Evaluation
        type='average-review'
        rating={review?.rating}
        commentCount={review?.commentCount}
      />
    </div>
  )
}

export default App
