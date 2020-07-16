/**
 *  boolean, number, string, arrays, undefined and null are most commonly used types
 * 
 *  Reference : https://www.typescriptlang.org/docs/handbook/basic-types.html
 */

/*Boolean Type */
let isDefined: false; //Type is automatically inferred. NOT RECOMMENDED
let isCompleted = false; //Type is automatically inferred. NOT RECOMMENDED
let isDone: boolean = true; // Type is explicitely provided.

/*Variable 'isCompleted' is used before being assigned.*/
// console.log('isDefined'+ isDefined); 
console.log('boolean type : isCompleted', isCompleted);
console.log('boolean type : isDone', isDone);


/*Number Type */
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
console.log('number type : decimal', decimal);
console.log('number type : hex', hex);
console.log('number type : binary', isCompleted);
console.log('number type : octal', octal);


/*String Type */
let color: string = "blue"; // double quotes
color = 'red'; // single quotes

console.log('string type : color with double quotes', color);
console.log('string type : color with single quotes', color);

/*Array Type */
let list: number[] = [1, 2, 3];
let array: Array<number> = [1, 2, 3];

/* forEach loop with arrow function */
list.forEach(e => console.log('array type, forEach', e));


/* using lambda operator with arrow function for map operation */
let squaresLessThanFive = array.map(e => e * e).filter(e => e < 5);
squaresLessThanFive.forEach(e => console.log('array type, map lambda function', e));


/*undefined Type */
let u: undefined = undefined;
console.log('undefined type', u);


/*null Type */
let n: null = null;
console.log('null type', n);