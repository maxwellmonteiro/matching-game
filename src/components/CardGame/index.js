import "./style.css"; // vite stuff, not vanilla js

function CardGame(backImg) {  
    const FRONT_IMG = CardGame.FACE_ALURA;
    const CLASS_FRONT = "card-game";
    const CLASS_BACK = "card-game-back";
    var _flipped = false;   
    var _backImg = backImg;
    var _element;

    this.render = function () {    
        const content = `        
            <img src="${FRONT_IMG}" />        
        `;
        _element = document.createElement("article");
        _element.classList.add(CLASS_FRONT);        
        _element.insertAdjacentHTML("afterbegin", content);
        _element.addEventListener("click", this.flip, false);
        return _element;    
    }
    
    this.flip = function () {    
        let img = _element.getElementsByTagName("img")[0];
        if (_flipped) {        
            _element.setAttribute("class", CLASS_FRONT);   
            img.src = FRONT_IMG;
        } else {
            _element.setAttribute("class", CLASS_BACK); 
            img.src = _backImg;
        }
        _flipped = !_flipped;
    };
}

CardGame.FACE_ALURA = "src/images/alura-pixel.png";
CardGame.FACE_JS = "src/images/js-pixel.png";
CardGame.FACE_HTML = "src/images/html-pixel.png";
CardGame.FACE_CSS = "src/images/css-pixel.png";

export default CardGame;