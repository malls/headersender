function searcher (arr, queryType, query) {
	for (var i = 0; i < arr.length; i++){
		if (arr[i][queryType] === query) {
			return arr[i];
		}
	}
}

function getIndex (arr, queryType, query) {
	for (var i = 0; i < arr.length; i++){
		if (arr[i][queryType] === query) {
			return i;
		}
	}
}

function updater (oldie, newbie) {
	for (var k in newbie) {
		oldie[k] = newbie[k];
	}
	return oldie;
}

module.exports = {
	getIndex: getIndex,
	searcher: searcher,
	updater: updater
};