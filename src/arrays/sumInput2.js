export function sumInput(arr) {
	const initialValue = 0
	let haveFoundNonNumber = false
	return arr.reduce(function (acc, elArr) {
		if (typeof elArr !== 'number' || haveFoundNonNumber) {
			haveFoundNonNumber = true
			return acc
		}
		return acc + elArr
	}, initialValue)
}
