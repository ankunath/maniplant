// app/models/user.js

var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: String
});

module.exports = mongoose.model('userSchema', userSchema);
