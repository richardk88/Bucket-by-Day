var express = require('express');
const User = require('../models/user');
const BucketLists = require('../models/bucketList');
const activities = require('../models/activityList');
var router = express.Router({mergeParams: true});

/* GET bucketList listing. */
router.get('/', (req, res, next) => {
  const userId = req.params.userId;
  const bucketId = req.params.bucketId;
  User.findById(userId)
    .then( (user) => {
      const foundBucket = user.bucketLists.find((bucket) => {
                return bucket.id === bucketId
            });
      res.render('../views/activity/index', {
        userId: userId,
        bucketId: bucketId,
        bucketList: foundBucket
      })
    })
    .catch( (error) => {
      console.log('Error retrieving activities list from db');
      console.log(error);
    });
});

// router.get('/new', (req, res) => {
//     const userId = req.params.userId;
//     res.render('../views/bucketList/new', {
//         userId: userId
//     })
// });

// router.post('/', (req, res) => {
//     const userId = req.params.userId;
//     const bucketListInfo = req.body;
//     User.findById(userId)
//         .then( (user) => {
//             const newBucketList = new BucketLists (bucketListInfo)
//             user.bucketLists.push(newBucketList);
//             user.save();

//             console.log(`Bucketlist was created for ${userId}`);
//             return res.render('../views/bucketList/show', {
//                 userId: userId,
//                 bucketListName: newBucketList.name,
//                 bucketListDescription: newBucketList.description,
//                 activities: newBucketList.activities
//             })
//         })
//         .catch((error) => {
//             console.log(error);
//             console.log('Failed to create bucketlist');
//         })
// });

router.get('/:activityId', (req, res) => {
    const userId = req.params.userId;
    const bucketId = req.params.bucketId;
    const activityId = req.params.activityId;
    User.findById(userId)
        .then((user) => {
            const foundBucket = user.bucketLists.find((bucket) => {
                return bucket.id === bucketId
            });
            const foundActivity = foundBucket.activities.find( (activity) => {
                return activity.id === activityId
            })
            res.render('../views/activity/show', {
                userId: userId,
                bucketId: bucketId,
                activityListName: foundActivity.name,
                activityListDescription: foundActivity.description,
                activityListLocation: foundActivity.location,
                activityListLink: foundActivity.link,
                activityListDuration: foundActivity.duration,
                activityListPrice: foundActivity.price
            });
        })
        .catch((error) => {
            console.log('Failed to find activity');
        })
});

router.get('/:activityId/edit', (req, res) => {
    const userId = req.params.userId;
    const bucketId = req.params.bucketId;
    const activityId = req.params.activityId;
    User.findById(userId)
        .then((user) => {
            const foundBucket = user.bucketLists.find((bucket) => {
                return bucket.id === bucketId
            });
            const foundActivity = foundBucket.activities.find( (activity) => {
                return activity.id === activityId
            })
            res.render('../views/activity/edit', {
                userId: userId,
                bucketId: bucketId,
                activityId: activityId,
                activityListName: foundActivity.name,
                activityListDescription: foundActivity.description,
                activityListLocation: foundActivity.location,
                activityListLink: foundActivity.link,
                activityListDuration: foundActivity.duration,
                activityListPrice: foundActivity.price
            });
        })
        .catch((error) => {
            console.log('Failed to find activity');
        })
});

router.put('/:activityId/', (req, res) => {
    const userId = req.params.userId;
    const bucketId = req.params.bucketId;
    const activityId = req.params.activityId;
    const activityUpdateInfo = req.body;
    User.findByIdAndUpdate(userId)
        .then( (user) => {
            const foundBucket = user.bucketLists.find((bucket) => {
                return bucket.id === bucketId
            });
            const foundActivityToUpdate = foundBucket.activities.find( (activity) => {
                return activity.id === activityId
            })
            foundActivityToUpdate.name = activityUpdateInfo.name;
            foundActivityToUpdate.description = activityUpdateInfo.description;
            foundActivityToUpdate.location = activityUpdateInfo.location;
            foundActivityToUpdate.link = activityUpdateInfo.link;
            foundActivityToUpdate.duration = activityUpdateInfo.duration;
            foundActivityToUpdate.price = activityUpdateInfo.price;
            user.save();

            console.log(`Activity was updated for ${bucketId}`);
            return res.render('../views/activity/show', {
                userId: userId,
                bucketId: bucketId,
                activityListName: foundActivityToUpdate.name,
                activityListDescription: foundActivityToUpdate.description,
                activityListLocation: foundActivityToUpdate.location,
                activityListLink: foundActivityToUpdate.link,
                activityListDuration: foundActivityToUpdate.duration,
                activityListPrice: foundActivityToUpdate.price
            })
        })
        .catch( (error) => {
            console.log(error);
        })
});

// router.get('/:bucketId/delete', (req, res) => {
//     const userId = req.params.userId;
//     const bucketId = req.params.bucketId;
//     User.findById(userId)
//         .then( (user) => {
//             let foundBucketToDelete = user.bucketLists.find((bucket) => {
//                 return bucket.id === bucketId});
//             user.bucketLists.remove(foundBucketToDelete);
//             user.save();
//             res.redirect(`/users/${userId}/bucketLists`);
//         })
//         .catch( (error) => {
//             console.log(error);
//         })
// });

module.exports = router;