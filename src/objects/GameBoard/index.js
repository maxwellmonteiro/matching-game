import "./style.css";
import CardGame from "../../components/CardGame";
import ScoreBoard from "../ScoreBoard";

function GameBoard(cardsAmount = 3) {
    var _self = this;
    var _element;        
    var _cards = [];   
    var _cardsAmount = cardsAmount; 
    var _faces = [];  
    var _cardsSelected = [];  
    const _facesAvailable = [CardGame.FACE_JS, CardGame.FACE_HTML, CardGame.FACE_CSS];    

    _createFaces();    
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

    function _createCards() {
        const shuffledImgs = _shuffle(_faces);              
        shuffledImgs.forEach( si => {    
            _cards.push(new CardGame(si, (c) => {
                match(c);
            }));            
        });
        return _cards;
    }

    function match(card) {
        _cardsSelected.push(card);
        if (_cardsSelected.length === 2) {
            if (_cardsSelected[0].getFace() !== _cardsSelected[1].getFace()) { // not match
                _self.disable(); // disable clicks during timeout
                setTimeout(() => { // timeout for user to see not matched cards before flip again
                    _cardsSelected[0].flip();
                    _cardsSelected[1].flip();
                    _self.enable();
                    _cardsSelected = [];
                }, 800);
            } else { // match
                _cardsSelected[0].disable();
                _cardsSelected[1].disable();
                _cardsSelected = [];
            }
        }
    }

    this.render = function () {   
        _element = document.createElement("section");
        _element.classList.add("board-game");       
        _cards.forEach(c => {
            _element.insertAdjacentElement("beforeend", c.render());
        });
        return _element;
    }

    this.disable = function () {        
        _element.classList.add("disabled");        
    }

    this.enable = function () {        
        _element.classList.remove("disabled");       
    }
    
}

export default GameBoard;