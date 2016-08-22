
import Express from 'express'

import configureRoutes from './configureRoutes'

const app = Express()

app.set('view engine', 'pug')
app.get('*', async (request, response, next) => {
  await configureRoutes(request, response)
  next()
})
app.listen(2001, () => {
  console.log('server is running.')
})
