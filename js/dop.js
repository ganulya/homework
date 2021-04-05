//дополнительно
// #1
let a = 44;
let b = 44;


function eq() {
//		return a == b;
    	if (a == b) {
		return true;
	} else {
		return false;
	}
}

console.log(eq());

//#2
let d = 2;
let e = 2;

function sum() {
    	if (d + e > 10) {
		return true;
	} else {
		return false;
	}
}

console.log(sum());

//#3
let n = -54;

function nORp() {
    if (n <= 0) {
        return true;
    } else {
        return false;
    }
}

console.log(nORp());

//#4
const fruit = ['orange', 'banana', 'pear'];

console.log(fruit.length);

fruit.push('apple', 'pineapple');
fruit.unshift('grapefruit');

console.log(fruit);
console.log(fruit.length);

fruit.shift();
fruit.pop();

console.log(fruit);
console.log(fruit.length);

//#5
let k = 23;

function stonk() {
    let stonks = k * k;
    return stonks;
}

console.log(stonk());

//#6
let y = 6;

function add() {
    let plus = y + y;
    return plus;
}

console.log(add());

//#7
function week(day) {
    switch (day) {
        case 1:
            return "mon";
            break;
        case 2:
            return "tue";
            break;
        case 3:
            return "wed";
            break;
        case 4:
            return "thu";
            break;
        case 5:
            return "fri"; 
            break;
        case 6:
            return "sat";
            break;
        case 7:
            return "sun";
            break;
        default: 
            return "weekdays";
            break; 
    }
}
console.log(week(7));
