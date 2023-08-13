/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

var filter = function (arr, fn) {
	let val = []
	for (i = 0; i < arr.length; i++) {
		if (fn(arr[i], i)) {
			val.push(arr[i])
		}
	}
	return val
}
