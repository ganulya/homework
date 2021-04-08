//дополнительно
// #1
function eq(a, b) {
//		return a == b;
    	if (a == b) {
		return true;
	} else {
		return false;
	}
}

console.log(eq(46, 44));

//#2
function sum(d, e) {
    	if (d + e > 10) {
		return true;
	} else {
		return false;
	}
}

console.log(sum(2, 2));

//#3
function nORp(n) {
    if (n <= 0) {
        return true;
    } else {
        return false;
    }
}

console.log(nORp(-14));

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

function stonk(k) {
    let stonks = k * k;
    return stonks;
}

console.log(stonk(23));

//#6


function add(y) {
    let plus = y + y;
    return plus;
}

console.log(add(9));

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
