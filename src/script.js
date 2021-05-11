import '../style/style.scss';
import User from './class';

////var moment = require('moment');
////
////console.log(moment().format('LL'));
//
//let todos;
//const block = document.getElementById('block');
//const ul = document.createElement('ul');
//block.prepend(ul);
//
//const renderItems = () => {
//    todos.forEach(item => {
//        const li = document.createElement('li');
//        li.innerHTML = item.title;
//        ul.prepend(li);
//        console.log(item.title);
//    });
//}
//
//const fetchTodos = () => {
//    return fetch('https://jsonplaceholder.typicode.com/todos')
//  .then(response => response.json())
//  .then(json => todos = json);
//}
//
//const getTodos = async () => {
//    await fetchTodos();
//    renderItems();
//}
//
//getTodos();