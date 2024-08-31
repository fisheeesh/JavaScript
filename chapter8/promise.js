let async = () => {
    return new Promise((resolve, reject) => {
        let result = 0;
        for (let i = 0; i < 1000000000; i++) {
            result += i
        }
        if(result){
            resolve(result)
        }
        else{
            reject('I have got an error!')
        }
    })
}

console.log('Work')
async()
.then(result => {
    console.log(result)
    console.log('Work after async!')
})
.catch(err => console.log(err))
console.log('More Important Work!')
