// this keyword is not capaable with static method
// this keyword points to the object of current function
class Calculator{
    PI = 3.14
    plus(n1,func){
        let n2 = func(n1)
        return n1 + n2
    }
    minus(n1, n2){
        return n1 - n2
    }
    area(r){
        return this.PI * r**2
    }
    volume(r, h){
        return this.area(r) * h
    }
}

let calculator = new Calculator()
console.log(calculator.area(2))
console.log(calculator.volume(2, 10))
console.log(calculator.plus(10, num => num +5))