const mastermind = {
  pawns: 4,
  colors: {
    1: "red",
    2: "yellow",
    3: "blue",
    4: "orange",
    5: "green",
    6: "white",
    7: "purple",
    8: "pink",
  },
  codificator: [],
  decoder: [],
  init: function () {
    // En PROD modifier l'argument par la valeur récupérée dans un input (4 ou 5 pions et 6 ou 8 couleurs)
    mastermind.setCodificator(mastermind.pawns, 6);
    console.log("codificator : " + mastermind.codificator);
    mastermind.setDecoder();
    console.log("decoder : " + mastermind.decoder);
    mastermind.checkValues();
  },
  /**
   *
   * @param {Number} pawns
   * @param {Number} colors
   */
  setCodificator: (pawns, colors) => {
    for (let i = 1; i <= pawns; i++) {
      mastermind.codificator.push(Math.ceil(Math.random() * colors));
    }
  },
  setDecoder: () => {
    // On récupère le class sur les elements
    // On recupère l'index en fonction de la couleur (indexOf())
    mastermind.decoder = [1, 2, 3, 4];
  },
  /**
   * Checks if two pawns have the same color AND have the same position
   * Vérifie si deux pions ont la même couleur ET ont la même position
   *
   * @param {{decoder: array, codificator: array}} copy
   * @returns {{decoder: array, codificator: array}}
   */
  checkPosition: (copy) => {
    for (let i = 0; i < mastermind.pawns; i++) {
      if (copy.codificator[i] === copy.decoder[i]) {
        copy.codificator[i] = "-";
        copy.decoder[i] = "-";
      }
    }
    return copy;
  },
  /**
   * Checks if two pawns are the same color AND have a different position
   * Vérifie si deux pions sont même couleurs ET ont une position différente
   *
   * @param {{decoder: array, codificator: array}} copy
   * @returns {{decoder: array, codificator: array}}
   */
  checkColor: (copy) => {
    copy.codificator.forEach((item) => {
      if (copy.decoder.includes(item) && typeof item === "number") {
        copy.codificator[copy.codificator.indexOf(item)] = "*";
        copy.decoder[copy.decoder.indexOf(item)] = "*";
      }
    });

    return copy;
  },
  checkValues: () => {
    const decoder = mastermind.decoder.slice();
    const codificator = mastermind.codificator.slice();

    // on créer un objet contenant une copie des tableaux "decoder" et "codificator"
    let copy = { decoder, codificator };

    // On compare les valeurs pour "decoder" et "codificator"
    copy = mastermind.checkPosition(copy);
    copy = mastermind.checkColor(copy);

    mastermind.setResults(copy);
  },
  setResults: (values) => {
    const codificator = values.codificator;
    let position = 0;
    let color = 0;
    for (let value of codificator) {
      if (value === "*") color += 1;
      if (value === "-") position += 1;
    }
    console.log(position, color);
  },
};

document.addEventListener("DOMContentLoaded", mastermind.init());
