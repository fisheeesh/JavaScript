let tags = [
    'webdev',
    'vuejs',
    'vuejs',
    'laravel',
    'news',
    'webdev',
    'laravel',
    'coding'
]
//unique keys
// console.log(tags.indexOf('webdev'))
// console.log(tags.indexOf('vuejs'))
// console.log(tags.indexOf('vuejs'))
// console.log(tags.indexOf('laravel'))
// console.log(tags.indexOf('news'))

//filter method's parameter
// tags.filter((tag, index, array) => console.log(tag))
// tags.filter((tag, index, array) => console.log(index))
// tags.filter((tag, index, array) => console.log(array))

let uniqueTags = tags.filter((tag, index, array) => array.indexOf(tag) == index)

console.log(uniqueTags)