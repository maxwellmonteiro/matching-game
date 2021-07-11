import "./style.css";
import GameCard from "../../components/GameCard";

function GameBoard(cardsAmount = 3) {
    var _self = this;
    var _element;        
    var _cards = [];       
    var _cardFaces = [];  
    var _selectedCards = [];  
    const _availableFaces = [GameCard.JS_FACE, GameCard.HTML_FACE, GameCard.CSS_FACE];    

    _createCardFaces();    
    _createCards();    

    function _createCardFaces() {
        const cardFaces = [];
        for (let i = 0; i < cardsAmount; i++) {            
            if (i >= _availableFaces.length) {
                i = 0;
            }
            cardFaces.push(_availableFaces[i]);
        }   
        const duplicatedCardFaces = [...cardFaces, ...cardFaces];
        _cardFaces = duplicatedCardFaces;
    }
        
    function _shuffle(cardFacesToShuffle) {
        const shuffled = [];
        for (let i = 0, len = cardFacesToShuffle.length; i < len; i++) {
            const randomFrom0To1000 = Math.random() * 1000;
            const randomInteger = Math.trunc(randomFrom0To1000);
            const position = randomInteger % (cardFacesToShuffle.length);    
            const theChosen = cardFacesToShuffle.splice(position, 1)[0];
            shuffled.push(theChosen);
        }
        return shuffled;
    }        

    function _createCards() {
        const shuffledFaces = _shuffle(_cardFaces);              
        shuffledFaces.forEach( sf => {  
            const onClickCallBack = (c) => {
                checkMatch(c);
            }  
            _cards.push(new GameCard(sf, onClickCallBack));            
        });        
    }

    function checkMatch(card) {
        _selectedCards.push(card);
        const twoCardsFlipped = _selectedCards.length === 2;
        if (twoCardsFlipped) {
            processMatching(_selectedCards[0], _selectedCards[1]);
            _selectedCards = [];
        }
    }

    function processMatching(card1, card2) {
        const matched = card1.getFace() === card2.getFace();
        if (!matched) {                 
            flipCardsAfterTimeout([card1, card2]);
        } else { 
            disableCards([card1, card2]);             
        }
    }

    // Wait awhile so the player can see selected cards dit not match
    function flipCardsAfterTimeout(selectedCards) {
        _self.disable(); // disable clicks during timeout
        setTimeout(() => { 
            selectedCards.forEach(c => {
                c.flip();
            })           
            _self.enable();          
        }, 800);
    }

    function disableCards(selectedCards) {
        selectedCards.forEach(c => {
            c.disable();
        })        
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