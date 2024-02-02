"use strict";
function vote(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
let obj = {
    firstName: "Vik",
    lastName: "ram",
    age: 20
};
let ans = vote(obj);
console.log(ans);
