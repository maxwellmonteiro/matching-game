import "./style.css";

function PlayerName(name) {
    var _name = name;   
    var _element; 

    this.render = function () {
        const content = `${_name}`;   
        
        _element = document.createElement('p');
        _element.classList.add("player-name");
        _element.insertAdjacentHTML("afterbegin", content);
        return _element;
    }
}

export default PlayerName;