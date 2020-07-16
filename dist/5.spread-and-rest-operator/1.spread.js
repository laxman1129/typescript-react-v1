"use strict";
/**
 * The spread operator is a useful and quick syntax for
 * 1. adding items to arrays,
 * 2. combining arrays or objects, and
 * 3. spreading an array out into a function’s arguments. etc.
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
/*combining arrays */
var fruits = ['Apple', 'Aango'];
var greenFruits = ['Pear', 'Guava'];
var finalFruits = __spreadArrays(fruits, greenFruits);
console.log('only fruits ', fruits);
console.log('only greenFruits', greenFruits);
console.log('finalFruits', finalFruits);
/* Clone object */
var john = { name: 'John', age: 30 };
var peter = { name: 'Peter', age: 50 };
var sam = john;
var joe = __assign(__assign({}, peter), { name: 'Joe' }); // cloning object using spread operatoe
console.log('John before modification', john);
console.log('Peter before modification', peter);
console.log('Sam before modification', sam);
console.log('Joe before modification', joe);
sam.name = 'Sam';
console.log('John after modification', john, '<========== name of John is changed to Sam');
console.log('Peter after modification', peter, '<========== name of Peter is not changed as it was cloned');
console.log('Sam after modification', sam);
console.log('Joe after modification', joe);
//# sourceMappingURL=1.spread.js.map