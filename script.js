'use strict';

const text = document.querySelector('#text');

const debounce = (fn, ms) => {
  let timeout;
  return function () {
    const fnCall = () => { fn.apply(this, arguments); };
    clearTimeout(timeout);
    timeout = setTimeout(fnCall, ms);
  };
};
  
let onChange = (e) => {
  text.textContent = e.target.value;
};
  
onChange = debounce(onChange, 3000);

document.getElementById('search').addEventListener('input', onChange);