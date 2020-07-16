/**
 * Abstract classes are available only in TS and not available in JS
 *
 * Abstract classes are base classes from which other classes may be derived.
 * They may not be instantiated directly. Unlike an interface, an abstract class may contain implementation details for its members.
 * The abstract keyword is used to define abstract classes as well as abstract methods within an abstract class.
 */

abstract class Vehical {
    abstract makeSound(): void;
    move(): void {
        console.log("moving...");
    }
}

class Testla extends Vehical {

    /*If this method is not implemented typescript gives compilation error */
    makeSound(): void {
        //NOOP
    }

    move(): void {
        console.log("moving on the road");

    }

}

class A380 extends Vehical {
    makeSound(): void {
        console.log('loud sound of engine!!!!!!!!!!!!!!!!');

    }

    move(): void {
        console.log("flying in the sky");

    }

}

console.log('In abstract class');
// console.log(new Vehical());// error cannot initialize as class is abstract

let tesla = new Testla();
console.log('Tesla');
tesla.makeSound();
tesla.move();


let a380: Vehical = new A380(); //Possible to declare A380 as Vehical
console.log('A380');

a380.makeSound();
a380.move();



