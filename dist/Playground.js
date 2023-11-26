"use strict";
const firstname = "Stacey";
let lastname = "Starfish";
lastname = "Ant";
const age = 35;
const first = 1016273612836;
const second = 1167361732;
const sum = first / second;
console.log(sum);
console.log("Hello World");
console.log(123);
const fullName = firstname + " " + lastname + " ...";
console.log(fullName);
console.log(`Hello World ${firstname} ${lastname}.`);
function add(first, second) {
    //  const sum: number = first + second;
    return first + second;
}
console.log(add(10, 12));
console.log(add(22, 23));
console.log(add(5, 6));
if (first === second) {
    console.log("sind gleich");
}
else {
    console.log("sind ungleich");
}
if (first !== second) {
    console.log("sind ungleich");
}
else {
    console.log("sind gleich");
}
if (first > second) {
    console.log("ist größer als");
}
else {
    console.log("ist kleiner als");
}
if (first < second) {
    console.log("ist kleiner als");
}
else {
    console.log("ist größer als");
}
if (first >= second) {
    console.log("ist größer als");
}
else {
    console.log("ist kleiner als");
}
if (first <= second) {
    console.log("ist kleiner als");
}
else {
    console.log("ist größer als");
}
function calc(operation, first, second) {
    if (operation === "*") {
        return first * second;
    }
    if (operation === "/") {
        return first / second;
    }
    if (operation === "+") {
        return first + second;
    }
    if (operation === "-") {
        return first - second;
    }
    throw new Error("Invalid operation");
}
console.log(calc("*", 5, 5));
console.log(calc("-", 5, 5));
console.log(calc("+", 5, 5));
console.log(calc("/", 5, 5));
for (let i = 0; i < 10; i = i + 1) {
    console.log(i);
}
//# sourceMappingURL=Playground.js.map