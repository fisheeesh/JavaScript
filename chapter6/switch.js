let people = [
    {name : "Swan", age : 22, gender : "m"},
    {name : "Jen", age : 23, gender : "f"},
    {name : "Jen", age : 23}
]

let updated_people =people.map(person =>{
    switch(person.gender){
        case "m":
            person.gender = "male"
            break
        case "f":
            person.gender = "female"
            break
        default:
            person.gender = "unknown"
    }
    return person
})

console.log(updated_people)