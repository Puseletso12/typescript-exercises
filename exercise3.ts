function calculator(num1: number, num2: number) {
  return num1 + num2;
}
const result = calculator(10, 30);


function fixedNumber(num5:number) {
    return num5
}
const results = fixedNumber(10)

let action = true
function numberThree(lastName:string, action?:boolean) {
    if (action) {
        return lastName.toUpperCase()
    } else {
        return lastName.toLowerCase()
    }
}