const input = document.getElementById('input');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

btn.addEventListener('click', myFunc);

function myFunc() {
    if (input.value === '') return;
    addremove(input.value);
    input.value = '';
}

function addremove(value) {
    const li = document.createElement(`li`);
    li.className = 'li';
    li.textContent = value;
    
    const btn = document.createElement('button');
    btn.className = 'btn';
    btn.textContent = 'done';
    li.appendChild(btn);
    
    btn.addEventListener('click', remove);
    function remove() {
        result.removeChild(li);
    }
    
    result.appendChild(li);
}


























