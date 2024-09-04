//if () will be created in the object, it should be called as a method not as a function
let bio = {
    name : 'Swan Yi Phyo',
    age : 22,
    eat: function(){
        console.log('eat')
    },
    drink(){
        console.log('drink')
    },
    birthYear: function(){
        console.log(2024 - this.age)
    }
}

bio.birthYear()