import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/settings/fonts.css";
import "./src/styles/elements/base.css";
import CardGame from "./src/components/CardGame";
import PlayerName from "./src/components/PlayerName";

const imgs = ["src/images/js-pixel.png", "src/images/html-pixel.png", "src/images/css-pixel.png"];
const $root = document.querySelector("#root");

const $player1 = new PlayerName("Player1");
const $player2 = new PlayerName("Player2");

$root.insertAdjacentElement("beforeend", $player1.render());
$root.insertAdjacentElement("beforeend", $player2.render());

for (let i = 0; i < 6; i++) {
    const $cardGame = new CardGame(imgs[Math.trunc(i / 2)]);
    $root.insertAdjacentElement("beforeend", $cardGame.render());
}
