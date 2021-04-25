//// #1 сортировка чисел в массиве по убыванию
//const arr = [4, 2, 6, 1, 3, 5, 7];
//
//const compareNumbers = arr.sort((prev, current) => {
//    return current - prev
//}); 
//
//console.log(compareNumbers);

//// #2 сортирует массив от ложных значений
//const arr = ['bla', NaN, 2, 6, null, 0, 1, undefined, 3, 'nope', '', 7];
//
//const filterFalse = arr.filter(item => item ? item : null); 
//
//console.log(filterFalse);

////3 функция propertyValue(array, key) кот принимает аргументы массив и имя свойстваб а замтем возвращает все значения этого свойства из массива объектов
//const users = [
//    {
//        name: 'lex',
//        age: 31
//    },
//    {
//        name: 'max',
//        age: 25
//    },
//];
//
//const propertyValue = (array, key) => array.map( item => item[key]);
//const newArr = propertyValue(users, 'age');
//console.log(newArr);

//// #4 массив строк > массив с длинами строк хз не работает 
//const myStr = ['bla', 'hellno', 'night', 'nope'];
//const getLenghs = str => str.split(' ').reduce( (acc, current) => ([...acc, current.length]), []);
//const lengthArr = getLenghs(myStr);
//console.log(lengthArr);

//// #6 массив строк > массив с длинами строк MAP
//const arr = ['bla', 'hellno', 'night', 'nope'];
//
//let howlong = arr.map(item => item.length);
//
//console.log(howlong);

//// 7 введенные в инпут числа заносятся в массив по нажатию на кнопку, по нажатию на другую кнопку выводится отсортированный массив на экран

const result = document.getElementById('result');
const inp = document.getElementById('inp');
let arr = [];

const add = () => {
    arr.push(+inp.value);
    inp.value = '';
}

const show = () => {
    result.innerHTML = arr.sort( (prev, current) => prev > current ? 1 : -1).toString();
}
