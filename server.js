const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const routes = require('./routes/routes');
const registerController = require('./controllers/registerController');

const User = require('./models/user');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
require('dotenv').config();

const connectToMongoBD = require('./database/connection');
const bcrypt = require('bcryptjs');

const store = new MongoDBStore({
  uri: process.env.MONGODB,
  collection: 'sessions',
});

app.use(
  session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/img', express.static(__dirname + '/public/img'));
app.use('/img/avatars', express.static(__dirname + '/public/img/avatars'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

async function start() {
  const uri = await connectToMongoBD();
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  app.listen(3000, () => {
    console.log('server starting');
  });
}

start();
