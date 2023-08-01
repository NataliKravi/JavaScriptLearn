import { checkAge, checkAge2 } from './checkAge'

test('Happy path', () => {
	const res = checkAge(22)

	expect(res).toEqual(true)
})

test('Error', () => {
	const res = checkAge(12)

	expect(res).toEqual('Батьки дозволили?')
})

test('Minus', () => {
	const res = checkAge(-12)

	expect(res).toEqual('Батьки дозволили?')
})

describe('checkAge2', () => {
	test('Happy path', () => {
		console.log(checkAge2(22))
	})

	test('Error', () => {
		console.log(checkAge2(12))
	})
})
