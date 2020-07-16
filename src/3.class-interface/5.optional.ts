/**
 * It is possible to have optionals in interfaces as well as arguments
 * 
 */

/**This interface needs mandatory field 
 * but optional field can be skipped while initialization */
interface Optional {
    mandatory: string;
    optional?: boolean;
}

let validChoice1: Optional = { mandatory: 'test', optional: false };
let validChoice2: Optional = { mandatory: 'test' };
// let invalidChoice: Optional = { optional: false  }; // missing madatory field

console.log('valid choice1 for interface implementation ', validChoice1);
console.log('valid choice2 for interface implementation ', validChoice2);


const testOptional = (mandatoryArg: number, hasDefault: boolean = false, optionalArg?: any) => {
    console.log('mandatoryArg is ', mandatoryArg);
    console.log('hasDefault is ', hasDefault);
    console.log('optionalArg is ', optionalArg);
    console.log('**********************');


}


console.log('only with mandatory arg', testOptional(2));
console.log('with mandatory arg and default arg', testOptional(2, true));
console.log('all args', testOptional(2, true, "text"));
