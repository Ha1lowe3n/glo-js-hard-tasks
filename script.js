'use strict';

let lang = prompt('Выберите язык: ru или en');
console.log(typeof(lang));
console.log(lang);

const stateLangDays = {
  ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
};

// 1
if (lang !== 'ru' && lang !== 'en') {
  console.log('Язык может быть только ru или en');
} else {
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
  
  console.log(stateLangDays[lang]);  
}


// 2
let namePerson = 'Артём';

let result = (namePerson === 'Артём') ? 'директор' :
  (namePerson === 'Максим') ? 'преподаватель' :
  'студент';
console.log(result);














