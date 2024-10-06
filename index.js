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
      document.querySelector(".ligth-min").style.backgroundColor = redColors[0];
      document.querySelector(".ligth-min-2").style.backgroundColor =
        redColors[0];
      document.querySelector(".ligth-min-3").style.backgroundColor =
        redColors[0];
      document.querySelector(".ligth-min-4").style.backgroundColor =
        redColors[0];
      document.querySelector(".ligth-min-5").style.backgroundColor =
        redColors[0];

      //Logica de funcionamento do contador vermelho
      setTimeout(() => {
        document.querySelector(".ligth-min").style.backgroundColor =
          borderColor;
      }, 1600);
      setTimeout(() => {
        document.querySelector(".ligth-min-2").style.backgroundColor =
          borderColor;
      }, 3200);
      setTimeout(() => {
        document.querySelector(".ligth-min-3").style.backgroundColor =
          borderColor;
      }, 4800);
      setTimeout(() => {
        document.querySelector(".ligth-min-4").style.backgroundColor =
          borderColor;
      }, 6400);
      setTimeout(() => {
        document.querySelector(".ligth-min-5").style.backgroundColor =
          borderColor;
      }, 7900);
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
      document.querySelector(".ligth-min").style.backgroundColor =
        grenColors[0];
      document.querySelector(".ligth-min-2").style.backgroundColor =
        grenColors[0];
      document.querySelector(".ligth-min-3").style.backgroundColor =
        grenColors[0];
      document.querySelector(".ligth-min-4").style.backgroundColor =
        grenColors[0];
      document.querySelector(".ligth-min-5").style.backgroundColor =
        grenColors[0];

      //Logica de funcionamento do contador verde
      setTimeout(() => {
        document.querySelector(".ligth-min").style.backgroundColor =
          borderColor;
      }, 1200);
      setTimeout(() => {
        document.querySelector(".ligth-min-2").style.backgroundColor =
          borderColor;
      }, 2400);
      setTimeout(() => {
        document.querySelector(".ligth-min-3").style.backgroundColor =
          borderColor;
      }, 3600);
      setTimeout(() => {
        document.querySelector(".ligth-min-4").style.backgroundColor =
          borderColor;
      }, 4800);
      setTimeout(() => {
        document.querySelector(".ligth-min-5").style.backgroundColor =
          borderColor;
      }, 5900);
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

// Logica do temporizador das cores
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
    }, 6000);
  }, 8000);
};

timer();

//Loop da lógica do temporizador
setInterval(() => {
  timer();
}, 16000);

const onLigthGren2 = () => {
  setTimeout(() => {
    document.querySelector(".ligth-gren-2").style.backgroundColor =
      grenColors[indexGren2];
    indexGren2 = (indexGren2 + 1) % grenColors.length;
    if (indexGren2 == 1) {
      document.querySelector(".traffic-ligth-2").style.borderColor =
        grenColors[0];
      document.querySelector(".ligth-min-6").style.backgroundColor =
        grenColors[0];
      document.querySelector(".ligth-min-7").style.backgroundColor =
        grenColors[0];
      document.querySelector(".ligth-min-8").style.backgroundColor =
        grenColors[0];
      document.querySelector(".ligth-min-9").style.backgroundColor =
        grenColors[0];
      document.querySelector(".ligth-min-10").style.backgroundColor =
        grenColors[0];

      //Logica de funcionamento contador verde 2
      setTimeout(() => {
        document.querySelector(".ligth-min-6").style.backgroundColor =
          borderColor;
      }, 1200);
      setTimeout(() => {
        document.querySelector(".ligth-min-7").style.backgroundColor =
          borderColor;
      }, 2400);
      setTimeout(() => {
        document.querySelector(".ligth-min-8").style.backgroundColor =
          borderColor;
      }, 3600);
      setTimeout(() => {
        document.querySelector(".ligth-min-9").style.backgroundColor =
          borderColor;
      }, 4800);
      setTimeout(() => {
        document.querySelector(".ligth-min-10").style.backgroundColor =
          borderColor;
      }, 5900);
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
      document.querySelector(".ligth-min-6").style.backgroundColor =
        redColors[0];
      document.querySelector(".ligth-min-7").style.backgroundColor =
        redColors[0];
      document.querySelector(".ligth-min-8").style.backgroundColor =
        redColors[0];
      document.querySelector(".ligth-min-9").style.backgroundColor =
        redColors[0];
      document.querySelector(".ligth-min-10").style.backgroundColor =
        redColors[0];

      //Logica de funcionamento contador vermelho 2
      setTimeout(() => {
        document.querySelector(".ligth-min-6").style.backgroundColor =
          borderColor;
      }, 1600);
      setTimeout(() => {
        document.querySelector(".ligth-min-7").style.backgroundColor =
          borderColor;
      }, 3200);
      setTimeout(() => {
        document.querySelector(".ligth-min-8").style.backgroundColor =
          borderColor;
      }, 4800);
      setTimeout(() => {
        document.querySelector(".ligth-min-9").style.backgroundColor =
          borderColor;
      }, 6400);
      setTimeout(() => {
        document.querySelector(".ligth-min-10").style.backgroundColor =
          borderColor;
      }, 7900);
    } else {
      document.querySelector(".traffic-ligth-2").style.borderColor =
        borderColor;
    }
  }, 1000);
};

onLigthGren2();

// Logica do temporizador das cores
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
      }, 8000);
    }, 2000);
  }, 6000);
};

timer2();

//Loop da lógica do temporizador
setInterval(() => {
  timer2();
}, 16000);
