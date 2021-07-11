import "./style.css";

function GameCard(backImg, onClick = (card) => {}) {  
    const FRONT_IMG = GameCard.ALURA_FACE;
    const BACK_IMG = backImg;
    const FRONT_CSS_CLASS = "game-card";
    const BACK_CSS_CLASS = "game-card-back";
    //var _flipped = false;       
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
        const otherFace = getOtherFace();
        _element.setAttribute("class", otherFace.cssClass);   
        img.src = otherFace.srcImg;       
    };

    this.isFlipped = function () {
        return _element.getAttribute("class") === BACK_CSS_CLASS;
    }

    function getOtherFace() {
        let otherFace;
        if (_element.getAttribute("class") === FRONT_CSS_CLASS) {
            otherFace = { cssClass: BACK_CSS_CLASS, srcImg: BACK_IMG };
        } else {
            otherFace = { cssClass: FRONT_CSS_CLASS, srcImg: FRONT_IMG };
        }
        return otherFace;
    }
    
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