'use strict';

const btnRegister = document.querySelector('#registerUser'),
      btnAuto = document.querySelector('#login'),
      list = document.querySelector('#list');

const isString = function(n) {
  return n.trim() === '' || n === null;
};

const dateOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  timezone: 'UTC',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
};

const date = new Date();
const toDay = date.toLocaleString('ru', dateOptions);

const nameRegister = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/;
      
let appData = localStorage.getItem('appData') ? JSON.parse(localStorage.getItem('appData')) : [];

const addToStorage = () => {
  localStorage.setItem('appData', JSON.stringify(appData));
};

const start = () => {
  let nameStr = prompt('Введите через пробел Имя и Фамилию пользователя');
  console.log(nameStr.split(' ').length - 1);

  if (!nameRegister.test(nameStr) || nameStr.split(' ').length - 1 > 1) {
    alert('Ошибка ввода данных!');
    return;
  } 

  let loginVar = prompt('Введите логин');

  if (loginVar === null) {
    return;
  }

  let passwordVar = prompt('Введите пароль');

  const render = () => {
    list.textContent = '';
  
    appData.forEach(function(item, i) {
      const li = document.createElement('li');
    
      li.innerHTML = '<span>' + 'Имя: ' + item.name + ', фамилия: ' + item.lastName + ', зарегистривован: ' + item.regDate + '</span>';
      list.append(li);   
    });
  }; 

  const arr = nameStr.split(' ');

  const newText = {
    name: arr[0],
    lastName: arr[1], 
    login: loginVar,
    password: passwordVar,
    regDate: toDay
  };

  appData.push(newText);
  render();
  addToStorage();
};

btnRegister.addEventListener('click', start);
render();

