let getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        let datas = JSON.parse(request.responseText);
        resolve(datas);
      } else if (request.status === 404) {
        reject("I have got an error!");
      }
    });

    request.open("GET", resource);
    request.send();
  });
};

getTodos("../warmup/json/syp.json")
.then(data => {
    console.log(data)
    return getTodos('../warmup/json/test.json')
})
.then(data => console.log(data))
.catch(err => console.log(err))