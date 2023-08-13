/*Напишіть функцію camelize(str), 
яка перетворює такі рядки “my-short-string” в “myShortString”.
Тобто дефіси видаляються, а всі слова після них починаються з великої літери.

Приклади:
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';

P.S. Підказка: використовуйте split, щоб розбити рядок на масив символів,
потім переробіть все як потрібно та методом join зʼєднайте елементи в рядок.
*/

function toCamelCase(str) {
	return str[0].toUpperCase() + str.substring(1).toLowerCase()
}

//const delimeter = '-'//

let delimeter = /[^\w\s]/gi

export function camelize(str) {
	const words = str.split(delimeter).map((word, index) => {
		if (!index) {
			return word
		}

		return toCamelCase(word)
	})

	return words.join('')
}
