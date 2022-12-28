// İlkel veri türleri // Primitive data types

// - String
// - Number
// -Boolen
// - Null
// -Undifened

// ilkel veri türleri değiştirilemez 

let string = "Mustafa";
string[0] = "Y"

// "M" harfini "Y" ile değiştirme işlemi yaptık ama consolo stringi yazdırmış olsak yine "Mustafa " değerini görürürüz.


// İlkel olmayhan veri türleri -- Non-pirimitive data types

let nums = [1, 2, 3]
console.log(nums);

nums[0] = 4  // 1. elemanı değiştirme işlemi yaptık.
console.log(nums);

let nums1 = [1, 2, 3]
let nums2 = [1, 2, 3]
console.log(nums1 == nums2); // değerleri aynı olsa bile false döner
// non-primitiveler değerlerine göre karşılaştırılamazlar mesele başka birşey deneyelim

console.log("nums length", nums1.length == nums2.length); // her ikiside 3 eleman içerdi için 3 = 3 "true" döner


let user = {
    name: "mustafa",
    surname: "erkaya",
    age: 25
}

let user1 = {
    name: "mustafa",
    surname: "erkaya",
    age: 25
}

console.log(user == user1); // yukarıda olduğu gibi objelerde "false" döner

// non-Primitiveler referanslarına göre karşılaştırılır.


// NUMBERS //

let age = 25;
const gravity = 9.81;
let mass = 65;
const PI = 3.14;

// Numbers -- Math Objext //

const pi = Math.PI
console.log("PI sayısı:" , pi);
console.log(Math.round(pi)); // 3'e yuvarlar
console.log(Math.round(2.91)); // 3'e Yuvarlar kendisine en yakın tam sayıya yuvarlar.

// Math.floor() taban değer Math.ceil() tavan değeri getirir

console.log(Math.min("min: ",-3, 5, 11, 25, -50)); //en küçük sayıyı döndürür. -50
console.log(Math.max("max", -3, 5, 11, 25, -50)); //en büyük sayıyı döndürür. 25

// random numbers
let randNum = Math.random()
console.log(randNum); // 0 ile 1 arasında döner Ör: 0.5623, 0.0002054848 .dan sonra 17 hane verir

randNum = Math.floor(Math.random() * 11); // 0 ile 10 arasında tam sayı verir
console.log(randNum); // *** sık kullanılır.

randNum = Math.abs(-30) // mutlak değer
console.log(randNum);

randNum = Math.sqrt(100) // karekök
console.log(randNum);  // sonun 10 döner

randNum = Math.pow(4, 2) // 4'ün karesini alır (4, 3) olsaydı 4'ün küpünü alırdı.
console.log(randNum);  // sonun 16 döner
console.log(4 ** 2); // aynı şekilde karesini alma


// STRİNGS

let name = "Mustafa"
let surName = "Erkaya"


let fullName = name + " "+ surName  // eski yöntem artık `` kullanılıyor
console.log(fullName);  

let paragrapy = "mustafa\nerkaya"
console.log(paragrapy);

// backtick sytanx 
console.log(`isim: ${paragrapy}`);  // bu şekilde kullanabiliriz



// STRİNG Method


let js = 'javascriptte uzmanlaşacağım';
console.log(js.length); // kaç karakter olduğunu verir boşluklarda dahil

console.log(js[1]);
console.log(js[js.length-1]);

// toUpperCase() -- büyük harf
// toLowerCase() -- küçük harf
console.log(js.toUpperCase());


console.log(js.substring(5 , 15)); // başlangıç ve bitiş verilir arasındaki karakterleri gösterir 2.değer hariç

let script = '30 Days Of JavaScript';
console.log(script.split("")); //böler ve array oluşturur
console.log(script.split(" ")); // boşluklardan kestik
console.log(script.split('Java'));

console.log(script.includes('30'));  // içermek
console.log(script.includes('days'));

console.log(script.replace('30', '45')); // 30 u 45'e çevirdik 45Days Of Javascript

console.log(script.indexOf('3')); //index değerini verir

// lastIndexOf sonuncusunu döndürür   ********


// ..ile başlıyor mu?
console.log(script.startsWith('days'));  // false
console.log(script.startsWith('Days'));  // false
console.log(script.startsWith('30'));  // 30 ile başladığı için true

// match regex
let regex = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(regex.match('love'));
console.log(regex.match(/love/gi));

let txt = 'Ben Mustafa Erkaya 1997"de Kayseride doğdum. 25 yaşındayım, Mekatronik Mühendisi ve 3 aylık Frontend Geliştiriciyim. Frontend Devop. bana çok keyif verdiği için kariyerimi bu alanda ilerletme kararı aldım.';
console.log(txt.match(/\d+/g));  // string number karısık verilerde number verileri ayıklamak için mükemmel lan.


// exercise

let challenge = '30 Days Of JavaScript';














