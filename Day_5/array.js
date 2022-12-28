// ARRAYS

let names = Array()

console.log(names);

const names2 = ['mustafa', 25, 1997]

console.log(names2);

let js = 'JavaScript'
const charArray = js.split("")
console.log(charArray);


const numbers = [1, 2, 3, 4, 5]
numbers[0] = 10;

console.log("numbers", numbers);

let arr1 = [1,2,3]
let arr2 = [4,5,6]
let result = [...arr1 , ...arr2]
console.log(arr1.concat(arr2));
console.log("result", result);
console.log(arr1.indexOf(3));


// slice -- kesme

const fruits = ['banana', 'apple', 'orange', 'tomato']

console.log(fruits.slice(1,3));

// pop -- sondaki elemanı kaldırır ve döndürür
console.log('fruits', fruits);
fruits.pop();
console.log('pop', fruits);

// shift -- bastan eleman cıkarır

fruits.shift();
console.log('shift', fruits);


// sort -- sıralama ****

const myArray = ['h', 'e', 'l', 'l', 'o'];

console.log(myArray.sort().reverse());


//exercise,


const myArray2 = ['h', 'e', 'l', 'l', 'o'];
console.log(myArray2[0], myArray2[Math.floor(myArray2.length / 2)] , myArray2[myArray2.length - 1]);
console.log(myArray2.join());