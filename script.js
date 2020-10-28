document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  function DomElement (selector, height, width, bg, fontSize, position) {
    this.selector = selector;    
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.position = position;
  }

  DomElement.prototype.createNewDiv = function () {
    let div;
    if (this.selector[0] === '.') {
      div = document.createElement('div');
      div.classList.add(this.selector.slice(1));
    } else if (this.selector[0] === '#') {
      div = document.createElement('p');
      div.id = this.selector.slice(1);
    }

    div.style.cssText = `height: ${this.height}px;
      width: ${this.width}px;
      background: ${this.bg};
      font-size: ${this.fontSize}px;
      position: ${this.position};
      left: 0;
      top: 0`;

    return div;
  };

  // доп. задание

  const squareDiv = new DomElement('.new-div', 100, 100, 'black', 10, 'absolute');

  document.body.append(squareDiv.createNewDiv());

  document.addEventListener('keydown', function(e) {
    console.log(e);
    const squareElem = document.querySelector('div');

    if (e.key === 'ArrowUp') {
      squareElem.style.top = (parseInt(squareElem.style.top, 10) - 10) + 'px';
    } 
    if (e.key === 'ArrowDown') {
      squareElem.style.top = (parseInt(squareElem.style.top, 10) + 10) + 'px';
    } 
    if (e.key === 'ArrowLeft') {
      squareElem.style.left = (parseInt(squareElem.style.left, 10) - 10) + 'px';
    } 
    if (e.key === 'ArrowRight') {
      squareElem.style.left = (parseInt(squareElem.style.left, 10) + 10) + 'px'; 
    }
  });
});





    
