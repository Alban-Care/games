const response = [shi, fu, mi];

/* Score array */
const shi = { value: "shi", shi: "egality", fu: "win", mi: "lose" };
const fu = { value: "fu", shi: "lose", fu: "egality", mi: "win" };
const mi = { value: "mi", shi: "win", fu: "lose", mi: "egality" };

/* Initial data */
const score = { win: 0, lose: 0, egality: 0 };
const inGame = { round: 1, score, player: "", computer: "" };

/* Game default data configuration */
let roundsGame = 3;

/* ShiFuMi eventListener cards */
const tradutionalPath = "#traditional>#cards>.card-group>";

const shiButton = document.querySelector(`${tradutionalPath}#shi`);
shiButton.addEventListener("click", () => {
  inGame.round++;
  checkResponses("shi");
});

const fuButton = document.querySelector(`${tradutionalPath}#fu`);
fuButton.addEventListener("click", () => {
  inGame.round++;
  checkResponses("fu");
});

const miButton = document.querySelector(`${tradutionalPath}#mi`);
miButton.addEventListener("click", () => {
  inGame.round++;
  checkResponses("mi");
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
  const btn = document.querySelector(".btn-play");
  btn.setAttribute("disabled", "");

  const overlay = document.querySelector("#traditional>.overlay");
  overlay.remove();

  displayCountRound(inGame.round);
}

/* Rounds functions */
function getComputerCard() {
  const index = getRandomInt(response.length);
  return response[index];
}

function displayCountRound(round) {
  const roundElement = document.querySelector("#traditional>#cards>h2");
  roundElement.textContent = `Round ${round} : select a card`;
}

function displayScore() {
  const winItem = document.querySelector(".win-item");
  winItem.textContent = inGame.score.win;
  const egalityItem = document.querySelector(".egality-item");
  egalityItem.textContent = inGame.score.egality;
  const loseItem = document.querySelector(".lose-item");
  loseItem.textContent = inGame.score.lose;
}

function displayRound() {
  const li = document.createElement("li");
  li.classList.add("round");

  const strong = document.createElement("strong");
  strong.classList.add("strong");
  strong.textContent = `Round ${inGame.round} : `;

  const player = document.createElement("span");
  player.setAttribute("id", "player");
  player.textContent = `You play "${inGame.player.toUpperCase()}" `;

  const computer = document.createElement("span");
  computer.setAttribute("id", "computer");
  computer.textContent = `Computer play "${inGame.computer.toUpperCase()}"`;

  li.appendChild(strong).appendChild(player).appendChild(computer);

  document.querySelector(".round-group").appendChild(li);
}

/* Result functions */
function ckeckResponses(playerResponse) {
  const computerResponse = getComputerCard();
  inGame.computer = computerResponse.value;
  inGame.player = playerResponse;

  const result = computerResponse[playerResponse]; // return win, lose or egality
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
