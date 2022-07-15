import { rest } from 'msw'

const review = {
  rating: 4.3,
  commentCount: 200,
}

export const getReview = (isError?: boolean) => {
  return rest.get('/review', (_, res, ctx) => {
    if (isError) {
      return res(ctx.status(500))
    }

    return res(ctx.status(200), ctx.json(review))
  })
}

const reviewHandlers = [getReview()]

export default reviewHandlers
