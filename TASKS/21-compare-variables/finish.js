/** ЗАДАЧА 21 - Сравнение переменных
 *
 * 1. Сравните 2 переменные "myVariable1" и "myVariable2".
 * Выведите в консоль "true", если значение "myVariable1" меньше или равно "myVariable2".
 *
 * 2. Преобразуйте обе переменные в числа перед сравнением.
 */

let myVariable1 = 10
let myVariable2 = '5'

// Напишите код здесь

const solution1 = Number(myVariable1) <= Number(myVariable2) ? true : false
console.log(solution1)
myVariable1 = '20'
myVariable2 = 100

// Напишите код здесь
const solution2 = Number(myVariable1) <= Number(myVariable2) ? true : false
console.log(solution2)