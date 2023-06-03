const TdodInput = document.querySelector('.input');
const TodoList = document.querySelector('.list');
const TodoBtn = document.querySelector('.btn');


function addtodo(e){
e.preventDefault();
const divtodo = document.createElement('div')
divtodo.classList.add('todo')

const li = document.createElement('li')
li.innerText = 'hello'
divtodo.appendChild(li)
}




TodoBtn.addEventListener('click', addtodo);