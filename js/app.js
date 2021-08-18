'use strict';
console.log('js file is connected');

let imageElements = document.getElementsByClassName('genre');
console.log('image elements', imageElements);

// Global Variables
// let movieIndex1 = 0;
// let movieIndex2 = 1;
// let movieIndex3 = 2;
// let movieIndex4 = 3;
// let timesClicked = 0;
let allGenres = [];
let ratingsArray = [
  { imageName: 'PG'},
  {imageName: 'PG-13'},
  {imageName: 'R'}
];

function Genre(name, imgsrc, timesClicked) {
  this.name = name;
  this.imgsrc = imgsrc;

  if (timesClicked) {
    this.timesClicked = timesClicked;
  } else {
    this.timesClicked = 0;
  }
  allGenres.push(this);
}
console.log('constructor ',allGenres);


let chosenGenreString = localStorage.getItem('picks');
console.log('genre string', chosenGenreString);

if(chosenGenreString){
  let arrayOfNotGenreObject = JSON.parse(chosenGenreString);
  console.log('if condition what is our type ', arrayOfNotGenreObject);
  for(let j = 0; j < arrayOfNotGenreObject.length; j++){
    new Genre(
      arrayOfNotGenreObject[j].name,
      arrayOfNotGenreObject[j].imgsrc,
      arrayOfNotGenreObject[j].timesClicked
    );
  }
} 
// else {




new Genre('comedy', 'images/comedy.jpg');
new Genre('horror', 'images/blood.jpg');
new Genre('drama', 'images/drama.png');
new Genre('action', 'images/karate.png');
// }

// const ratings = ['PG', 'PG-13', 'R'];







function imageWasClicked(event){
  // timesClicked++;
  console.log('something was clicked ', event);
  console.log('image elements on click', event.srcElement.id);

  localStorage.setItem('pickGenre', JSON.stringify(event.srcElement.id));



  let image_x = document.getElementById('genre');
  console.log('khggh',typeof image_x);
  image_x.innerHTML = '';

  //add new images

  // console.log('this is the section now. ', image_x);
  let ratingsImages = document.getElementById('genre');

  for(let i = 0; i < ratingsArray.length; i++){
    let rateImage = document.createElement('img');
    console.log('xxxxxxxxx-this is new image ',rateImage);
    rateImage.setAttribute('src', 'images/' + ratingsArray[i].imageName + '.png');
    console.log('new image?',rateImage);
    rateImage.setAttribute('alt', 'Movie Ratings');
    ratingsImages.appendChild(rateImage);
    // localStorage.setItem('pickRating', JSON.stringify(ratingsArray[i]));

  }


  let images = document.getElementsByTagName('img');
  for(let i = 0; i < images.length; i++){
    let image = images[i];
    console.log('xxxxxxxxxx-image clicked on line 100', image);
    
    image.onclick = function(event) {
  
      window.location.href = this.id + 'results.html';
    };
  }
 



  for(let i = 0; i < imageElements.length; i++){
    imageElements[i].removeEventListener('click', imageWasClicked);
    console.log('remove add event listener.');
  }





}//closes function imagewasClicked.


  












for(let i = 0; i < imageElements.length; i++){
  imageElements[i].addEventListener('click', imageWasClicked);
  console.log('is this working?');
}
