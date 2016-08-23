import * as Middleware from './middleware'

import Express from 'express'

const app = Express()

app.set('view engine', 'pug')
app.use(Middleware.routes)
app.use(Middleware.api)
app.listen(2001, () => {
  console.log('server is running.')
})

export default app
