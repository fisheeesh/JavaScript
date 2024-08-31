// let userInput = prompt("Search by postId: ")
// fetch('https://jsonplaceholder.typicode.com/todos/'+ userInput)
// .then(response => {
//     return response.json()
// })
// .then(data => console.log(data))
// .catch(error => console.log(error))

fetch('https://jsonplaceholder.typicode.com/todos')
.then(response =>{
    return response.json()
})
.then(data =>{
    let userInput = prompt('Search by title: ')
    let filteredData = data.filter(person =>{
        return person.title.includes(userInput)
    })
    filteredData.map(person => console.log(`User ID : ${person.userId}`))
})
.catch(error => console.log(error))