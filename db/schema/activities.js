const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const activities = new Schema({
    name: string,
    description: string,
    location: string,
    duration: string,
    img: string,
    linkToInfo: string,
    createAt: Date,
    updatedAt: Date,
    price: number,
});

 const activitiesModel = mongoose.model('Activities', activities);

 module.exports = activitiesModel;