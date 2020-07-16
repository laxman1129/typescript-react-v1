"use strict";
/**
 * It is possible to have optionals in interfaces as well as arguments
 *
 */
var validChoice1 = { mandatory: 'test', optional: false };
var validChoice2 = { mandatory: 'test' };
// let invalidChoice: Optional = { optional: false  }; // missing madatory field
console.log('valid choice1 for interface implementation ', validChoice1);
console.log('valid choice2 for interface implementation ', validChoice2);
var testOptional = function (mandatoryArg, hasDefault, optionalArg) {
    if (hasDefault === void 0) { hasDefault = false; }
    console.log('mandatoryArg is ', mandatoryArg);
    console.log('hasDefault is ', hasDefault);
    console.log('optionalArg is ', optionalArg);
    console.log('**********************');
};
console.log('only with mandatory arg', testOptional(2));
console.log('with mandatory arg and default arg', testOptional(2, true));
console.log('all args', testOptional(2, true, "text"));
//# sourceMappingURL=5.optional.js.map