 // how to use types with typescript

// Declare and initialize a variable 'Name' of type string with the value "mohamed"
let Name: string = "mohamed";

// Declare and initialize a variable 'id' of type number with the value 10
let id: number = 10;

// Declare and initialize a variable 'ok' of type boolean with the value true
let ok: boolean = true;

// Declare and initialize a variable 'anyData' of type any with the value 20
let anyData: any = 20;

// Assign a new value "mohamed" to the variable 'anyData' (of type any)
anyData = "mohamed";

// Declare and initialize an array 'arr' of type number[], containing numbers 1 through 5
let arr: number[] = [1, 2, 3, 4, 5];

// Declare and initialize an array 'stringArr' of type string[], containing names "mohamed", "ahmed", and "marwan"
let stringArr: string[] = ["mohamed", "ahmed", "marwan"];

// Declare and initialize an array 'arrWithDifferentType' of type any[], containing values of different types
let arrWithDifferentType: any[] = [1, "mohamed", true];

// Declare and initialize a tuple 'tuple' of type [string, number, boolean] with corresponding values
let tuple: [string, number, boolean] = ["mohamed", 1, false];

// Declare and initialize a tuple array 'tupleArray' of type [number, string][]
// Each element is a tuple with a number and a string pair
let tupleArray: [number, string][] = [
    [1, "mohamed"],
    [2, "ahmed"],
    [3, "arwan"]
];

// `pid` can be a number or a string. This is called a union type.
let pid: number | string = 10;
pid = "mohamed";

// `Countries` is an enum. It has four members: `cairo`, `alex`, `aswan`, and `luxor`.
enum Countries {
  cairo,
  alex,
  aswan,
  luxor,
}

// Print the value of the `aswan` member of the `Countries` enum.
console.log(Countries.aswan);

// `Direction` is another enum. It has four members: `up`, `down`, `right`, and `left`.
enum Direction {
  up = "up",
  down = "down",
  right = "right",
  left = "left",
}

// Print the value of the `left` member of the `Direction` enum.
console.log(Direction.left);

// `employees` is an object with three properties: `id`, `name`, and `salary`. All of these properties must be of the specified types.
const employees: {
  id: number,
  name: string,
  salary: string,
} = {
  id: 1,
  name: "mohamed",
  salary: "3000$",
};

// `Employee` is a type alias for an object with two properties: `address` and `zipCode`. Both of these properties must be of the specified types.
type Employee = {
  address: string,
  zipCode: number,
};

// `employee` is an object of type `Employee`.
const employee: Employee = {
  address: "cairo",
  zipCode: 12345,
};











// to run code of js use node path of the file like node "./dist/index.js"..!
