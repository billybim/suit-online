//Buat angka random
var randomN = Math.floor(Math.random()*3);
var randomM = Math.floor(Math.random()*3);
var n = randomN + 1;
var m = randomM + 1;

//gambar
const image1 = document.getElementsByClassName("img1")[0];
const image2 = document.getElementsByClassName("img2")[0];

//ganti angka ke gambar
/*
1 = gajah
2 = orang
3 = semut

*/

//1 vs (1-3)
if (n===1 && m===2) {
  console.log("pemain 1 menang");
  image1.src = "./images/jempol.avif";
  image2.src = "./images/telunjuk.jpg";
  document.querySelector("h1").innerHTML = "Pemain 1 Menang 🥳";
} 
else if (n ===1 && m===3) {
  console.log("pemain 2 menang");
  image1.src = "./images/jempol.avif";
  image2.src = "./images/kelingking.jpg";
  document.querySelector("h1").innerHTML = "Pemain 2 Menang 🥳";
} 
else if (n ===1 && m===1) {
  console.log("draw");
  image1.src = "./images/jempol.avif";
  image2.src = "./images/jempol.avif";
  document.querySelector("h1").innerHTML = "Draw 😏";
} 


//2 vs (1-3)
else if (n===2 && m===1) {
  console.log("pemain 2 menang");
  image1.src = "./images/telunjuk.jpg";
  image2.src = "./images/jempol.avif";
  document.querySelector("h1").innerHTML = "Pemain 2 Menang 🥳";
}
else if (n===2 && m===2) {
  console.log("Draw");
  image1.src = "./images/telunjuk.jpg";
  image2.src = "./images/telunjuk.jpg";
  document.querySelector("h1").innerHTML = "Draw 😏";
}
else if (n===2 && m===3) {
  console.log("pemain 1 menang");
  image1.src = "./images/telunjuk.jpg";
  image2.src = "./images/kelingking.jpg";
  document.querySelector("h1").innerHTML = "Pemain 1 Menang 🥳";
} 


//3 vs (1-3)
else if (n===3 && m===1) {
  console.log("pemain 1 menang");
  image1.src = "./images/kelingking.jpg";
  image2.src = "./images/jempol.avif";
  document.querySelector("h1").innerHTML = "Pemain 1 Menang 🥳";
} 
else if (n===3 && m===2) {
  console.log("pemain 2 menang");
  image1.src = "./images/kelingking.jpg";
  image2.src = "./images/telunjuk.jpg";
  document.querySelector("h1").innerHTML = "Pemain 2 Menang 🥳";
} 
else {
  console.log("draw");
  image1.src = "./images/kelingking.jpg";
  image2.src = "./images/kelingking.jpg";
  document.querySelector("h1").innerHTML = "Draw 😏";
}

