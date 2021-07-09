import "./style.css"; // vite stuff, not vanilla js

function CardGame(backImg) {  
    const FRONT_IMG = "src/images/alura-pixel.png";
    const CLASS_FRONT = "card-game";
    const CLASS_BACK = "card-game-back";
    var _flipped = false;   
    var _backImg = backImg;
    var _element;

    this.render = function () {    
        const content = `        
            <img src="src/images/alura-pixel.png">        
        `;
        _element = document.createElement("article");
        _element.setAttribute("class", "card-game");
        _element.insertAdjacentHTML("afterbegin", content);
        _element.addEventListener("click", this.flip, false);
        return _element;    
    }
    
    this.flip = function () {    
        let img = _element.getElementsByTagName("img")[0];
        if (_flipped) {
            _element.setAttribute("class", CLASS_FRONT);   
            img.setAttribute("src", FRONT_IMG);
        } else {
            _element.setAttribute("class", CLASS_BACK); 
            img.setAttribute("src", _backImg);
        }
        _flipped = !_flipped;
    };
}

export default CardGame;