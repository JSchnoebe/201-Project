'use strict';
console.log('js file is connected');

// let userName;

// function customerName(){
//   userName = prompt('What is your name?').toLowerCase();
//   console.log('user input is ', userName);
//   alert('Hello ' + userName);
// }
// customerName();

let imageElements = document.getElementsByClassName('genre');
// console.log('image elements', imageElements);

// Global Variables

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

let image;
// console.log('constructor ',allGenres);


let chosenGenreString = localStorage.getItem('picks');
// console.log('genre string', chosenGenreString);

if(chosenGenreString){
  let arrayOfNotGenreObject = JSON.parse(chosenGenreString);
  // console.log('if condition what is our type ', arrayOfNotGenreObject);
  for(let j = 0; j < arrayOfNotGenreObject.length; j++){
    new Genre(
      arrayOfNotGenreObject[j].name,
      arrayOfNotGenreObject[j].imgsrc,
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
let username = prompt('What\'s your name, fellow movie lover?')
alert('Hi ' + username + ', I hope you\'re ready to find your movie!')
localStorage.setItem('username', JSON.stringify('username'));


function imageWasClicked(event){
  localStorage.setItem('pickGenre', JSON.stringify(event.srcElement.id));
  let image_x = document.getElementById('genre');
  image_x.innerHTML = '';
  //add new images

  // console.log('this is the section now. ', image_x);
  let ratingsImages = document.getElementById('genre');
  //loop over the rating images array and create the images
  for(let i = 0; i < ratingsArray.length; i++){
    let rateImage = document.createElement('img');
    rateImage.setAttribute('src', 'images/' + ratingsArray[i].imageName + '.png');
    rateImage.setAttribute('alt', 'Movie Ratings');
    //update the image class name for further seletion
    rateImage.setAttribute('class', ratingsArray[i].imageName);
    ratingsImages.appendChild(rateImage);

  }

  let images = document.getElementsByTagName('img');
  for(let i = 0; i < images.length; i++){
    image = images[i];
    // console.log('images in for loop', image);
    images[i].onclick = function() {

      console.log(image.className);
      localStorage.setItem('pickRatingImageClick', JSON.stringify(images[i].className));

      window.location.href = this.id + 'results.html';
    };
  }




  for(let i = 0; i < imageElements.length; i++){
    imageElements[i].removeEventListener('click', imageWasClicked);
    // console.log('remove add event listener.');
  }





}//closes function imagewasClicked.















for(let i = 0; i < imageElements.length; i++){
  imageElements[i].addEventListener('click', imageWasClicked);
  // console.log('is this working?');
}
