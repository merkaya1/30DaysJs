// Destructuring -> şeklini bozma
// Spread -> dağılma, yayma
// Rest -> kalanın tamamı

const numbers = [10, 12, 14];

const [number1, , number2] = numbers;

console.log(number1);
console.log(number2); // 3. elemanı alacağız yukarıdaki virgülden dolayı

console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);

console.log('**************************************');

const stack = [
  ['HTML', 'CSS', 'JAVASCRIPT'],
  ['MONGODB', 'EXPRESS', 'NODEJS']
];

const [[frontend], backend] = stack;

console.log(frontend, backend);

console.log('**************************************');

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let [num1, num2, num3, ...kalan] = num;

console.log(num1, num2);
console.log('kalan', kalan);

console.log('***************************************************************');

const names = ['mustafa', 'mehmet', 'yusuf', 'ramazan', 'hayriye', 'yasin', 'belinay', 'melike'];

const [myName, myBrotherName1, myBrotherName2, ...otherNames] = names;

console.log(myName);
console.log(myBrotherName1);
console.log(myBrotherName2);
console.log(otherNames);

console.log('**************************************');

const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
  ['Turkey', 'Ankara']
];

for (const [country, capital] of countries) {
  console.log(`Ülke ${country} - Başkent ${capital}`);
}
console.log('**********');
for (const country of countries) {
  console.log(`Ülke ${country[0]} - Başkent ${country[1]}`);
}

console.log('*********************************************');

const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
];

for (const [first, second, third] of fullStack) {
  console.log(first, second, third);
}

// destructuring object

const rectangle = {
  width: 20,
  height: 10,
  area: 200
};
let { width: genislik, height, area, perimeter } = rectangle;

console.log(height, area, perimeter);
console.log(genislik, height, area, perimeter); // width genişlik ile değişti

// objelerde key adları ile destr ediyoruz. value alıyoruz

const rectangle2 = {
  width: 20,
  height2: 10,
  area2: 200
};
let { width: genislik2, height2, area2, perimeter2 = 100 } = rectangle2;

console.log(genislik2, height2, area2, perimeter2); // width genişlik ile değişti

console.log('*****************************');

const numberss = [10, 20];

function multply([num1, num2]) {
  return num1 + num2;
}

console.log(multply(numberss));

console.log('****************');

//spread operator dizi kopyalamak içinde kullanılır

const nums = [1, 2, 3, 4, 5, 6];
const nums2 = [...nums];

console.log(nums2);
console.log('****************/n \n *********************');

//************************************ */

const person = {
  firstName: 'Mustafa',
  lastName: 'Erkaya',
  age: 25,
  country: 'Turkey',
  job: 'Instructor and Developer',
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB', 'Python', 'Next.js'],
  languages: ['English', 'Turkish', 'Amharic']
};

const getPersonInfo = (obj) => {
  const skills = obj.skills;
  const formattedSkills = skills.slice(0, -1).join(', ');
  console.log(formattedSkills);
  const languages = obj.languages;
  const formattedLanguages = languages.slice(0, -1).join(', ');
  console.log(formattedLanguages);

  let personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${obj.age} years old. He is an ${
    obj.job
  }. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`;

  return personInfo;
};

console.log(getPersonInfo(person));

console.log('*********************************');

const todoList = [
  {
    task: 'Prepare JS Test',
    time: '4/1/2020 8:30',
    completed: true
  },
  {
    task: 'Give JS Test',
    time: '4/1/2020 10:00',
    completed: false
  },
  {
    task: 'Assess Test Result',
    time: '4/1/2020 1:00',
    completed: false
  }
];

for (const { time, task, completed } of todoList) {
  console.log(task, time, completed);
}

let userss = {
  name: 'mustafa',
  surname: 'erkaya'
};

const { name, surname } = userss;
console.log(surname);
