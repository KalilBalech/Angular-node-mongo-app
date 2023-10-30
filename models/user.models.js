const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/AngularJSdb');

const UserSchema = new mongoose.Schema({
  name: String,
});

const User = mongoose.model('User', UserSchema);
