let numbers=[10,20,30,40,50]
//&push-add in end
numbers.push(60,70);
console.log(numbers);
//&pop-remove in end
numbers.pop();
console.log(numbers);
//&shift-remove in beginning
numbers.shift();
console.log(numbers);
//&unshift-add in beginning
numbers.unshift(10);
console.log(numbers);
//&slice gets removed content with index
let slicedelem= numbers.slice(2,4)
console.log(slicedelem);
//&splice removes content with index
numbers.splice(2,2)
console.log(numbers);
let arr = [1, 2, 3, 4, 5];
//& reverse - Reverses the array
console.log(arr.reverse()); 
//&includes- Checks if an element exists
console.log(arr.includes(3)); 
//&indexOf- Finds the index of an element
console.log(arr.indexOf(4));  
//&isArray Checks if it's an array
console.log(Array.isArray(arr));  
//&join- Converts array to string
console.log(arr.join("-")); 
//&concat - Merges arrays
let arr2 = [6, 7, 8];
console.log(arr.concat(arr2));
