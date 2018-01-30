const express = require('express');
const router = express.Router();
const wechatProof = require('./wechat-proof');
const receive = require('./receive');

router.get('/', function(req, res, next) {
	res.send(wechatProof(req.query.signature, req.query.timestamp, req.query.nonce, req.query.echostr))// 微信认证
});
router.post('/',function (req, res, next) {
	receive(req, res);
});

module.exports = router;
