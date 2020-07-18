"use strict";
/**
 * 2 safe navigation operators are
 *
 * a) ? operator (optional chaining operator) : used when we are not sure if the object we are trying to access is null or not
 * b) ! operator (postfix operator) : used when we know that the object we are trying to access is not null, but compiler thinks its null
 *
 */
/*The second element has name missing*/
var datalist = [{ id: 1, name: 'Rohit' }, { id: 2 }];
datalist.forEach(function (element) {
    var _a, _b, _c;
    // ? makes sure that the name is not null, before calling toString method
    console.log('single ? ', element.id, '============>', (_a = element.name) === null || _a === void 0 ? void 0 : _a.toString());
    // ?? is short form for ternary operator
    console.log('double ??', element.id, '============>', (_c = (_b = element.name) === null || _b === void 0 ? void 0 : _b.toString()) !== null && _c !== void 0 ? _c : 'Name not provided');
});
/* ! usage */
/* index.html has body tag with id 'root'; but compiler doesnot know that */
var rootEl = document.getElementById('root');
/* ! after rootEl ensures compiler that the object we are accessing is not null/undefined */
console.log(rootEl.children);
//# sourceMappingURL=1.safe-navigation-operators.js.map