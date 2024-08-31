let people = [
    {name : "John", age : 25},
    {name : "Peter", age : 35, gender : 'm'},
    {name : "Anna", age : 28, gender : 'f'},
    {name : "Mark", age : 30, gender : 'm'},
    {name : "Jane", age : 27, gender : 'f'}
]

let prices = [100, 200, 500, 500, 700, 800, 1000, 400]

// //map
// let people_names = people.map( person => person.name)
// let people_ages = people.map(person => person.age)
// let peopl_genders = people.map(person => person.gender)
// console.log(people_names)
// console.log(people_ages)
// console.log(peopl_genders)

// //fliter
// let male = people.filter(person => person.gender === 'm')
// let female = people.filter(person => person.gender === 'f')
// console.log(male)
// console.log(female)

// //modify
// let modified_people = people.map(person => {
//     if(person.gender)
//         if(person.gender === 'm')
//             person.gender = 'male'
//         else
//             person.gender = 'female'
//     else
//         person.gender = 'unknown'

//     return person
// })
// console.log(modified_people)

// //search name
// let user = prompt('Search User: ')
// let result = people.filter(person => person.name.includes(user))

// console.log(result)

let input = prompt('Enter : ')
let discount_prices = prices.map(price =>{
    if(price == input){
        price -= 100
    }
    return price
})

console.log(discount_prices)