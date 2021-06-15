const express = require('express')

// Import middleware
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const compression = require('compression')
const helmet = require('helmet')
const cors = require('cors')

const Router = require('./router')

const PORT = process.env.PORT || 8080

const app = express()

// Implement middleware
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {
    app.get('*', (req, res) => {
      res.sendFile('build/index.html', { root: __dirname })
  })
}

app.use('/api', Router)

app.use((err, req, res) => {
   throw(err)

   res.status(500).json({ error: err.toString() })
})

app.listen(PORT, function() {
  console.log(`Server is running on: ${PORT}`)
})