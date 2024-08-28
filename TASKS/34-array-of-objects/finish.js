/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */


const Cars = [
    {
        carBrand: 'Toyota',
        price: 22000,
        isAvailableForSale: true
    },
    {
        carBrand: 'BMW',
        price: 19000,
        isAvailableForSale: false
    },
    {
        carBrand: 'Opel',
        price: 15000,
        isAvailableForSale: true
    }

]

const newCar = {    
        carBrand: 'Mercedes',
        price: 32000,
        isAvailableForSale: true
    }

Cars.push(newCar)

console.log(Cars)