var lib = require("../../lib/library");

var authors = [
	{
		"_id" : "4ae5d46b000000000028da83",
		"label" : "Erin Jacobs",
		"title" : "writer",
		"company" : "The  Business Insider",
		"full_title" : "",
		"gender" : "F",
		"is_active" : true,
		"is_seo" : false,
		"description" : "",
		"disclosure" : "",
		"widget_html" : "",
		"email" : "erin@test.net",
		"aim" : "Erin2012",
		"phone_mobile" : "",
		"phone_work" : "",
		"uri" : "",
		"rss" : "",
		"twitter" : "erin2012",
		"name" : "erin-jacobs",
		"create_time" : "2009-10-26T16:55:07.786Z",
		"create_user" : "Erin Jacobs",
		"modify_time" : "2010-01-29T15:47:43.560Z",
		"modify_user" : "Lauren Anderson",
		"image" : "4b63031f000000000039ba92",
		"is_tbiresearch" : false
	},
	{
		"_id" : "4ae64f4c0000000000d0c783",
		"label" : "Mark Auerbrey",
		"title" : "market analyst",
		"company" : "New Deal Co",
		"full_title" : "a market analyst and contributor",
		"gender" : "M",
		"is_active" : false,
		"is_seo" : false,
		"image" : "4b4243a00000000000f59b48",
		"description" : "",
		"disclosure" : "",
		"widget_html" : "",
		"email" : "",
		"aim" : "",
		"phone_mobile" : "",
		"phone_work" : "",
		"uri" : "http://www.anewdeal.co/",
		"rss" : "",
		"twitter" : "",
		"name" : "mark",
		"create_time" : "2009-10-27T01:39:24.267Z",
		"create_user" : "Joey Weis",
		"modify_time" : "2010-01-04T19:38:08.662Z",
		"modify_user" : "Guy Lin",
		"is_tbiresearch" : false
	}
]

function find(id){
	return lib.searcher(authors, '_id', id);
}

function index(id){
	return lib.getIndex(authors, '_id', id);
}

module.exports = {
	authors: authors,
	find: find,
	index: index
};