
import bodyParser from 'body-parser'
import cors from 'cors'
import Express from 'express'

import Router from './router'

const app = Express()

app.set('view engine', 'pug')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(Router)

app.listen(2001, () => {
  console.log('server is running.')
})

export default app
