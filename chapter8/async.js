//sync way
console.log(1)
console.log(2)
console.log(3)

//async way
console.log(1)
console.log(2)
setTimeout(()=> console.log(3), 3000)
console.log(4)
