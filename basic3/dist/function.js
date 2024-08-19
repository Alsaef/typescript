"use strict";
/* function
1:function

2:arrow function=>

*/
function add(number1, number2 = 10) {
    return number1 + number2;
}
const result = add(1);
console.log(result);
const array = [1, 3, 23, 12];
const neArr = array.map((elem) => elem * elem);
