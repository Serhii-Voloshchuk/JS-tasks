/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */

const firstName = 'Serhii'

const secondName = 'Voloshchuk'

const myJob = 'engeneer'


//OPTION 1
const concatString1 = 'My name is ' + firstName + ' ' + secondName + ' ' + myJob;

console.log(concatString1)

//OPTION 2 MORE COMMON

const concatString2 = `My name is ${firstName} ${secondName} ${myJob}`

console.log(concatString2)