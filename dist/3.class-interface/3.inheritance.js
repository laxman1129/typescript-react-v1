"use strict";
/**
 * A class can extend from another class as well as implement another interface
 * interface can only extend another interface
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    // passing default value to the argument
    Animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log(name + " moved " + distance + " meter.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function (sound) {
        console.log("" + sound);
    };
    return Dog;
}(Animal));
var tommy = new Dog("Tommy");
console.log("Dog Tommy");
console.log(tommy.move());
console.log(tommy.bark('Woof, woof!!'));
var tiger = new Dog('Tiger');
console.log("Dog Tiger");
console.log(tiger.move(10));
// console.log(tiger.bark('Woof, woof!!')); // this method is not available as type of tiger is Animal and not Dog
//# sourceMappingURL=3.inheritance.js.map