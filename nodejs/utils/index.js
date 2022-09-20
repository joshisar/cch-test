const crypto = require('crypto');

const SALT = '$ome$alt';

exports.generateHash = (data) => {
  return crypto.createHmac('sha256', SALT).update(data).digest('hex');
};
