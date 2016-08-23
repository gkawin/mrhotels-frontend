
import Express from 'express'

const router = Express.Router()

// Call REST api from backend
router.use('/api', async (req, res, next) => {
  console.log('This is API routes')
  await res.send('this is api dock port')
  next()
})

// Call web socket from backend
router.use('/ws', async (req, res, next) => {
  await res.send('this is Websocket dock port')
  next()
})

router.get('/*', async (req, res, next) => {
  await res.render('index', {
    asserts: 'http://localhost:2000/asserts',
    appTitle: 'Com-Sci MJU'
  })
  next()
})

export default router
