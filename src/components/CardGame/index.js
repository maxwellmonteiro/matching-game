import "./style.css"; // vite stuff, not vanilla js

function CardGame(backImgPath) {           
    var flipped = false;   
    var backImgPath = backImgPath;

    this.render = function () {    
        const content = `        
            <img src="src/images/alura-pixel.png">        
        `;
        const element = document.createElement("article");
        element.setAttribute("class", "card-game");
        element.insertAdjacentHTML("afterbegin", content);
        element.addEventListener("click", this.flip, false);
        return element;    
    }
    
    this.flip = function () {    
        let img = this.getElementsByTagName("img")[0];
        if (this.flipped) {
            this.setAttribute("class", "card-game");   
            img.setAttribute("src", "src/images/alura-pixel.png");
        } else {
            this.setAttribute("class", "card-game-back"); 
            img.setAttribute("src", backImgPath);
        }
        this.flipped = !this.flipped;
    };
}

export default CardGame;