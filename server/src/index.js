
import bodyParser from 'body-parser'
import cors from 'cors'
import Express from 'express'

import Routes from './app/configureRoutes'

const app = Express()

app.set('view engine', 'pug')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))

Routes(app)

app.listen(2001, () => {
  console.log('server is running.')
})

export default app
