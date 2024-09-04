fetch("../warmup/json/sydfp.json")
.then(response => {
    if(response.status === 404) throw new Error('Ur link is not available.!')
    else return response.json()
})
.then(data => console.log(data))
.catch(error => console.log(error.message))

console.log('git branch test')