let person = {
    name : 'John',
    eat(){
        console.log(this)
        setTimeout(()=> console.log(this), 3000)
    }
}

person.eat()

let gg = (name, func) => {
    console.log(name)
    func()
}

gg('Swan', () => console.log("this"))