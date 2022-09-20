const express = require('express');
const {
  receiveGoogleAuthCode,
  sendAuthReqToGoogle,
  sayHello,
} = require('../handler');

const router = express.Router();

router.get('/hello', sayHello);
router.post('/auth-google', sendAuthReqToGoogle);
router.post('/redirect', receiveGoogleAuthCode);

exports.router = router;
