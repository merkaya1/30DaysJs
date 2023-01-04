console.log('hello world');

// const str = 'mustafa';
// let capitalize = str[0].toUpperCase() + str.slice(1)

// console.log(str)
// console.log('capitalize', capitalize)

const str = 'Bugün hava çok güzel ve yeni bir proje yapmanın zamanı geldi.'

let letter = str.split(' ').map(item => item[0].toUpperCase() + item.substring(1)).join(' ')

console.log('letter', letter)