'use strict';

let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];

const day = new Date();
const toDay = day.getDay();

week.forEach(function(item, i) {
  let str = item;
  if (i === (toDay - 1)) {
    str = `<b>${item}</b>`;
  } else {
    str = `${item}`;
  }

  if (i === 5 || i === 6) {
    str = `<i>${str}</i>`;
  }

  document.body.insertAdjacentHTML('beforeend',`<div>${str}</div>`);
});


















