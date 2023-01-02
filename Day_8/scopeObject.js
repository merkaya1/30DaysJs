// Scope 
/*
* Window
*Global
*Local
*/

//window scope
 ad = 'mustafa';

// Global scope
 let name = 'mustafa';
 let surname = 'erkaya'

 function letsLearnScope() {
    console.log(name, surname);
    if(true) {
        let name = 'Ramazamn' // Local Scope
        let surname = 'Erkayua'
        console.log(name, surname);
    }
    console.log(name, surname);
 }

letsLearnScope()
 console.log(name, surname);


 // Object

 const person = {} // empty object

 console.log(person);

 const user = {
    name: 'Yusuf',
    surnam: 'Erkaya',
    aga: 36,
    isMarried: true,
    skills: [
        'Yorgancı',
        'Usta Şöför',
        'Kral'
    ]
 }

 console.log('user', user);
 console.log('user', user.skills);

 // exercise 
 console.log('*********************** EXERCİSE **************');
 // 1
 const dog = {}
 console.log(dog);

 dog.name = 'Kangal',
 dog.legs = 4,
 dog.color = 'yellow',
dog.age = 3
dog.bark = function () {
    return 'woof woof'
}


console.log(dog);

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}
// bunu sor exercise 2 puanı 50 ve üzerisini göster
let values = Object.entries(users)
console.log('values', values);

let val =values.map(item => (item[1].skills.map(lang => lang[0] )).join('').includes('MERN') ? item : null)

console.log('val', val);

let keys = Object.keys(users)
console.log('keys', keys);
console.log(users);
let a = Object.values(users).map(user => user.points < 50 ? user.points : false)
console.log(a.length);

for (const key in users) {
    if (Object.hasOwnProperty.call(users, key)) {
        console.log(key.points);
        
    }
}




// kendimce ornek
const PI = Math.PI;

console.log(PI.toFixed(3));

const names = [
    {
        isPaid : false,
        name : 'Zoee'
    },
    {
        isPaid : true,
        name : 'Kayn'
    },
    {
        isPaid : false,
        name : 'Zed'
    },
    {
        isPaid : false,
        name : 'Swain'
    },
    {
        isPaid : false,
        name : 'Darius'
    },
    {
        isPaid : true,
        name : 'Draven'
    }
]
// sort arrayi değiştirir
names.sort((a,b) => {
    if(a.isPaid && !b.isPaid) {
        return -1
    } else if(!a.isPaid && b.isPaid){
        return 1;
    } else {
        return 0;
    }
})

console.log(names);

// users nesnesini bozmadan keys 'leri değiştirme

console.log("users",users);





////////
const users2 = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

function signUp( email) {
    return users2.filter(user => {
       if(user.email === email) {
        return `${user.username} kayıtlı email`
       }
    })
   
}

console.log(signUp('thomas@thomas.com'));