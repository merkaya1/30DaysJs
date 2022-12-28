// Boolens

let isLightOn = true;
let isRainig = false;
let isHungry = true;
let trueValue = 4 > 3;
let falseValue = 4 < 2;

console.log(isHungry, isLightOn, isRainig , trueValue, falseValue);

// Operators

let firstName = 'Mustafa'; // = atama operatorü

let a = 4
let b = 10;
a += b; // a = a + b
console.log(a); // 14

// logical operators

let check = 4 > 3 && 12 > 5; // true && true -> true
    check = 4 < 3 && 12 > 5; // false && true -> false


    check = 4 > 2 || 10 > 8 // true || true -> true
    check = 4 > 5 || 10 > 6 // false || true -> true
    check = 4 > 5 || 10 > 12 // false || false -> false
    console.log(check);

    /*///***//*/*/

let count = 0
    console.log(count++); // 0 -- sonradan artıyor değeri
    console.log(count); // 1

// Ternart Operator
let isCloudy = true;
isCloudy ? console.log("It's cloudy") : console.log("it's not cloudy");

console.log(isCloudy);

