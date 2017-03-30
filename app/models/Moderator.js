var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var moderatorSchema = mongoose.Schema({
    
    username:String
});
var Moderator = mongoose.model("moderator", moderatorSchema);
module.exports = Moderator;