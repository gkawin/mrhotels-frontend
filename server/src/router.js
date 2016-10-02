
import express from 'express'

const router = express.Router()

router.get('/', async (req, res, next) => {
  await res.render('index', {
    appTitle: 'Mr.Hotels',
    asserts: 'http://localhost:2000/asserts',
    preload: await getPreload()
  })
  next()
})

router.get('/api/starter', async (req, res, next) => {
  const result = await axios.get(`http://localhost:3000/api/v1/languages`)
  res.json(result.data)
  next()
})

export const getPreload = async () => {
  try {
    const result = await axios.get(`http://localhost:3000/api/v1/languages`)
    return JSON.stringify({
      languages: result.data
    })
  } catch (e) {
    console.error(e.message)
  }
}

export default router
