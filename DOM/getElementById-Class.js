let title = document.getElementById("title");

//if we use getElementsByClassName, it will return html collection
//not array just html collection
let itemCollection = document.getElementsByClassName("item");
//check it is array or not
console.log(Array.isArray(itemCollection));
//change html collection to array
let result = Array.from(itemCollection);
console.log(Array.isArray(result));

//can use forEach cus it is arary now
result.forEach((item) => console.log(item));
