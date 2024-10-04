const cores = "red";
let indice = 0;

// const intervalo = setInterval(() => {
//   document.querySelector(".ligth-red").style.backgroundColor = cores[indice];
//   indice = (indice + 1) % cores.length;
// }, 1000);

// setTimeout(() => {
//   clearInterval(intervalo);
//   console.log("Ciclo interrompido");
// }, 5000);

const onRedLigth = setInterval(() => {
  document.querySelector(".ligth-red").style.backgroundColor = cores;
}, 1000);

setTimeout(() => {
  clearInterval(onRedLigth);
  console.log(onRedLigth);
}, 2000);
