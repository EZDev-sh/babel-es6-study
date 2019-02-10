// 과거 클래스가 없었다.
// ES5
// function Animal() {
//     this. type = 'chosic'
//     this. tail = false
// }

// Animal.prototype.setType = function(type) {
//     this.type = type
// }
// Animal.prototype.getType = function() {
//     return this.type
// }

// es6
class Animal {
    constructor(type, tail) {
        this.type = type
        this.tail = tail
    }

    // create method
    cry(value = 'woof woof') {
        console.log(value)
    }
    
    // static method
    static instance() {
        console.log('instance!!!!!')
    }
}

// let dog = new Animal('Dog', true)
// console.log(dog)
// dog.cry('wal wal')
// Animal.instance()


class Cat extends Animal {
    constructor(type, tail, color) {
        super(type, tail)
        this.color = color
    }

    cry(value = 'Meow Meow') {
        console.log(value)
    }
}

let cat = new Cat("Cat", true, "black")
cat.cry()
console.log(cat)