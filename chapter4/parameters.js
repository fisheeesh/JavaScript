// default parameter
function sum(a, b=0){
    return a+b
}
let result = sum(11)
console.log(result)

// rest parameter
function sumAll(a,b, ...c){
    return a+b+c
}
let answer = sumAll(1,2,3,4,5,6,7,8,9,10)
console.log(answer)

