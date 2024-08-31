let num = [1,2,3,4]
num.push(6)
num.unshift(12)

num = num.filter((value) => value%2 ===0)

console.log(num)