var lib = require("../../lib/library");

var verticals = [
	{
		"_id" : "53a882d5f6f87e138fe89ef4",
		"name" : "yourmoney",
		"shortname" : "yourmoney",
		"label" : "Your Money",
		"topic" : "Your Money",
		"navlabel" : "Your Money",
		"fm_section" : "yourmoney",
		"rss_uri" : "http://feeds.feedburner.com/businessinsider/yourmoney",
		"facebook" : "businessinsider.yourmoney",
		"subverticals" : [
			"Investing",
			"Spending",
			"Family",
			"Career",
			"Home"
		],
		"newsletters" : {
			"Your Money Select" : "your_money_select",
			"Smart Investor" : "smart_investor"
		},
		"inactive" : false,
		"hidden" : false,
		"twitter" : {
			"www" : "BIYourMoney",
			"test" : "bi_test"
		},
		"twitter_pass" : {
			"www" : "password123",
			"test" : "password123"
		},
		"redirect_aliases" : null,
		"contributor_vertical" : null,
		"color" : "cf4e00",
		"super_vertical" : null,
		"visual_parent_vertical" : "clusterstock",
		"type" : "regular",
		"description" : "What You Need To Know About Personal Finance"
	},
	{
		"_id" : "53a882d5f6f87e138fe89ef8",
		"name" : "greensheet",
		"shortname" : "green",
		"label" : "Green Sheet",
		"topic" : "Green",
		"navlabel" : "Green Sheet",
		"fm_section" : "greentech",
		"rss_uri" : "http://feeds2.feedburner.com/greensheet",
		"facebook" : "businessinsider",
		"subverticals" : [
			"Oil",
			"Solar",
			"Wind",
			"Nukes",
			"Cars",
			"Garbage",
			"Climate Change"
		],
		"newsletters" : {
			"Business Insider Select" : "businessinsider_select"
		},
		"inactive" : false,
		"hidden" : true,
		"twitter" : {
			"www" : "GreenSheet",
			"test" : "bi_test"
		},
		"twitter_pass" : {
			"www" : "password123",
			"test" : "password123"
		},
		"redirect_aliases" : null,
		"contributor_vertical" : null,
		"color" : "cf4e00",
		"super_vertical" : null,
		"visual_parent_vertical" : null,
		"type" : "regular",
		"description" : null
	}

];

function find(id){
	return lib.searcher(verticals, '_id', id);
}

function index(id){
	return lib.getIndex(verticals, '_id', id);
}

module.exports = {
	verticals: verticals,
	find: find,
	index: index
};