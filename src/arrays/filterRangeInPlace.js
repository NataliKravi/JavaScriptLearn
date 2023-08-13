export function filterRangeInPlace(arr, a, b) {
	// arr = [5, 3, 8, 1]
	// a = 1
	// b = 4

	for (let i = 0; i < arr.length; i++) {
		let el = arr[i]
		if (el < a || el > b) {
			arr.splice(i, 1)
		}
	}
}
