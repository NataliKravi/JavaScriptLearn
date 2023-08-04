import { customExpect } from './expect'

test('Happy Patch', () => {
	const res = customExpect(5).toBe(5)

	expect(res).toEqual(true)
})

test('Equal', () => {
	expect(() => customExpect(5).toBe(null)).toThrow('Not Equal')
})

test('Happy Patch2', () => {
	expect(() => customExpect(5).notToBe(5)).toThrow('Equal')
})

test('Not Equal', () => {
	const res = customExpect(5).notToBe(null)

	expect(res).toEqual(true)
})
