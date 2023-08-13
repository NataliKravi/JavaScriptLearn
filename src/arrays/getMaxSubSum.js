function getMaxSubSum(arr) {
	let maxSubSum = 0
	for (i = 0; i < arr.length; i++) {
		let sum = 0
		for (j = i; j < arr.length; j++) {
			sum += arr[j]
			maxSubSum = Math.max(maxSubSum, sum)
		}
	}
	return maxSubSum
}
