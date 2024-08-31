//map
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
names = names.map(name => `Mr./Mrs. ${name}`);

console.log(names)

//filter
let nums = [1, 2, 3, 4, 5];
let result = nums.filter(num => num % 2 === 0)

console.log(result)

//reduce
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers = numbers.reduce((previous, current) => previous + current)

console.log(numbers)

