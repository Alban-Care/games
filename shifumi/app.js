/* Score array */
const shi = {
  value: "shi",
  shi: "egality",
  fu: "win",
  mi: "lose",
};

const fu = {
  value: "fu",
  shi: "lose",
  fu: "egality",
  mi: "win",
};

const mi = {
  value: "mi",
  shi: "win",
  fu: "lose",
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

/* ShiFuMi eventListener cards */
let tradutionalPath = "#traditional>#cards>.card-group>";

document
  .querySelector(`${tradutionalPath}#shi`)
  .addEventListener("click", () => {
    inGame.round++;
    ckeckResponses("shi");
  });
document
  .querySelector(`${tradutionalPath}#fu`)
  .addEventListener("click", () => {
    inGame.round++;
    ckeckResponses("fu");
  });
document
  .querySelector(`${tradutionalPath}#mi`)
  .addEventListener("click", () => {
    inGame.round++;
    ckeckResponses("mi");
  });

/* utils function */
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

/* intitialization functions */
function gameInitialization() {
  inGame.round = 1;
  inGame.score.win = 0;
  inGame.score.egality = 0;
  inGame.score.lose = 0;
  inGame.player = "";
  inGame.computer = "";
}

function domUpdateOnGameLaunch() {
  let btn = document.querySelector(".btn-play");
  btn.setAttribute("disabled", "");

  let overlay = document.querySelector("#traditional>.overlay");
  overlay.remove();

  displayCountRound(inGame.round);
}

/* Rounds functions */

function getComputerCard() {
  let index = getRandomInt(response.length);
  return response[index];
}

function displayCountRound(round) {
  document.querySelector(
    "#traditional>#cards>h2"
  ).textContent = `Round ${round} : select a card`;
}

function displayScore() {
  document.querySelector(".win-item").textContent = inGame.score.win;
  document.querySelector(".egality-item").textContent = inGame.score.egality;
  document.querySelector(".lose-item").textContent = inGame.score.lose;
}

function displayRound() {
  let li = document.createElement("li");
  li.classList.add("round");

  let strong = document.createElement("strong");
  strong.classList.add("strong");
  strong.textContent = `Round ${inGame.round} : `;

  let player = document.createElement("span");
  player.setAttribute("id", "player");
  player.textContent = `You play "${inGame.player.toUpperCase()}" `;

  let computer = document.createElement("span");
  computer.setAttribute("id", "computer");
  computer.textContent = `Computer play "${inGame.computer.toUpperCase()}"`;

  li.appendChild(strong).appendChild(player).appendChild(computer);

  document.querySelector(".round-group").appendChild(li);
}

/* Result functions */

function ckeckResponses(playerResponse) {
  let computerResponse = getComputerCard();
  inGame.computer = computerResponse.value;
  inGame.player = playerResponse;

  let result = computerResponse[playerResponse]; // return win, lose or egality
  if (result == "win") inGame.score.win++;
  if (result == "lose") inGame.score.lose++;
  if (result == "egality") inGame.score.egality++;

  displayScore();
  displayRound();
  displayCountRound(inGame.round);
}

/* Start function */

function startTraditionalGame() {
  gameInitialization();
  domUpdateOnGameLaunch();
}
