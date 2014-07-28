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
		"aim" : "",
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
	},
	{
		"_id" : "b4645d06fdc16b49f0cbea00",
		"aim" : "",
		"askable" : true,
		"company" : "Business Insider",
		"create_time" : "2009-01-14T20:05:08.804Z",
		"default_publication_id" : null,
		"description" : "<p>Henry Blodget is CEO and Editor-In Chief of <strong>Business Insider</strong>.</p>\r\n<p>A former top-ranked Wall Street analyst, Henry is also the host of Yahoo TechTicker, a Yahoo Finance video show viewed by several million people a month.&nbsp; He is often a guest on Bloomberg, CNN, MSNBC, NPR, and other networks.&nbsp; He has recently contributed to <em>The Atlantic</em>, <em>Slate, Newsweek International, The New York Times, Fortune, </em><em>New York</em>, the <em>Financial Times</em>, and other publications. He is the author of <em>The Wall Street Self-Defense Manual: A Consumer's Guide to Investing</em>.</p>\r\n<p>From 1994-2001, Henry worked on Wall Street at Prudential Securities, Oppenheimer &amp; Co., and Merrill Lynch.&nbsp; He ran Merrill's global Internet research practice and was ranked the No. 1 Internet and eCommerce analyst on Wall Street<em> by Institutional Investor</em> and Greenwich Associates. He was later keelhauled by then-Attorney General Eliot Spitzer over conflicts of interest between research and banking <a href=\"../henry-blodget-felix-salmon-henry-blodget-should-be-banned-from-the-industry-2009-11\" _mce_href=\"../henry-blodget-felix-salmon-henry-blodget-should-be-banned-from-the-industry-2009-11\">and booted out of the industry</a>.</p>\r\n<p>Henry went to Yale. He was born and raised in New York.</p>",
		"disclosure" : "Henry is an investor in Business Insider. He owns options and/or shares in Yahoo, eBay, Baidu, Amazon, Spark Networks, Microsoft, Bank of America, Gartner Group, Time Warner, and other companies, along with various equity and bond index funds. He does not trade frequently.",
		"email" : "hb@businessinsider.com",
		"full_title" : "is CEO and Editor-in-Chief of Business Insider.",
		"gender" : "M",
		"image" : "5b37544bdf3f924961414400",
		"is_active" : true,
		"is_former" : false,
		"is_seo" : false,
		"is_tbiresearch" : true,
		"label" : "Henry Blodget",
		"modify_time" : "2010-11-03T21:43:56.576Z",
		"modify_user" : "Henry Blodget",
		"name" : "henry-blodget",
		"post_count" : 3512,
		"rss" : "http://feeds.feedburner.com/sai_henry_blodget",
		"sms" : null,
		"synd_label" : "",
		"synd_rss_feed" : "",
		"synd_uri" : "",
		"title" : "CEO & Editor-in-Chief",
		"uri" : "",
		"view" : null,
		"widget_html" : ""
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