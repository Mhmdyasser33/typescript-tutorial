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
// using type assertion
// type assertion : is a way to explicitly tell the compiler the type of a variable or expression.
let userId = 10;
// type assertion like type casting in c++
let res = userId;
res = 100;
// another way to use type assertion
let data = "date";
let resOfDate = data;
// how to deal with with function
//two num with number type and return is number also
const addTwoNum = (n1, n2) => {
    return n1 + n2;
};
// using void with function
const display = () => {
    console.log("i'm mohamed Yasser");
};
const checkNumIsPrime = (num) => {
    let isPrime = true;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
};
const evenOrOdd = (num) => {
    if (num % 2 === 0) {
        return true;
    }
    return false;
};
let userInfo = {
    name: "mohamed",
    age: 21,
    phone: "01000000000"
};
userInfo.age = 22;
const student = {
    stdAge: 21,
    stdName: "mohamed",
    stdAddress: "cairo"
};
const multiplyByTwo = (num) => {
    return num * 2;
};
const func = (name) => {
    if (name.startsWith("m")) {
        return "name start with m";
    }
    else {
        return "name start with m";
    }
};
// dealing with class and constructor
class Info {
    constructor(id, Name) {
        this.id = id;
        this.Name = Name;
    }
}
const p1 = new Info(1, "mohamed");
console.log(p1);
console.log(`your id is ${id} and your name is ${Name}`);
// ====================  another example ======================
class Person {
    constructor(address, zipCode) {
        this.add = address;
        this.zc = zipCode;
    }
    setAddressVariable(Address) {
        this.add = Address;
    }
    getAddressVariable() {
        return this.add;
    }
}
const p3 = new Person("cairo", 123);
p3.setAddressVariable("cairo");
console.log("your address is", p3.getAddressVariable());
class InfoDate {
    constructor(id, Name) {
        this.id = id;
        this.Name = Name;
    }
    login() {
        return `${this.Name} is login successfully`;
    }
}
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        return `${this.name} is eating`;
    }
}
class Cat extends Animal {
    constructor(name, type) {
        super(name);
        this.type = type;
    }
}
const C1 = new Cat("cat", "Pet");
console.log(C1.eat());
//dealing with generics
// this function take an array and return new array
/* const getArray = (items: any[]) : any[] =>{
  return new Array().concat(items)
}

let numArray = getArray([1,2,4,5]) ;
let strArray = getArray(["mohamed" , "ahmed" , "marwan"]) ;

numArray.push("mahmoud") ;
strArray.push(10) ;
console.log(numArray) ;
console.log(stringArr) ; */
// after using generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 4, 5]);
let strArray = getArray(["mohamed", "ahmed", "marwan"]);
numArray.push(100);
strArray = strArray.concat(["Mahmoud", "kareem"]);
console.log(numArray);
console.log(strArray);
// to run code of js use node path of the file like node "./dist/index.js"..!
