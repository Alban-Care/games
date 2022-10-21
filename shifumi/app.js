/* Score array */
const shi = {
  shi: "egality",
  fu: "lose",
  mi: "win",
};

const fu = {
  shi: "lose",
  fu: "egality",
  mi: "win",
};

const mi = {
  shi: "lose",
  fu: "win",
  mi: "egality",
};

const response = [shi, fu, mi];

/* Initial data */
let score = {
  win: 0,
  lose: 0,
  egality: 0,
};

let inGame = {
  round: 1,
  score,
  player: "",
  computer: "",
};

/* Game default data configuration */

let roundsGame = 3;
