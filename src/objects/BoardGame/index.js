import "./style.css";
import CardGame from "../../components/CardGame";
import PlayerName from "../../components/PlayerName";

function BoardGame(player1 = "player1", player2 = "player2", cardsAmount = 3) {
    var _element;
    var _players = [];
    var _cards = [];   
    var _cardsAmount = cardsAmount; 
    var _faces = [];    
    const _facesAvailable = [CardGame.FACE_JS, CardGame.FACE_HTML, CardGame.FACE_CSS];    

    _createFaces();
    _createPlayers();
    _createCards();    

    function _createFaces() {
        for (let i = 0, k = 0; i < _cardsAmount; i++, k++) {            
            if (k >= _facesAvailable.length) { // if faces pool is finished, return to begin
                k = 0;
            }
            _faces.push(_facesAvailable[k]);
        }
        // duplicate faces
        _faces = _faces.concat(_faces);
    }
        
    function _shuffle(toBeShuffled) {
        const shuffled = [];
        for (let i = 0, len = toBeShuffled.length; i < len; i++) {
            const r = Math.random() * 1000;
            const t = Math.trunc(r);
            const m = t % (toBeShuffled.length);    
            shuffled.push(toBeShuffled.splice(m, 1)[0]);
        }
        return shuffled;
    }

    function _createPlayers() {
        _players.push(new PlayerName(player1));
        _players.push(new PlayerName(player2));
    }

    function _createCards() {
        const shuffledImgs = _shuffle(_faces);              
        shuffledImgs.forEach( si => {    
            _cards.push(new CardGame(si));            
        });
        return _cards;
    }

    this.render = function () {   
        _element = document.createElement("section");
        _element.classList.add("board-game");
        _players.forEach(p => {
             _element.insertAdjacentElement("beforeend", p.render());
        });
        _cards.forEach(c => {
            _element.insertAdjacentElement("beforeend", c.render());
        });
        return _element;
    }
    
}

export default BoardGame;