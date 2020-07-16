"use strict";
/**
 * Abstract classes are available only in TS and not available in JS
 *
 * Abstract classes are base classes from which other classes may be derived.
 * They may not be instantiated directly. Unlike an interface, an abstract class may contain implementation details for its members.
 * The abstract keyword is used to define abstract classes as well as abstract methods within an abstract class.
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
var Vehical = /** @class */ (function () {
    function Vehical() {
    }
    Vehical.prototype.move = function () {
        console.log("moving...");
    };
    return Vehical;
}());
var Testla = /** @class */ (function (_super) {
    __extends(Testla, _super);
    function Testla() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /*If this method is not implemented typescript gives compilation error */
    Testla.prototype.makeSound = function () {
        //NOOP
    };
    Testla.prototype.move = function () {
        console.log("moving on the road");
    };
    return Testla;
}(Vehical));
var A380 = /** @class */ (function (_super) {
    __extends(A380, _super);
    function A380() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    A380.prototype.makeSound = function () {
        console.log('loud sound of engine!!!!!!!!!!!!!!!!');
    };
    A380.prototype.move = function () {
        console.log("flying in the sky");
    };
    return A380;
}(Vehical));
console.log('In abstract class');
// console.log(new Vehical());// error cannot initialize as class is abstract
var tesla = new Testla();
console.log('Tesla');
tesla.makeSound();
tesla.move();
var a380 = new A380(); //Possible to declare A380 as Vehical
console.log('A380');
a380.makeSound();
a380.move();
//# sourceMappingURL=4-abstract-classes.js.map