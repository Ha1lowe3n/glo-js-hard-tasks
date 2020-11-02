'use strict';

const text = document.querySelector('.text');

const date = new Date(),
      hour = date.getHours(),
      time = date.toLocaleTimeString('en'),
      newYear = new Date(new Date().getFullYear() + 1, 0, 1);

let hello;

if (hour >= 5 && hour < 12) {
  hello = 'Доброе утро!';
} else if (hour >= 12 && hour < 18) {
  hello = 'Доброе день!';
} else if (hour >= 18 && hour < 24) {
  hello = 'Доброе вечер!';
} else if (hour >= 0 && hour < 5) {
  hello = 'Доброй ночи!';
}

const getWeekDay = () => {
  const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

  const day = date.getDay();

  return days[day];
};

const changeEnding = (num) => {
  const textVariant = [' день', ' дня', ' дней'];
  const n1 = num % 100,
    n2 = num % 10;
  return n1 > 4 && n1 < 21 ? num + textVariant[2] :
    n2 === 1 ? num + textVariant[0] :
    n2 > 1 && n2 < 5 ? num + textVariant[1] :
    num + textVariant[2];
};

const newYearDays = changeEnding(Math.ceil((newYear.getTime() - date.getTime()) / 1000 / 60 / 60 / 24));

text.innerHTML = `${hello} <br/>
  Сегодня: ${getWeekDay()} <br/>
  Текущее время: ${time} <br/>
  До нового года осталось ${newYearDays}`;