"use strict";
/**
 * TypeScript is object oriented JavaScript.
 * A class in terms of OOP is a blueprint for creating objects
 */
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world!! from class");
var greeting = greeter.greet();
console.log(greeting);
//# sourceMappingURL=1.class.js.map