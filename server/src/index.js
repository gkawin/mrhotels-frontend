
import Express from 'express'

import configureRoutes from './configureRoutes'

const app = Express()

app.set('view engine', 'pug')
app.use(configureRoutes)
app.listen(2001, () => {
  console.log('server is running.')
})
