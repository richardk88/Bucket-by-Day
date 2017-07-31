var express = require('express');
const User = require('../models/user');
const BucketLists = require('../models/bucketList');
const Activities = require('../models/activityList');
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

router.get('/new', (req, res) => {
    const userId = req.params.userId;
    const bucketId = req.params.bucketId
    res.render('../views/activity/new', {
        userId: userId,
        bucketId: bucketId
    })
});

router.post('/', (req, res) => {
    const userId = req.params.userId;
    const bucketId = req.params.bucketId
    const activityListInfo = req.body;
    User.findById(userId)
        .then( (user) => {
            const newActivityList = new Activities (activityListInfo)
            const foundBucket = user.bucketLists.find((bucket) => {
                return bucket.id === bucketId
            });
            foundBucket.activities.push(newActivityList);
            user.save();

            console.log(`Activity was created for ${bucketId}`);
            return res.render('../views/activity/show', {
                userId: userId,
                bucketId: bucketId,
                activityListName: newActivityList.name,
                activityListDescription: newActivityList.description,
                activityListLocation: newActivityList.location,
                activityListLink: newActivityList.link,
                activityListDuration: newActivityList.duration,
                activityListPrice: newActivityList.price
            })
        })
        .catch((error) => {
            console.log(error);
            console.log('Failed to create activity');
        })
});

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
                activityId: activityId,
                activityListName: foundActivity.name,
                activityListDescription: foundActivity.description,
                activityListLocation: foundActivity.location,
                activityListLink: foundActivity.linkToInfo,
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

router.get('/:activityId/delete', (req, res) => {
    const userId = req.params.userId;
    const bucketId = req.params.bucketId;
    const activityId = req.params.activityId;
    User.findById(userId)
        .then( (user) => {
            let foundBucket = user.bucketLists.find((bucket) => {
                return bucket.id === bucketId});
            const foundActivityToDelete = foundBucket.activities.find( (activity) => {
                return activity.id === activityId
            })
            foundBucket.activities.remove(foundActivityToDelete);
            user.save();
            res.redirect(`/users/${userId}/bucketLists/${bucketId}/activityList`);
        })
        .catch( (error) => {
            console.log(error);
        })
});

module.exports = router;
