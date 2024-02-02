"use strict";
console.log("\n\t Callback function in typescript \n");
let a = () => { console.log("\n\t Function is calling...!"); };
function callback(cb) {
    setTimeout(cb, 2000);
}
callback(a);
