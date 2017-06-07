
const express = require('express');
const app  = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const router  = express.Router();

const Dish   = require('./api/Models/dish');
const Menu   = require('./api/Models/menu_item');
const config = require('./config');
const port = process.env.PORT || 3000;


mongoose.connect(config.mongoUrl);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connected correctly to server");
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// using morgan to log requests to the console
app.use(morgan('dev'));

app.use('/api', router);

var routes = require('./api/Routes/routes');

routes(router);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});


app.set('port', (process.env.PORT || 5000));

app.listen(port);

console.log('Server Working On:' + port);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});