'use strict';
console.log('js file is connected');

// global variables


let picks = localStorage.getItem('pickGenre', 'pickRating');
console.log("pickGenre", picks);

// let randImg = Math.floor(Math.random());

document.getElementsByClassName('rating').style.display = 'none';
