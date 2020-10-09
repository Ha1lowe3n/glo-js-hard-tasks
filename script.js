let num = 266219;

let result = num.toString().split('').reduce( (a, b) => {
    return a * b;
});
console.log(result);

let degree = result ** 3;
console.log(degree);

alert(degree.toString().slice(0, 2));


