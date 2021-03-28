let result = document.getElementById('result');


function display(value) {
    result.innerHTML += value;   
}

function equal() {
    let equation = result.innerHTML;
    let solved = eval(equation);
    result.innerHTML = solved;
}

function clear() {
    result.innerHTML = '0';
}


