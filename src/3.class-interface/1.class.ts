/**
 * TypeScript is object oriented JavaScript.
 * A class in terms of OOP is a blueprint for creating objects
 */

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world!! from class");
let greeting = greeter.greet();
console.log(greeting);
