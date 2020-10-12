'use strict';

let lang = 'ru';

const stateLangDays = {
  ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
};

// 1
if (lang === 'ru') {
  console.log(stateLangDays.ru);
} else if (lang === 'en') {
  console.log(stateLangDays.en);
} else {
  console.log('Произошла ошибка');
}

switch (lang) {
  case 'ru':
    console.log(stateLangDays.ru);
    break;
  case 'en':
    console.log(stateLangDays.en);
    break;
  default:
    console.log('Произошла ошибка');
}

let langArr = [];
langArr.ru = stateLangDays.ru;
langArr.en = stateLangDays.en;
console.log(langArr[lang]);

// 2
let namePerson = 'Артём';

let result = (namePerson === 'Артём') ? 'директор' :
  (namePerson === 'Максим') ? 'преподаватель' :
  'студент';
console.log(result);














