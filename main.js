const imageArray = [
  "./assets/1.webp",
  "./assets/2.webp",
  "./assets/3.webp",
  "./assets/4.webp"
/*  
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
*/
];

const randomImage = Math.floor(Math.random() * imageArray.length);

document.getElementById("main-image").src = imageArray[randomImage];

const colorArray = [
  "rgb(123, 211, 234)",
  "rgb(161, 238, 189)",
  "rgb(246, 247, 196)",
  "rgb(246, 214, 214)"
];

const randomBackground = Math.floor(Math.random() * colorArray.length);

document.body.style.background = colorArray[randomBackground];

// in case a random rgb (0~255) color is needed, use function below

/*
function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const backgroundColor = `rgb(${r}, ${g}, ${b})`;

  document.body.style.background = backgroundColor;
}

randomColor();
*/