/** ЗАДАЧА 14 - Строка заглавными буквами
 *
 * 1. Создайте переменную и присвойте ей любую строку
 *
 * 2. Убедитесь что значение этой переменной НЕ является экземпляром String
 * Используйте для этого оператор "instanceof"
 *
 * 3. Убедитесь что значение этой переменной имеет тип "string"
 *
 * 4. Создайте другую переменную и ее значением должно быть значение
 * первой переменной заглавными буквами
 *
 * 5. Выведите в консоль значение второй переменной
 */


const myString = 'Developer'

console.log(myString instanceof String)

const myStringCheckTwo = typeof (myString)

console.log(myStringCheckTwo)

const myStringToUpperCase = myString.toUpperCase();

console.log(myStringToUpperCase)

// Создание єкземпляра String
// const newString = new String('Serhii')

// console.log(newString instanceof String)

// console.log(typeof (newString))

// console.log(newString.toUpperCase())









