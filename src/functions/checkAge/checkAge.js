
export function checkAge(age) {
	return (age > 18) || ('Батьки дозволили?')
}

export function checkAge2(age) {
	return (age > 18) ? true : ('Батьки дозволили?')
}
