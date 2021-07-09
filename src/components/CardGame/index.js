import "./style.css"; // vite stuff, not vanilla js

function CardGame(backImg, onClick = (e) => {}) {  
    const FRONT_IMG = CardGame.FACE_ALURA;
    const CLASS_FRONT = "card-game";
    const CLASS_BACK = "card-game-back";
    var _flipped = false;   
    var _backImg = backImg;
    var _element;    

    // this.method = public instance method
    this.render = function () {    
        const content = `        
            <img src="${FRONT_IMG}" />        
        `;
        _element = document.createElement("article");
        _element.classList.add(CLASS_FRONT);        
        _element.insertAdjacentHTML("afterbegin", content);
        _element.addEventListener("click", handleClick, false);
        return _element;    
    }    

    // function method = private instance method
    function handleClick() {
        flip();
        onClick(_element); // template method pattern, allows users to add behaviour to onClick event
    }
    
    function flip() {    
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

// Function.attribute or method = class attribute or method
// Function.prototype.attribute or method = method instance shared by all objects of Function
CardGame.FACE_ALURA = "src/images/alura-pixel.png";
CardGame.FACE_JS = "src/images/js-pixel.png";
CardGame.FACE_HTML = "src/images/html-pixel.png";
CardGame.FACE_CSS = "src/images/css-pixel.png";

export default CardGame;