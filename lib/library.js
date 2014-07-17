function searcher (arr, queryType, query) {
	for (var i = 0; i < arr.length; i++){
		if (arr[i][queryType] === query) {
			return arr[i];
		}
	}
}

module.exports.searcher = searcher;