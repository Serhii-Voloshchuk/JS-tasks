/** ЗАДАЧА 36 - Случайные числа
 *
 * 1. Cгенерируйте новое 4-значное случайное число.
 * Диапазон для случайного числа 1000 - 9999.
 *
 * 2. Убедитесь, что это новое случайное число не совпадает ни с одним из чисел в массиве myNumbers.
 *
 * 3. Если совпадает, вам нужно сгенерировать новое 4-значное число.
 *
 * 4. Если совпадений нет (новый номер уникален), добавьте его в массив myNumbers.
 *
 * ВАЖНО: В решении задачи используйте функции:
 *  - для генерации случайного числа в заданном диапазоне
 *  - для добавления случайного числа в массив с возвратом измененного массива
 */



const MIN = 1000
const MAX = 9999

const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351]

const getRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


const addRandomNum = (arr, min, max)=>{
    let newRandomNum
    const updatedArr = [...arr]

    do{
        newRandomNum = getRandomNum(min, max)
    } while(updatedArr.includes(newRandomNum))

        updatedArr.push(newRandomNum)
        return updatedArr
}




const randomNumber = addRandomNum(myNumbers, MIN, MAX)

console.log('ORIGIN NUMBERS:', myNumbers)
console.log('UPDATED ARRAY:', randomNumber)





/**
 * 
 * МОЕ РЕШЕНИЕ =)
 * function generateRandomNumber(){

    return Math.floor(Math.random() * 9000) + 1000 //функция для создания нового случайного числа
    
    }
    
    function addArrayNum(){
    
        let randomNum = generateRandomNumber(); //задаем переменную для хранения нового случайного числа
    
        while(myNumbers.includes(randomNum)){ //циклом перебираем массив и проверяем на вхождения нового числа в массив. Цикл while будет выполняться пока значение истинно True
           randomNum = generateRandomNumber()
        }
       
            myNumbers.push(randomNum)
    
            return randomNum
        }
    

const newRundomNum =  addArrayNum()

console.log(newRundomNum);

console.log(myNumbers)
 *  
 */


