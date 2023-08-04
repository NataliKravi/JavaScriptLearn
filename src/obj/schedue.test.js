import { isEmpty } from './schedue'

describe('Schedue 1', () => {
	test('Happy Patch', () => {
		expect(isEmpty({})).toEqual(true)
	})
	test('Not Happy Patch', () => {
		expect(
			isEmpty({
				name: 'Ivan',
			}),
		).toEqual(false)
	})
})
