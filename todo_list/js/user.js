'use strict';

const LOCAL_STORAGE_USER = 'user';

const form_user = document.querySelector('.js-form_user');
const input_user = form_user.querySelector('input');
const sp_greeting = form_user.querySelector('.js-greeting');

init();

function init() {
    loadUser();
    form_user.addEventListener( 'submit', handleSubmit );

}

function handleSubmit( event ) {
    event.preventDefault();
    const user = input_user.value;
    localStorage.setItem(LOCAL_STORAGE_USER, user);
    loadUser();
}

function loadUser() {
    const user = localStorage.getItem(LOCAL_STORAGE_USER);
    if (user === null) {
        sp_greeting.style.display = 'none';
        input_user.style.display = 'inline';
    } else {
        sp_greeting.innerHTML = `hello ${user}`;
        sp_greeting.style.display = 'inline';
        input_user.style.display = 'none';
    }
}
