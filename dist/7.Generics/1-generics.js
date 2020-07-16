"use strict";
/**
 * Generics makes it possible for a component to work over a variety of types rather than a single one
 *
 */
function identity(arg) {
    return arg;
}
// let myIdentity: <T>(arg: T) => T = identity;
console.log('String returned from generic function', identity("Hello"));
console.log('Number returned from generic function', identity(1129));
/*Generics for arrow function */
var logIdentity = function (x) { return x; };
console.log('Boolean returned from the generic arrow function', logIdentity(false));
console.log('Object returned from the generic arrow function', logIdentity({ a: 10, b: 'Test' }));
//# sourceMappingURL=1-generics.js.map