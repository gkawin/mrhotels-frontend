
const configureRoutes = (request, response) => {
  response.status(200)
  response.render('index', {
    asserts: 'http://localhost:2000/asserts',
    appTitle: 'Com-Sci MJU'
  })
}

export default configureRoutes
