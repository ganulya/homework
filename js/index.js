//№1
let arr1 = [];
let arr2 = [];

for (let i = 0; i < 10; i++) {
    arr1[i] = Math.round(Math.random()*10);
    arr2[i] = Math.round(Math.random()*10);
}
console.log(arr1);
console.log(arr2);

const arr3 = arr1.concat(arr2);


arr3.push(111, 222, 333);


let max = 0;
let min = 1; 
//я думала надо чтобы min = 0 тоже, но тогда ничего не получается, я попробовала единицу методом тыка и оно как бы работет, но я не очень понимаю почему

for (let i = 1; i < arr3.length; i++) {
    if (arr3[i] > max) {
        max = arr3[i];
    } else if (arr3[i] < min){
        min = arr3[i];
    }
}

let arr4 = [max, min];

console.log(arr3);
console.log(arr4);
