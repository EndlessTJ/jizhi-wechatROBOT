const express = require('express');
const crypto = require('crypto');
const acessToken = require('./access-token');
const router = express.Router();
/* GET home page. */
function wechatProof(signature, timestamp, nonce, echostr) {
	const token = 'jizhiwechatreply';
	const hashArray = [token, timestamp, nonce];
	hashArray.sort();
	const hashStr = hashArray.join('');
	const tokenStr = crypto.createHash('sha1').update(hashStr).digest('hex');
	if (tokenStr === signature) {
		return echostr
	} else {
		return 'mismatch'
	}
}
router.get('/', function(req, res, next) {
	// 微信认证
	res.send(wechatProof(req.query.signature, req.query.timestamp, req.query.nonce, req.query.echostr))
});
router.use('/',function (req, res, next) {
	console.log('密钥', acessToken);
	//console.log(req.body)
});

module.exports = router;