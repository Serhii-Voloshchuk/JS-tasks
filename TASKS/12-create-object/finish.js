/** ЗАДАЧА 12 - Создание объекта
 *
 * 1. Создайте объект с тремя свойствами:
 *  - name
 *  - surname
 *  - favoriteNumber
 *
 * 2. Выведите в консоль строку
 * "My name is <name> <surname> and my favorite number is <favoriteNumber>"
 */

const obj = {
    name: 'Serhii',
    surname: 'Voloshchuk',
    favoriteNumber: 9
}

const {name, surname, favoriteNumber} = obj

console.log(`My name is ${name} ${surname} and my favorite number is ${favoriteNumber}`)