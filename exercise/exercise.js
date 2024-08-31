function calculateAge(birthYear){
    let currentYear = 2024;
    let yourAge;
    if(birthYear > 2024){
        console.log("Please enter a valid year")
    }
    else{
        yourAge = currentYear - birthYear
        return yourAge;
    }
}
let age = calculateAge(2002)
console.log(`Your current age is ${age}`)