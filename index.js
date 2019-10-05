var express = require('express')
const app = express()
var server = require('http').createServer(app)
const passport = require('passport')
var engine = require('ejs-locals')
var cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
var path = require('path')

// create socket app
var io = require('socket.io')(server)

// middle ware
// app.use(global.appSession)
app.use('/', express.static('dist'))
app.use('/', express.static('lib'))

// view app
app.set('views', path.join(__dirname, '/views'))
app.engine('ejs', engine)
app.set('view engine', 'ejs')

// router app
require('./router')(app)

require('./socket')(io, app)

app.listen(process.env.PORT || 3300, () => {
  console.log(`server listen port ${process.env.PORT || 3300}`)
})
