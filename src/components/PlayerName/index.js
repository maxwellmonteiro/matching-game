import "./style.css"; // vite stuff, not vanilla js

function PlayerName(name) {
    var name = name;    

    this.render = function () {
        const content = `${name}`;   
        
        const element = document.createElement('label');
        element.setAttribute("class", "player-name");
        element.insertAdjacentHTML("afterbegin", content);
        return element;
    }
}

export default PlayerName;