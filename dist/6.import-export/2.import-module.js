/**
 * import is used to import other exported modules
 */
/*DeptModel is default export */
/*addDeptName is named export */
import { addDeptName } from './1.export-module.js';
var operation = function () {
    var netops = {
        id: 1
    };
    console.log('netOps before ', netops);
    netops = addDeptName('NetOps', netops);
    console.log('netOps after ', netops);
};
//# sourceMappingURL=2.import-module.js.map