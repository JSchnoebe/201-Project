'use strict';
console.log('js file is connected');

// global variables
// let movieIndex1 = 1;
// let movieIndex2 = 2;
// let movieIndex3 = 3;
function Movie(mName, imgsrc){
    this.mName = mName;
    this.imgsrc = imgsrc;
}
new Movie('Napolean Dynamite', 'images/posters/napoleandynamite.jpg');
new Movie('The Jerk', 'thejerk_.jpg');
let pgcomedy = ['Napolean Dynamite', 'The Jerk']
let rpicks = localStorage.getItem('pickRatingImageClick');
// console.log('pickRatingImageClick', rpicks)
let picks = localStorage.getItem('pickGenre');
// console.log("pickGenre", picks);
if (picks === '1' && rpicks === 'PG'){
    let randomPGComedyMovie = pgcomedy[Math.floor(Math.random() * pgcomedy.length)];

}
// document.getElementById("mybutton").onclick = function(){
//     location.href = "www.google.com";
// };
let bclick = document.getElementById('mybutton');

bclick.onclick = function(){
    alert('hshj');
    // window.location.href = this.id + 'index.html';
};
console.log('rando', randomPGComedyMovie);



