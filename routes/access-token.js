const request = require('request');
const fs = require('fs');

const get_access = function () {
	request.get('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx868510aba91b97ec&secret=08323118a8c497eb9576e468a7c6adee',(error, res, data) => {
		fs.writeFile('../config/access-token.txt',data,'utf8',function (err) {
			console.log(err)
		})
	});
};

setInterval(() => {
	get_access()
},5400000);

