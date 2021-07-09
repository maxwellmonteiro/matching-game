import "./style.css"; // vite stuff, not vanilla js

function PlayerName(name) {
    var _name = name;   
    var _element; 

    this.render = function () {
        const content = `${_name}`;   
        
        _element = document.createElement('label');
        _element.setAttribute("class", "player-name");
        _element.insertAdjacentHTML("afterbegin", content);
        return _element;
    }
}

export default PlayerName;