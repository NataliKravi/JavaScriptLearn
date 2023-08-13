import { filterRangeInPlace } from './filterRangeInPlace'

test('All values are numbers.', () => {
	const arr = [5, 3, 8, 1]
	filterRangeInPlace(arr, 1, 4)
	expect(arr).toEqual([3, 1])
})
