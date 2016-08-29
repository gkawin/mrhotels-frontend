
const configureRoutes = (app) => {
  app.get('/*', async (req, res, next) => {
    await res.render('index', {
      appTitle: 'Mr.Hotels',
      asserts: 'http://localhost:2000/asserts'
    })
    next()
  })
}

export default configureRoutes
