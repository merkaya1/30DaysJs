// date object
const date = new Date();  //non-primitive
console.log(date);

console.log(date.getFullYear());
console.log(date.getMonth()+1);
console.log(date.getDay());
console.log(date.getHours());
console.log("getDate",date.getDate());

// Date'i kendimize göre formatlayalım.
const now = new Date();

let year = now.getFullYear(),
    month = now.getMonth(),
    day = now.getDate(), // 1-31 arası
    sday = now.getDay()
    hours = now.getHours(),
    min = now.getMinutes(),
    second = now.getSeconds()
console.log(typeof month);
console.log(`Şuanda bulunduğum zaman dilimi --> ${day}/${month + 1}/${year} -- ${hours}.${min}.${second}`);
// alert(`Şuanda bulunduğum zaman dilimi --> ${day}/${month + 1}/${year} -- ${hours}.${min}.${second}`)

let months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']
let days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi']


console.log(`Şuanda bulunduğum zaman dilimi --> ${day}/${months[month]}/${year} / ${days[sday]} / ${hours}.${min}.${second}`);

// Exercise
const namee = 'Mustafa',
    lastName = 'Erkaya',
    country = 'Türkiye',
    age = 25

    console.log(typeof namee, typeof lastName,typeof country,typeof age);

    console.log(parseInt(9.8) == 10);

    console.log('falsy value' , null , 0, [], {}, undefined);

// trianle area calculate

let base = Number(prompt('Üçgenin tabanını giriniz'))
let height = Number(prompt('Üçgenin Yüksekliğini giriniz'))
alert(`Üçgenin alanı: ${base * height * 0.5}`)

let aSide = 5,
    bSide= 10,
    cSide=8

    console.log(`üçgenin çevresi: ${aSide + bSide + cSide}`);

// rectangle area and perimeter calculate

let width = Number(prompt('Genişlik giriniz')),
    recHeight = Number(prompt('Yükseklik giriniz'))

 alert(`Rectangle area: ${width * height} 
        Rectangle perimeters: ${(width + height) * 2}`)   

 let deneme = Number(prompt('Bir sayı giriniz'))       
 if(deneme < 0){
    deneme = Number(prompt('Pozitif bir sayı giriniz')) //yanlış kullanım
 }

 // circle area
 let circle = Number(prompt('Yarıçapı Giriniz'))

 console.log(`Circle area : ${Math.PI * circle * circle}`);