"use strict";
/**
 * Rest operator ...
 *
 * A function's last parameter can be prefixed with ...
 * which will cause all remaining (user supplied) arguments to be placed within a "standard" JavaScript array.
 *
 */
/*The last arument is ... */
var myFun = function (a, b) {
    var manyMoreArgs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        manyMoreArgs[_i - 2] = arguments[_i];
    }
    console.log("a", a);
    console.log("b", b);
    console.log("rest operator , manyMoreArgs", manyMoreArgs);
};
myFun("one", 1129, "three", "four", "five", "six");
//# sourceMappingURL=2.rest-oprerator.js.map