var express = require('express');
var router = express.Router();
const User = require('../db/schema/user.js');

/* GET users listing. */
router.get('/', (req, res, next) => {
  User.find({})
    .then( (users) => {
      res.render('../views/user/index', {
        users: users
      });
    })
    .catch( (error) => {
      console.log('Error retrieving users from db');
      console.log(error);
    })
});

router.get('/new', (req, res) => {
  res.render('../views/user/new');
});

router.post('/', (req, res) => {
  const userInfoFromForm = req.body;
  User.create(userInfoFromForm)
    .then( (user) => {
      res.render('../views/user/show', {
        userName: user.userName,
        userFirstName: user.firstName,
        userLastName: user.lastName,
        email: user.email,
        bucketLists: user.bucketLists
      })
    })
    .catch( (error) => {
      console.log(`Unable to create new user of ${user}`);
      console.log(error);
    })
});

router.get('/:userId', (req,res) => {
  const userIdForSearch = req.params.userId;
  User.findById(userIdForSearch)
    .then( (user) => {
      res.render('../views/user/show',{
        userId: user._id,
        userName: user.userName,
        userFirstName: user.firstName,
        userLastName: user.lastName,
        email: user.email,
        bucketLists: user.bucketLists
      });
    })
    .catch( (error) => {
      console.log('Error retrieving user from db');
      console.log(error);
    })
});

router.get('/:userId/edit', (req, res) => {
  const userIdToEdit = req.params.userId
  User.findById(userIdToEdit)
    .then( (user) => {
      res.render('../views/user/edit', {
        userId: user._id,
        userName: user.userName,
        userFirstName: user.firstName,
        userLastName: user.lastName,
        img: user.img,
        email: user.email
      })
    })
    .catch( (error) => {
      console.log('Error rendering edit page');
      console.log(error);
    })
});

router.put('/:userId', (req, res) => {
  const userInfoForUpdate = req.body;
  const userIdToUpdate = req.params.userId;
  User.findByIdAndUpdate(userIdToUpdate, userInfoForUpdate, {new: true})
    .then( (user) => {
      console.log(`User with id of ${user._id} was updated`);
      res.render('../views/user/show', {
        userName: user.userName,
        userFirstName: user.firstName,
        userLastName: user.lastName,
        img: user.img,
        email: user.email
      })
    })
    .catch( (error) => {
      console.log('Error updating user in db');
      console.log(error);
    })
})

router.get('/:userId/delete', (req, res) => {
  const userIdToDelete = req.params.userId;
  User.findByIdAndRemove(userIdToDelete)
    .then( (user) => {
      console.log(`User with id ${user._id} was deleted`);
      res.redirect('/users');
    })
    .catch( (error) => {
      console.log('Error deleting user in db');
      console.log(error);
    })
});
module.exports = router;
