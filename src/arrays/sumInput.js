export function sumInput(arr) {
	let sum = 0

	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] !== 'number') {
			return sum
		}

		sum += arr[i]
	}

	return sum
}
