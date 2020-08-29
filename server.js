const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// set-up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true } ));
app.use(express.static(path.join(__dirname, 'public')));

// set-up template engine
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// set-up session
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
app.use(session(sess));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ alter: true, force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});