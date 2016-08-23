
import Express from 'express'

const router = Express.Router()

router.get('/*', async (req, res, next) => {
  res.render('index', {
    asserts: 'http://localhost:2000/asserts',
    appTitle: 'Com-Sci MJU'
  })
  next()
})

// Call REST api from backend
router.use('/api', async (req, res, next) => {
  res.status(200).send('this is api dock port')
  next()
})

// Call web socket from backend
router.use('/ws', async (req, res, next) => {
  res.status(200).send('this is Websocket dock port')
  next()
})

export default router
