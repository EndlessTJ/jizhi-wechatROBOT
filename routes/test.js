


xml2js = require('xml2js');
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


var obj = { xml:
	{ ToUserName: 'sdfsdf' ,
		FromUserName:  'dsfdsf' ,
		CreateTime: '12345678' ,
		MsgType: 'sdfdsf' ,
		MsgId: [ '6515283651249362174' ] }  };
delete obj.xml.MsgId ;

var builder = new xml2js.Builder();
var xml = builder.buildObject(obj);
var newxml = xml.replace('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>','')


console.log(newxml.replace(/\s+/g, ""));
