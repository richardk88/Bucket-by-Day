const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const user = new Schema({
    firstName: String,
    lastName: String,
    userName: String,
    email: String,
    img: String,
    createAt: Date,
    updatedAt: Date,
    bucketLists: []
});

user.pre('save', function(next){
 now = new Date();
 this.updatedAt = now;
 if ( !this.createdAt ) {
   this.createdAt = now;
 }
 next();
});

 const userModel = mongoose.model('User', user);

 module.exports = userModel;