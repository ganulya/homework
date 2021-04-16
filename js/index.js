//массив не с объектами, а с массивами(массив массивов)
const users = [
    {
        name: 'leha',
        age: 16,   
    },
    {
        name: 'rob',
        age: 19,   
    },
    {
        name: 'kate',
        age: 20,   
    }
    
]

const newArr = [];
newArr.push(Object.keys(users));
newArr.push(Object.values(users));
console.log(newArr);

//#1 no
let input = document.getElementById('inpV');
let changeNum = document.getElementById('change');

function colonOdd(num) {
    
}

//#2 & #3
let arr = ['dwtw', 23, 5, 11, 13, 33, 'sbtwotl', 93];

function getFirst(array, n) {
    let arrFirst = array.splice(0, n);
    console.log(arrFirst);
}

getFirst(arr, 1);

function getLast(array, n) {
    let arrLast = array.splice(-n);
    console.log(arrLast);
}

getLast(arr, 1);


//#5 
let aarr = [4, 4];
let sum = 0;

function sumOfSquares(arr) {
    for (let j = 0; j < aarr.length; j++) {
        sum += Math.pow(aarr[j], 2);
    }
    console.log(sum);
}
sumOfSquares(arr);

//#6  
const ppl0 = [
    {
        name: 'Leha',
        age: 27
    },
    {
        name: 'Max',
        age: 25
    },
    {
        name: 'Elvis',
        age: 31
    },
    {
        name: 'Roll',
        age: 30
    },
]
console.table(ppl0);

let userAge = [];

for (let r = 0; r < ppl0.length; r++) {
    
    if (ppl0[r].age < 30) {
        userAge.push(ppl0[r]);
    }
}

console.log(userAge);

//#7 

const ppl = [
    {
        name: 'Leha',
        age: 27
    },
    {
        name: 'Max',
        age: 25
    },
    {
        name: 'Elvis',
        age: 31
    },
    {
        name: 'Roll',
        age: 30
    },
]

console.table(ppl);

function propertyValue(array, key) {
    let valueArr = [];
    
    for (let k = 0; k < array.length; k++) {
        valueArr.push(array[k][key])
    }
    console.log(valueArr);
}

propertyValue(ppl, 'age');
