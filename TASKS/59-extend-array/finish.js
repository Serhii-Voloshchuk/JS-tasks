/** ЗАДАЧА 59 - Расширение массивов
 *
 * 1. Создайте новый класс "ExtendedArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте в новый класс два пользовательских метода:
 *  - "sum" - он должен возвращать сумму всех элементов массива
 *  - "onlyNumbers" - должен возвращать новый массив,
 * который будет содержать только числа из исходного массива
 *
 * 3. Создайте несколько экземпляров нового класса "ExtendedArray"
 * и протестируйте оба метода "sum" и "onlyNumbers".
 *
 * 4. Убедитесь, что остальные методы массивов такие,
 * как "forEach", "map" также доступны
 */


class ExtendedArray {
        constructor(array){
            this.array = array
        }

    sum(){
         return this.array.reduce((acc, el) => acc += el, 0)
    }

    onlyNumbers(){
        return this.array.filter((el) => typeof el === 'number')
    }

 }

 const newArray = new ExtendedArray([1, 2, 3, 4, 5, 6])

 const someArray = new ExtendedArray([1, 2, 3, 'wpgjpwogj'])

 console.log(newArray)

 console.log(newArray.sum())
 console.log(newArray.onlyNumbers())

 console.log(someArray)

 console.log(someArray.sum())
 console.log(someArray.onlyNumbers())