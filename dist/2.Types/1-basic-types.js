"use strict";
/**
 *  boolean, number, string, arrays, undefined and null are most commonly used types
 *
 *  Reference : https://www.typescriptlang.org/docs/handbook/basic-types.html
 */
/*Boolean Type */
var isDefined; //Type is automatically inferred. NOT RECOMMENDED
var isCompleted = false; //Type is automatically inferred. NOT RECOMMENDED
var isDone = true; // Type is explicitely provided.
/*Variable 'isCompleted' is used before being assigned.*/
// console.log('isDefined'+ isDefined); 
console.log('boolean type : isCompleted', isCompleted);
console.log('boolean type : isDone', isDone);
/*Number Type */
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
console.log('number type : decimal', decimal);
console.log('number type : hex', hex);
console.log('number type : binary', isCompleted);
console.log('number type : octal', octal);
/*String Type */
var color = "blue"; // double quotes
color = 'red'; // single quotes
console.log('string type : color with double quotes', color);
console.log('string type : color with single quotes', color);
/*Array Type */
var list = [1, 2, 3];
var array = [1, 2, 3];
/* forEach loop with arrow function */
list.forEach(function (e) { return console.log('array type, forEach', e); });
/* using lambda operator with arrow function for map operation */
var squaresLessThanFive = array.map(function (e) { return e * e; }).filter(function (e) { return e < 5; });
squaresLessThanFive.forEach(function (e) { return console.log('array type, map lambda function', e); });
/*undefined Type */
var u = undefined;
console.log('undefined type', u);
/*null Type */
var n = null;
console.log('null type', n);
//# sourceMappingURL=1-basic-types.js.map