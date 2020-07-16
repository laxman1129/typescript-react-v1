/**
 * An interface is a syntactical contract that an entity should conform to. 
 * In other words, an interface defines the syntax that any entity must adhere to.
 * 
 */

interface IPerson {
    firstName: string,
    lastName: string,
    sayHi: () => string
};

let customer: IPerson = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: (): string => { return "Hi there" }
};

console.log("Customer Object using interface");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());