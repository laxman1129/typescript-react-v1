"use strict";
/**
 * A new ! post-fix expression operator may be used to assert that
 * its operand is non-null and non-undefined in contexts where the type checker is unable to conclude that fact
 */
var ScrolledInput = function () {
    var rootEl = document.getElementById('root');
    /*in this case root tag may or may not exist in the document
    * so typescript gives compilation error.
    * since we know that the tag exist, we can put ! after the rootEl
    * to inform compiler that the rootEl is not null or not undefined
    */
    //    console.log(rootEl.innerHTML);
    console.log(rootEl);
};
//# sourceMappingURL=1.post-fix-operation-operatoe.js.map