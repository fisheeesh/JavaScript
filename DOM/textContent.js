let title = document.getElementById('title')

// title.textContent = 'This is updated title'
// title.textContent +=' new'
// console.log(title.textContent)
// console.log(title.innerHTML)

let list = document.getElementById('list')
console.log(list.innerHTML)
list.innerHTML += '<li>Item 5</li>'
console.log(list.innerHTML)