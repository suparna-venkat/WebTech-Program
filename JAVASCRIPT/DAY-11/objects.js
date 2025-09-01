console.log("objects");
//! create obj
let color='black';
let brand='audi';
let model='a7';

function start()
{
    console.log("car has been started... vroooooom");
}
start();

//!array
//let car = ['black','audi','a7',650000,function()];

//! create obj
let car={
    color:'black',
    brand:'audi',
    model:'a7',
    fueltype:"petrol",
    start:()=>{
        console.log("car started");},
};

console.log(car);
console.log(car.model);
console.log(car.brand);

//!emp object
let employee={
    ename:"soup",
    eid:199,
    esalary:1000000,
    eismarried:false,

};
console.log(employee);

//! how to access emp properties
console.log(employee.ename);
//! adding property to emp obj
employee.eage=69;
console.log(employee);
//!delete property from emp obj
delete employee.eismarried;
//!human obj
let human={
    name:"palak",
    age:20,
    status: true,
    designation:"software engineer",
    "emp salary" : 250000,
    7:"thala"
};
console.log(human);
//! how to access spl keys
console.log(human["emp salary"]);
console.log(human[7]);
//! key has dynamic
let keyname="city";
human[keyname]="vellore";
console.log(human);

let obj={
    name:"souppo",
    age:22,
    city:"bombay",
    skills:["oru","dash","uhm","illa"]
};
console.log(obj);
console.log(Object.keys(obj));

