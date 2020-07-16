"use strict";
var point = { x: 10, y: 15 };
console.log('point is ', point);
var numberType = 10;
console.log('numberType is ', numberType);
var numType = 5;
var strType = "five";
// let boolType: StringOrNumberType = false; //this gives error
console.log('numType is ', numType);
console.log('strType is ', strType);
var strNumType;
try {
    strNumType = (function () { throw new Error(); })();
}
catch (error) {
    console.log('strNumType willnever be returned ');
}
//another point will have both x and y properties
var anotherPoint = point;
console.log("another point and point have same structure", "so they can be assigned to each other even if the typealias is different", point, anotherPoint);
/*typeOf operator can be used to derive type of any object */
var someObject = {
    name: 'John Doe',
    age: 30
};
console.log('type of someObject is ', "type Person = {\n    name: string;\n    age: number;\n}");
//# sourceMappingURL=4-type-alias.js.map