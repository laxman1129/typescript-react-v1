"use strict";
/**
 * Destructuring assignment allows you to assign the properties of an array or
 * object to variables using syntax that looks similar to array or object literals.
 *
 */
/*Without Array destructuring */
var someArray = [10, 15, 30];
var first = someArray[0];
var second = someArray[1];
var third = someArray[2];
console.log('Without Array destructuring', first, second, third);
/*With Array Destructuring */
var one = someArray[0], two = someArray[1], three = someArray[2];
console.log('With Array destructuring', one, two, three);
/*Without Object destructuring */
var robotA = { name: "Bender" };
var robotB = { name: "Flexo" };
//nameA is variable to access name field of robotA
var nameA = robotA.name;
//nameB is variable to access name field of robotB
var nameB = robotB.name;
console.log('Without Object destructuring', nameA); // "Bender"
console.log('Without Object destructuring', nameB); // "Flexo"
/*With Object destructuring */
var _a = { foo: "lorem", bar: "ipsum" }, foo = _a.foo, bar = _a.bar;
console.log('With Object destructuring', foo); // "lorem"
console.log('With Object destructuring', bar); // "ipsum"
//# sourceMappingURL=1.destructuring.js.map