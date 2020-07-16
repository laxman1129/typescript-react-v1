/**
 * Export is used to ecport the module to be imported in another modules
 *
 * export can be named or default
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
export var addDeptName = function (name, dept) {
    return __assign(__assign({}, dept), { id: Math.random(), name: name // if the name of the key and variable for value is same the no need to specify name:name
     });
};
//# sourceMappingURL=1.export-module.js.map