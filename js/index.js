//#1
const arr1 = [1, 2, 3, 4, 5];
arr1.splice(1, 2);
console.log(arr1);

//#2
const arr2 = [1, 2, 3, 4, 5];
arr2.reverse();
console.log(arr2);

//#3
const arr3 = [11, 22, 33, 44, 55];
const newArr3 = [];

for (let i = arr3.length - 1; i >= 0; i--) {
    newArr3.push(arr3[i]);
}

console.log(arr3);
console.log(newArr3);

//#4 есть вопрос
const arr6 = [6, 17, 8, 7, 10];
const arr7 = [33, 1, 78, 1, 0];

function compareeArrs() {
    
    for(i = 0; i < arr6.length; i++)
        if (arr6[i] == arr7[i]) {
                return true;    
            } else {
                return false;  
            }
}

console.log(compareeArrs());

//#5 не понимаю как сделать чтобы было кратно и 3 и 5 одновременно
let arr8 = [];

for (let i = 0; i <= 99; i++) {
    
    arr8[i] = i + 1;
    
    if (arr8[i] % 3 == 0) {
        arr8[i] = 'fizz';
    } else if (arr8[i] % 5 == 0) {
        arr8[i] = 'buzz';
    } 
}
console.log(arr8);



















