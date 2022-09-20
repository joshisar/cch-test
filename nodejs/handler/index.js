const { default: axios } = require('axios');
const { CLIENT_ID, CLIENT_SECRET } = require('../constants');
const { generateHash } = require('../utils');

// SayHello ------------------------------------------------------------------------------------------------
exports.sayHello = async (req, res) => {
  try {
    console.log(`[INFO] GET Handler SayHello`);
    console.log(`[INFO] request : ${req}`);
    res.status(200).json({
      message: 'hello :)',
    });
  } catch (error) {
    res.status(500).json({
      message: 'hello failed :(',
      error: error.toString(),
    });
    console.log(
      `[ERROR] failure in GET Handler SayHello, error : ${error}`
    );
  }
};

// SayHello ------------------------------------------------------------------------------------------------
exports.sendAuthReqToGoogle = async (req, res) => {
  try {
    console.log(`[INFO] sendAuthReqToGoogle`);
    console.log(`[INFO] request : ${req}`);
    // csrf state for secured session
    const createCsrfState = () => {
      const hsh = generateHash(req.session.session_key);
      return hsh.substring(16);
    };
    const csrfState = createCsrfState();
    res.cookie('csrfState', csrfState, { maxAge: 60000 });

    // url for google auth
    let url = 'https://accounts.google.com/o/oauth2/v2/auth';
    // add query params to url
    url += `?client_id=${CLIENT_ID}`;
    url += '&scope=openid%20email';
    url += '&response_type=code';
    url += `&redirect_uri=${encodeURIComponent(
      'https://blockchainlc.in/redirect'
    )}`;
    url += '&state=' + csrfState;

    // redirect to the above created url
    console.log(`[INFO] google oauth url : ${url}`);
    res.redirect(url);
  } catch (error) {
    res.status(500).json({
      error: error.toString(),
    });
    console.log(
      `[ERROR] failure in sendAuthReqToGoogle, error: ${error}`
    );
  }
};

// SayHello ------------------------------------------------------------------------------------------------
exports.receiveGoogleAuthCode = async (req, res) => {
  try {
    console.log(`[INFO] receiveGoogleAuthCode`);
    console.log(`[INFO] request : ${req}`);

    // check csrf state
    const createCsrfState = () => {
      const hsh = generateHash(req.session.session_key);
      return hsh.substring(16);
    };
    const csrfState = createCsrfState();
    if (req.query.state === csrfState) {
      console.log(`[INFO] csrf check success`);
    }

    const AUTH_CODE = req.query.code;

    // url for getting open_id & access_token
    let url = 'https://oauth2.googleapis.com/token';
    url += `?client_id=${CLIENT_ID}`;
    url += `&client_secret=${CLIENT_SECRET}`;
    url += `&code=${AUTH_CODE}`;
    url += `&redirect_uri=${encodeURIComponent(
      'https://blockchainlc.in/redirect'
    )}`;
    url += '&grant_type=authorization_code';

    const resp = await axios.post(url);
    console.log(`resp : ${resp}`);
  } catch (error) {
    res.status(500).json({
      error: error.toString(),
    });
    console.log(
      `[ERROR] failure in receiveGoogleAuthCode, error: ${error}`
    );
  }
};
