// // canditionals

// // if

// let num = 3;
// if(num > 0) {
//     console.log(`${num} is a positive number`);
// }

// let isRaining = true;

// if(isRaining) {
//     console.log('Şemsiye al');
// }

//  num = 8;
// if(num > 0) {
//     console.log(`${num} is a positive number`);
// } else {
//     console.log(`${num} is a negative number`);
// }

// let result = prompt('2 + 5 kaç eder ?', '2 + 5')
// if(result == '7'){
//     console.log('doğru çevabı verdin');
// } else {
//     console.log('hatalı cevabı verdin. Sonuç = 7');
// }

// let number = 5;
// if(number === 4){
//     //
// } else if (number > 5){
//     //
// } else if (number < 5) {
//         //
// } else {
//     //
// }


// // switch 
// console.log('SWİTCH');
// let weather = 'sunny'
// switch (weather) {
//     case 'rainy':
//         console.log('hava yağmur');
//         break;
//     case 'sunny':
//         console.log('Hava Güneşli');
//         break;
//     default:
//         console.log('Hava belirsiz :D');
//         break;
// }

// let sayi = Number(prompt('Bir sayı giriniz'))
// switch(true) { // true yerine sayi değişkenşini yazabiliriz
//     case sayi < 0:
//         console.log('Negatif sayı girdiniz');
//         break;
//     case sayi == 0:
//         console.log('girilen sayı 0');
//         break;
//     case sayi > 0: {
//         console.log('Pozitif sayı girdiniz');
//     }    
// }

// // Ternary Operator
// console.log(result === '7' ? 'Doğru cevap' : 'yanlış cevap' )

// // Exercise

// let age = Number(prompt('Yaşınızı giriniz'))
// if(age >= 18 ) {
//     console.log('Ehliyet için yaşınız yeterli');
// } else {
//     console.log(`Ehliyet için daha ${18 - age} yılınız var`);
// }


// let myAge = Number(prompt('Benim yaşım'))
// let ramoAge = Number (prompt('gardasımın yaşı'))
// if(myAge > ramoAge) {
//     console.log(`Ben gardasımda ${myAge - ramoAge} yaş büyüğüm`);
// } else {
//     console.log(`Gardasım benden ${ramoAge - myAge} yaş büyük`);
// }

//  num = 11 ;
//  console.log(num % 2 === 0 ? 'girilen sayı çift' : 'girilen sayı tek');

 let students = [
    {
        name: 'mustafa',
        not: 90
    },
    {
        name : 'ramazan',
        not : 72
    },
    {
        name: 'yasin',
        not : 30
    },
    {
        name: 'hayriye',
        not :50
    },
    {
        name: 'yusuf',
        not : 40
    },
    {
        name : 'mehmet',
        not : 10
    },
    {
        name : 'belinay ',
        not : 69
    },
    {
        name : 'melike',
        not : 100
    }
 ]

 console.log(students);
 students.map((student ) => {
    if(student.not >= 90 && student.not <= 100) {
        console.log(`${student.name} adlı öğrenci çok başarılı A aldı puanı ${student.not}`);
    } else if (student.not >= 70 && student.not <= 89) {
        console.log(`${student.name} adlı öğrenci  başarılı B aldı puanı ${student.not}`);
    } else if (student.not >= 60 && student.not <= 69) {
        console.log(`${student.name} adlı öğrenci  fena değil C aldı puanı ${student.not}`);
    } else if (student.not >= 50 && student.not <= 59) {
        console.log(`${student.name} adlı öğrenci  sınırda D aldı puanı ${student.not}`);
    } else {
        console.log(`${student.name} adlı öğrencinin  durumu KRİTİK F aldı puanı ${student.not}`);
    }
 })

 let date = new Date()
 console.log(date.getDate());