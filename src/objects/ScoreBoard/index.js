import "./style.css";
import PlayerName from "../../components/PlayerName";

function ScoreBoard(player1 = "player1", player2 = "player2") {
    var _element;
    var _players = [];

    _createPlayers();

    function _createPlayers() {
        _players.push(new PlayerName(player1));
        _players.push(new PlayerName(player2));
    }

    this.render = function () {
        _element = document.createElement("header");
        _element.classList.add("score-board");
        _players.forEach(p => {
            _element.insertAdjacentElement("beforeend", p.render());
        }); 
        return _element;
    }
}

export default ScoreBoard;