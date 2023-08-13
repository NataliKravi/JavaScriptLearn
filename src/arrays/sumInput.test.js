import { sumInput } from './sumInput2'

test('All values are numbers.', () => {
	const array = [1, 2, 3]

	expect(sumInput(array)).toEqual(6)
})

test('The last value is not a number.', () => {
	const array = [1, 2, 3, 'c']

	expect(sumInput(array)).toEqual(6)
})

test('The middle value is not a number.', () => {
	const array = [1, 2, 3, 'c', 5]

	expect(sumInput(array)).toEqual(6)
})

test('The first value is not a number.', () => {
	const array = ['c', 1, 2, 3, 'c', 5]

	expect(sumInput(array)).toEqual(0)
})
