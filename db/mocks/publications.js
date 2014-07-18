var lib = require("../../lib/library");

var publications = [
	{
		"_id" : "4bf1a3557f8b9a3b03180400",
		"label" : "Shares",
		"url" : "http://www.shares.biz/",
		"create_time" : "2010-05-17T20:13:09.859Z",
		"create_user" : "Grace Carlson",
		"modify_time" : "2010-10-07T17:21:34.747Z",
		"modify_user" : "Grace Carlson",
		"is_syndicated" : true,
		"synd_rss_feed" : "http://www.shares.biz/feed/",
		"synd_num_posts" : "5",
		"synd_img_id" : "4cae019e7f8b9ac606100400"
	},
	{
		"_id" : "4bf40b247f8b9aea149b0400",
		"label" : "Yyahoo blog",
		"url" : "http://blog.yyahoo.com",
		"create_time" : "2010-05-19T16:00:36.081Z",
		"create_user" : "Nic Starr",
		"modify_time" : "2011-01-12T15:46:19.208Z",
		"modify_user" : "Dan Sector",
		"is_syndicated" : true,
		"synd_rss_feed" : "http://blog.yyahoo/feed/",
		"synd_num_posts" : "3",
		"synd_img_id" : "4d23567849e2ae7447020000"
	},
	{
		"_id" : "4bf431217f8b9a3c1d630000",
		"label" : "Magnifier.net",
		"url" : "http://www.magnifier.net/",
		"create_time" : "2010-05-19T18:42:41.698Z",
		"create_user" : "Danielle Fargo",
		"modify_time" : "2010-05-19T18:42:41.698Z",
		"modify_user" : "Danielle Fargo"
	}
];

function find(id){
	return lib.searcher(publications, '_id', id);
}

function index(id){
	return lib.getIndex(publications, '_id', id);
}

module.exports = {
	publications: publications,
	find: find,
	index: index
};