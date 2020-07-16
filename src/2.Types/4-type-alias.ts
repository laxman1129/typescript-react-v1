/*type alias */
// This is definition of structure to create object, can be premitive also
type Point = {
    x: number;
    y: number;
};

let point: Point = { x: 10, y: 15 }
console.log('point is ', point);

/*Number type is same like premitive number */
type NumberType = number;
let numberType: NumberType = 10
console.log('numberType is ', numberType);


/*This will accept either string or numbet */
type StringOrNumberType = string | number;
let numType: StringOrNumberType = 5;
let strType: StringOrNumberType = "five";
// let boolType: StringOrNumberType = false; //this gives error
console.log('numType is ', numType);
console.log('strType is ', strType);

//this is never possible so return type is never for this
type stringAndNumberType = string & number;
let strNumType: stringAndNumberType;
try {
    strNumType = (() => { throw new Error() })();

} catch (error) {
    console.log('strNumType willnever be returned ');
}



type PartialPointX = { x: number; };
type AnotherPoint = PartialPointX & { y: number; };
//another point will have both x and y properties
let anotherPoint: AnotherPoint = point;

console.log("another point and point have same structure",
    "so they can be assigned to each other even if the typealias is different", point, anotherPoint);


/*typeOf operator can be used to derive type of any object */
let someObject = {
    name: 'John Doe',
    age: 30
}

type Person = (typeof someObject);

console.log('type of someObject is ', `type Person = {
    name: string;
    age: number;
}`);
