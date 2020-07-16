/**
 * The spread operator is a useful and quick syntax for 
 * 1. adding items to arrays,
 * 2. combining arrays or objects, and 
 * 3. spreading an array out into a function’s arguments. etc.
 */



/*combining arrays */
let fruits: string[] = ['Apple', 'Aango'];
let greenFruits = ['Pear', 'Guava'];

let finalFruits = [...fruits, ...greenFruits];
console.log('only fruits ', fruits);
console.log('only greenFruits', greenFruits);
console.log('finalFruits', finalFruits);


/* Clone object */

let john = { name: 'John', age: 30 }
let peter = { name: 'Peter', age: 50 }
let sam = john;
let joe = { ...peter, name: 'Joe' }; // cloning object using spread operatoe

console.log('John before modification', john);
console.log('Peter before modification', peter);
console.log('Sam before modification', sam);
console.log('Joe before modification', joe);


sam.name = 'Sam'


console.log('John after modification', john, '<========== name of John is changed to Sam');
console.log('Peter after modification', peter, '<========== name of Peter is not changed as it was cloned');
console.log('Sam after modification', sam);
console.log('Joe after modification', joe);