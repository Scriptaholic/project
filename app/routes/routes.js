var express = require('express');
var router = express.Router();
var moderator = require('./moderator');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
let Moderator = require('../models/Moderator');
router.use('/moderator',moderator);
router.get('/',function(req,res){
   var  moderator = new Moderator();
    moderator.username="hazem";
    console.log("ok");
        moderator.save(function(err, moderator){
            if(err){
                return res.send(err.message)
                console.log(err);
            }
            else{
   console.log(moderator);

            }
    })
});
module.exports = router;