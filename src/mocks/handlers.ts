import { rest } from 'msw'
export const handlers = [
  // Handles a GET /user request
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([{ name: 'Some' }, { name: 'Random' }, { nmae: 'Name ' }])
    )
  }),
]
