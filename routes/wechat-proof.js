const crypto = require('crypto');
module.exports = function(signature, timestamp, nonce, echostr) {
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
};