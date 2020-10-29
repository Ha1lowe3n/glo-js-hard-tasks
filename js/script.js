'use strict';

const btnRegister = document.querySelector('#registerUser'),
      btnAuto = document.querySelector('#login'),
      list = document.querySelector('#list'),
      username = document.querySelector('#username');
      

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



const nameRegister = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/;
      
let appData = localStorage.getItem('appData') ? JSON.parse(localStorage.getItem('appData')) : [];

const addToStorage = () => {
  localStorage.setItem('appData', JSON.stringify(appData));
};

const render = () => {
  list.textContent = '';
  
  appData.forEach(function(item, i) {
    const li = document.createElement('li');
  
    li.innerHTML = '<span>' + 'Имя: ' + 
      item.name + ', фамилия: ' + item.lastName + ', зарегистрирован: ' + item.regDate + '</span>' +
      '<button class="close"></button>';
    list.append(li); 

    console.log(item + '; ' + i);

    const btnClose = li.querySelector('.close');
    
    btnClose.addEventListener('click', () => {
      appData.splice(i, 1);
      localStorage.removeItem(appData[i]);
      render();
      addToStorage();
    });
  });

  const start = () => {

    let nameStr = prompt('Введите через пробел Имя и Фамилию пользователя');
  
    if (!nameRegister.test(nameStr) || nameStr.split(' ').length - 1 > 1) {
      alert('Ошибка ввода данных!');
      return;
    } 

    let loginVar = prompt('Введите логин');

    if (loginVar === null) {
      return;
    }

    let passwordVar = prompt('Введите пароль');

    const arr = nameStr.split(' ');

    const date = new Date();
    const toDay = date.toLocaleString('ru', dateOptions);

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
    btnRegister.removeEventListener('click', start);
  };

  btnRegister.addEventListener('click', start); 
};

const authorization = () => {
  let loginAuto = prompt('Введите логин');

  if (loginAuto === null) {
    return;
  }

  let pasAuto = prompt('Введите пароль');

  if (pasAuto === null) {
    return;
  }

  let loginAutoValue;
  appData.forEach((item) => { 
    if (item.login === loginAuto && item.password === pasAuto) {
      loginAutoValue = loginAuto;
    } 
    console.log(loginAutoValue);
  });

  if (loginAutoValue === undefined) {
    alert('Пользователь не найден');
  } else {
    username.textContent = loginAuto;
  }
};

btnAuto.addEventListener('click', authorization);

render();

