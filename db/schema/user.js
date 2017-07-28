const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const user = new Schema({
    firstName: string,
    lastName: string,
    userName: string,
    email: string,
    img: string,
    createAt: Date,
    updatedAt: Date,
    bucketLists: []
});

 const userModel = mongoose.model('User', user);

 module.exports = userModel;