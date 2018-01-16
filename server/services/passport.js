const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const keys = require('../config/keys')

const User = mongoose.model('users')

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user)
    })
})

// here we are utlizing passport to create oauth sign in function to our websit
passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID, //this is our clinet key we got from google+ oauth
    clientSecret: keys.googleClientSecret, // this is the secret key we got from google+ oauth
    callbackURL: '/auth/google/callback',
    proxy: true
  },
  async(acessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({
      googleId: profile.id
    })

    if (existingUser) {
      // we already have a record with the given profile id
      return done(null, existingUser)
    }
      // we dont have a user with this ID
      const user = await new User({ googleId: profile.id }).save()
      done(null, user)
  })
)