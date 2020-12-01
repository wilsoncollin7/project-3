const express = require("express");
const session = require("express-session");
const mongoose = require('mongoose');
const routes = require("./server/routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv/config");
const passport = require("passport");
const app = express();
const MongoStore = require('connect-mongo')(session);
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} 
// app.use(cors({
//   origin: "http://localhost:3000",
//   credentials: true
// }));
// console.log('hello world');

// initialize passport
app.use(
  session({ 
    secret: "keyboard cat", 
    resave: true, 
    saveUninitialized: true })
);
app.use(cookieParser("keyboard cat"));

app.use(passport.initialize());
app.use(passport.session());
require("./server/passport/index")(passport);
 
// Add routes, both API and view
app.use(routes);

mongoose.connect(process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  () => console.log('Connected to DB!')
);

// Start the API server 
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
