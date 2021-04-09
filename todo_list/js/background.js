'use strict';

const IMG_API_URL = 'https://api.unsplash.com/photos/random/?client_id=xWGhtEChFAKur2ZeyvmGM_CEe6LxMAQDKMW5exSeVOM&orientation=landscape&query=landscap&count=1';

const bk_img = document.querySelector('.js-bk_img');
const sp_img_info = document.querySelector('.js-img_info');

init();

function init() {

  req_background_img();

}

function chg_background_img(data) {

  const obj = data[0];

  bk_img.src = obj.urls.full;
  sp_img_info.innerHTML = `photo by ${obj.user.username}`;

}


function req_background_img() {

  fetch(IMG_API_URL)
    .then((res) => { return res.json() })
    .then(chg_background_img)
    .catch(console.log);

}

