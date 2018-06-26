var express = require('express');
var router = express.Router();

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('./config');

router.get('/', function (req, res, next) {
    res.json({
      name: "sandeep"
    });
});

router.post('/login',function(req,res){
  if(req.body.userName && req.body.password){
    req.models.user.find({userName:req.body.userName},function(err,users){
      if(err || users.length == 0){
        res.json({
          authorized:false,
          message:"Wrong Credentials",
          error:true
        });
      }
      else{
        var passwordIsValid = bcrypt.compareSync(req.body.password, users[0].hashedPassword);
          // create a token
          if(!passwordIsValid){
            return res.json({
              authorized:false,
              message:"Wrong Credentials",
              error:true
            });
          }
          let token = getValidToken(req.body.userName);
          console.log("token is",token);
          res.status(200).send({ authorized: true, token: token,loggedIn:true,error:false,message:'Validate Successfully.' });
      }
    });
  }
  else{
    res.json({
      authentication:false,
      message:"Credentials Missing",
      error:true
    });
  }
});

router.post('/register', function(req, res) {
  
    req.models.user.find({userName:req.body.userName},function(err,users){
      if(err || users.length > 0){
        res.json({
          authorized:false,
          message:"User Name already exists",
          error:true
        });
      }
      else{
        var hashedPassword = bcrypt.hashSync(req.body.password, 8);
        req.models.user.create({
          userName : req.body.userName,
          hashedPassword
        },
        function (err, user) {
          console.log(err);
          if (err) return  res.json({
            authorized:false,
            message:"Error creating Records",
            error:true
          });
          // create a token
          let token = getValidToken(req.body.userName);
          console.log("token is",token);
          res.status(200).send({ authorized: true,error:false,message:"Successfully Registered" ,token: token });
        }); 
      }  
    });

  });

  const getValidToken = (userName)=>{
    var token = jwt.sign({ userName }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    return token;
  }

  module.exports = router;