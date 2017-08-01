var express = require('express');
const User = require('../models/user');
const BucketLists = require('../models/bucketList');
const Activities = require('../models/activityList');
var router = express.Router({mergeParams: true});

router.get('/', (req, res, next) => {
  const userId = req.params.userId;
  User.find({})
    .then( (user) => {
        const arrayOfBucketLists = [];
        for (var i = 0; i < user.length; i++) {
            for (var j = 0; j < user[i].bucketLists.length; j++) {
                arrayOfBucketLists.push(user[i].bucketLists[j])
            }
        }
        console.log(arrayOfBucketLists);
        res.render('../views/userBucketLists/index', {
            arrayOfBucketLists,
            userId
        })
    })
    .catch( (error) => {
      console.log('Error retrieving bucketlists from db');
      console.log(error);
    });
});

router.post('/', (req, res) => {
    const userId = req.params.userId;
    const bucketListInfo = req.body;
    User.findById(userId)
        .then( (user) => {
            const newActivityList = new Activities (bucketListInfo.activities);
            const newBucketList = new BucketLists (bucketListInfo);
            console.log(newActivityList);
            newBucketList.activities.push(newActivityList);
            user.bucketLists.push(newBucketList);
            user.save();

            console.log(`Bucketlist was created for ${userId}`);
            return res.redirect(`/users/${userId}/bucketLists`)
            })
        .catch((error) => {
            console.log(error);
            console.log('Failed to create bucketlist');
        })
});

module.exports = router;