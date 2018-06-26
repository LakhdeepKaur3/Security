

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var orm = require('orm');
var AuthorModel = require('./models/Author');
var config = require('./config');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/api');
var adminRouter = require('./routes/admin');

var UserModel = require('./models/User');
var AdminModel = require('./models/Admin');

var authController = require('./AuthController');
var jwt = require('jsonwebtoken');
var config = require('./config');

var app = express();

app.use(orm.express("mysql://root:admin@localhost/books", {
  define: function (db, models, next) {
     AuthorModel(db,models,next);
     UserModel(db,models,next);
     AdminModel(db,models,next);
  }
}));



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, x-access-token, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  next();
});


app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth',authController);

app.use(function(req,res,next){
  var token = req.get("x-access-token") || req.headers["x-access-token"];
  console.log("backend",token);
 if(token){
   jwt.verify(token,config.secret,function(err,user){
      if(err){
        return res.json({success:false,message:'Failed to authenticate'});
      }
      else {
          req.decoded = user;
          next();
      }
   });
 }
 else{
   return res.json({success:false,message:'Failed to authenticate'});
 }
});


app.use('/api',usersRouter);
app.use('/api/admin',adminRouter);
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status = 404;
  res.json({error:'Not Found'});
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
