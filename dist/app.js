import { addDeptName } from './6.import-export/1.export-module';
var operation = function () {
    var netops = {
        id: 1
    };
    console.log('netOps before ', netops);
    netops = addDeptName('NetOps', netops);
    console.log('netOps after ', netops);
};
operation();
//# sourceMappingURL=app.js.map