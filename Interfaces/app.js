"use strict";
class P {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
}
const e = new P("vikram", 21);
console.log(`\n\t Name: ${e.name} age: ${e.age}\n`);
// Name: vikram age: 21
class Main {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet(phrase) {
        console.log(`\n\t ${phrase} ${this.name}`);
    }
}
const object = new Main("Mark", 42);
object.greet("Hello");
