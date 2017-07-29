const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const activities = new Schema({
    name: String,
    description: String,
    location: String,
    duration: String,
    img: String,
    linkToInfo: String,
    createAt: Date,
    updatedAt: Date,
    price: Number,
});


activities.pre('save', function(next){
 now = new Date();
 this.updatedAt = now;
 if ( !this.createdAt ) {
   this.createdAt = now;
 }
 next();
});

const bucketList = new Schema({
    name: String,
    description: String,
    createAt: Date,
    updatedAt: Date,
    totalCost: Number,
    theme: [],
    activities: []
});

bucketList.pre('save', function(next){
 now = new Date();
 this.updatedAt = now;
 if ( !this.createdAt ) {
   this.createdAt = now;
 }
 next();
});

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

const activitiesModel = mongoose.model('Activities', activities);
const bucketListModel = mongoose.model('Bucket List', bucketList);
const userModel = mongoose.model('User', user);

 module.exports = {
    activitiesModel: activitiesModel,
    bucketListModel: bucketListModel,
    activitiesModel: activitiesModel
};