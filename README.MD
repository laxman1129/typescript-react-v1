# Typescript

## What is Typescript

TypeScript is an object-oriented programming language developed and maintained by the Microsoft Corporation. It is a superset of JavaScript and contains all of its elements. In other words, TypeScript is JavaScript plus some additional features.

TypeScript totally follows the OOPS concept and with the help of `TSC` (TypeScript Compiler), we can convert Typescript code (.ts file) to JavaScript (.js file)

---

## Why Typesript is needed

- **Using new features of ECMAScript**: New features of Jacascript which are not yet supported by browsers can be supported by typescript. This is possible because Typescript gets transpiled to javascript.

- **Static typing**: Because javascript is dynamically typed language many bugs are introduced due to false assumptions are not caught untill runtime. Since typescript is statically typed language, which provides optional static typing, classes and interfaces, etc. these bugs can be addressed at the compile time.

- **Better IDE support**: Wide variety of IDEs like VSCode etc. are available which support Typescript. Advantage of this is intellisence in IDE, features like code refactoring and all come out of the box.

- **Strict Null Checking**: Errors like `cannot read property 'x' of undefined` are common in javascript programming. By using Typescript, you already avoid most of these kind of errors, since one cannot use a variable that is not known to the TypeScript compiler.

---

## Getting started

Installing Typescript

```javascript
npm install -g typescript
```

create package.json for third part dependencies and scripts

```javascript
npm init
```

create tsconfig.json file, which is used to tell Typescript that all the folders under this directory are managed by Typescript

```javascript
tsc init
tsc -w // to compile the ts files in watch mode
```

---

## Typescript + ES6 features we'll be using in ReactJS

| SR  | Feature                      | Language         |
| --- | ---------------------------- | ---------------- |
| 1   | Arraow functions             | ES6              |
| 2   | Types                        | Typescript       |
| 3   | Interface                    | Typescript       |
| 4   | Class                        | ES6 + Typescript |
| 5   | Destructuring                | ES6              |
| 6   | Spread operator              | ES6              |
| 7   | Import                       | ES6              |
| 8   | Export                       | ES6              |
| 9   | Generics                     | Typescript       |
| 10  | Post-fix expression operator | Typescript       |

---

## References

- https://dzone.com/articles/what-is-typescript-and-why-use-it
- https://medium.com/tech-tajawal/typescript-why-should-one-use-it-a539faa92010
- https://stackoverflow.com/questions/12694530/what-is-typescript-and-why-would-i-use-it-in-place-of-javascript
