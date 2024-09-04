let fetchData = async() => {
    let response = await fetch('../warmup/json/syp.json')
    let data = await response.json()
    console.log(data)
}
fetchData()