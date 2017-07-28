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

module.exports = router;
