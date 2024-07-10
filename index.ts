// // function sum() : void {
// // console.log("asdasd")
// // }

// function sum(a: number,b: number) : number {
//     return a + b;
// }

// const multiply = (a: number, b: number): number => {
//     return a * b;
// }

// const displayInfo =(name: string, lastname: string, age?: number) :void => {
//     console.log(name);
//     console.log(lastname);
//     if(age) {
//         console.log(age)
//     }
// }
// displayInfo("John", "Smith");
// displayInfo("Jane", "Smith", 40);

// interface Iperson {
//     name: string;
//     lastName: string;
//     age?: number;
//     sayHi: (name: string) => string
// }

// let person1: Iperson = {
//     name: "John",
//     lastName: "Smith",
//     sayHi: (name) => `Hi from John to ${name}`
// }

// console.log(person1.lastName);
// person1.sayHi(`john`)
// console.log(person1.sayHi("Laura"))

// interface Person {
//     age: number
// }

// interface Musician extends Person {
//     instrument: string
// }

// var drummer = <Musician>{};
// drummer.age = 27
// drummer.instrument = "Drums"
// console.log("Age: "+drummer.age);
// console.log("Instrument: "+drummer.instrument)

// interface IParent1 {
//     v1: number
// }

// interface IParent2 {
//     v2: number
// }

// interface Child extends IParent1, IParent2 {}
// var Iobj:Child = {v1:12, v2:23}
// console.log("value 1: "+Iobj.v1+" value 2: "+Iobj.v2)

interface Employee {
    name : string,
    lastName: string,
    age: number,
    position: string,
}

interface Engineer extends Employee {
    subjectArea: string
}

interface Manager extends Employee {
    focus: string
}

var employee1 = <Engineer>{};
employee1.name = "John",
employee1.lastName = "Smith",
employee1.age = 45,
employee1.position = "Engineer",
employee1.subjectArea = "Electrical engineering"
console.log("Age: "+employee1.age);
console.log("Name: "+employee1.name);
console.log("Position: "+employee1.position);

