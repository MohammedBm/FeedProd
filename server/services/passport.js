const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('../config/keys')

// here we are utlizing passport to create oauth sign in function to our websit
passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID, //this is our clinet key we got from google+ oauth
    clientSecret: keys.googleClientSecret, // this is the secret key we got from google+ oauth
    callbackURL: '/auth/google/callback '
  }, (acessToken, refreshToken, profile, done) => {
    console.log('access token', acessToken)
    console.log('referesh token', refreshToken)
    console.log('profile:', profile)
  })
)
