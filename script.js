'use strict';

const deleteSpaces = (str) => {
  let res = 'Вы не передали строку';

  const isNumber = function(n) {
    return !isNaN(parseFloat(n) && isFinite(n));
  };

  if (typeof str === 'string' && isNumber(str) === false) {
    const newStr = str.trim();
    if (newStr.length > 30) {
      res = newStr.substr(0, 30) + '...';
    } else {
      res = newStr;
    }
  }

  return res;
};

// тесты
console.log(deleteSpaces(123));
console.log(deleteSpaces(' hello '));
console.log(deleteSpaces('  dfdhfhfjghjghjghjhghfgjfjfgjfjfjgfhffhgjfg '));















