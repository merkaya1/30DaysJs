// for loop

for (let i = 0; i <= 5; i++) {
    console.log(i);
    
}

const names = ['Mustafa', 'Yusuf', 'Mehmet', 'Ramazan', 'Yasin']

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
    
}

// while

let i = 0
while (i <names.length) {
    console.log("while", names[i]);
    i++;
}

// for of 
for(let name of names) {
    console.log('ad', name);
}


// exercise

for (let i = 0; i <= 10; i++) {
    console.log(i);
    
}

i = 0;
while (i <= 10) {
    console.log("while", i);
    i++;
}


i = 0;
do {
    console.log('kralsın');
    i++
} while( i < 5) {
    console.log('do while', i);
}

// sor bunu 
let kare = '#'
let sum = ''
for (let i = 0; i < 6; i++) {
  
    sum = sum + kare;
    console.log("sum", sum);
    
}

// carpım 
for (let i = 1; i < 10; i++){
   console.log(`${i} * ${i} = ${i * i}`);
   
}

for (let i = 1; i <= 10; i++){
    console.log(`${i}  ${i**2}  ${i**3}`);
    
 }

// cigt sayıları bulma
 for (let i = 1; i <= 100; i++){
    if ( i % 2 === 0){
        console.log('cift sayılar', i);
    }
    
 }

 // asal sayılar ıbulma

 // sorulacak yer
 for (let i = 1; i <= 20; i++){
   
   for ( let j = 2; j<i ; j++){
    if(i % j === 0 ){
      console.log('sayı asal değil', i);
    } else {
        console.log(i);
    }
    
   }
   
 }

 // 1 - 100 arası sayıları toplamı
 let num = 0;
 for (let i = 0; i <=100; i++) {
    num +=i;
    console.log(num, i);
    
 }
let cift = 0;
let tek = 0;
const arr = [];
 // 1 - 100 arası çift ve tek sayıları toplamı ayrı ayrı
 for (let i = 0; i <= 100; i++) {
    if(i % 2 === 0) {
        cift +=i
        
    } else {
        tek += i
        
    }
    
 }

 console.log('tek sayıları toplamı =', tek);
    console.log('cift sayıları toplamı =', cift);
    console.log('bütümn sayıların =', cift + tek);

    arr.push(tek, cift)
    console.log(arr);



    const array = []
for (let i = 0; i < 5; i++) {
   
    array.push((Math.floor(Math.random() *100)))
}

console.log('array', array);

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

console.log(makeid(5));

let r = (Math.random() + 1).toString(36).substring(7);
console.log("random", r);

let a = Math.random()
console.log(a+1);

const country = ['Türkiye', 'Avusturalya', 'Almanya', 'Japonya', 'Portekiz', 'Amerika', 'Fransa', 'İngiltere']
console.log(country.length);
let countryLenght = [];
for (let i = 0; i < country.length; i++) {
    countryLenght.push(country[i].length)
    
}

console.log("element", countryLenght);

const ab = country.map(item => item.length)
console.log(typeof ab, ab);

const arr3 = {
    name: 'mustafa',
    surname: 'erkaya'
}

console.log(typeof arr3, arr3);

const  upperCountry = country.map(item => item.toUpperCase())
console.log('upper', upperCountry);

const cnt = country.map(item => [item, item.substring(0, 3).toUpperCase(), country.length])
console.log('cnt', cnt);

// içerisinde geçen
for (let i = 0; i < country.length; i++) {
    if(country[i].includes('ya')){
        console.log(country[i]);
    } else {
        console.log('ya içermeyen ülkeler', country[i]);
    }
    
}


country.map(item => console.log('item', item.lastIndexOf()))

let b = 'mustafa';
console.log(b.lastIndexOf('a'));

country.map(item => console.log(`${item}, ${item.length}`))

a = Math.max(...(country.map(item => `${item.length}`)))

console.log(a);

// karakter uzunluğu 5 olan ülkeleri bulma
for (let i = 0; i < country.length; i++) {
    if(country[i].length === 7) {
        console.log(country[i]);
    } else {
        console.log(country[i], 'uzunluğu 7 den farklı');
    }
    
}

const c = country.map(item => [`${item}, ${item.length}`])
console.log(c);

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

const langue = mernStack.map(lang => lang[0])
console.log( langue.join('-'));

const langues = ['HTML','CSS', 'JavaScript', 'C#', 'MongoDB', 'Express', 'React', 'Node']

for (const lang of langues) {
    console.log(lang);
}

for (let i = langues.length-1; i > 0; i--) {
    console.log('ters languers', langues[i]);
    
}

const fullStack = [
    ['HTML', 'CSS', 'JS', 'REACT'],
    ['NODE', 'EXPRESS', 'MONGODB']
]
let arr1 = [];

fullStack.map(item =>[
    arr1 = [...item, ...arr1]
    
])
console.log("arr1", arr1);
arr1.map(item => console.log(item))

const correctedFS = fullStack.flat(1) // Arrayleri birleştirme işlemi yapar

console.log("correc",correctedFS);


for (let i = 0; i < fullStack.length; i++) {
   if ( i === 0) {
    for (let j = 0; j < fullStack[0].length; j++) {
        console.log("0", fullStack[i][j]);
        
    }
   }else {
    for (let j = 0; j < fullStack[1].length; j++) {
        console.log("1", fullStack[i][j]);
        
    }
   }

   

    
}



for (const full of fullStack) {
    console.log("full", full);
}
function isPrime(num) {
    if(num < 2) return false;
    for (let i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    return true;
}

for (let i = 0; i <=100; i++) {
    if(isPrime(i)) console.log(i);
    
}

console.log(country.sort());


const arr5 = [1,2,3,4,5, 'a', 'b', 'c', 'd', 'e']

// [11,11,11,11,11,1,1,1,1,1]


// const func = (arr) => {
//     return arr.map(item => {
//         console.log(typeof item);
//         if(typeof item === 'number') {
//             return 11
//         } else {
//             return 1
//         }
        
//     })
// }

// console.log(func(arr5));


// 28.12.2022
// output -- 28 + 12 + 2022
const date = new Date()
const year = date.getFullYear()
const month = date.getMonth();
const day = date.getDate()

console.log(year, month, day, date);

const ar = [];
ar.push(year, month, day )
console.log(ar);

let sum1=0;
const func = (arr) => {
   
    return arr.map(item => {
        
      return `${item[0]} + ${item[1]} + ${item[2]} = `
    })
}

console.log(func(ar));

//a sdasdasd

