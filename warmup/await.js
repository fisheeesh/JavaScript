let fetchData = async() => {
    /**
     * fetch will return resolve whether it is true or false
     * so that means we have to handle reject case which is error handling manually
     */
    let response = await fetch('../warmup/json/syp.json')
    if(response.status === 404) throw new Error('Ur link is not available.!')
    let datas = await response.json()
    return datas
}
fetchData()
.then(data => console.log(data))
.catch(err => console.log(err.message))