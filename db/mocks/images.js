var lib = require("../../lib/library");

var images = [];

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