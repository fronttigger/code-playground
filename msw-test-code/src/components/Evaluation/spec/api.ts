export const getReview = async () => {
  try {
    const response = await fetch('/review')

    console.log('response', response)
    const data = await response.json()

    return data
  } catch (error) {
    new Error('리뷰를 가져오지 못했습니다.')
  }
}
