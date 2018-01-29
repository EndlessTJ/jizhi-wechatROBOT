const request = require('request');

module.exports = function (data) {
	return new Promise((resolve, resject) => {
		var reply_text = '';
		request.post(
			'http://47.52.47.41:3000', {
				json: {
					text: data.text,
					sessionId: data.sessionId,
					contexts: [{
						name: 'userinfo',
						parameters: {},
					}],
				},
			},
			function (error, response, body) {
				if (!error && response.statusCode === 200 && body && body.result && body.result.fulfillment) {
					reply_text = body.result.fulfillment.speech;
				}
				// if (data.text.trim() === '') {
				// reply_text = '你干嘛一个字都不说呢？';
				// }
				reply_text = reply_text || '喔唷，发生错误了！';
				resolve(reply_text)
			}
		);
	})
};
