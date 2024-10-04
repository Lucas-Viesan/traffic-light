const redColors = ["red", "#8b0000"];
const grenColors = ["gren", "#006400"];
const borderColor = "grey";
let indice = 0;

const onLigthRed = () => {
  setTimeout(() => {
    document.querySelector(".ligth-red").style.backgroundColor =
      redColors[indice];
    indice = (indice + 1) % redColors.length;
    if (indice == 1) {
      document.querySelector(".traffic-ligth").style.borderColor = redColors[0];
    } else {
      document.querySelector(".traffic-ligth").style.borderColor = borderColor;
    }
  }, 1000);
};

onLigthRed();

setTimeout(() => {
  clearTimeout(onLigthRed());
}, 6000);
