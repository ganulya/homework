//1

let min = 23;

if (min < 15) {
    console.log('first quarter')
} else if (min > 15, min < 30) {
    console.log('second quarter')
} else if (min > 30, min < 45) {
    console.log('third quarter')
} else if (min > 45, min < 60) {
    console.log('fourth quarter')
}

//2.1

let num = 1;

if (num === 1){
    console.log('winter')
} else if (num === 2){
    console.log('spring')
} else if (num === 3){
    console.log('summer')
} else if (num === 4){
    console.log('autumn')
}
   
//2.2
    
let num = 4;

switch (num) {
    case 1:
        console.log('winter');
        break;
    case 2:
        console.log('spring');
        break;
    case 3:
        console.log('summer');
        break;
    case 4:
        console.log('autumn');
        break;
    default: 		
        сonsole.log('seasons');
        break;
}

//3 вроде как поняла в итоге

let x = 0;

for (let i = 1; i <= 100; i++){
    x += i;
//  x = x + i;
}   console.log(x); 










