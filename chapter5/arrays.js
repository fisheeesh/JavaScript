let mixture = new Array('dog', 11, 2.3, null, undefined, NaN, true)
console.log(mixture)

let arr = ['Swan', 22, false, 75000.00]
console.log(arr.length)

//spread operator

let arr1 = [1,2,3,4,5]
let arr2 = [6,7,8,9,10]

let arre = [...arr1, ...arr2]
console.log(arre)

let sum = (a,b) => a+b

let num = [1,2]
console.log(sum(...num))

//destructuring
let datas = ['MgMg', 22, 'TTU']
let [name, age, school] = datas
console.log(name, age, school)

let add = ([a,b]) => a + b

console.log(add([1,2]))