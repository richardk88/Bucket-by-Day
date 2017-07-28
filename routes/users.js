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

router.get('/:userId', (req,res) => {
  console.log(req.params.userId);
  const userIdForSearch = req.params.userId;
  console.log(userIdForSearch);
  User.findById(userIdForSearch)
    .then( (user) => {
      res.render('../views/user/show',{
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

module.exports = router;
