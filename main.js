import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/settings/fonts.css";
import "./src/styles/elements/base.css";

import BoardGame from "./src/objects/BoardGame";

const $root = document.querySelector("#root");
const $boardGame = new BoardGame("Joao", "Maria", 5);

$root.insertAdjacentElement("beforeend", $boardGame.render());