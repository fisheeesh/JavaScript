// fetch('https://jsonplaceholder.typicode.com/todos/')
// .then(response => {
//     return response.json()
// })
// .then(data => {
//     let userInput = prompt('Search by title: ')
//     let filteredData = data.filter(user =>{
//         return user.title.includes(userInput)
//     })
//     filteredData.map(user => console.log(user.userId))
// })
// .catch(error => console.log(error))

async function fetchTodos() {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos')
    let data = await response.json()
    let userInput = prompt('Search by title: ')
    let result = data.filter(user=>{
        return user.title.includes(userInput)
    })
    result.map(user => console.log(user.userId, user.title))
}
fetchTodos()