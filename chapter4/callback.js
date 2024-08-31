function sayMyName(name, fun){
    console.log(fun(name))
}
// sayMyName("Swan Yi Phyo", function(name){console.log(`My name is ${name}`)})
sayMyName("Swan Yi Phyo", function(name){ return `My name is ${name}`})



function twice(num, modifier){
    let result = modifier(num) * 2
    console.log(result)
}

twice(5, function(num){
    return num + 11
})


function math(num, twice){
    let result = twice(num) + 11
    console.log(result)
}
math(11, num =>num * 2)

let greet = () => console.log('Hello')
greet()