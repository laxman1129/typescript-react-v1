/**
 * import is used to import other exported modules
 */
import DeptModel, { addDeptName } from './1.export-module.js';

const operation = () => {
    let netops: DeptModel = {
        id: 1
    }
    console.log('netOps before ', netops);

    netops = addDeptName('NetOps', netops);

    console.log('netOps after ', netops);

}

operation();