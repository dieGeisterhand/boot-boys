const imageArray = [
  "./assets/1.jpeg",
  "./assets/2.jpeg",
  "./assets/3.jpg",
  "./assets/4.jpg"
];

const randomNumber = Math.floor(Math.random() * imageArray.length);

document.getElementById("main-image").src = imageArray[randomNumber];




