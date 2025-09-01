let str = " Hello, JavaScript! ";

//!touppercase
console.log(str.toUpperCase());  

//*toLowerCase
console.log(str.toLowerCase());  

//?trim()
console.log(str.trim());

//~ length
console.log(str.length); 

//todo charAt()
console.log(str.charAt(1));  

//& substring()
console.log(str.substring(8, 18));  

// replace()
console.log(str.replace("JavaScript", "JS"));  

//^ replaceAll()
console.log(str.replaceAll("a", "@")); 

//! split()
console.log(str.split(" "));  

//* concat()
console.log(str.concat(" I love it!")); 

//?merge()
let str1 = "Hello";
let str2 = "JavaScript";
let str3 = "World";

let mergedString = str1.concat(" ", str2, " ", str3);
console.log(mergedString);

