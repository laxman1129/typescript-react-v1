/**
 * Destructuring assignment allows you to assign the properties of an array or
 * object to variables using syntax that looks similar to array or object literals.
 *
 */

/*Without Array destructuring */
const someArray: number[] = [10, 15, 30];
let first = someArray[0];
let second = someArray[1];
let third = someArray[2];
console.log('Without Array destructuring', first, second, third);


/*With Array Destructuring */
const [one, two, three] = someArray;
console.log('With Array destructuring', one, two, three);


/*Without Object destructuring */
let robotA = { name: "Bender" };
let robotB = { name: "Flexo" };

//nameA is variable to access name field of robotA
let { name: nameA } = robotA;
//nameB is variable to access name field of robotB
let { name: nameB } = robotB;

console.log('Without Object destructuring', nameA);// "Bender"
console.log('Without Object destructuring', nameB);// "Flexo"




/*With Object destructuring */

let { foo, bar } = { foo: "lorem", bar: "ipsum" };
console.log('With Object destructuring', foo);// "lorem"
console.log('With Object destructuring', bar);// "ipsum"

