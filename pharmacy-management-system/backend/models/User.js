const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  id: String,
  role: String,
  email: String
});

module.exports = mongoose.model('User', UserSchema);
 