const src = [
  "https://www.muyinteresante.com/wp-content/uploads/sites/5/2023/12/28/658d3cc8a1698.jpeg",
  "https://www.fundacionaquae.org/wp-content/uploads/2018/10/proteger-a-los-animales-1024x654.jpg",
  "https://static.nationalgeographic.es/files/styles/image_3200/public/01-waq-animal-hoarders-nationalgeographic_1902487.webp?w=1600&h=900",
  "https://postgradoveterinaria.com/wp-content/uploads/curiosidades-de-animales.jpg",
  "https://arba.pe/wp-content/uploads/2021/11/White-Essay-Comparison-Landscape-Optional-Meme-34.png"
];

let index = 0;
let interval;

document.addEventListener("DOMContentLoaded", () => {

  document.querySelector("img").setAttribute("src", src[index++]);

  interval = setInterval(() => {
    // Cada tres segundos se dispara este callback
    document.querySelector("img").setAttribute("src", src[index++]);
    if(index === src.length) { index = 0; }

  }, 3000);
})

document.addEventListener("keydown", (e) => {
  
  if(e.key === "ArrowLeft") {
    // Voy un indice para atrás
    index--;
    if(index < 0) { index = src.length - 1; }
  }
  else if(e.key === "ArrowRight") {
    // Voy un indice para adelante
    index++;
    if(index === src.length) { index = 0; }
  }
  else {
    return;
  }

  clearInterval(interval);
  document.querySelector("img").setAttribute("src", src[index]);
  interval = setInterval(() => {
    // Cada tres segundos se dispara este callback
    document.querySelector("img").setAttribute("src", src[index++]);
    if(index === src.length) { index = 0; }

  }, 3000);
});