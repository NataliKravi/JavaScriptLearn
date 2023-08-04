let menu = {
	width: 200,
	height: 300,
	title: 'Моє меню',
}
function multiplyNumeric(obj) {
	for (let key in obj) {
		if (typeof obj[key] == 'number') {
			obj[key] *= 2
		}
	}
}

multiplyNumeric(menu)
