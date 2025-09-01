let counter=60;
let interval=setInterval(()=>{
    console.log(counter);
    counter--;

if(counter<0){
    console.log("times up");
    clearInterval(interval);
}
},1000);   
