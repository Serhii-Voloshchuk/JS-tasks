/** ЗАДАЧА 35 - Итерация по свойствам объекта
 *
 * 1. Переберите все собственные свойства объекта
 *
 * 2. Если имя свойства (ключ) равно "key1" или "key3",
 * выведите значение свойства в консоль.
 */

const myObject = {
  key1: true,
  key5: 10,
  key3: 'abc',
  key4: null,
  key10: NaN,
}

let keys = Object.keys(myObject)//создаем массив ключей

console.log(keys)

for (const key of keys){
  if(key === 'key1'){
    console.log(myObject[key])
  } else if(key == 'key3') {
    console.log(myObject[key])
  }
}

// objectKeys.forEach((key) => {
//   if (key === 'key1' || key === 'key3') {
//     console.log(myObject[key])
//   }
// })