const crypto = require('crypto');


module.exports = routes = (app) => {
	app.get('/wechatreply', require('./wechatAPI/wechat-proof')); // 验证身份
	app.post('/wechatreply',require('./wechatAPI/receive')) //发送消息
};
