var lib = require("../../lib/library");

var categories = [
	{
		"_id" : "06645d069b03924900acb800",
		"type" : "tag",
		"label" : "Spain",
		"name" : "spain",
		"create_time" : "2009-02-10T22:45:47.705Z"
	},
	{
		"_id" : "06645d069b03924901a7b800",
		"type" : "company",
		"label" : "Havas",
		"name" : "havas",
		"create_time" : "2009-02-10T22:45:47.415Z"
	},
	{
		"_id" : "06645d069b03924901a8b800",
		"type" : "company",
		"label" : "Touradji Capital Management",
		"name" : "touradji-capital-management",
		"create_time" : "2009-02-10T22:45:47.486Z"
	},
	{
		"_id" : "06645d069b03924901a9b800",
		"type" : "tag",
		"label" : "Ciprianis",
		"name" : "ciprianis",
		"create_time" : "2009-02-10T22:45:47.545Z"
	},
	{
		"_id" : "06645d069b03924901aab800",
		"type" : "tag",
		"label" : "In-Game Advertising",
		"name" : "in-game-advertising",
		"create_time" : "2009-02-10T22:45:47.613Z"
	}
];

function find(id){
	return lib.searcher(categories, '_id', id);
}

function index(id){
	return lib.getIndex(categories, '_id', id);
}

module.exports = {
	categories: categories,
	find: find,
	index: index
};