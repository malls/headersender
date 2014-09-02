function searcher (arr, queryType, query) {
	for (var i = 0; i < arr.length; i++){
		if (arr[i][queryType] === query) {
			return arr[i];
		}
	}
	return false;
}

function getIndex (arr, queryType, query) {
	for (var i = 0; i < arr.length; i++){
		if (arr[i][queryType] === query) {
			return i;
		}
	}
	return false;
}

function updater (oldie, newbie) {
	for (var k in newbie) {
		oldie[k] = newbie[k];
	}
	return oldie;
}

function generateId () {
	return Math.random().toString(36).substring(8);
}

module.exports = {
	getIndex: getIndex,
	searcher: searcher,
	updater: updater,
	generateId: generateId
};