import { createCounter } from './counter'

describe('counter 2', () => {
	test('Happy Patch', () => {
		const counter = createCounter(5)

		expect(counter.increment()).toEqual(6)
		expect(counter.reset()).toEqual(5)
		expect(counter.decrement()).toEqual(4)
	})
})
