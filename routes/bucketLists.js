var express = require('express');
const User = require('../models/user');
const BucketLists = require('../models/bucketList');
var router = express.Router({mergeParams: true});

/* GET bucketList listing. */
router.get('/', (req, res, next) => {
  const userId = req.params.userId;
  User.findById(userId)
    .then( (user) => {
      res.render('../views/bucketList/index', {
        userId: userId,
        userName: user.userName,
        bucketLists: user.bucketLists,
        bucketListId: user.bucketLists
      })
    })
    .catch( (error) => {
      console.log('Error retrieving bucketlists from db');
      console.log(error);
    });
});

router.get('/new', (req, res) => {
    const userId = req.params.userId;
    res.render('../views/bucketList/new', {
        userId: userId
    })
});

router.post('/', (req, res) => {
    const userId = req.params.userId;
    const bucketListInfo = req.body;
    User.findById(userId)
        .then( (user) => {
            const newBucketList = new BucketLists (bucketListInfo)
            user.bucketLists.push(newBucketList);
            user.save();

            console.log(`Bucketlist was created for ${userId}`);
            return res.render('../views/bucketList/show', {
                userId: userId,
                bucketListName: newBucketList.name,
                bucketListDescription: newBucketList.description,
                activities: newBucketList.activities
            })
        })
        .catch((error) => {
            console.log(error);
            console.log('Failed to create bucketlist');
        })
});

router.get('/:bucketId', (req, res) => {
    const userId = req.params.userId;
    const bucketId = req.params.bucketId;
    User.findById(userId)
        .then((user) => {
            const foundBucket = user.bucketLists.find((bucket) => {
                return bucket.id === bucketId
            });
            res.render('../views/bucketList/show', {
                userId: userId,
                bucketId: bucketId,
                bucketListName: foundBucket.name,
                bucketListDescription: foundBucket.description,
                bucketListTotalCost: foundBucket.totalCost,
                activities: foundBucket.activities
            });
        })
        .catch((error) => {
            console.log('Failed to find bucketlist');
        })
})

module.exports = router;
