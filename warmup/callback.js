let getTodos = (resource, callback) => {
  let request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      let datas = JSON.parse(request.responseText);
      callback(datas, undefined);
    } else if (request.status === 404) {
      callback(undefined, "404 not found");
    }
  });

  request.open("GET", resource);
  request.send();
};

/**
 * callback hell - callback inside callback, it is hard to hide and reduce application performance
 * avoid using callback hell
 * to overcome this we use promise
 */
getTodos("../warmup/json/syp.json",(data, err) => {
  if (data) {
    console.log(data)
    getTodos('../warmup/json/test.json', (data, err)=>{
        if(data) console.log(data)
        else console.log(err)
    })
  } else console.log(err);
});

// let getTodos = (callback) => {
//   fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((response) => response.json())
//     .then((data) => callback(data, undefined))
//     .catch((err) => callback(undefined, err));
// };

// getTodos((data, err)=>{
//     if(data) {
//         let userInput = prompt('Search by title: ')
//         let filteredData = data.filter(user => user.title.includes(userInput))
//         filteredData.map(user => console.log(user.userId, user.title))
//     }
//     else console.log(err)
// })

// async function getTodos(callback){
//     let response = await fetch('https://jsonplaceholder.typicode.com/todos')
//     let data = await response.json()
//     callback(data, undefined)
// }

// getTodos((data, err)=>{
//     if(data) console.log(data)
//     else console.log(err)
// })
