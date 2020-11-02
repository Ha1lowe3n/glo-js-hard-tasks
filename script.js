'use strict';

const btn = document.querySelector('[data-start]'),
      elem = document.querySelector('.box'),
      btnClose = document.querySelector('[data-close]');

let pos = 0, 
    animId,     
    start = 0; 

const myAnimation = () => {     
  if (pos < 300 && start) {  
    pos++;         
    elem.style.top = pos + "px";         
    elem.style.left = pos + 'px';         
    animId = requestAnimationFrame(myAnimation);     
  }  
};

btn.addEventListener('click', () => {     
  start = (start + 1) % 2;     
  if (start) {         
    animId = requestAnimationFrame(myAnimation);     
  } else {         
    cancelAnimationFrame(animId);     
  } 
});

btnClose.addEventListener('click', () => {
  start = 0;
  pos = 0;
  elem.style.top = pos + "px";         
  elem.style.left = pos + 'px'; 
});


