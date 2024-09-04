// console.log(1)
// setTimeout(()=> console.log(2), 3000)
// console.log(3)

let request = new XMLHttpRequest()

request.addEventListener('readystatechange', () => {
    if(request.readyState === 4){
        console.log(request.responseText)
    }
})

request.open("GET", "https://jsonplaceholder.typicode.com/todos")
request.send()

console.log('I am first')