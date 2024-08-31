class Car{
    Name = 'Mercedes'
    #hp = 3000
    getHp(){
        console.log(`${this.Name} has ${this.#hp} hp`)
    }
}

let car = new Car()
car.Name = 'BMW'
car.getHp()