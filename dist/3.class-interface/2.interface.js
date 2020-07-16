"use strict";
/**
 * An interface is a syntactical contract that an entity should conform to.
 * In other words, an interface defines the syntax that any entity must adhere to.
 *
 */
;
var customer = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: function () { return "Hi there"; }
};
console.log("Customer Object using interface");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());
//# sourceMappingURL=2.interface.js.map