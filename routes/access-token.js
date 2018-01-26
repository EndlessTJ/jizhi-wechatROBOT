const request = require('request');
const Access_token = {};
const get_access = function () {
	return new Promise((resolve, reject) => {
		request.get('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx868510aba91b97ec&secret=08323118a8c497eb9576e468a7c6adee',function (error, res, data) {
			resolve(data)
		})
	});
};

// 保存promise对象方便被动调用获取access_token
Access_token.promiseFn = get_access;

// 每半小时获取一次access_token
setInterval(() => {
	get_access().then((val) => {
		Access_token.Token = val;
	}).catch((err) => {
		console.log('发生错误',err)
	});
},5400000);

// 初始化acess_token
get_access().then((val) => {
	Access_token.Token = val;
}).catch((err) => {
	console.log('发生错误',err)
});
module.exports = Access_token;

