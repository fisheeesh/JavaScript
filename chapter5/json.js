//JSON -> when we wanna share datas between programming languages
//Javascript Object Notation
//only 6 datas types can be stored in JSON
//String, number, boolean, Array, null, Object

let person = '{"name" : "Swan Yi Phyo", "age" : 22, "gender" : "male"}'

let obj = JSON.parse(person)
console.log(obj)
console.log(obj.name)

let cat = {
    name : "Kg ma Lay",
    age : 2,
    color : 'Yellow'
}
let json = JSON.stringify(cat)
console.log(json)