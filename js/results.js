'use strict';
console.log('js file is connected');

// global variables
     let movieIndex1 = 1;
    let movieIndex2 = 2;
        let movieIndex3 = 3;
        let pgcomedy = [
            'Napolean Dynamite'
        ]

let rpicks = localStorage.getItem('pickRatingImageClick');
console.log('pickRatingImageClick', rpicks)
let picks = localStorage.getItem('pickGenre');
console.log("pickGenre", picks);

if (picks === '1' && rpicks === 'R'){
pgcomedy[movieIndex1]
console.log('movieR1', movieIndex1)
    }

// let randImg = Math.floor(Math.random());

// document.getElementsByClassName('rating').style.display = 'none';
