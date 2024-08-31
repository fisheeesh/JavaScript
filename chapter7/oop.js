let cat ={
    name: 'kitty',
    color: 'white',
    food: 'fish',
    sound: 'meow',
    food: 'fish',
}
console.log(cat)

class Car{
    wheels = 4
    color = 'red'

    driver(){
        console.log('Car is driving')
    }
}
let car = new Car
console.log(car.color)
car.driver()
console.log(car.wheels)