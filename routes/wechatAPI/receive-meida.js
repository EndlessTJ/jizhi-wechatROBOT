const request = require('request');
const fs = require('fs');
const access = fs.readFileSync('../config/access-token.txt','utf8');
const token = JSON.parse(access).access_token
const url = 'https://api.weixin.qq.com/cgi-bin/material/batchget_material?access_token='+token
request.post(
	url, {
		json: {
			"type":'voice',
			"offset":0,
			"count":5
		},
	},
	function (error, response, body) {
		console.log(body)
		console.log(error)
	}
);
