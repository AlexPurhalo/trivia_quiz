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
