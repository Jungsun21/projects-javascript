'use strict';

const clock = document.querySelector('.js-clock');
const time = clock.querySelector('.js-time');

init();

function init() {
    setInterval( displayClock, 1000 );
}

function displayClock() {
    const date = new Date();
    const hours = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    const sH = hours < 10 ? `0${hours}` : `${hours}`;
    const sM = min < 10 ? `0${min}` : `${min}`;
    const sS = sec < 10 ? `0${sec}` : `${sec}`;

    const result = `${sH}:${sM}:${sS}`;

    time.innerHTML = result;

}