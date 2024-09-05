/** ЗАДАЧА 75 - Перебор символов строки
 *
 * Подсчитайте количество строчных гласных букв в строке.
 * Гласные буквы - a, e, i, o, u
 */

let vowelsCount = 0
const vowels = ['a', 'e', 'i', 'o', 'u']

const str = 'Today is the best day of my life'

// Напишите код здесь





const array = str.toLowerCase().split('')

for(let i = 0; i < array.length; i +=1){
    if(vowels.includes(array[i])){

        vowelsCount += 1

}
}


console.log(vowelsCount)


// 9
