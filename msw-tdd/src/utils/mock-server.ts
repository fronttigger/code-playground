import { rest } from 'msw'
import { setupServer } from 'msw/node'

export const mockServer = setupServer()

function get(url: string, resolver: any) {
  mockServer.use(
    rest.get(url, (req, res, ctx) => {
      if (typeof resolver !== 'function') {
        return res(ctx.json(resolver))
      }
    })
  )
}

const methods = { get }

export default methods
