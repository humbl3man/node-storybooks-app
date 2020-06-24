const express = require('express')
const morgan = require('morgan')
require('dotenv').config({
  path: './config/config.env'
})

const app = express()
const PORT = process.env.PORT

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.get('/', (req, res) => {
  res.send('ok')
})

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})
