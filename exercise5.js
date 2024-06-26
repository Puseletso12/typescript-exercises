"use strict";
class Calculator {
    validity(input) {
        if (typeof input !== "number" || isNaN(input)) {
            throw new Error("Invalid input");
        }
        return input;
    }
    add(a, b) {
        a = this.validity(a);
        b = this.validity(b);
        return a + b;
    }
    subtract(a, b) {
        a = this.validity(a);
        b = this.validity(b);
        return a - b;
    }
    multiply(a, b) {
        a = this.validity(a);
        b = this.validity(b);
        return a * b;
    }
    divide(a, b) {
        a = this.validity(a);
        b = this.validity(b);
        if (b === 0) {
            throw new Error("Undefined");
        }
        return a / b;
    }
}
const calculator = new Calculator();
console.log(calculator.add(10, 5));
console.log(calculator.subtract(22, 10));
console.log(calculator.multiply(2, 6));
console.log(calculator.divide(5, 1));
