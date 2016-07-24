
import Express from 'express'
const app = Express()

app.set('view engine', 'pug')
app.get('*', async (request, response, next) => {
  response.render('index', {
    asserts: 'http://localhost:2000/asserts',
    appTitle: 'Com-Sci MJU',
  })
})

app.listen(2001, () => {
  console.log('server is running.')
})
