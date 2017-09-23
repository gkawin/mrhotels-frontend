const path = require('path')
const BASE = path.join(__dirname, '..')

module.exports = {
  'jquery': path.join(BASE, 'node_modules/jquery'),
  'react': path.join(BASE, 'node_modules/react'),
  'react-dom': path.join(BASE, 'node_modules/react-dom')
}
