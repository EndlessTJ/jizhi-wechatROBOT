const crypto = require('crypto');
module.exports = function (req, res) {
	const token = 'jizhiwechatreply';
	const signature = req.query.signature;
	const echostr = req.query.echostr;
	const hash_array = [token, req.query.timestamp, req.query.nonce];
	hash_array.sort();
	const hash_str = hash_array.join('');
	const token_str = crypto.createHash('sha1').update(hash_str).digest('hex');
	token_str === signature ? res.send(echostr) : res.send('mismatch')
};
