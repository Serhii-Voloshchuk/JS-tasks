/** ЗАДАЧА 80 - Сумма положительных и отрицательных чисел
 *
 * 1. Создайте функцию "sumPositiveNegative", которая принимает массив
 * и суммирует отдельно положительные и отрицательные числа.
 *
 * 2. Функция должна вернуть такой объект:
 *  {
 *    positive: 74, // сумма всех положительных чисел
 *    negative: -54 // сумма всех отрицательных чисел
 *  }
 */



const nums = [10, -12, 30, -1, -8, 0, 14, -33, 20]

// Создайте функцию "sumPositiveNegative" здесь

// const sumPositiveNegative = (numbers) => {
//     let sumPositive = 0;
//     let sumNegative = 0;
//     for (const number of numbers){
//         if(number >= 0){
//          sumPositive += number
//         }

//         sumNegative += number

//     }

//     return {
//         sumNegative,
//         sumPositive
//     }
// }



const sumPositiveNegative = (numbers) => {
return numbers.reduce((acc, number) => {
    if(number > 0){
        return {
            ...acc,
            positive: acc.positive + number
        }

        
    }
    return {
        ...acc,
        negative: acc.negative + number
    }
 



},{positive: 0, negative:0})
}

const result = sumPositiveNegative(nums)


console.log(result)
// { positive: 74, negative: -54 }
