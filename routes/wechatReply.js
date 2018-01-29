const express = require('express');
const crypto = require('crypto');
const acessToken = require('./access-token');
// var xmlParser = require('xml2json');
var xmlParser = require('xml2js');
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
router.post('/',function (req, res, next) {
	req.rawBody = '';
	var replyJson = {};
	req.on('data', (chunk) => {
		req.rawBody += chunk;
	});
	req.on('end', () => {
		var parser = new xmlParser.Parser();
		var builder = new xmlParser.Builder();
		parser.parseString(req.rawBody, function (err, result) {
			replyJson = result.xml;
			replyJson.CreateTime = new Date().getTime();
			replyJson.Content = '你有什么事情？';
			var replyMsg = `<xml>
												<ToUserName><![CDATA[${replyJson.FromUserName}]]></ToUserName>
												<FromUserName><![CDATA[${replyJson.ToUserName}]]></FromUserName>
												<CreateTime>${replyJson.CreateTime}</CreateTime>
												<MsgType><![CDATA[text]]></MsgType>
												<Content><![CDATA[${replyJson.Content}]]></Content>
												</xml>`;
			console.log(replyMsg);
			res.send(replyMsg);
		});
	})
});

module.exports = router;
