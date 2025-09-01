function calculate(a, b) {
    console.log("sum=", a + b); 
    console.log("diff=", a - b); 
    console.log("prod=", a * b); 
}
function addnum(num1,num2){
    let result= num1+num2;
    return result;
}
    addnum(10,20);
    console.log(addnum(10,20)); 



calculate(5, 10);

(function anonymous(){
    console.log("hiiiiiiii");
})
();
let fun=function(){
    console.log("hellooooo")
}
fun();

let num=(x,y) =>{
    console.log( x+y);
}
num(10,30);

function mainfunction(demo){
    console.log("this is main function");
    demo();
}
function callbackfunction(){
    console.log("this is the callback function");
}

function orderfood(food){
    console.log("lunch :i am the lunch");
    food();
}
function batman(){
    console.log("food :eat me");
}

function dinner(){
    console.log("dinner: i am dinner");
}
orderfood(dinner);
