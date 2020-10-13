'use strict';

const deleteSpaces = (str) => {
  let newStr;
  if (typeof str === 'string') {
    newStr = str.trim();
    if (newStr.length > 30) {
      newStr = newStr.substr(0, 30) + '...';
    }
  } else {
    newStr = alert('Вы не передали строку');
  }

  return newStr;
}

// тесты
deleteSpaces(' hello ');
console.log(deleteSpaces(' hello '));
console.log(deleteSpaces('  heeeeeeeeelllllllllllooooooouuuuuuu '));














