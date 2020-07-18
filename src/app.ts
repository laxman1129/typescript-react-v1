
import DeptModel, { addDeptName } from './6.import-export/1.export-module'

const operation = () => {
    let netops: DeptModel = {
        id: 1
    }
    console.log('netOps before ', netops);

    netops = addDeptName('NetOps', netops);

    console.log('netOps after ', netops);

}

operation();

