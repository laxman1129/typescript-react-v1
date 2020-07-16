/**
 * Rest operator ...
 * 
 * A function's last parameter can be prefixed with ... 
 * which will cause all remaining (user supplied) arguments to be placed within a "standard" JavaScript array.
 * 
 */

/*The last arument is ... */
const myFun = (a: string, b: number, ...manyMoreArgs: any) => {
    console.log("a", a)
    console.log("b", b)
    console.log("rest operator , manyMoreArgs", manyMoreArgs)
}

myFun("one", 1129, "three", "four", "five", "six");