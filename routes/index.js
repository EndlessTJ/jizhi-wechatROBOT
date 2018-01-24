const express = require('express');
const crypto = require('crypto');
const router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  var signature, timestamp, nonce, echostr, token, hashArray;
  token = 'tianjintest';
  signature = req.query.signature;
	timestamp = req.query.timestamp;
	nonce = req.query.nonce;
	echostr = req.query.echostr;
	hashArray = [token, timestamp, nonce];
	hashArray.sort();
	var hashStr = hashArray.join('');
	var sha1 = crypto.createHash('sha1');
	sha1.update(hashStr);
	var tokenStr = sha1.digest('hex');
	if (tokenStr === signature) {
	  res.send(echostr)
  } else {
	  res.send('error')
  }
  res.render('index', { title: 'Express' });
});

module.exports = router;
