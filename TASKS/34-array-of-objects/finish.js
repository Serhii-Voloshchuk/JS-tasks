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

const cars = [
    {
        carBrand: 'Mercedec',
        price: 30000,
        sAvailableForSale: true,
    },

    {
        carBrand: 'BMW',
        price: 42000,
        sAvailableForSale: false,
    },

    {
        carBrand: 'ZaZ',
        price: 3000,
        sAvailableForSale: false,
    },
]

const newCar = {
        carBrand: 'Mitsubisi',
        price: 80000,
        sAvailableForSale: true,
    }

    cars.push(newCar)

    console.log(cars[1].carBrand)