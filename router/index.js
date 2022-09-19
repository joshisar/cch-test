const express = require('express');
const { SayHello } = require('../handler');

const router = express.Router();

router.get('/hello', SayHello);

exports.router = router;
