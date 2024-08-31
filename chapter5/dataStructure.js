let people = [
    {name : 'Swan Yi Phyo', age : 22, gender : 'male'},
    {name : 'Jasmine', age : 21, gender : 'female'},
    {name : 'Siti', age : 20, gender : 'female'},
]
// people.map(person => console.log(person))
let nameArr = people.map(person => person.name)
console.log(nameArr)

// people.filter(person => console.log(person))
let maleArr = people.filter(person => person.gender === 'male')

console.log(maleArr)
