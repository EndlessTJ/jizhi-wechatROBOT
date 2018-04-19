const request = require('request');
const fs = require('fs');
const giftcardData = JSON.parse(fs.readFileSync(`${__dirname}/giftcard.json`, 'utf8'));
let outCount = parseInt(fs.readFileSync(`${__dirname}/count.txt`, 'utf8'));

module.exports = function (data) {
	if (data.text === '礼品卡'){// 去掉空格
		return new Promise((resolve, reject) => {
			var reply_text = '';
			if (outCount === 2000) {
				reply_text = '礼品卡已领完'
			} else {
				reply_text = giftcardData[outCount];
				outCount += 1;
				fs.writeFile(`${__dirname}/count.txt`, outCount, 'utf8', function () {});
			}
			resolve(reply_text)
		})
	} else {
		return new Promise((resolve, reject) => {
			let reply_text = '';
			const requestData = {
				"reqType":0,
				"perception": {
					"inputText": {
						"text": data.text
					}
				},
				"userInfo": {
					"apiKey": "83a4a9c76bc14ab888041f72ff47aa88",
					"userId": "蛋蛋"
				}
			};
			console.log('发送参数',JSON.stringify(requestData))
			request({
					url: 'http://openapi.tuling123.com/openapi/api/v2',
					method: "POST",
					headers: {
						"content-type": "application/json",
						'Accept-Charset': 'utf-8'
					},
					body: JSON.stringify(requestData)
				},
				function (error, response, body) {
				console.log('结果',body)
					if (!error && response.statusCode === 200 && body && body.result && body.result.fulfillment) {
						reply_text = body.result.fulfillment.speech;
					}
					if (error) {
						console.log('出错了',error)
					}
					if (data.text.trim() === '') {
						reply_text = '你干嘛一个字都不说呢？';
					}
					reply_text = reply_text || '喔唷，发生错误了！';
					resolve(reply_text)
				}
			);
		})
	}

};
