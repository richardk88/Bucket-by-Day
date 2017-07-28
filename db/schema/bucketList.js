const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

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

 const bucketListModel = mongoose.model('Bucket List', bucketList);

 module.exports = bucketListModel;
    