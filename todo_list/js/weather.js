'use strict';

const LOCAL_STORAGE_COORDS = 'coords';
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather?appid=241051bf13976dd3ddf8b8d9f247255e&units=metric';

const sp_weather = document.querySelector('.js-weather');

init();

function init() {
  loadWeather();
}

function loadWeather() {
  const coords = localStorage.getItem(LOCAL_STORAGE_COORDS);

  if (coords === null) {
    loadCoords();
  }
  reqWeather();
}

// const API_KEY = "241051bf13976dd3ddf8b8d9f247255e";
// const WEATHER_API = "https://api.openweathermap.org/data/2.5/weather?"
function reqWeather() {
  const value = localStorage.getItem(LOCAL_STORAGE_COORDS);
  const coords = JSON.parse(value);
  const api = `${WEATHER_API_URL}&lat=${coords.lat}&lon=${coords.lon}`;

  fetch(api)
    .then((res) => { return res.json() })
    .then(displayWeather)
    .catch(err => { console.log(err) });
}

function displayWeather(data) {
  const strWeather = `${data.name}<br>${data.main.temp}°C`;
  sp_weather.innerHTML = strWeather;
}


function handle_getposition_success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const coords = {
    'lat': latitude,
    'lon': longitude
  };

  localStorage.setItem(LOCAL_STORAGE_COORDS, JSON.stringify(coords));
}

function handle_getposition_error() {
  console.log('error: getCurrentPosition');
}

function loadCoords() {
  navigator.geolocation.getCurrentPosition(handle_getposition_success, handle_getposition_error);
}

