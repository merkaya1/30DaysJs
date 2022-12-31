// Function

// declaration function



function functionName() {
    console.log('hello world');
}

functionName() // fonksiyonların çalışması için çağırmamız gerekir

// *** bir fonksiyon parametre alır ve geriye birşey döndürür kulanmamız gereken budur


function multiply (num1, num2) {
    return num1 * num2;
}

let total = multiply(5,8)

console.log(total);

let funk = (char) => {
    console.log(char);
}

funk('mustafa')


function topla () {
    console.log(arguments);  // gayet iyi parametre yazmadan otomatik gidiyor normal fonksiyonlar için

}

topla(2,5,9,7,15,45)

const sayHello = function(name) {
    return `Hello ${name}`
}

console.log(sayHello('Mustafa'));


// exercise 
console.log('EXERCİSE *****************************');
//1
const fullName = (name) => {
    return console.log(name);
}
fullName('mustafa')

const fName = function(first, last) {
    return `${first} ${last}`
}

console.log('2' ,fName('Mustafa', 'Erkaya'));

const num = (num1, num2) => num1+num2;

console.log('3-', num(15, 6));


const rectangle = function(height, widht) {
    return `Alan = ${height * widht} )`
}

console.log('4', rectangle(10, 26));

const rectangle1 = function(height, widht) {
    return `Çevre = ${2*(height + widht)} )`
}

console.log('5', rectangle1(10, 26));

const volumeOfRectPrism = (height, widht, length) => {
    return `Hacmi = ${height * widht * length}`
}

console.log('6', volumeOfRectPrism(10,20,15));

let circle = 10;

function areaOfCircle(circle) {
   return `Daireni Alanı = ${ Math.PI * circle*circle}`
}

console.log("7- ",areaOfCircle(circle));

function circumOfCircle(circle) {
    return `Daireni Çevresi = ${ Math.PI * circle* 2}`
}

console.log("8- ",circumOfCircle(circle));

const density = {
    kutle: 10,
    hacim: 5
}

const yogunluk = function(obj) {
    return `Yoğunluk = ${obj.kutle / obj.hacim}`
}

console.log("9- ",yogunluk(density));

// hız = mesefa / süre 

const speed = (distance, time) => distance / time;

console.log('10- speed = ', speed(200, 45), ' km/h');

// ağırlık = kütle * yerçekimi

const Gravity = 9.81;

const weight = (mass, gravity) => mass * gravity

console.log("11- ağırlık ", weight(150, Gravity));