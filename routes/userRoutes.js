const express = require('express');
const router = express.Router();
const User = require('../models').User;

router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.get('/profile', (req, res, next) => {
  res.send(req.user);
});

module.exports = router;
