const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const bucketList = new Schema({
    name: string,
    description: string,
    createAt: Date,
    updatedAt: Date,
    theme: [],
    activities: [],
    totalCost: number
});

 const bucketListModel = mongoose.model('Bucket List', bucketList);

 module.exports = bucketListModel;
    