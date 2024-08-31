class Animal{
    #age = 4
    constructor(name){
        this.Name = name 
    }

    run(){
        console.log(`${this.Name} is running!`)
    }
}
class Dog extends Animal{
    bark(){
        console.log(dog.age)
        console.log(`${this.Name} is barking!`)
    }
}

let dog = new Dog('Aung Net')

dog.run()
dog.bark()