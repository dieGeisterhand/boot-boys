const imageArray = [
  "./assets/1.jpeg",
  "./assets/2.jpeg",
  "./assets/3.jpeg",
  "./assets/4.jpeg",
  "./assets/5.jpeg",
  "./assets/6.jpeg",
  "./assets/7.jpeg",
  "./assets/8.jpeg",
  "./assets/9.jpeg",
  "./assets/10.jpeg",
  "./assets/11.jpeg",
  "./assets/12.jpeg",
  "./assets/13.jpeg",
  "./assets/14.jpeg"
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