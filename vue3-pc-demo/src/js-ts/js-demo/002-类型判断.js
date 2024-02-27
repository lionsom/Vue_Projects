console.log(typeof ''); // string 有效
console.log(typeof 1); // number 有效
console.log(typeof Symbol()); // symbol 有效
console.log(typeof true); // boolean 有效
console.log(typeof undefined); // undefined 有效
console.log(typeof null); // object 无效
console.log(typeof []); // object 无效
console.log(typeof new Function()); // function 有效
console.log(typeof new Date()); // object 无效
console.log(typeof new RegExp()); // object 无效



console.log([] instanceof Array); // true
console.log({} instanceof Object); // true
console.log(new Date() instanceof Date); // true

function Person() {}
console.log(new Person() instanceof Person);

console.log([] instanceof Object); // true
console.log(new Date() instanceof Object); // true
console.log(new Person instanceof Object); // true