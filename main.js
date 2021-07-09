import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/settings/fonts.css";
import "./src/styles/elements/base.css";
import CardGame from "./src/components/CardGame";
import PlayerName from "./src/components/PlayerName";

const $root = document.querySelector("#root");

const $player1 = new PlayerName("Player1");
const $player2 = new PlayerName("Player2");

$root.insertAdjacentElement("beforeend", $player1.render());
$root.insertAdjacentElement("beforeend", $player2.render());

const imgs = [
    CardGame.FACE_JS, CardGame.FACE_HTML, CardGame.FACE_CSS, 
    CardGame.FACE_JS, CardGame.FACE_HTML, CardGame.FACE_CSS
];

const shuffledImgs = [];
for (let i = 0, len = imgs.length; i < len; i++) {
    const r = Math.random() * 1000;
    const t = Math.trunc(r);
    const m = t % (imgs.length);    
    shuffledImgs.push(imgs.splice(m, 1)[0]);
}

const $cardGames = [];
for (let si of shuffledImgs) {
    const $cardGame = new CardGame(si);
    $root.insertAdjacentElement("beforeend", $cardGame.render());
    $cardGames.push($cardGame);
}


