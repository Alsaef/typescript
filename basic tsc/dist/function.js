"use strict";
function addition(number1, number2) {
    return number1 + number2;
}
addition(2, 2);
const money = {
    balance: 5,
    addMoney: (balance, money) => {
        return balance + money;
    }
};
const friends = ['hany', 'boney'];
const newFrd = ['kalam'];
friends.push(...newFrd);
console.log(friends);
