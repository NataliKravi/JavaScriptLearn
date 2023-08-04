/**
 * @param {string} val
 * @return {Object}
 */

export var customExpect = function (current) {
	return {
		toBe(expected) {
			if (current === expected) {
				return true
			} else {
				throw new Error('Not Equal')
			}
		},

		notToBe(expected) {
			if (current !== expected) {
				return true
			} else {
				throw new Error('Equal')
			}
		},
	}
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
