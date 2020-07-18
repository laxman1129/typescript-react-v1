/**
 * import is used to import other exported modules
 */
import { addDeptName } from './1.export-module.js';
var operation = function () {
    var netops = {
        id: 1
    };
    console.log('netOps before ', netops);
    netops = addDeptName('NetOps', netops);
    console.log('netOps after ', netops);
};
operation();
//# sourceMappingURL=2.import-module.js.map