/**
 * template string uses back ticks (`) to define the template
 * 
 * it can run on multiple lines and can have expression in it.  
 * 
 * expression is defined using ${placeholder}
 * 
 */

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.

I'll be ${ age + 1} years old next month.`;


console.log('sentence with template strings', sentence);

