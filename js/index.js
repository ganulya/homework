//№1
let arr1 = [];
let arr2 = [];

for (let n = 0; n < 10; n++) {
    arr1[n] = Math.round(Math.random()*10);
    arr2[n] = Math.round(Math.random()*10);
}
console.log(arr1);
console.log(arr2);

const arr3 = arr1.concat(arr2);


arr3.push(111, 222, 333);


for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] % 2 == 0) {
        arr3[i] *= 2;
    }
}

let max = arr3[0];
let min = arr3[0]; 

for (let j = 0; j < arr3.length; j++) {
    if (arr3[j] > max) {
        max = arr3[j];
    } else if (arr3[j] < min) {
        min = arr3[j];
    }
}

let arr4 = [max, min];


console.log(arr3);
console.log(arr4);
