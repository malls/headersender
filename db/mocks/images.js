var lib = require("../../lib/library");

var images = [
	{
		"_id" : "528d394b4245a9010f0041a7",
		"uploadDate" : "2013-11-20T22:35:55.271Z",
		"length" : 728139,
		"size" : 728139,
		"filename" : "2010-11-06-500px.png",
		"caption" : "",
		"contentType" : "image/png",
		"description" : "2010 11 06 500px",
		"tokens" : [
			"500px"
		],
		"link" : "",
		"source" : "d",
		"type" : "image",
		"create_user" : "mpell",
		"height" : 702,
		"width" : 500,
		"tags" : [ ],
		"single_use" : false,
		"is_infographic" : false,
		"chunkSize" : 262144,
		"md5" : "f28aa8c34526947fca706342a1cb1209"
	},
	{
		"_id" : "528d39504245a9090f0041a7",
		"uploadDate" : "2013-11-20T22:36:00.717Z",
		"length" : 14933,
		"size" : 14933,
		"filename" : "2010-11-06-500px-1.png",
		"caption" : "",
		"contentType" : "image/jpeg",
		"description" : "2010 11 06 500px",
		"tokens" : [
			"500px"
		],
		"link" : "",
		"source" : "d",
		"type" : "image",
		"create_user" : "mpell",
		"height" : 299,
		"width" : 398,
		"tags" : [ ],
		"original_id" : "528d394b4245a9010f0041a7",
		"single_use" : false,
		"is_infographic" : false,
		"chunkSize" : 262144,
		"md5" : "ef848c0cc904a4e9900d7ddb9be8b868"
	},
	{
		"_id" : "528d39b04245a9110f0041a7",
		"uploadDate" : "2013-11-20T22:37:36.751Z",
		"length" : 11336,
		"size" : 11336,
		"filename" : "2010-11-06-500px-2.png",
		"caption" : "",
		"contentType" : "image/jpeg",
		"description" : "2010 11 06 500px",
		"tokens" : [
			"500px"
		],
		"link" : "",
		"source" : "d",
		"type" : "image",
		"create_user" : "mpell",
		"height" : 256,
		"width" : 341,
		"tags" : [ ],
		"original_id" : "528d394b4245a9010f0041a7",
		"single_use" : false,
		"is_infographic" : false,
		"chunkSize" : 262144,
		"md5" : "8901b5556747fbbfa6b095476681d54f"
	}
];

function find(id){
	return lib.searcher(images, '_id', id);
}

function index(id){
	return lib.getIndex(images, '_id', id);
}

module.exports = {
	images: images,
	find: find,
	index: index
};