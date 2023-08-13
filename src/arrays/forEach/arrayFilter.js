function fn(a, b) {
	return a < b
}
let val = []
for (let i = 0; i < 10; i++) {
	let a = Math.random()
	let b = Math.random()

	if (fn(a, b)) {
		val.push([a, b])
	}
}

console.log(val)
