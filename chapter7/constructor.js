class Car{
    Name=''
    wheels =4
    constructor(name, wheels){
        this.Name = name
        this.wheels = wheels
        this.drive()
    }
    drive(){
        console.log(`${this.Name} is driving.`)
    }
    getWheels(){
        console.log(`${this.Name} has ${this.wheels} wheels.`)
    }
}

let prosche = new Car('Porsche', 6)
prosche.getWheels()
