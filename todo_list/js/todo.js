'use strict';

const LOCAL_STORAGE_TODO = 'todo';

const form_todo = document.querySelector('.js-form_todo');
const input_todo = form_todo.querySelector('input');
const ul_todo = form_todo.querySelector('.js-todo_list');

let todo = [];

init();

function init() {
    form_todo.addEventListener('submit', handleSubmit);
    load_todo_list();
}

function handleSubmit(event) {

    event.preventDefault();

    const value = input_todo.value;
    const timestamp = Date.now();

    const obj = {
        'todo': value,
        'id': timestamp
    };
    
    todo.push(obj);
    save_todo_list();
    load_todo_list();

    input_todo.value = '';
}

function save_todo_list() {
    localStorage.setItem(LOCAL_STORAGE_TODO, JSON.stringify(todo));
}

function load_todo_list() {

    removeAllTodo();
    const todo_json = localStorage.getItem(LOCAL_STORAGE_TODO);

    if (todo_json !== null) {
        todo = JSON.parse(todo_json);
        todo.forEach(obj => {
            appendTodo(obj);
        });
    }

}

function appendTodo(obj) {

    const li = document.createElement('li');
    li.id = obj.id;
    li.className = 'job';

    const del = document.createElement('span');
    del.innerText = '[X]';
    li.appendChild(del);

    const job = document.createElement('span');
    job.innerText = obj.todo;
    li.appendChild(job);

    ul_todo.appendChild(li);

    del.addEventListener('click', deleteJob);

}

function deleteJob(event) {

    const removeId = parseInt(event.target.parentElement.id);
    
    const idx = todo.findIndex(function(item) { return item.id === removeId; });
    
    if (idx > -1) {
        todo.splice(idx, 1);
    }

    save_todo_list();
    load_todo_list(); 
}
function removeAllTodo() {
    while (ul_todo.firstChild) {
        ul_todo.removeChild(ul_todo.firstChild);
    }
}

