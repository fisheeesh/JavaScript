// console.log(document.querySelector("#title"))
// console.log(document.querySelector('.item'))
// console.log(document.querySelector('ul li:nth-child(2) .item'))
// console.log(document.querySelectorAll('.item'))

let itemList = document.querySelectorAll('.item')

for(let i = 0; i < itemList.length; i++){
    console.log(itemList[i])
}

itemList.forEach(item => console.log(item))