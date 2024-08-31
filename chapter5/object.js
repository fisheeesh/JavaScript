// let person = {
//     name : 'Swan Yi Phyo',
//     birthYear: 2002,
//     eat: function(year, func){
//         console.log(func(year))
//     },
//     drink(){
//         console.log('drink')
//     }
// }

// //dot notation
// console.log(person.name)
// //bracket notation
// console.log(person["birthYear"])
// console.log(person)

// person.eat(person.birthYear, (year) => 2024 - year)
// person.drink()


//object spread 
let obj1 = {
    name : 'Swan',
    age: 20
}
let obj2 = {
    hairColor : 'black',
}

let obj3 = {...obj1, ...obj2}
console.log(obj3)

//object destructuring
let {name, age} ={
    name : 'Swan',
    age: 20
}

console.log(name, age)

//property shorthad

let namE = 'John'
let agE = 30
let obj4 = {
    namE,
    agE
}

console.log(obj4)