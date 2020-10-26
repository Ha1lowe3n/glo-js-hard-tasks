'use strict';

const idColor = document.querySelector('h1'),
      btnChange = document.querySelector('#change');
  
btnChange.addEventListener('click', () => {

  const getBackgroundColor = () => {
    const colorOne = Math.floor(Math.random() * 256),
          colorTwo = Math.floor(Math.random() * 256),
          colorThree = Math.floor(Math.random() * 256);

    const bgColor = '#' + colorOne.toString(16) + colorTwo.toString(16) + colorThree.toString(16);

    document.body.style.backgroundColor = bgColor;
    idColor.innerText = bgColor;
  };

  getBackgroundColor();
});







