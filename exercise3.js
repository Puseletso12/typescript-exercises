"use strict";
function calculator(num1, num2) {
    return num1 + num2;
}
const result = calculator(10, 30);
function fixedNumber(num5) {
    return num5;
}
const results = fixedNumber(10);
let action = true;
function numberThree(lastName, action) {
    if (action) {
        return lastName.toUpperCase();
    }
    else {
        return lastName.toLowerCase();
    }
}
