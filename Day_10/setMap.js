// SET

const names = new Set(['mustafa', 'yusuf', 'mehmet','ramazan', 'mustafa'])
// set bize uniq döndürür
console.log(names);

for(let name of names){
    console.log(name);
}

names.add('ramazan');
names.add('yasin');
names.delete('mustafa')
console.log(names);

//// Önemli kısım tekrartlanen değişkenlerin sayısını alma
const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Turkish',
    'Spanish',
    'Turkish'
]

console.log(languages);

const lanSet = new Set(languages)
console.log('langset', lanSet.size, lanSet);

const counts = []

for(let l of lanSet) {
    const filteredLang = languages.filter((lng) => lng === l)
    counts.push({
        language: l,
        count: filteredLang.length
    })
}

console.log(counts);


const numbers = [1, 2, 4, 3, 2, 9, 5, 6, 7, 8, 2, 1, 4, 6, 8, 5, 3, 1, 5]
const setOfnumbers = [...new Set(numbers)]

console.log(setOfnumbers);


let a = [1,2,3,4,5]
let b = [3,4,5,6,7]
let c = new Set([...a, ...b])

console.log(c);


// MAP

const map = new Map()

map.set("name", 'mustafa')
map.set(1, 'yusuf')
map.set(true, 'boolen')
console.log(map);

// const obj ={}

// obj['name'] = 'mustafa'
// obj[1] = 'mehmet'

// console.log(obj);

