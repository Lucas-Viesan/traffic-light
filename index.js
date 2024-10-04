const redColors = ["red", "#8b0000"];
const grenColors = ["#00FF00", "#006400"];
const yellowColors = ["yellow", "#b47d04"];
const borderColor = "grey";
let indexRed = 0;
let indexGren = 0;
let indexYellow = 0;
let indexRed2 = 0;
let indexGren2 = 0;
let indexYellow2 = 0;

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

const onLigthGren2 = () => {
  setTimeout(() => {
    document.querySelector(".ligth-gren-2").style.backgroundColor =
      grenColors[indexGren2];
    indexGren2 = (indexGren2 + 1) % grenColors.length;
    if (indexGren2 == 1) {
      document.querySelector(".traffic-ligth-2").style.borderColor =
        grenColors[0];
    } else {
      document.querySelector(".traffic-ligth-2").style.borderColor =
        borderColor;
    }
  }, 1000);
};

const onLigthYellow2 = () => {
  setTimeout(() => {
    document.querySelector(".ligth-yellow-2").style.backgroundColor =
      yellowColors[indexYellow2];
    indexYellow2 = (indexYellow2 + 1) % yellowColors.length;
    if (indexYellow2 == 1) {
      document.querySelector(".traffic-ligth-2").style.borderColor =
        yellowColors[0];
    } else {
      document.querySelector(".traffic-ligth-2").style.borderColor =
        borderColor;
    }
  }, 1000);
};

const onLigthRed2 = () => {
  setTimeout(() => {
    document.querySelector(".ligth-red-2").style.backgroundColor =
      redColors[indexRed2];
    indexRed2 = (indexRed2 + 1) % redColors.length;
    if (indexRed2 == 1) {
      document.querySelector(".traffic-ligth-2").style.borderColor =
        redColors[0];
    } else {
      document.querySelector(".traffic-ligth-2").style.borderColor =
        borderColor;
    }
  }, 1000);
};

onLigthGren2();

const timer2 = () => {
  setTimeout(() => {
    clearTimeout(onLigthGren2());
    onLigthYellow2();
    setTimeout(() => {
      clearTimeout(onLigthYellow2());
      onLigthRed2();
      setTimeout(() => {
        clearTimeout(onLigthRed2());
        onLigthGren2();
      }, 6000);
    }, 2000);
  }, 4000);
};

timer2();
setInterval(() => {
  timer2();
}, 12000);
