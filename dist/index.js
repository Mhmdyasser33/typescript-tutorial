"use strict";
// how to use types with typescript
// Declare and initialize a variable 'Name' of type string with the value "mohamed"
let Name = "mohamed";
// Declare and initialize a variable 'id' of type number with the value 10
let id = 10;
// Declare and initialize a variable 'ok' of type boolean with the value true
let ok = true;
// Declare and initialize a variable 'anyData' of type any with the value 20
let anyData = 20;
// Assign a new value "mohamed" to the variable 'anyData' (of type any)
anyData = "mohamed";
// Declare and initialize an array 'arr' of type number[], containing numbers 1 through 5
let arr = [1, 2, 3, 4, 5];
// Declare and initialize an array 'stringArr' of type string[], containing names "mohamed", "ahmed", and "marwan"
let stringArr = ["mohamed", "ahmed", "marwan"];
// Declare and initialize an array 'arrWithDifferentType' of type any[], containing values of different types
let arrWithDifferentType = [1, "mohamed", true];
// Declare and initialize a tuple 'tuple' of type [string, number, boolean] with corresponding values
let tuple = ["mohamed", 1, false];
// Declare and initialize a tuple array 'tupleArray' of type [number, string][]
// Each element is a tuple with a number and a string pair
let tupleArray = [
    [1, "mohamed"],
    [2, "ahmed"],
    [3, "arwan"]
];
// `pid` can be a number or a string. This is called a union type.
let pid = 10;
pid = "mohamed";
// `Countries` is an enum. It has four members: `cairo`, `alex`, `aswan`, and `luxor`.
var Countries;
(function (Countries) {
    Countries[Countries["cairo"] = 0] = "cairo";
    Countries[Countries["alex"] = 1] = "alex";
    Countries[Countries["aswan"] = 2] = "aswan";
    Countries[Countries["luxor"] = 3] = "luxor";
})(Countries || (Countries = {}));
// Print the value of the `aswan` member of the `Countries` enum.
console.log(Countries.aswan);
// `Direction` is another enum. It has four members: `up`, `down`, `right`, and `left`.
var Direction;
(function (Direction) {
    Direction["up"] = "up";
    Direction["down"] = "down";
    Direction["right"] = "right";
    Direction["left"] = "left";
})(Direction || (Direction = {}));
// Print the value of the `left` member of the `Direction` enum.
console.log(Direction.left);
// `employees` is an object with three properties: `id`, `name`, and `salary`. All of these properties must be of the specified types.
const employees = {
    id: 1,
    name: "mohamed",
    salary: "3000$",
};
// `employee` is an object of type `Employee`.
const employee = {
    address: "cairo",
    zipCode: 12345,
};
// to run code of js use node path of the file like node "./dist/index.js"..!
