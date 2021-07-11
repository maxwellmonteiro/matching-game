import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";
import GameBoard from "./src/objects/GameBoard";
import ScoreBoard from "./src/objects/ScoreBoard";

const $root = document.querySelector("#root");
const $scoreBoard = new ScoreBoard("Joao", "Maria");
const $gameBoard = new GameBoard(3);

$root.insertAdjacentElement("beforeend", $scoreBoard.render());
$root.insertAdjacentElement("beforeend", $gameBoard.render());