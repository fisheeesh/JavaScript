//if else example 
let products_price = [100, 200, 300, 400, 500, 100, 200, 100, 300];

let discounted_price = products_price.map(price => {
    if(price === 100)
        price -= 30
    return price
});

console.log(discounted_price)


let people = [
    {name : "John", age:30},
    {name : "Mike", age:23, gender : 'm'},
    {name : "Mary", age:21, gender : 'f'}
]

let updated_people = people.map(person => {
    if(person.gender)
        if(person.gender === 'm')
            person.gender = 'male'
        else
            person.gender = 'female'
    else
        person.gender = 'unknown'

    return person
})

console.log(updated_people)

console.log(people.filter(person => person.gender == 'male'))