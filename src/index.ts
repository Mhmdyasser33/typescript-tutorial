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

// using type assertion
// type assertion : is a way to explicitly tell the compiler the type of a variable or expression.
let userId : number | string = 10 ;
// type assertion like type casting in c++
let res = userId as number ;
res  = 100 ;
// another way to use type assertion
let data : string | boolean = "date" ;
let resOfDate = <string>data ;


// how to deal with with function
 //two num with number type and return is number also
const addTwoNum = (n1 : number , n2 : number) : number =>{
    return n1 + n2 ;
}


// using void with function

const display = () : void =>{
console.log("i'm mohamed Yasser") ;
 }

const checkNumIsPrime = (num : number) : boolean=>{
    let isPrime : boolean = true ;
    for(let i = 2 ; i < num ; i++){
        if(num % i == 0){
            isPrime = false ;
            break ;
        }
    }
    return isPrime ;

}

const evenOrOdd = (num : number) : boolean =>{
  if(num % 2 === 0){
    return true ;
  }
 return false
}


// dealing with interface
interface date{
 name : string ,
 age : number ,
phone : string
}

let userInfo : date = {
  name : "mohamed" ,
  age : 21 ,
  phone : "01000000000"
}
userInfo.age = 22 ;

interface Student {
 readonly stdAge : number , // this will make age readonly mean we can not to change it...!
  stdName : string ,
  stdAddress ?:string // this make this variable is optional,if you want to write ok ? don't want to write ? also ok....!

}

const student : Student = {
  stdAge : 21 ,
  stdName : "mohamed" ,
  stdAddress: "cairo"
}
// student.stdAge = 22 ;// this will give an error because it readonly

// how to deal with interface in function

interface MathFun {
   // we will use it for function ? create this ()
   (x : number) : number
}

const multiplyByTwo : MathFun = (num : number) : number =>{
  return num * 2 ;
}

interface Check{
  (Name : string) : string
}

const func : Check = (name : string) : string  =>{
  if(name.startsWith("m")){
     return "name start with m" ;
  }else{
    return "name start with m" ;
  }
}


// dealing with class and constructor

class Info {
  id : number
  Name : string
constructor(id : number , Name : string){
  this.id = id ;
  this.Name = Name ;
}
}

const p1 = new Info(1 , "mohamed") ;
console.log(p1) ;
console.log(`your id is ${id} and your name is ${Name}`) ;

// ====================  another example ======================

class Person{
  private add ; // we can use protected add
  private zc ;
  constructor(address : string , zipCode : number){
    this.add = address
    this.zc = zipCode
  }
  setAddressVariable(Address : string){
   this.add = Address ;
  }
  getAddressVariable(){
    return this.add
   }
}

const p3 = new Person("cairo" , 123) ;
p3.setAddressVariable("cairo") ;
console.log("your address is" , p3.getAddressVariable()) ;

// using interface with classes
  interface infoDateInterface {
    id : number
    Name : string
    login() : string
  }
class InfoDate implements infoDateInterface {
   id : number
  Name : string

  constructor(id : number , Name : string){
    this.id = id ;
    this.Name = Name ;
  }
  login() : string {
   return `${this.Name} is login successfully` ;
  }
}

// super || main class

interface seeAnimal{
  name : string
}
class Animal implements seeAnimal{
  name : string
  constructor(name : string){
    this.name = name ;
  }
  eat() : string{
    return `${this.name} is eating` ;
  }
}

class Cat extends Animal{
  type : string
  constructor(name : string , type : string ){
    super(name) ;
    this.type =type
  }
}
const C1 = new Cat("cat" , "Pet") ;
console.log(C1.eat())


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
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 4, 5]);
let strArray = getArray<string>(["mohamed", "ahmed", "marwan"]);

numArray.push(100);
strArray = strArray.concat(["Mahmoud" , "kareem"]);

console.log(numArray);
console.log(strArray);

// to run code of js use node path of the file like node "./dist/index.js"..!
