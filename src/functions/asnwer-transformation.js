// transforms string to array with objects
export function strToObjsArr(str) {
	let objsArr = [];

	for (let i = 0; i < str.length; i++) {
		objsArr.push({ id: i, name: str[i]});
	}

	return objsArr;
}

// transforms array with objects to single string
export function objsArrToString(objsArr) {
	let str = '';

	for (let i = 0; i < objsArr.length; i++) {
		str = str + objsArr[i]['name']
	}

	return str;
}

// randomizes position of elements in the characters array
export function randomize(arr) {
	var curIndx = arr.length, tempVal, rndIndx;

	while (curIndx !== 0) {
		rndIndx = Math.floor(Math.random() * curIndx);
		curIndx -= 1;

		// swaps arr's values
		tempVal = arr[curIndx];
		arr[curIndx] = arr[rndIndx];
		arr[rndIndx] = tempVal;
	}

	return arr;
}
