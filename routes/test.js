


// xml2js = require('xml2js');
//
// var obj = { xml:
// 	{ ToUserName: [ 'sdfsdf' ],
// 		FromUserName: [ 'dsfdsf' ],
// 		CreateTime: [ '12345678' ],
// 		MsgType: [ 'sdfdsf' ],
// 		Content: [ '4534543' ] } };
//
//
// var builder = new xml2js.Builder();
// var xml = builder.buildObject(obj);
// console.log(xml)
/*var parseString = require('xml2js').parseString;
var xml = "<xml> <ToUserName>sdfsdf</ToUserName> <FromUserName>dsfdsf</FromUserName> <CreateTime>12345678</CreateTime> <MsgType>sdfdsf</MsgType> <Content>4534543</Content> </xml>"
parseString(xml, function (err, result) {
	console.dir(result);
});*/
var fs = require('fs'),
	xml2js = require('xml2js');
parser = new xml2js.Parser();
var json = parser.parseString("<xml> <ToUserName>sdfsdf</ToUserName> <FromUserName>dsfdsf</FromUserName> <CreateTime>12345678</CreateTime> <MsgType>sdfdsf</MsgType> <Content>4534543</Content> </xml>")
console.log(json)

var obj = { xml:
	{ ToUserName: 'sdfsdf' ,
		FromUserName:  'dsfdsf' ,
		CreateTime: '12345678' ,
		MsgType: 'sdfdsf' ,
		Content: '4534543'  } };

var builder = new xml2js.Builder();
var xml = builder.buildObject(obj);
console.log(xml)