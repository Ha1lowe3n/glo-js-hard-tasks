'use strict';

// функция для правильного окончания слов
const declination = function(number, txt) {
  let cases = [2, 0, 1, 1, 1, 2];
  return txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
};

// функция для добавляения нуля
function getZero(num) {
  if (num >= 0 && num < 10) {
      return `0${num}`;
  } else {
      return num;
  }
}

const startDate = function() {
  
  const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

  const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

  // console.log(`Цель будет достигнута за ${appData.getTargetMonth()} ${declination(numberMonth, ['месяц', 'месяца', 'месяцев'])}`);

  const day = new Date();
  const toDay = day.getDay();
  const toMonth = day.getMonth();

  let lessonNineStr = 'Сегодня ' + week[(toDay - 1)] + ', ' + day.getDate() + ' ' + months[toMonth] + ' ' + day.getFullYear() + ' ' + 'года, ' + day.getHours() + ' ' + declination(day.getHours(), ['час', 'часа', 'часов']) + ' ' + day.getMinutes() + ' минут ' + day.getSeconds() + ' секунд';

  let strZero = getZero(day.getDate()) + '.' + getZero(toMonth + 1) + '.' + day.getFullYear() + ' - ' + getZero(day.getHours()) + ':' + getZero(day.getMinutes()) + ':' + getZero(day.getSeconds());

  document.querySelector('.text').textContent = lessonNineStr;
  document.querySelector('.numbers').textContent = strZero;
};

let div = document.createElement('div');
div.classList.add('text');
document.body.appendChild(div);

div = document.createElement('div');
div.classList.add('numbers');
document.body.appendChild(div);
console.dir(div);

setInterval(startDate, 1000);



















