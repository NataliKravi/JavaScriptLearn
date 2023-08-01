import { forEach } from './forEach'

describe('forEach', () => {
	describe('Happy path', () => {
		it('Should iterate over an array', () => {
			const array = [1, 2, 3]
			const callback = jest.fn()

			forEach(array, callback)

			expect(callback).toHaveBeenCalledTimes(3)
			expect(callback).toHaveBeenCalledWith(1, 0, array)
			expect(callback).toHaveBeenCalledWith(2, 1, array)
			expect(callback).toHaveBeenCalledWith(3, 2, array)
		})

		it('Should iterate over an array with a custom start index', () => {
			const array = [1, 2, 3]
			const callback = jest.fn()

			forEach(array, callback, 1)

			expect(callback).toHaveBeenCalledTimes(2)
			expect(callback).toHaveBeenCalledWith(2, 1, array)
			expect(callback).toHaveBeenCalledWith(3, 2, array)
		})
	})
})
