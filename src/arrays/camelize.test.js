import { camelize } from './camelize'

test('Сorrect two-word sentence name.', () => {
	const arg = 'background-color'
	const res = camelize(arg)
	expect(res).toEqual('backgroundColor')
})

test('Сorrect three-word sentence name.', () => {
	const arg = 'list-style-image'
	const res = camelize(arg)
	expect(res).toEqual('listStyleImage')
})

test('Correct name if the first value is a delimiter character.', () => {
	const arg = '-webkit-transition'
	const res = camelize(arg)
	expect(res).toEqual('WebkitTransition')
})

test('Correct name with the custom delimiter character.', () => {
	const arg = 'background*color'
	const res = camelize(arg, { delimiter: '*' })
	expect(res).toEqual('backgroundColor')
})
