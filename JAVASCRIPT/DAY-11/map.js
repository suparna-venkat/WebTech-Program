let numbers=[10,20,30,40,50]
console.log(numbers);
//^syntax 
//!Array.map((currentval,currentindex,currentarray)=>{})
function map(){
    console.log("map method");
    numbers.map(()=>{})
}
let callback=()=>{

}

let upnum = numbers.map((cval, cind) => {
    console.log("index:", cind, "value:", cval);  
    return cval + 5; 
});

console.log("new arr:", upnum);
console.log("original arr:", numbers);

let nu = [1, 2, 3, 4, 5];
let squared = nu.map(n=>n*n);

console.log(squared); 
console.log(nu); 

 

