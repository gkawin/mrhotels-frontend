import Polyglot from 'node-polyglot'

const data = require('./data.json')
const polyglot = new Polyglot({ locate: 'en' })

polyglot.extend(data.en)

export default polyglot
