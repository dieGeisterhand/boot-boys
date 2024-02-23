const imageArray = [
  "./assets/1.jpeg",
  "./assets/2.jpeg",
  "./assets/3.jpg",
  "./assets/4.jpg"
];

const randomNumber = Math.floor(Math.random() * imageArray.length);

document.getElementById("main-image").src = imageArray[randomNumber];

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const backgroundColor = `rgb(${r}, ${g}, ${b})`;

  document.body.style.background = backgroundColor;
}

randomColor();