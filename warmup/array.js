let names = [
    'Swan',
    'Yi Phyo',
    'Phyo',
    'Yi',
    'Phyo',
    'Yi',
]

//foreach - no return
names.forEach(name => console.log(name))

//filter - return an array
let result = names.filter(name => name == 'Swan')
console.log(result)

//map - return an array
let newNames = names.map(name =>`Mr. ${name}`)
console.log(newNames)
