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

router.get('/:bucketId', (req, res) => {
    const userId = req.params.userId;
    const bucketId = req.params.bucketId;
    User.findById(userId)
        .then((user) => {
            const foundBucket = user.bucketLists.find((bucket) => {
                return bucket.id === bucketId
            });
            res.send(foundBucket);
        })
        .catch((error) => {
            console.log('Failed to find bucketlist');
        })
})

module.exports = router;
