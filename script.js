'use strict';

let arr = ['87', '354', '7889', '26756858', '444', '87688', '9879677'];

// 1
for (let i = 0; i < arr.length; i++) {
  if (arr[i].startsWith('2') || arr[i].startsWith('4')) {
      console.log(arr[i]);
  }
}

// 2 и 3
const n = 100;

numberLabel:
for (let i = 2; i <= n; i++) {

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      continue numberLabel;
    }
  }

  console.log(i);
  // ниже сделал с циклом, если нельзя просто взять и написать вот так
  console.log(`Делители числа ${i}: 1 и ${i}`);

  // for (let y = i; y === i; y++) {
  //   console.log(`Делители числа ${y}: 1 и ${i}`);
  // }
  
}






















