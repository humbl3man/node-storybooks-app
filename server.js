const express = require('express')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const connectDB = require('./config/db')

// environment variables
require('dotenv').config({
  path: './config/config.env'
})

connectDB()

// initialize express
const app = express()
// get port
const PORT = process.env.PORT

// use morgan logger for dev environment
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// handlebars
app.engine('.hbs', exphbs({ extname: '.hbs' }))
app.set('view engine', '.hbs')

// main routes
app.use('/', require('./routes/index'))

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})
