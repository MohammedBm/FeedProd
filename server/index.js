const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const app = express()

passport.use(new GoogleStrategy())

// client_id 172871001145-fvsbp6hqaola2d7i32a2oipugva7lvr4.apps.googleusercontent.com
// client_secret qK4E4VcXfT3VZ8ROdkXQac73
const PORT = process.env.PORT || 5000
app.listen(PORT)