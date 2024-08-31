//for of loop
// let people = ["Greg", "Mary", "Devon", "James"];

// for(person of people){
//     console.log(person);
// }


//for in loop for objects
// let person = {
//     name : 'Greg',
//     age : 23
// };

// for(key in person){
//     console.log(`${key} is ${person[key]}`)
// }

/**
 * Array can be used in for in loop cus Arrays are directly comes from Javscript object
 */
let people = ["Greg", "Mary", "Devon", "James"];

for(key in people){
    console.log(`${key} is ${people[key]}`)
}