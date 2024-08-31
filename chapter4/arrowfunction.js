let sayHi = word => word;

console.log(sayHi("Hello"))

let twice = num => num * 2;
console.log(twice(4))

let add = (num, modifier) => modifier(num) *2

console.log(add(11, function(num){
    return num + 9
}))

let greet = () => console.log("Hello World!")
greet()