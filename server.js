const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

// set-up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true } ));
app.use(express.static(path.join(__dirname, 'public')));

// turn on routes
app.use(routes);

// set-up template engine
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// turn on connection to db and server
sequelize.sync({ alter: true, force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});