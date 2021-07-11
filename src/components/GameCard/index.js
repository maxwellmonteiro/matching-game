import "./style.css";

function GameCard(backImg, onClick = (card) => {}) {  
    const FRONT_IMG = GameCard.ALURA_FACE;
    const FRONT_CSS_CLASS = "card-game";
    const BACK_CSS_CLASS = "card-game-back";
    var _flipped = false;       
    var _element;  
    var _self = this;  
    
    this.render = function () {    
        const content = `        
            <img src="${FRONT_IMG}" />        
        `;
        _element = document.createElement("article");
        _element.classList.add(FRONT_CSS_CLASS);        
        _element.insertAdjacentHTML("afterbegin", content);
        _element.addEventListener("click", handleClick, false);
        return _element;    
    }   
    
    this.getFace = function () {    
        let img = _element.getElementsByTagName("img")[0];    
        return img.src;
    }    

    this.disable = function () {
        _element.classList.add("disabled");
    }

    this.enable = function () {
        _element.classList.remove("disabled");
    }

    this.flip = function () {    
        let img = _element.getElementsByTagName("img")[0];
        if (_flipped) {        
            _element.setAttribute("class", FRONT_CSS_CLASS);   
            img.src = FRONT_IMG;
        } else {
            _element.setAttribute("class", BACK_CSS_CLASS); 
            img.src = backImg;
        }
        _flipped = !_flipped;
    };
    
    function handleClick() {                 
        _self.flip(); 
        onClick(_self); 
    }       
}

GameCard.ALURA_FACE = "src/images/alura-pixel.png";
GameCard.JS_FACE = "src/images/js-pixel.png";
GameCard.HTML_FACE = "src/images/html-pixel.png";
GameCard.CSS_FACE = "src/images/css-pixel.png";

export default GameCard;