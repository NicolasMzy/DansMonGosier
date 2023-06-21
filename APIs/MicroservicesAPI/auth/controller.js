const microservice = require('./microservice');

app.use(passport.initialize())
app.use(passport.session())

app.use(bodyparser.json())
app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

const initializePassport = require('./passport-config')

exports.authenticate = (users) => {
    initializePassport(
        passport,
        email => users.find(user => user.email === email),
        id => users.find(user => user.id === id)
      )
}



function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
    res.redirect('/login')
  }
  
exports.checkNotAuthenticated = async (req, res, next) => {
    if (req.isAuthenticated()) {
      return res.redirect('/')
    }
    next()
  }


