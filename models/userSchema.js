const mongoose = require("mongoose");

const Userschema = new mongoose.Schema({
    name : String,
    username : String,
    email : String,
    photoUrl : String,
    username : String,
    instagramUrl :String,
    facebookUrl :String,
    twitterUrl :String,
    linkedUrl :String,
});

const User = mongoose.model('User',Userschema);
module.exports = User;