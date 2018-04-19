const xmlParser = require('xml2js');
const robotReply = require('./robot-reply');
const otherReply = require('./other-message-type');
const parser = new xmlParser.Parser();
module.exports = function (req, res) {
	req.rawBody = '';
	req.on('data', (chunk) => {
		req.rawBody += chunk;
	});
	req.on('end', () => {
		parser.parseString(req.rawBody, function (err, result) {
			if (!err) {
				req.replyJson = result.xml;
				req.replyJson.CreateTime = new Date().getTime();
				switch (req.replyJson.MsgType[0]){
					case 'text':
						robotReply({text: req.replyJson.Content[0], sessionId: req.replyJson.FromUserName[0]}).then((replyContent) => {
							let replyMsg1 = `<xml>
												<ToUserName><![CDATA[${req.replyJson.FromUserName}]]></ToUserName>
												<FromUserName><![CDATA[${req.replyJson.ToUserName}]]></FromUserName>
												<CreateTime>${req.replyJson.CreateTime}</CreateTime>
												<MsgType><![CDATA[text]]></MsgType>
												<Content><![CDATA[${replyContent}]]></Content>
												</xml>`;
							res.send(replyMsg1);
						});
						break;
					case 'image':
						let replyMsg = otherReply('image', req.replyJson);
						res.send(replyMsg);
						break;
					case 'voice':
						robotReply({text: req.replyJson.Recognition[0], sessionId: req.replyJson.FromUserName[0]}).then((replyContent) => {
							let replyMsg1 = `<xml>
												<ToUserName><![CDATA[${req.replyJson.FromUserName}]]></ToUserName>
												<FromUserName><![CDATA[${req.replyJson.ToUserName}]]></FromUserName>
												<CreateTime>${req.replyJson.CreateTime}</CreateTime>
												<MsgType><![CDATA[text]]></MsgType>
												<Content><![CDATA[${replyContent}]]></Content>
												</xml>`;
							res.send(replyMsg1);
						});
						break;
					case 'video':
						let replyMsg3 = otherReply('video', req.replyJson);
						res.send(replyMsg3);
						break;
					case 'shortvideo':
						let replyMsg4 = otherReply('shortvideo', req.replyJson);
						res.send(replyMsg4);
						break;
					case 'location':
						let replyMsg5 = otherReply('location', req.replyJson);
						res.send(replyMsg5);
						break;
					case 'link':
						let replyMsg6 = otherReply('link', req.replyJson);
						res.send(replyMsg6);
						break;
				}
			} else {
				console.log('出错了', err)
			}
		});
	})
};