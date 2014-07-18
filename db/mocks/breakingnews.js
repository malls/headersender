var lib = require("../../lib/library");

var breakingnews = [];

function find(id){
	return lib.searcher(breakingnews, '_id', id);
}

function index(id){
	return lib.getIndex(breakingnews, '_id', id);
}

module.exports = {
	breakingnews: breakingnews,
	find: find,
	index: index
};