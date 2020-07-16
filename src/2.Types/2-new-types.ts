/**
 * Tuple, Enum, Any, Void, Never are new types introduced by Typescript
 *
 *  Reference : https://www.typescriptlang.org/docs/handbook/basic-types.html
 */

/*Tuple Type*/
/* Tuple types allow you to express an array with a fixed number of elements whose types are known, but need not be the same.*/
let tuple: [string, number];
// Initialize it
tuple = ["hello", 10]; // OK
// Initialize it incorrectly
// tuple = [10, "hello"]; // Error

console.log('Tuple type ', tuple);


/*Enum type */
/*an enum is a way of giving more friendly names to sets of numeric values. */
enum Color { Red, Green, Blue }
let colour: Color = Color.Green;
console.log('Enum type, value for colour is ', colour);

/*Any type */
/*to describe the type of variables that we do not know when we are writing an application */
let notSure: any = 4;
console.log('Any type, value number is ', notSure);
notSure = "maybe a string instead";
console.log('Any type, value for string is ', notSure);
notSure = false; // okay, definitely a boolean
console.log('Any type, value for boolean is ', notSure);


/*Void type */
/*void is a little like the opposite of any: the absence of having any type at all. 
 * You may commonly see this as the return type of functions that do not return a value: */
const warnUser = (): void => {
    console.log("This is my warning message");
}
console.log('Void type, return value of warnUser ', warnUser());


/*Never type */
/*The never type represents the type of values that never occur. */
function error(message: string): never {
    throw new Error(message);
}

try {
    console.log('Never type, return value of error ', error('test'));
} catch (error) {
    console.log('Never type, never returns value. In catch block');
}
