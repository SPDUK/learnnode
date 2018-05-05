const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const md5 = require('md5');
const validator = require('validator');
const mongodbErrorHandler = require('mongoose-mongodb-errors');
const passportLocalMongoose = require('passport-local-mongoose');


const userSchema = new Schema({
  email: {
    type: String,
    // can not be the same as any other email
    unique: true, 
    // makes the email lowercase
    lowercase: true, 
    // removes whitespace
    trim: true, 
    // makes sure the email is valid
    validate: [validator.isEmail, 'Invalid Email Address'], 
    required: 'Please supply an email address'
  },
  name: {
    type: String,
    required: 'Please supply a name',
    trim: true
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  hearts: [
    { type: mongoose.Schema.ObjectId, ref: 'Store'}
  ]
});

userSchema.virtual('gravatar').get(function() {
  const hash = md5(this.email);
  return `https://gravatar.com/avatar/${hash}?s=200`;
});

userSchema.plugin(passportLocalMongoose, {usernameField: 'email'});
// changes mongodb error to a nicer error for the user
userSchema.plugin(mongodbErrorHandler); 

module.exports = mongoose.model('User', userSchema);