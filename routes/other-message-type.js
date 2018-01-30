module.exports = function (type, replyJson) {
	switch (type) {
		case 'image':
			return `<xml>
							<ToUserName><![CDATA[${replyJson.FromUserName}]]></ToUserName>
							<FromUserName><![CDATA[${replyJson.ToUserName}]]></FromUserName>
							<CreateTime>${replyJson.CreateTime}</CreateTime>
							<MsgType><![CDATA[image]]></MsgType>
							<Image><MediaId>< ![CDATA[${replyJson.MediaId}] ]></MediaId></Image></xml>
							</xml>`;
		case 'voice':
			return `<xml>
							<ToUserName><![CDATA[${replyJson.FromUserName}]]></ToUserName>
							<FromUserName><![CDATA[${replyJson.ToUserName}]]></FromUserName>
							<CreateTime>${replyJson.CreateTime}</CreateTime>
							<MsgType><![CDATA[text]]></MsgType>
							<Content><![CDATA[发送了语音消息]]></Content>
							</xml>`;
		case 'video':
			return `<xml>
							<ToUserName><![CDATA[${replyJson.FromUserName}]]></ToUserName>
							<FromUserName><![CDATA[${replyJson.ToUserName}]]></FromUserName>
							<CreateTime>${replyJson.CreateTime}</CreateTime>
							<MsgType><![CDATA[text]]></MsgType>
							<Content><![CDATA[发送了视屏消息]]></Content>
							</xml>`;
		case 'shortVideo':
			return `<xml>
							<ToUserName><![CDATA[${replyJson.FromUserName}]]></ToUserName>
							<FromUserName><![CDATA[${replyJson.ToUserName}]]></FromUserName>
							<CreateTime>${replyJson.CreateTime}</CreateTime>
							<MsgType><![CDATA[text]]></MsgType>
							<Content><![CDATA[发送了短视频消息]]></Content>
							</xml>`;
		case 'location':
			return `<xml>
							<ToUserName><![CDATA[${replyJson.FromUserName}]]></ToUserName>
							<FromUserName><![CDATA[${replyJson.ToUserName}]]></FromUserName>
							<CreateTime>${replyJson.CreateTime}</CreateTime>
							<MsgType><![CDATA[text]]></MsgType>
							<Content><![CDATA[发送了位置消息]]></Content>
							</xml>`;
		case 'link':
			return `<xml>
							<ToUserName><![CDATA[${replyJson.FromUserName}]]></ToUserName>
							<FromUserName><![CDATA[${replyJson.ToUserName}]]></FromUserName>
							<CreateTime>${replyJson.CreateTime}</CreateTime>
							<MsgType><![CDATA[text]]></MsgType>
							<Content><![CDATA[发送了连接消息]]></Content>
							</xml>`;
		case 'music':
			return `<xml>
							<ToUserName><![CDATA[${replyJson.FromUserName}]]></ToUserName>
							<FromUserName><![CDATA[${replyJson.ToUserName}]]></FromUserName>
							<CreateTime>${replyJson.CreateTime}</CreateTime>
							<MsgType><![CDATA[music]]></MsgType>
							<Music><Title>< ![CDATA[猜你喜欢的音乐] ]></Title><Description>< ![CDATA[天籁] ]></Description><ThumbMediaId>< ![CDATA[media_id] ]></ThumbMediaId></Music>
							</xml>`;
		case 'tuwen':
			return `<xml>
							<ToUserName><![CDATA[${replyJson.FromUserName}]]></ToUserName>
							<FromUserName><![CDATA[${replyJson.ToUserName}]]></FromUserName>
							<CreateTime>${replyJson.CreateTime}</CreateTime>
							<MsgType><![CDATA[text]]></MsgType>
							<ArticleCount>2</ArticleCount><Articles><item><Title>< ![CDATA[title1] ]></Title> <Description>< ![CDATA[description1] ]></Description><PicUrl>< ![CDATA[picurl] ]></PicUrl><Url>< ![CDATA[url] ]></Url></item><item><Title>< ![CDATA[title] ]></Title><Description>< ![CDATA[description] ]></Description><PicUrl>< ![CDATA[https://jizhi.im/blog/post/implementing-a-cnn-for-text-classification-in-tensorflow] ]></PicUrl><Url>< ![CDATA[https://jizhi.im/index] ]></Url></item></Articles>
							</xml>`;
	}
};