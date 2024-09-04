// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(response =>{
//     return response.json()
// })
// .then(data  => console.log(data))
// .catch(error => console.log(error))

/**
 * async function will return a promise
 */
async function fetchTodos() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchTodos();
