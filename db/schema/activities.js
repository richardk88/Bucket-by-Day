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

 const activitiesModel = mongoose.model('Activities', activities);

 module.exports = activitiesModel;