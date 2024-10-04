const redColors = ["red", "#8b0000"];
const grenColors = ["#00FF00", "#006400"];
const yellowColors = ["yellow", "#b47d04"];
const borderColor = "grey";
let indexRed = 0;
let indexGren = 0;
let indexYellow = 0;

const onLigthRed = () => {
  setTimeout(() => {
    document.querySelector(".ligth-red").style.backgroundColor =
      redColors[indexRed];
    indexRed = (indexRed + 1) % redColors.length;
    if (indexRed == 1) {
      document.querySelector(".traffic-ligth").style.borderColor = redColors[0];
    } else {
      document.querySelector(".traffic-ligth").style.borderColor = borderColor;
    }
  }, 1000);
};

const onLigthGren = () => {
  setTimeout(() => {
    document.querySelector(".ligth-gren").style.backgroundColor =
      grenColors[indexGren];
    indexGren = (indexGren + 1) % grenColors.length;
    if (indexGren == 1) {
      document.querySelector(".traffic-ligth").style.borderColor =
        grenColors[0];
    } else {
      document.querySelector(".traffic-ligth").style.borderColor = borderColor;
    }
  }, 1000);
};

const onLigthYellow = () => {
  setTimeout(() => {
    document.querySelector(".ligth-yellow").style.backgroundColor =
      yellowColors[indexYellow];
    indexYellow = (indexYellow + 1) % yellowColors.length;
    if (indexYellow == 1) {
      document.querySelector(".traffic-ligth").style.borderColor =
        yellowColors[0];
    } else {
      document.querySelector(".traffic-ligth").style.borderColor = borderColor;
    }
  }, 1000);
};

onLigthRed();

const timer = () => {
  setTimeout(() => {
    clearTimeout(onLigthRed());
    onLigthGren();
    setTimeout(() => {
      clearTimeout(onLigthGren());
      onLigthYellow();
      setTimeout(() => {
        clearTimeout(onLigthYellow());
        onLigthRed();
      }, 2000);
    }, 4000);
  }, 6000);
};

timer();
setInterval(() => {
  timer();
}, 12000);
