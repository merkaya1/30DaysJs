// High Order Function

const cb = (n) => {
    return n ** 2
}

const cube = (cb, number) => {
    return cb(number) * number
}

console.log(cube(cb, 3)) // out : 27

const a = (s1) => {
    const b = (s2) => {
        const c = (s3 => {
            return s3+s2+s1
        })
        return c
    }
    return b
}

console.log(a(5)(10)(20))

function hello() {
    console.log('Hello Mustafa')
}
const interval = setInterval(hello, 2000) // her 2 sn de çalışır hello fonksiyonu
//clearInterval iptal etmek için

setTimeout (() => {
    clearInterval(interval)
    console.log('interval işlemi iptal edildi.')
},5000)


// forEach
const arr = [1,2,3,4,5,6,7,8,9]
arr.forEach((num, index) => console.log(`sayi = ${num} && index=${index}`))

//map 
const numbers = arr.map((num) => num*2)

console.log('numbers', numbers)


// reduce 

console.log(arr.reduce((a,b) => a + b , 0))