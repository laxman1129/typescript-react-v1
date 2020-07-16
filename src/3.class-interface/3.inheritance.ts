/**
 * A class can extend from another class as well as implement another interface
 * interface can only extend another interface
 */

class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    // passing default value to the argument
    move(distance: number = 0) {
        console.log(`${name} moved ${distance} meter.`);

    }
}

class Dog extends Animal {
    bark(sound: string) {
        console.log(`${sound}`);
    }
}

let tommy = new Dog("Tommy");
console.log("Dog Tommy");
console.log(tommy.move());
console.log(tommy.bark('Woof, woof!!'));

let tiger: Animal = new Dog('Tiger');
console.log("Dog Tiger");
console.log(tiger.move(10));
// console.log(tiger.bark('Woof, woof!!')); // this method is not available as type of tiger is Animal and not Dog
