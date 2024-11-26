
let a = -5;
let b = 5.0435;
let c = 5.99;
let d = 5.67;
let e = 5.4;

console.log(Math.abs(a));
console.log(Math.ceil(b));
console.log(Math.floor(c));
console.log(Math.round(d));
console.log(Math.round(e));


// Initial Array
let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

// 1. push() - Adds one or more elements to the end of the array
fruits.push("Orange");
console.log("After push:", fruits); // ["Apple", "Banana", "Cherry", "Orange"]

// // 2. pop() - Removes the last element from the array and returns it
let lastFruit = fruits.pop();
console.log("Popped element:", lastFruit); // "Orange"
console.log("After pop:", fruits); // ["Apple", "Banana", "Cherry"]

// 3. toString() - Converts the array into a string with elements separated by commas
let fruitsString = fruits.toString();
console.log("toString result:", fruitsString); // "Apple,Banana,Cherry"

// 4. concat() - Merges arrays into a new array
let moreFruits = ["Grapes", "Mango"];
let allFruits = fruits.concat(moreFruits);
console.log("After concat:", allFruits); // ["Apple", "Banana", "Cherry", "Grapes", "Mango"]

// 5. unshift() - Adds one or more elements to the beginning of the array
fruits.unshift("Strawberry");
console.log("After unshift:", fruits); // ["Strawberry", "Apple", "Banana", "Cherry"]

// 6. shift() - Removes the first element from the array and returns it
let firstFruit = fruits.shift();
console.log("Shifted element:", firstFruit); // "Strawberry"
console.log("After shift:", fruits); // ["Apple", "Banana", "Cherry"]




// 1. slice(start, end) - Returns a shallow copy of a portion of the array without modifying the original array
let slicedFruits = fruits.slice(1, 4); // Extracts elements from index 1 to 3 (end is not included)
console.log("Sliced Fruits:", slicedFruits); // ["Banana", "Cherry", "Date"]
console.log("Original Array After slice:", fruits); // ["Apple", "Banana", "Cherry", "Date", "Elderberry"]

// 2. splice(start, deleteCount, ...items) - Changes the array by removing/replacing elements
// Removing 2 elements starting at index 2
let splicedFruits = fruits.splice(2, 2); 
console.log("Spliced Elements:", splicedFruits); // ["Cherry", "Date"]
console.log("Array After splice (removal):", fruits); // ["Apple", "Banana", "Elderberry"]

// Adding elements with splice at index 1
fruits.splice(1, 0, "Grapes", "Mango"); 
console.log("Array After splice (adding):", fruits); // ["Apple", "Grapes", "Mango", "Banana", "Elderberry"]

// Replacing an element with splice
fruits.splice(1, 3, "hey");
console.log("Array After splice (replacing):", fruits); // ["Apple", "Grapes", "Mango", "Peach", "Elderberry"]

